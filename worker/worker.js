/**
 * Cloudflare Worker — NCERT PDF CORS Proxy
 *
 * Usage:  https://<your-subdomain>.workers.dev/pdf/<PDFCODE>.pdf
 * Forwards to https://ncert.nic.in/textbook/pdf/<PDFCODE>.pdf
 * and returns the response with permissive CORS headers so browsers
 * (and PDF.js) can load the file directly.
 *
 * Range requests are forwarded untouched — required by PDF.js for paging.
 * Includes retry logic because Cloudflare's edge occasionally fails the
 * TLS handshake with the NCERT origin (HTTP 525) — a retry usually succeeds.
 */

const NCERT_BASE = 'https://ncert.nic.in/textbook/pdf/'
const MAX_RETRIES = 4

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': 'Range, Content-Type',
          'Access-Control-Expose-Headers': 'Content-Range, Content-Length, Accept-Ranges',
        },
      })
    }

    if (!url.pathname.startsWith('/pdf/')) {
      return new Response('NCERT CORS Proxy. Use /pdf/<code>.pdf', {
        status: 200,
        headers: { 'content-type': 'text/plain' },
      })
    }

    const file = url.pathname.slice('/pdf/'.length)
    if (!/^[\w-]+\.pdf$/i.test(file)) {
      return new Response('Invalid filename', { status: 400 })
    }

    const target = NCERT_BASE + file

    let lastErr = null
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        const upstream = await fetch(target, {
          method: request.method,
          headers: { Range: request.headers.get('Range') || '' },
          redirect: 'follow',
        })

        const headers = new Headers(upstream.headers)
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
        headers.set('Access-Control-Allow-Headers', 'Range, Content-Type')
        headers.set('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges')
        headers.set('Cache-Control', 'public, max-age=86400')

        return new Response(upstream.body, {
          status: upstream.status,
          headers,
        })
      } catch (err) {
        lastErr = err
        // brief backoff before retry
        await new Promise((r) => setTimeout(r, 300 * (attempt + 1)))
      }
    }

    return new Response(
      'Upstream fetch failed after retries: ' + (lastErr && lastErr.message ? lastErr.message : String(lastErr)),
      { status: 502, headers: { 'content-type': 'text/plain' } }
    )
  },
}
