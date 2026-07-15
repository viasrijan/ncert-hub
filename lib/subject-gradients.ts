import {
  BookOpen, Calculator, Palette, Dumbbell, Globe, Leaf, FlaskConical,
  Landmark, Briefcase, Monitor, TrendingUp, PenTool, Map, Clock,
  Home, Heart, Stethoscope, Users, Scale, Brain, Mic, Drama,
  Cpu, BarChart3, Pencil, BookText, Sigma, Atom
} from 'lucide-react'
import type { ComponentType } from 'react'

interface SubjectGradient {
  gradient: string
  icon: ComponentType<{ className?: string }>
}

export const SUBJECT_GRADIENTS: Record<string, SubjectGradient> = {
  'English': {
    gradient: 'linear-gradient(135deg, #667eea 0%, #3b1f6e 100%)',
    icon: BookOpen,
  },
  'Mathematics': {
    gradient: 'linear-gradient(135deg, #f093fb 0%, #6c2eb9 100%)',
    icon: Calculator,
  },
  'Arts': {
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #5b2c8a 100%)',
    icon: Palette,
  },
  'Physical Education and Well Being': {
    gradient: 'linear-gradient(135deg, #43e97b 0%, #1a6b3c 100%)',
    icon: Dumbbell,
  },
  'The World Around Us': {
    gradient: 'linear-gradient(135deg, #4facfe 0%, #1a4b8c 100%)',
    icon: Globe,
  },
  'Environmental Studies': {
    gradient: 'linear-gradient(135deg, #38f9d7 0%, #1a8a6b 100%)',
    icon: Leaf,
  },
  'Science': {
    gradient: 'linear-gradient(135deg, #43e97b 0%, #1a6b3c 100%)',
    icon: FlaskConical,
  },
  'Social Science': {
    gradient: 'linear-gradient(135deg, #fa709a 0%, #8b1a4a 100%)',
    icon: Landmark,
  },
  'Vocational Education': {
    gradient: 'linear-gradient(135deg, #fccb90 0%, #8b5e3c 100%)',
    icon: Briefcase,
  },
  'Skill Education': {
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #3b5ea6 100%)',
    icon: Monitor,
  },
  'Health and Physical Education': {
    gradient: 'linear-gradient(135deg, #d4fc79 0%, #4a8b2c 100%)',
    icon: Heart,
  },
  'Accountancy': {
    gradient: 'linear-gradient(135deg, #84fab0 0%, #2d7a4f 100%)',
    icon: BarChart3,
  },
  'Biology': {
    gradient: 'linear-gradient(135deg, #a8edea 0%, #2d6b7a 100%)',
    icon: Stethoscope,
  },
  'Biotechnology': {
    gradient: 'linear-gradient(135deg, #d4af37 0%, #6b4c1a 100%)',
    icon: Atom,
  },
  'Business Studies': {
    gradient: 'linear-gradient(135deg, #fbc2eb 0%, #8b3a6b 100%)',
    icon: Briefcase,
  },
  'Chemistry': {
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #8b2f3a 100%)',
    icon: FlaskConical,
  },
  'Computer Science': {
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #4a2d7a 100%)',
    icon: Cpu,
  },
  'Economics': {
    gradient: 'linear-gradient(135deg, #fad0c4 0%, #8b4a3a 100%)',
    icon: TrendingUp,
  },
  'Fine Art': {
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #8b6a3a 100%)',
    icon: Pencil,
  },
  'Geography': {
    gradient: 'linear-gradient(135deg, #f6d365 0%, #8b6a1a 100%)',
    icon: Map,
  },
  'History': {
    gradient: 'linear-gradient(135deg, #fda085 0%, #8b3a1a 100%)',
    icon: Clock,
  },
  'Home Science': {
    gradient: 'linear-gradient(135deg, #fbc2eb 0%, #7a3a6b 100%)',
    icon: Home,
  },
  'Informatics Practices': {
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #2d6b8b 100%)',
    icon: Monitor,
  },
  'Knowledge Traditions Practices of India': {
    gradient: 'linear-gradient(135deg, #fddb92 0%, #8b6a2a 100%)',
    icon: BookText,
  },
  'Physics': {
    gradient: 'linear-gradient(135deg, #96fbc4 0%, #2d8b5a 100%)',
    icon: Atom,
  },
  'Political Science': {
    gradient: 'linear-gradient(135deg, #f093fb 0%, #5a1a6b 100%)',
    icon: Scale,
  },
  'Psychology': {
    gradient: 'linear-gradient(135deg, #c2e9fb 0%, #2a5a8b 100%)',
    icon: Brain,
  },
  'Sociology': {
    gradient: 'linear-gradient(135deg, #d4af37 0%, #5a3a1a 100%)',
    icon: Users,
  },
}

export function getSubjectGradient(subject: string): SubjectGradient {
  return SUBJECT_GRADIENTS[subject] || {
    gradient: 'linear-gradient(135deg, #667eea 0%, #3b1f6e 100%)',
    icon: BookOpen,
  }
}
