// NCERT catalog — generated from ncert.nic.in (textbook.php)
// Every chapter PDF URL below was verified live against ncert.nic.in.
// Regenerate with: node scripts/generate-catalog.mjs

export interface Chapter {
  number: number
  title: string
  pdfCode: string
}

export interface Book {
  id: string
  title: string
  classNum: number
  subject: string
  cover: string
  chapters: Chapter[]
  kind?: 'textbook' | 'solution'
  sourceUrl?: string
  solutionFor?: string
}

export const NCERT_PDF_BASE = 'https://ncert.nic.in/textbook/pdf'

export const BOOKS: Book[] = [
  {
    "id": "aemr1",
    "title": "Mridang",
    "classNum": 1,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Two Little Hands",
        "pdfCode": "aemr101"
      },
      {
        "number": 2,
        "title": "Greetings",
        "pdfCode": "aemr102"
      },
      {
        "number": 3,
        "title": "Picture Time",
        "pdfCode": "aemr103"
      },
      {
        "number": 4,
        "title": "The Cap-seller and the Monkeys",
        "pdfCode": "aemr104"
      },
      {
        "number": 5,
        "title": "A Farm",
        "pdfCode": "aemr105"
      },
      {
        "number": 6,
        "title": "Fun with Pictures",
        "pdfCode": "aemr106"
      },
      {
        "number": 7,
        "title": "The Food we Eat",
        "pdfCode": "aemr107"
      },
      {
        "number": 8,
        "title": "The Four Seasons",
        "pdfCode": "aemr108"
      },
      {
        "number": 9,
        "title": "Anandi's Rainbow",
        "pdfCode": "aemr109"
      }
    ]
  },
  {
    "id": "aejm1",
    "title": "Joyful-Mathematics (English)",
    "classNum": 1,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Finding the Furry Cat!",
        "pdfCode": "aejm101"
      },
      {
        "number": 2,
        "title": "What is Long? What is Round?",
        "pdfCode": "aejm102"
      },
      {
        "number": 3,
        "title": "Mango Treat",
        "pdfCode": "aejm103"
      },
      {
        "number": 4,
        "title": "Making 10",
        "pdfCode": "aejm104"
      },
      {
        "number": 5,
        "title": "How Many?",
        "pdfCode": "aejm105"
      },
      {
        "number": 6,
        "title": "Lengths",
        "pdfCode": "aejm106"
      },
      {
        "number": 7,
        "title": "Names of Numbers",
        "pdfCode": "aejm107"
      },
      {
        "number": 8,
        "title": "Which Season is it Now?",
        "pdfCode": "aejm108"
      },
      {
        "number": 9,
        "title": "Data Handling",
        "pdfCode": "aejm109"
      },
      {
        "number": 10,
        "title": "Patterns",
        "pdfCode": "aejm110"
      },
      {
        "number": 11,
        "title": "How Much?",
        "pdfCode": "aejm111"
      },
      {
        "number": 12,
        "title": "How Much Can We Spend?",
        "pdfCode": "aejm112"
      },
      {
        "number": 13,
        "title": "So Many Toys",
        "pdfCode": "aejm113"
      }
    ]
  },
  {
    "id": "bemr1",
    "title": "Mridang",
    "classNum": 2,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "My Bicycle",
        "pdfCode": "bemr101"
      },
      {
        "number": 2,
        "title": "Picture Reading",
        "pdfCode": "bemr102"
      },
      {
        "number": 3,
        "title": "It Is Fun",
        "pdfCode": "bemr103"
      },
      {
        "number": 4,
        "title": "Seeing without Seeing",
        "pdfCode": "bemr104"
      },
      {
        "number": 5,
        "title": "Come Back Soon",
        "pdfCode": "bemr105"
      },
      {
        "number": 6,
        "title": "Between Home and School",
        "pdfCode": "bemr106"
      },
      {
        "number": 7,
        "title": "This is My Town",
        "pdfCode": "bemr107"
      },
      {
        "number": 8,
        "title": "A Show of Clouds",
        "pdfCode": "bemr108"
      },
      {
        "number": 9,
        "title": "My Name",
        "pdfCode": "bemr109"
      },
      {
        "number": 10,
        "title": "The Crow",
        "pdfCode": "bemr110"
      },
      {
        "number": 11,
        "title": "The Smart Monkey",
        "pdfCode": "bemr111"
      },
      {
        "number": 12,
        "title": "Little Drops of Water",
        "pdfCode": "bemr112"
      },
      {
        "number": 13,
        "title": "We Are All Indians",
        "pdfCode": "bemr113"
      }
    ]
  },
  {
    "id": "bejm1",
    "title": "Joyful-Mathematics (English)",
    "classNum": 2,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "A Day at the Beach",
        "pdfCode": "bejm101"
      },
      {
        "number": 2,
        "title": "Shapes Around Us",
        "pdfCode": "bejm102"
      },
      {
        "number": 3,
        "title": "Fun with Numbers",
        "pdfCode": "bejm103"
      },
      {
        "number": 4,
        "title": "Shadow Story",
        "pdfCode": "bejm104"
      },
      {
        "number": 5,
        "title": "Playing with Lines",
        "pdfCode": "bejm105"
      },
      {
        "number": 6,
        "title": "Decoration for Festival",
        "pdfCode": "bejm106"
      },
      {
        "number": 7,
        "title": "Rani's Gift",
        "pdfCode": "bejm107"
      },
      {
        "number": 8,
        "title": "Grouping and Sharing",
        "pdfCode": "bejm108"
      },
      {
        "number": 9,
        "title": "Which Season is it?",
        "pdfCode": "bejm109"
      },
      {
        "number": 10,
        "title": "Fun at the Fair",
        "pdfCode": "bejm110"
      },
      {
        "number": 11,
        "title": "Data Handling",
        "pdfCode": "bejm111"
      }
    ]
  },
  {
    "id": "cebu1",
    "title": "Bansuri - I",
    "classNum": 3,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Objects in Art",
        "pdfCode": "cebu101"
      },
      {
        "number": 2,
        "title": "Plants in Art",
        "pdfCode": "cebu102"
      },
      {
        "number": 3,
        "title": "Animals in Art",
        "pdfCode": "cebu103"
      },
      {
        "number": 4,
        "title": "People Around Us",
        "pdfCode": "cebu104"
      },
      {
        "number": 5,
        "title": "Festivals, Occasions, and Celebrations",
        "pdfCode": "cebu105"
      },
      {
        "number": 6,
        "title": "Our National Anthem",
        "pdfCode": "cebu106"
      },
      {
        "number": 7,
        "title": "Feel the Rhythm ta ka ta ki Ta",
        "pdfCode": "cebu107"
      },
      {
        "number": 8,
        "title": "Travel Around",
        "pdfCode": "cebu108"
      },
      {
        "number": 9,
        "title": "Musical Instruments",
        "pdfCode": "cebu109"
      },
      {
        "number": 10,
        "title": "Celebratory Notes",
        "pdfCode": "cebu110"
      },
      {
        "number": 11,
        "title": "Let us Dance",
        "pdfCode": "cebu111"
      },
      {
        "number": 12,
        "title": "Dance for Joy",
        "pdfCode": "cebu112"
      },
      {
        "number": 13,
        "title": "I Play and Dance",
        "pdfCode": "cebu113"
      },
      {
        "number": 14,
        "title": "Dance with Nature",
        "pdfCode": "cebu114"
      },
      {
        "number": 15,
        "title": "Explore",
        "pdfCode": "cebu115"
      },
      {
        "number": 16,
        "title": "Imagine",
        "pdfCode": "cebu116"
      },
      {
        "number": 17,
        "title": "Let's Create",
        "pdfCode": "cebu117"
      },
      {
        "number": 18,
        "title": "Look Around",
        "pdfCode": "cebu118"
      },
      {
        "number": 19,
        "title": "Activities",
        "pdfCode": "cebu119"
      },
      {
        "number": 20,
        "title": "Integrating All Art Forms",
        "pdfCode": "cebu120"
      }
    ]
  },
  {
    "id": "cesa1",
    "title": "Santoor",
    "classNum": 3,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Colours",
        "pdfCode": "cesa101"
      },
      {
        "number": 2,
        "title": "Badal and Moti",
        "pdfCode": "cesa102"
      },
      {
        "number": 3,
        "title": "Best Friends",
        "pdfCode": "cesa103"
      },
      {
        "number": 4,
        "title": "Out in the Garden",
        "pdfCode": "cesa104"
      },
      {
        "number": 5,
        "title": "Talking Toys",
        "pdfCode": "cesa105"
      },
      {
        "number": 6,
        "title": "Paper Boats",
        "pdfCode": "cesa106"
      },
      {
        "number": 7,
        "title": "The Big Laddoo",
        "pdfCode": "cesa107"
      },
      {
        "number": 8,
        "title": "Thank God",
        "pdfCode": "cesa108"
      },
      {
        "number": 9,
        "title": "Madhu's Wish",
        "pdfCode": "cesa109"
      },
      {
        "number": 10,
        "title": "Night",
        "pdfCode": "cesa110"
      },
      {
        "number": 11,
        "title": "Chanda Mama Counts the Stars",
        "pdfCode": "cesa111"
      },
      {
        "number": 12,
        "title": "Chandrayaan",
        "pdfCode": "cesa112"
      }
    ]
  },
  {
    "id": "cemm1",
    "title": "Maths Mela",
    "classNum": 3,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "What's in a Name?",
        "pdfCode": "cemm101"
      },
      {
        "number": 2,
        "title": "Toy Joy",
        "pdfCode": "cemm102"
      },
      {
        "number": 3,
        "title": "Double Century",
        "pdfCode": "cemm103"
      },
      {
        "number": 4,
        "title": "Vacation with My Nani Maa",
        "pdfCode": "cemm104"
      },
      {
        "number": 5,
        "title": "Fun with Shapes",
        "pdfCode": "cemm105"
      },
      {
        "number": 6,
        "title": "House of Hundreds-I",
        "pdfCode": "cemm106"
      },
      {
        "number": 7,
        "title": "Raksha Bandhan",
        "pdfCode": "cemm107"
      },
      {
        "number": 8,
        "title": "House of Hundreds-II",
        "pdfCode": "cemm108"
      },
      {
        "number": 9,
        "title": "How Many Times?",
        "pdfCode": "cemm109"
      },
      {
        "number": 10,
        "title": "Fun at Class Party",
        "pdfCode": "cemm110"
      },
      {
        "number": 11,
        "title": "Shares and Dealing",
        "pdfCode": "cemm111"
      },
      {
        "number": 12,
        "title": "Rupees and Paise",
        "pdfCode": "cemm112"
      },
      {
        "number": 13,
        "title": "Jugs and Mugs",
        "pdfCode": "cemm113"
      },
      {
        "number": 14,
        "title": "Smart Charts",
        "pdfCode": "cemm114"
      }
    ]
  },
  {
    "id": "ceky1",
    "title": "Khel Yoga",
    "classNum": 3,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Throwing and Catching",
        "pdfCode": "ceky101"
      },
      {
        "number": 2,
        "title": "Kicking and Receiving",
        "pdfCode": "ceky102"
      },
      {
        "number": 3,
        "title": "Strike the Ball",
        "pdfCode": "ceky103"
      },
      {
        "number": 4,
        "title": "Little Steps",
        "pdfCode": "ceky104"
      },
      {
        "number": 5,
        "title": "Local and Traditional Games",
        "pdfCode": "ceky105"
      },
      {
        "number": 6,
        "title": "Yoga for Daily Life",
        "pdfCode": "ceky106"
      },
      {
        "number": 7,
        "title": "Yogic Practices (Yoga Sadhana)",
        "pdfCode": "ceky107"
      }
    ]
  },
  {
    "id": "ceev1",
    "title": "Our Wondrous World",
    "classNum": 3,
    "subject": "The World Around Us",
    "cover": "/covers/the-world-around-us.png",
    "chapters": [
      {
        "number": 1,
        "title": "Family and Friends",
        "pdfCode": "ceev101"
      },
      {
        "number": 2,
        "title": "Going to the Mela",
        "pdfCode": "ceev102"
      },
      {
        "number": 3,
        "title": "Celebrating Festivals",
        "pdfCode": "ceev103"
      },
      {
        "number": 4,
        "title": "Getting to Know Plants",
        "pdfCode": "ceev104"
      },
      {
        "number": 5,
        "title": "Plants and Animals Live Together",
        "pdfCode": "ceev105"
      },
      {
        "number": 6,
        "title": "Living in Harmony",
        "pdfCode": "ceev106"
      },
      {
        "number": 7,
        "title": "Water – A Precious Gift",
        "pdfCode": "ceev107"
      },
      {
        "number": 8,
        "title": "Food We Eat",
        "pdfCode": "ceev108"
      },
      {
        "number": 9,
        "title": "Staying Healthy and Happy",
        "pdfCode": "ceev109"
      },
      {
        "number": 10,
        "title": "This World of Things",
        "pdfCode": "ceev110"
      },
      {
        "number": 11,
        "title": "Making Things",
        "pdfCode": "ceev111"
      },
      {
        "number": 12,
        "title": "Taking Charge of Waste",
        "pdfCode": "ceev112"
      }
    ]
  },
  {
    "id": "debu1",
    "title": "Bansuri",
    "classNum": 4,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Arrangements of Objects",
        "pdfCode": "debu101"
      },
      {
        "number": 2,
        "title": "Textures in Nature",
        "pdfCode": "debu102"
      },
      {
        "number": 3,
        "title": "Aqua World",
        "pdfCode": "debu103"
      },
      {
        "number": 4,
        "title": "People in Action",
        "pdfCode": "debu104"
      },
      {
        "number": 5,
        "title": "Explore!",
        "pdfCode": "debu105"
      },
      {
        "number": 6,
        "title": "Imagine",
        "pdfCode": "debu106"
      },
      {
        "number": 7,
        "title": "Let's Create",
        "pdfCode": "debu107"
      },
      {
        "number": 8,
        "title": "Look Around",
        "pdfCode": "debu108"
      },
      {
        "number": 9,
        "title": "Sing and Play",
        "pdfCode": "debu109"
      },
      {
        "number": 10,
        "title": "Making Music",
        "pdfCode": "debu110"
      },
      {
        "number": 11,
        "title": "Songs and Stories",
        "pdfCode": "debu111"
      },
      {
        "number": 12,
        "title": "Think, Feel, Create",
        "pdfCode": "debu112"
      },
      {
        "number": 13,
        "title": "Sounds and Instruments",
        "pdfCode": "debu113"
      },
      {
        "number": 14,
        "title": "My Body in Dance",
        "pdfCode": "debu114"
      },
      {
        "number": 15,
        "title": "My Dance Tells Stories",
        "pdfCode": "debu115"
      },
      {
        "number": 16,
        "title": "Creating My Dance",
        "pdfCode": "debu116"
      },
      {
        "number": 17,
        "title": "Emotion and Expression in Dance",
        "pdfCode": "debu117"
      },
      {
        "number": 18,
        "title": "Dances Around Me",
        "pdfCode": "debu118"
      }
    ]
  },
  {
    "id": "desa1",
    "title": "Santoor",
    "classNum": 4,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Together We Can",
        "pdfCode": "desa101"
      },
      {
        "number": 2,
        "title": "The Tinkling Bells",
        "pdfCode": "desa102"
      },
      {
        "number": 3,
        "title": "A Little Turtle",
        "pdfCode": "desa103"
      },
      {
        "number": 4,
        "title": "The Plant That Lied",
        "pdfCode": "desa104"
      },
      {
        "number": 5,
        "title": "Don't Tell a Lie",
        "pdfCode": "desa105"
      },
      {
        "number": 6,
        "title": "The Fair",
        "pdfCode": "desa106"
      },
      {
        "number": 7,
        "title": "The Donkey, the Table, and the Stick",
        "pdfCode": "desa107"
      },
      {
        "number": 8,
        "title": "Little Elephants Big Trouble",
        "pdfCode": "desa108"
      },
      {
        "number": 9,
        "title": "The Enormous Turnip",
        "pdfCode": "desa109"
      },
      {
        "number": 10,
        "title": "The Boy Who Cried Wolf",
        "pdfCode": "desa110"
      },
      {
        "number": 11,
        "title": "Healer Plant",
        "pdfCode": "desa111"
      },
      {
        "number": 12,
        "title": "The Clever Monkey",
        "pdfCode": "desa112"
      }
    ]
  },
  {
    "id": "deap1",
    "title": "Looking Around(EVS)",
    "classNum": 4,
    "subject": "Environmental Studies",
    "cover": "/covers/environmental-studies.png",
    "chapters": [
      {
        "number": 1,
        "title": "Going to School",
        "pdfCode": "deap101"
      },
      {
        "number": 2,
        "title": "Ear to Ear",
        "pdfCode": "deap102"
      },
      {
        "number": 3,
        "title": "A Day with Nandu",
        "pdfCode": "deap103"
      },
      {
        "number": 4,
        "title": "The Story of Amrita",
        "pdfCode": "deap104"
      },
      {
        "number": 5,
        "title": "Anita and the Honeybees",
        "pdfCode": "deap105"
      },
      {
        "number": 6,
        "title": "Omana's Journey",
        "pdfCode": "deap106"
      },
      {
        "number": 7,
        "title": "From the Window",
        "pdfCode": "deap107"
      },
      {
        "number": 8,
        "title": "Reaching Grandmother's Home",
        "pdfCode": "deap108"
      },
      {
        "number": 9,
        "title": "Changing Families",
        "pdfCode": "deap109"
      },
      {
        "number": 10,
        "title": "Hu Tu Tu, Hu Tu Tu",
        "pdfCode": "deap110"
      },
      {
        "number": 11,
        "title": "The Valley of Flowers",
        "pdfCode": "deap111"
      },
      {
        "number": 12,
        "title": "Changing Times",
        "pdfCode": "deap112"
      },
      {
        "number": 13,
        "title": "A River's Tale",
        "pdfCode": "deap113"
      },
      {
        "number": 14,
        "title": "Basva's Farm",
        "pdfCode": "deap114"
      },
      {
        "number": 15,
        "title": "From Market to Home",
        "pdfCode": "deap115"
      },
      {
        "number": 16,
        "title": "A Busy Month",
        "pdfCode": "deap116"
      },
      {
        "number": 17,
        "title": "Nandita in Mumbai",
        "pdfCode": "deap117"
      },
      {
        "number": 18,
        "title": "Too Much Water, Too Little Water",
        "pdfCode": "deap118"
      },
      {
        "number": 19,
        "title": "Abdul in the Garden",
        "pdfCode": "deap119"
      },
      {
        "number": 20,
        "title": "Eating Together",
        "pdfCode": "deap120"
      },
      {
        "number": 21,
        "title": "Food and Fun",
        "pdfCode": "deap121"
      },
      {
        "number": 22,
        "title": "The World in my Home",
        "pdfCode": "deap122"
      },
      {
        "number": 23,
        "title": "Pochampalli",
        "pdfCode": "deap123"
      },
      {
        "number": 24,
        "title": "Home and Abroad",
        "pdfCode": "deap124"
      },
      {
        "number": 25,
        "title": "Spicy Riddles",
        "pdfCode": "deap125"
      },
      {
        "number": 26,
        "title": "Defence Officer: Wahida",
        "pdfCode": "deap126"
      },
      {
        "number": 27,
        "title": "Chuskit Goes to School",
        "pdfCode": "deap127"
      }
    ]
  },
  {
    "id": "demm1",
    "title": "Math-Mela",
    "classNum": 4,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Shapes Around Us",
        "pdfCode": "demm101"
      },
      {
        "number": 2,
        "title": "Hide and Seek",
        "pdfCode": "demm102"
      },
      {
        "number": 3,
        "title": "Pattern Around Us",
        "pdfCode": "demm103"
      },
      {
        "number": 4,
        "title": "Thousands Around Us",
        "pdfCode": "demm104"
      },
      {
        "number": 5,
        "title": "Sharing and Measuring",
        "pdfCode": "demm105"
      },
      {
        "number": 6,
        "title": "Measuring Length",
        "pdfCode": "demm106"
      },
      {
        "number": 7,
        "title": "The Cleanest Village",
        "pdfCode": "demm107"
      },
      {
        "number": 8,
        "title": "Weigh it, Pour it",
        "pdfCode": "demm108"
      },
      {
        "number": 9,
        "title": "Equal Groups",
        "pdfCode": "demm109"
      },
      {
        "number": 10,
        "title": "Elephants, Tigers, and Leopards",
        "pdfCode": "demm110"
      },
      {
        "number": 11,
        "title": "Fun with Symmetry",
        "pdfCode": "demm111"
      },
      {
        "number": 12,
        "title": "Ticking Clocks and Turning Calendar",
        "pdfCode": "demm112"
      },
      {
        "number": 13,
        "title": "The Transport Museum",
        "pdfCode": "demm113"
      },
      {
        "number": 14,
        "title": "Data Handling",
        "pdfCode": "demm114"
      }
    ]
  },
  {
    "id": "deky1",
    "title": "Khel Yoga",
    "classNum": 4,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Throwing and Catching",
        "pdfCode": "deky101"
      },
      {
        "number": 2,
        "title": "Kicking and Receiving",
        "pdfCode": "deky102"
      },
      {
        "number": 3,
        "title": "Strike the Shuttlecock",
        "pdfCode": "deky103"
      }
    ]
  },
  {
    "id": "deev1",
    "title": "Our Wonderous World",
    "classNum": 4,
    "subject": "The World Around Us",
    "cover": "/covers/the-world-around-us.png",
    "chapters": [
      {
        "number": 1,
        "title": "Family and Friends",
        "pdfCode": "deev101"
      },
      {
        "number": 2,
        "title": "Going to the Mela",
        "pdfCode": "deev102"
      },
      {
        "number": 3,
        "title": "Celebrating Festivals",
        "pdfCode": "deev103"
      },
      {
        "number": 4,
        "title": "Getting to Know Plants",
        "pdfCode": "deev104"
      },
      {
        "number": 5,
        "title": "Plants and Animals Live Together",
        "pdfCode": "deev105"
      },
      {
        "number": 6,
        "title": "Living in Harmony",
        "pdfCode": "deev106"
      },
      {
        "number": 7,
        "title": "Water – A Precious Gift",
        "pdfCode": "deev107"
      },
      {
        "number": 8,
        "title": "Food We Eat",
        "pdfCode": "deev108"
      },
      {
        "number": 9,
        "title": "Staying Healthy and Happy",
        "pdfCode": "deev109"
      },
      {
        "number": 10,
        "title": "This World of Things",
        "pdfCode": "deev110"
      }
    ]
  },
  {
    "id": "eebu1",
    "title": "Bansuri",
    "classNum": 5,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Objects on the Move",
        "pdfCode": "eebu101"
      },
      {
        "number": 2,
        "title": "Peeping Out of the Window",
        "pdfCode": "eebu102"
      },
      {
        "number": 3,
        "title": "Picturing Stories",
        "pdfCode": "eebu103"
      },
      {
        "number": 4,
        "title": "Imaginary Beings",
        "pdfCode": "eebu104"
      },
      {
        "number": 5,
        "title": "Spreading the Message",
        "pdfCode": "eebu105"
      },
      {
        "number": 6,
        "title": "Create a Scene",
        "pdfCode": "eebu106"
      },
      {
        "number": 7,
        "title": "Stitch It for a Story",
        "pdfCode": "eebu107"
      },
      {
        "number": 8,
        "title": "Time, Team, Technique",
        "pdfCode": "eebu108"
      },
      {
        "number": 9,
        "title": "View and Review",
        "pdfCode": "eebu109"
      },
      {
        "number": 10,
        "title": "Sing and Play",
        "pdfCode": "eebu110"
      },
      {
        "number": 11,
        "title": "Music Around Me",
        "pdfCode": "eebu111"
      },
      {
        "number": 12,
        "title": "Sounds and Instruments",
        "pdfCode": "eebu112"
      },
      {
        "number": 13,
        "title": "Building Blocks",
        "pdfCode": "eebu113"
      },
      {
        "number": 14,
        "title": "Ideas and Inspiration",
        "pdfCode": "eebu114"
      },
      {
        "number": 15,
        "title": "My Everyday Activities in Modes of Dance",
        "pdfCode": "eebu115"
      },
      {
        "number": 16,
        "title": "Dancing with Rhythm and Tempos",
        "pdfCode": "eebu116"
      },
      {
        "number": 17,
        "title": "Dances of My Nation",
        "pdfCode": "eebu117"
      },
      {
        "number": 18,
        "title": "My Dance Expresses Emotions and Narrates Stories",
        "pdfCode": "eebu118"
      },
      {
        "number": 19,
        "title": "My Dance and Your Dance",
        "pdfCode": "eebu119"
      }
    ]
  },
  {
    "id": "eeen1",
    "title": "Marigold",
    "classNum": 5,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Ice-Cream Man",
        "pdfCode": "eeen101"
      },
      {
        "number": 2,
        "title": "Wonderful Waste!",
        "pdfCode": "eeen102"
      },
      {
        "number": 3,
        "title": "Teamwork",
        "pdfCode": "eeen103"
      },
      {
        "number": 4,
        "title": "Flying Together",
        "pdfCode": "eeen104"
      },
      {
        "number": 5,
        "title": "My Shadow",
        "pdfCode": "eeen105"
      },
      {
        "number": 6,
        "title": "Robinson Crusoe Discovers a Footprint",
        "pdfCode": "eeen106"
      },
      {
        "number": 7,
        "title": "Crying",
        "pdfCode": "eeen107"
      },
      {
        "number": 8,
        "title": "My Elder Brother",
        "pdfCode": "eeen108"
      },
      {
        "number": 9,
        "title": "The Lazy Frog",
        "pdfCode": "eeen109"
      },
      {
        "number": 10,
        "title": "Rip Van Winkle",
        "pdfCode": "eeen110"
      }
    ]
  },
  {
    "id": "eesa1",
    "title": "Santoor",
    "classNum": 5,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Papa's Spectacles",
        "pdfCode": "eesa101"
      },
      {
        "number": 2,
        "title": "Gone with the Scooter",
        "pdfCode": "eesa102"
      },
      {
        "number": 3,
        "title": "The Rainbow",
        "pdfCode": "eesa103"
      },
      {
        "number": 4,
        "title": "The Wise Parrot",
        "pdfCode": "eesa104"
      },
      {
        "number": 5,
        "title": "The Frog",
        "pdfCode": "eesa105"
      },
      {
        "number": 6,
        "title": "What a Tank!",
        "pdfCode": "eesa106"
      },
      {
        "number": 7,
        "title": "Gilli Danda",
        "pdfCode": "eesa107"
      },
      {
        "number": 8,
        "title": "The Decision of the Panchayat",
        "pdfCode": "eesa108"
      },
      {
        "number": 9,
        "title": "Vocation",
        "pdfCode": "eesa109"
      },
      {
        "number": 10,
        "title": "Glass Bangles",
        "pdfCode": "eesa110"
      }
    ]
  },
  {
    "id": "eeap1",
    "title": "Looking Around",
    "classNum": 5,
    "subject": "Environmental Studies",
    "cover": "/covers/environmental-studies.png",
    "chapters": [
      {
        "number": 1,
        "title": "Super Senses",
        "pdfCode": "eeap101"
      },
      {
        "number": 2,
        "title": "A Snake Charmer's Story",
        "pdfCode": "eeap102"
      },
      {
        "number": 3,
        "title": "From Tasting to Digesting",
        "pdfCode": "eeap103"
      },
      {
        "number": 4,
        "title": "Mangoes Round the Year",
        "pdfCode": "eeap104"
      },
      {
        "number": 5,
        "title": "Seeds and Seeds",
        "pdfCode": "eeap105"
      },
      {
        "number": 6,
        "title": "Every Drop Counts",
        "pdfCode": "eeap106"
      },
      {
        "number": 7,
        "title": "Experiments with Water",
        "pdfCode": "eeap107"
      },
      {
        "number": 8,
        "title": "A Treat for Mosquitoes",
        "pdfCode": "eeap108"
      },
      {
        "number": 9,
        "title": "Up You Go!",
        "pdfCode": "eeap109"
      },
      {
        "number": 10,
        "title": "Walls Tell Stories",
        "pdfCode": "eeap110"
      },
      {
        "number": 11,
        "title": "Sunita in Space",
        "pdfCode": "eeap111"
      },
      {
        "number": 12,
        "title": "What if it Finishes...?",
        "pdfCode": "eeap112"
      },
      {
        "number": 13,
        "title": "A Shelter so High!",
        "pdfCode": "eeap113"
      },
      {
        "number": 14,
        "title": "When the Earth Shook!",
        "pdfCode": "eeap114"
      },
      {
        "number": 15,
        "title": "Blow Hot, Blow Cold",
        "pdfCode": "eeap115"
      },
      {
        "number": 16,
        "title": "Who will do this Work?",
        "pdfCode": "eeap116"
      },
      {
        "number": 17,
        "title": "Across the Wall",
        "pdfCode": "eeap117"
      },
      {
        "number": 18,
        "title": "No Place for Us!",
        "pdfCode": "eeap118"
      },
      {
        "number": 19,
        "title": "A Seed tells a Farmer's Story",
        "pdfCode": "eeap119"
      },
      {
        "number": 20,
        "title": "Whose Forests?",
        "pdfCode": "eeap120"
      },
      {
        "number": 21,
        "title": "Like Father, Like Daughter",
        "pdfCode": "eeap121"
      },
      {
        "number": 22,
        "title": "On the Move Again",
        "pdfCode": "eeap122"
      }
    ]
  },
  {
    "id": "eemh1",
    "title": "Math-Magic",
    "classNum": 5,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Fish Tale",
        "pdfCode": "eemh101"
      },
      {
        "number": 2,
        "title": "Shapes and Angles",
        "pdfCode": "eemh102"
      },
      {
        "number": 3,
        "title": "How Many Squares?",
        "pdfCode": "eemh103"
      },
      {
        "number": 4,
        "title": "Parts and Wholes",
        "pdfCode": "eemh104"
      },
      {
        "number": 5,
        "title": "Does it Look the Same?",
        "pdfCode": "eemh105"
      },
      {
        "number": 6,
        "title": "Be My Multiple, I'll be Your Factor",
        "pdfCode": "eemh106"
      },
      {
        "number": 7,
        "title": "Can You See the Pattern?",
        "pdfCode": "eemh107"
      },
      {
        "number": 8,
        "title": "Mapping Your Way",
        "pdfCode": "eemh108"
      },
      {
        "number": 9,
        "title": "Boxes and Sketches",
        "pdfCode": "eemh109"
      },
      {
        "number": 10,
        "title": "Tenths and Hundredths",
        "pdfCode": "eemh110"
      },
      {
        "number": 11,
        "title": "Area and Its Boundary",
        "pdfCode": "eemh111"
      },
      {
        "number": 12,
        "title": "Smart Charts",
        "pdfCode": "eemh112"
      },
      {
        "number": 13,
        "title": "Ways to Multiply and Divide",
        "pdfCode": "eemh113"
      },
      {
        "number": 14,
        "title": "How Big? How Heavy?",
        "pdfCode": "eemh114"
      }
    ]
  },
  {
    "id": "eemm1",
    "title": "Math-Mela",
    "classNum": 5,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "We the Travellers—I",
        "pdfCode": "eemm101"
      },
      {
        "number": 2,
        "title": "Fractions",
        "pdfCode": "eemm102"
      },
      {
        "number": 3,
        "title": "Angles as Turns",
        "pdfCode": "eemm103"
      },
      {
        "number": 4,
        "title": "We the Travellers—II",
        "pdfCode": "eemm104"
      },
      {
        "number": 5,
        "title": "Far and Near",
        "pdfCode": "eemm105"
      },
      {
        "number": 6,
        "title": "The Dairy Farm",
        "pdfCode": "eemm106"
      },
      {
        "number": 7,
        "title": "Shapes and Patterns",
        "pdfCode": "eemm107"
      },
      {
        "number": 8,
        "title": "Weight and Capacity",
        "pdfCode": "eemm108"
      },
      {
        "number": 9,
        "title": "Coconut Farm",
        "pdfCode": "eemm109"
      },
      {
        "number": 10,
        "title": "Symmetrical Designs",
        "pdfCode": "eemm110"
      },
      {
        "number": 11,
        "title": "Grandmother's Quilt",
        "pdfCode": "eemm111"
      },
      {
        "number": 12,
        "title": "Racing Seconds",
        "pdfCode": "eemm112"
      },
      {
        "number": 13,
        "title": "Animal Jumps",
        "pdfCode": "eemm113"
      },
      {
        "number": 14,
        "title": "Maps and Locations",
        "pdfCode": "eemm114"
      },
      {
        "number": 15,
        "title": "Data Through Pictures",
        "pdfCode": "eemm115"
      }
    ]
  },
  {
    "id": "eeky1",
    "title": "Khel Yoga",
    "classNum": 5,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Throwing and Catching",
        "pdfCode": "eeky101"
      },
      {
        "number": 2,
        "title": "Kicking and Receiving",
        "pdfCode": "eeky102"
      },
      {
        "number": 3,
        "title": "Strike the Object",
        "pdfCode": "eeky103"
      }
    ]
  },
  {
    "id": "eeev1",
    "title": "Our Wonderous World",
    "classNum": 5,
    "subject": "The World Around Us",
    "cover": "/covers/the-world-around-us.png",
    "chapters": [
      {
        "number": 1,
        "title": "Family and Friends",
        "pdfCode": "eeev101"
      },
      {
        "number": 2,
        "title": "Going to the Mela",
        "pdfCode": "eeev102"
      },
      {
        "number": 3,
        "title": "Celebrating Festivals",
        "pdfCode": "eeev103"
      },
      {
        "number": 4,
        "title": "Getting to Know Plants",
        "pdfCode": "eeev104"
      },
      {
        "number": 5,
        "title": "Plants and Animals Live Together",
        "pdfCode": "eeev105"
      },
      {
        "number": 6,
        "title": "Living in Harmony",
        "pdfCode": "eeev106"
      },
      {
        "number": 7,
        "title": "Water – A Precious Gift",
        "pdfCode": "eeev107"
      },
      {
        "number": 8,
        "title": "Food We Eat",
        "pdfCode": "eeev108"
      },
      {
        "number": 9,
        "title": "Staying Healthy and Happy",
        "pdfCode": "eeev109"
      },
      {
        "number": 10,
        "title": "This World of Things",
        "pdfCode": "eeev110"
      }
    ]
  },
  {
    "id": "fekr1",
    "title": "Kriti-I",
    "classNum": 6,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Objects and Still Life",
        "pdfCode": "fekr101"
      },
      {
        "number": 2,
        "title": "Changing the Typical Picture",
        "pdfCode": "fekr102"
      },
      {
        "number": 3,
        "title": "Portraying People",
        "pdfCode": "fekr103"
      },
      {
        "number": 4,
        "title": "Paper Crafts",
        "pdfCode": "fekr104"
      },
      {
        "number": 5,
        "title": "Seals to Prints",
        "pdfCode": "fekr105"
      },
      {
        "number": 6,
        "title": "Music and your Emotions",
        "pdfCode": "fekr106"
      },
      {
        "number": 7,
        "title": "Musical Instruments",
        "pdfCode": "fekr107"
      },
      {
        "number": 8,
        "title": "Taal or Talam and Raga or Ragam in Indian Music",
        "pdfCode": "fekr108"
      },
      {
        "number": 9,
        "title": "Melodies of Diversity",
        "pdfCode": "fekr109"
      },
      {
        "number": 10,
        "title": "Songwriting",
        "pdfCode": "fekr110"
      },
      {
        "number": 11,
        "title": "Music and Society",
        "pdfCode": "fekr111"
      },
      {
        "number": 12,
        "title": "My Body in Motion",
        "pdfCode": "fekr112"
      },
      {
        "number": 13,
        "title": "Breaking Barriers with Dance",
        "pdfCode": "fekr113"
      },
      {
        "number": 14,
        "title": "Harmony in Motion",
        "pdfCode": "fekr114"
      },
      {
        "number": 15,
        "title": "Dances of Our Land",
        "pdfCode": "fekr115"
      },
      {
        "number": 16,
        "title": "Emotions Unveiled!",
        "pdfCode": "fekr116"
      },
      {
        "number": 17,
        "title": "Let's Design",
        "pdfCode": "fekr117"
      },
      {
        "number": 18,
        "title": "In the Company of Theatre",
        "pdfCode": "fekr118"
      },
      {
        "number": 19,
        "title": "Stories of Shadows and Strings - Puppetry",
        "pdfCode": "fekr119"
      },
      {
        "number": 20,
        "title": "The Grand Finale",
        "pdfCode": "fekr120"
      },
      {
        "number": 21,
        "title": "Integration of All Art Forms",
        "pdfCode": "fekr121"
      },
      {
        "number": 22,
        "title": "Assessment",
        "pdfCode": "fekr122"
      }
    ]
  },
  {
    "id": "fepr1",
    "title": "Poorvi",
    "classNum": 6,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Fables and Folk Tales",
        "pdfCode": "fepr101"
      },
      {
        "number": 2,
        "title": "Friendship",
        "pdfCode": "fepr102"
      },
      {
        "number": 3,
        "title": "Nurturing Nature",
        "pdfCode": "fepr103"
      },
      {
        "number": 4,
        "title": "Sports and Wellness",
        "pdfCode": "fepr104"
      },
      {
        "number": 5,
        "title": "Culture and Tradition",
        "pdfCode": "fepr105"
      }
    ]
  },
  {
    "id": "fegp1",
    "title": "Ganita Prakash",
    "classNum": 6,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Patterns in Mathematics",
        "pdfCode": "fegp101"
      },
      {
        "number": 2,
        "title": "Lines and Angles",
        "pdfCode": "fegp102"
      },
      {
        "number": 3,
        "title": "Number Play",
        "pdfCode": "fegp103"
      },
      {
        "number": 4,
        "title": "Data Handling and Presentation",
        "pdfCode": "fegp104"
      },
      {
        "number": 5,
        "title": "Prime Time",
        "pdfCode": "fegp105"
      },
      {
        "number": 6,
        "title": "Perimeter and Area",
        "pdfCode": "fegp106"
      },
      {
        "number": 7,
        "title": "Fractions",
        "pdfCode": "fegp107"
      },
      {
        "number": 8,
        "title": "Playing with Constructions",
        "pdfCode": "fegp108"
      },
      {
        "number": 9,
        "title": "Symmetry",
        "pdfCode": "fegp109"
      },
      {
        "number": 10,
        "title": "The Other Side of Zero",
        "pdfCode": "fegp110"
      }
    ]
  },
  {
    "id": "feky1",
    "title": "Khel Yatra",
    "classNum": 6,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Importance of Physical Education and Well-being",
        "pdfCode": "feky101"
      },
      {
        "number": 2,
        "title": "Motor Fitness",
        "pdfCode": "feky102"
      },
      {
        "number": 3,
        "title": "Fundamental Skills of Kho-Kho",
        "pdfCode": "feky103"
      },
      {
        "number": 4,
        "title": "Fundamental Skills of Handball",
        "pdfCode": "feky104"
      },
      {
        "number": 5,
        "title": "Yoga",
        "pdfCode": "feky105"
      }
    ]
  },
  {
    "id": "fecu1",
    "title": "Curiosity",
    "classNum": 6,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Wonderful World of Science",
        "pdfCode": "fecu101"
      },
      {
        "number": 2,
        "title": "Diversity in the Living World",
        "pdfCode": "fecu102"
      },
      {
        "number": 3,
        "title": "Mindful Eating: A Path to a Healthy Body",
        "pdfCode": "fecu103"
      },
      {
        "number": 4,
        "title": "Exploring Magnets",
        "pdfCode": "fecu104"
      },
      {
        "number": 5,
        "title": "Measurement of Length and Motion",
        "pdfCode": "fecu105"
      },
      {
        "number": 6,
        "title": "Materials Around Us",
        "pdfCode": "fecu106"
      },
      {
        "number": 7,
        "title": "Temperature and its Measurement",
        "pdfCode": "fecu107"
      },
      {
        "number": 8,
        "title": "A Journey through States of Water",
        "pdfCode": "fecu108"
      },
      {
        "number": 9,
        "title": "Methods of Separation in Everyday Life",
        "pdfCode": "fecu109"
      },
      {
        "number": 10,
        "title": "Living Creatures: Exploring their Characteristics",
        "pdfCode": "fecu110"
      },
      {
        "number": 11,
        "title": "Nature's Treasures",
        "pdfCode": "fecu111"
      },
      {
        "number": 12,
        "title": "Beyond Earth",
        "pdfCode": "fecu112"
      }
    ]
  },
  {
    "id": "fees1",
    "title": "Exploring Society India and Beyond",
    "classNum": 6,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Locating Places on the Earth",
        "pdfCode": "fees101"
      },
      {
        "number": 2,
        "title": "Oceans and Continents",
        "pdfCode": "fees102"
      },
      {
        "number": 3,
        "title": "Landforms and Life",
        "pdfCode": "fees103"
      },
      {
        "number": 4,
        "title": "Timeline and Sources of History",
        "pdfCode": "fees104"
      },
      {
        "number": 5,
        "title": "India, That Is Bharat",
        "pdfCode": "fees105"
      },
      {
        "number": 6,
        "title": "The Beginnings of Indian Civilisation",
        "pdfCode": "fees106"
      },
      {
        "number": 7,
        "title": "India's Cultural Roots",
        "pdfCode": "fees107"
      },
      {
        "number": 8,
        "title": "Unity in Diversity, or Many in the One",
        "pdfCode": "fees108"
      },
      {
        "number": 9,
        "title": "Family and Community",
        "pdfCode": "fees109"
      },
      {
        "number": 10,
        "title": "Grassroots Democracy - Part 1: Governance",
        "pdfCode": "fees110"
      },
      {
        "number": 11,
        "title": "Grassroots Democracy - Part 2: Local Government in Rural Areas",
        "pdfCode": "fees111"
      },
      {
        "number": 12,
        "title": "Grassroots Democracy - Part 3: Local Government in Urban Areas",
        "pdfCode": "fees112"
      },
      {
        "number": 13,
        "title": "The Value of Work",
        "pdfCode": "fees113"
      },
      {
        "number": 14,
        "title": "Economic Activities Around Us",
        "pdfCode": "fees114"
      }
    ]
  },
  {
    "id": "fekb1",
    "title": "Kaushal Bodh",
    "classNum": 6,
    "subject": "Vocational Education",
    "cover": "/covers/vocational-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "School Kitchen Garden",
        "pdfCode": "fekb101"
      },
      {
        "number": 2,
        "title": "Biodiversity Register",
        "pdfCode": "fekb102"
      },
      {
        "number": 3,
        "title": "Maker Skills",
        "pdfCode": "fekb103"
      },
      {
        "number": 4,
        "title": "Animation and Games",
        "pdfCode": "fekb104"
      },
      {
        "number": 5,
        "title": "School Museum",
        "pdfCode": "fekb105"
      },
      {
        "number": 6,
        "title": "Cooking without Fire",
        "pdfCode": "fekb106"
      }
    ]
  },
  {
    "id": "gekr1",
    "title": "Kriti",
    "classNum": 7,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Understanding Emotions",
        "pdfCode": "gekr101"
      },
      {
        "number": 2,
        "title": "Say More without Speech — Mime",
        "pdfCode": "gekr102"
      },
      {
        "number": 3,
        "title": "Let's Design — Stage Technicals",
        "pdfCode": "gekr103"
      },
      {
        "number": 4,
        "title": "Story of India's Storytelling Tradition",
        "pdfCode": "gekr104"
      },
      {
        "number": 5,
        "title": "Making Music",
        "pdfCode": "gekr105"
      },
      {
        "number": 6,
        "title": "Music, Emotions and Creativity",
        "pdfCode": "gekr106"
      },
      {
        "number": 7,
        "title": "Ragas and Talas",
        "pdfCode": "gekr107"
      },
      {
        "number": 8,
        "title": "The Music of the People",
        "pdfCode": "gekr108"
      },
      {
        "number": 9,
        "title": "Performance",
        "pdfCode": "gekr109"
      },
      {
        "number": 10,
        "title": "Dance and Sculpture",
        "pdfCode": "gekr110"
      },
      {
        "number": 11,
        "title": "Dance Vocabulary and Techniques",
        "pdfCode": "gekr111"
      },
      {
        "number": 12,
        "title": "Dance, You and Creativity",
        "pdfCode": "gekr112"
      },
      {
        "number": 13,
        "title": "Personalities",
        "pdfCode": "gekr113"
      },
      {
        "number": 14,
        "title": "Natya",
        "pdfCode": "gekr114"
      },
      {
        "number": 15,
        "title": "Objects in Icons and Symbols",
        "pdfCode": "gekr115"
      },
      {
        "number": 16,
        "title": "Nature's Palette",
        "pdfCode": "gekr116"
      },
      {
        "number": 17,
        "title": "How You Feel",
        "pdfCode": "gekr117"
      },
      {
        "number": 18,
        "title": "Textiles and Traditions",
        "pdfCode": "gekr118"
      },
      {
        "number": 19,
        "title": "The Art of Calligraphy",
        "pdfCode": "gekr119"
      },
      {
        "number": 20,
        "title": "Weaving Stories",
        "pdfCode": "gekr120"
      }
    ]
  },
  {
    "id": "gepr1",
    "title": "Poorvi",
    "classNum": 7,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Learning Together",
        "pdfCode": "gepr101"
      },
      {
        "number": 2,
        "title": "Wit and Humour",
        "pdfCode": "gepr102"
      },
      {
        "number": 3,
        "title": "Dreams and Discoveries",
        "pdfCode": "gepr103"
      },
      {
        "number": 4,
        "title": "Travel and Adventure",
        "pdfCode": "gepr104"
      },
      {
        "number": 5,
        "title": "Bravehearts",
        "pdfCode": "gepr105"
      }
    ]
  },
  {
    "id": "gegp1",
    "title": "Ganita Prakash",
    "classNum": 7,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Large Numbers Around Us",
        "pdfCode": "gegp101"
      },
      {
        "number": 2,
        "title": "Arithmetic Expressions",
        "pdfCode": "gegp102"
      },
      {
        "number": 3,
        "title": "A Peek Beyond the Point",
        "pdfCode": "gegp103"
      },
      {
        "number": 4,
        "title": "Expressions using Letter-Numbers",
        "pdfCode": "gegp104"
      },
      {
        "number": 5,
        "title": "Parallel and Intersecting Lines",
        "pdfCode": "gegp105"
      },
      {
        "number": 6,
        "title": "Number Play",
        "pdfCode": "gegp106"
      },
      {
        "number": 7,
        "title": "A Tale of Three Intersecting Lines",
        "pdfCode": "gegp107"
      },
      {
        "number": 8,
        "title": "Working with Fractions",
        "pdfCode": "gegp108"
      }
    ]
  },
  {
    "id": "gegp2",
    "title": "Ganita Prakash-II",
    "classNum": 7,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Geometric Twins",
        "pdfCode": "gegp201"
      },
      {
        "number": 2,
        "title": "Writing Algebraic Expressions",
        "pdfCode": "gegp202"
      },
      {
        "number": 3,
        "title": "A First Look at Equations",
        "pdfCode": "gegp203"
      },
      {
        "number": 4,
        "title": "Comparing Quantities",
        "pdfCode": "gegp204"
      },
      {
        "number": 5,
        "title": "Data and Its Features",
        "pdfCode": "gegp205"
      },
      {
        "number": 6,
        "title": "The Triangle and its Properties",
        "pdfCode": "gegp206"
      },
      {
        "number": 7,
        "title": "Symmetry and Constructions",
        "pdfCode": "gegp207"
      }
    ]
  },
  {
    "id": "geky1",
    "title": "Khel Yatra",
    "classNum": 7,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Importance of Physical Education and Well-being",
        "pdfCode": "geky101"
      },
      {
        "number": 2,
        "title": "Motor Fitness",
        "pdfCode": "geky102"
      },
      {
        "number": 3,
        "title": "Fundamental Skills of Kho-Kho",
        "pdfCode": "geky103"
      },
      {
        "number": 4,
        "title": "Fundamental Skills of Handball",
        "pdfCode": "geky104"
      },
      {
        "number": 5,
        "title": "Yoga",
        "pdfCode": "geky105"
      },
      {
        "number": 6,
        "title": "Physical Fitness and Well-being",
        "pdfCode": "geky106"
      }
    ]
  },
  {
    "id": "gecu1",
    "title": "Curiosity",
    "classNum": 7,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Ever-Evolving World of Science",
        "pdfCode": "gecu101"
      },
      {
        "number": 2,
        "title": "Exploring Substances: Acidic, Basic, and Neutral",
        "pdfCode": "gecu102"
      },
      {
        "number": 3,
        "title": "Electricity: Circuits and their Components",
        "pdfCode": "gecu103"
      },
      {
        "number": 4,
        "title": "The World of Metals and Non-metals",
        "pdfCode": "gecu104"
      },
      {
        "number": 5,
        "title": "Changes Around Us: Physical and Chemical",
        "pdfCode": "gecu105"
      },
      {
        "number": 6,
        "title": "Adolescence: A Stage of Growth and Change",
        "pdfCode": "gecu106"
      },
      {
        "number": 7,
        "title": "Heat Transfer in Nature",
        "pdfCode": "gecu107"
      },
      {
        "number": 8,
        "title": "Measurement of Time and Motion",
        "pdfCode": "gecu108"
      },
      {
        "number": 9,
        "title": "Life Processes in Animals",
        "pdfCode": "gecu109"
      },
      {
        "number": 10,
        "title": "Life Processes in Plants",
        "pdfCode": "gecu110"
      },
      {
        "number": 11,
        "title": "Light: Shadows and Reflections",
        "pdfCode": "gecu111"
      },
      {
        "number": 12,
        "title": "Earth, Moon, and the Sun",
        "pdfCode": "gecu112"
      }
    ]
  },
  {
    "id": "gees1",
    "title": "Exploring Society India and Beyond Part-I",
    "classNum": 7,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Geographical Diversity of India",
        "pdfCode": "gees101"
      },
      {
        "number": 2,
        "title": "Understanding the Weather",
        "pdfCode": "gees102"
      },
      {
        "number": 3,
        "title": "Climates of India",
        "pdfCode": "gees103"
      },
      {
        "number": 4,
        "title": "New Beginnings: Cities and States",
        "pdfCode": "gees104"
      },
      {
        "number": 5,
        "title": "The Rise of Empires",
        "pdfCode": "gees105"
      },
      {
        "number": 6,
        "title": "The Age of Reorganisation",
        "pdfCode": "gees106"
      },
      {
        "number": 7,
        "title": "The Gupta Era: An Age of Tireless Creativity",
        "pdfCode": "gees107"
      },
      {
        "number": 8,
        "title": "How the Land Becomes Sacred",
        "pdfCode": "gees108"
      },
      {
        "number": 9,
        "title": "From the Rulers to the Ruled: Types of Governments",
        "pdfCode": "gees109"
      },
      {
        "number": 10,
        "title": "The Constitution of India — An Introduction",
        "pdfCode": "gees110"
      },
      {
        "number": 11,
        "title": "From Barter to Money",
        "pdfCode": "gees111"
      },
      {
        "number": 12,
        "title": "Understanding Markets",
        "pdfCode": "gees112"
      }
    ]
  },
  {
    "id": "gees2",
    "title": "Exploring Society India and Beyond Part-II",
    "classNum": 7,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Story of Indian Farming",
        "pdfCode": "gees201"
      },
      {
        "number": 2,
        "title": "India and Her Neighbours",
        "pdfCode": "gees202"
      },
      {
        "number": 3,
        "title": "Empires and Kingdoms: 6th to 10th Centuries",
        "pdfCode": "gees203"
      },
      {
        "number": 4,
        "title": "Turning Tides: 11th and 12th Centuries",
        "pdfCode": "gees204"
      },
      {
        "number": 5,
        "title": "India, a Home to Many",
        "pdfCode": "gees205"
      },
      {
        "number": 6,
        "title": "Handmade in India",
        "pdfCode": "gees206"
      },
      {
        "number": 7,
        "title": "Infrastructure: Engine of India's Development",
        "pdfCode": "gees207"
      },
      {
        "number": 8,
        "title": "Banks and the Magic of Finance",
        "pdfCode": "gees208"
      }
    ]
  },
  {
    "id": "gekb1",
    "title": "Kaushal Bodh",
    "classNum": 7,
    "subject": "Vocational Education",
    "cover": "/covers/vocational-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "Plant Nursery",
        "pdfCode": "gekb101"
      },
      {
        "number": 2,
        "title": "School Habitat Garden",
        "pdfCode": "gekb102"
      },
      {
        "number": 3,
        "title": "Tie and Dye",
        "pdfCode": "gekb103"
      },
      {
        "number": 4,
        "title": "AI Assistant",
        "pdfCode": "gekb104"
      },
      {
        "number": 5,
        "title": "Storytime with Puppets",
        "pdfCode": "gekb105"
      },
      {
        "number": 6,
        "title": "Family Health Handbook",
        "pdfCode": "gekb106"
      },
      {
        "number": 7,
        "title": "Planning for Kaushal Mela",
        "pdfCode": "gekb107"
      }
    ]
  },
  {
    "id": "hekr1",
    "title": "Kriti",
    "classNum": 8,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Bringing Words Alive — Play Reading",
        "pdfCode": "hekr101"
      },
      {
        "number": 2,
        "title": "One Stage, Many Scripts",
        "pdfCode": "hekr102"
      },
      {
        "number": 3,
        "title": "From Page to Stage",
        "pdfCode": "hekr103"
      },
      {
        "number": 4,
        "title": "Applause and Advice",
        "pdfCode": "hekr104"
      },
      {
        "number": 5,
        "title": "Discovering the Elements of Music",
        "pdfCode": "hekr105"
      },
      {
        "number": 6,
        "title": "Musical Instruments",
        "pdfCode": "hekr106"
      },
      {
        "number": 7,
        "title": "Indian Classical Music",
        "pdfCode": "hekr107"
      },
      {
        "number": 8,
        "title": "Inspiration and Imagination",
        "pdfCode": "hekr108"
      },
      {
        "number": 9,
        "title": "My World of Music",
        "pdfCode": "hekr109"
      },
      {
        "number": 10,
        "title": "Inner Dynamics of Dance",
        "pdfCode": "hekr110"
      },
      {
        "number": 11,
        "title": "Pan Indian Dance Forms",
        "pdfCode": "hekr111"
      },
      {
        "number": 12,
        "title": "Dance for Well-being",
        "pdfCode": "hekr112"
      },
      {
        "number": 13,
        "title": "Innovation, Inclusivity and Inspiring Change",
        "pdfCode": "hekr113"
      },
      {
        "number": 14,
        "title": "A Presentation of Dance and Choreography",
        "pdfCode": "hekr114"
      },
      {
        "number": 15,
        "title": "Elements and Principles of Visual Art and Design",
        "pdfCode": "hekr115"
      },
      {
        "number": 16,
        "title": "Still Life in Colour",
        "pdfCode": "hekr116"
      },
      {
        "number": 17,
        "title": "People in Places",
        "pdfCode": "hekr117"
      },
      {
        "number": 18,
        "title": "Arts of the People, With the People, For the People",
        "pdfCode": "hekr118"
      },
      {
        "number": 19,
        "title": "Campaign for Art Awareness",
        "pdfCode": "hekr119"
      }
    ]
  },
  {
    "id": "hehd1",
    "title": "Honeydew",
    "classNum": 8,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Best Christmas Present in the World",
        "pdfCode": "hehd101"
      },
      {
        "number": 2,
        "title": "The Tsunami",
        "pdfCode": "hehd102"
      },
      {
        "number": 3,
        "title": "Glimpses of the Past",
        "pdfCode": "hehd103"
      },
      {
        "number": 4,
        "title": "Bepin Choudhury's Lapse of Memory",
        "pdfCode": "hehd104"
      },
      {
        "number": 5,
        "title": "The Summit Within",
        "pdfCode": "hehd105"
      },
      {
        "number": 6,
        "title": "This is Jody's Fawn",
        "pdfCode": "hehd106"
      },
      {
        "number": 7,
        "title": "A Visit to Cambridge",
        "pdfCode": "hehd107"
      },
      {
        "number": 8,
        "title": "A Short Monsoon Diary",
        "pdfCode": "hehd108"
      }
    ]
  },
  {
    "id": "heih1",
    "title": "It So Happend",
    "classNum": 8,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "How the Camel Got His Hump",
        "pdfCode": "heih101"
      },
      {
        "number": 2,
        "title": "Children at Work",
        "pdfCode": "heih102"
      },
      {
        "number": 3,
        "title": "The Selfish Giant",
        "pdfCode": "heih103"
      },
      {
        "number": 4,
        "title": "The Treasure Within",
        "pdfCode": "heih104"
      },
      {
        "number": 5,
        "title": "Princess September",
        "pdfCode": "heih105"
      },
      {
        "number": 6,
        "title": "The Fight",
        "pdfCode": "heih106"
      },
      {
        "number": 7,
        "title": "Jalebis",
        "pdfCode": "heih107"
      },
      {
        "number": 8,
        "title": "The Ancient Chanakya",
        "pdfCode": "heih108"
      }
    ]
  },
  {
    "id": "hepr1",
    "title": "Poorvi",
    "classNum": 8,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Wit and Wisdom",
        "pdfCode": "hepr101"
      },
      {
        "number": 2,
        "title": "Values and Dispositions",
        "pdfCode": "hepr102"
      },
      {
        "number": 3,
        "title": "Mystery and Magic",
        "pdfCode": "hepr103"
      },
      {
        "number": 4,
        "title": "Environment",
        "pdfCode": "hepr104"
      },
      {
        "number": 5,
        "title": "Science and Curiosity",
        "pdfCode": "hepr105"
      }
    ]
  },
  {
    "id": "hegp1",
    "title": "Ganita Prakash Part-I",
    "classNum": 8,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "A Square and A Cube",
        "pdfCode": "hegp101"
      },
      {
        "number": 2,
        "title": "Power Play",
        "pdfCode": "hegp102"
      },
      {
        "number": 3,
        "title": "A Story of Numbers",
        "pdfCode": "hegp103"
      },
      {
        "number": 4,
        "title": "Quadrilaterals",
        "pdfCode": "hegp104"
      },
      {
        "number": 5,
        "title": "Number Play",
        "pdfCode": "hegp105"
      },
      {
        "number": 6,
        "title": "We Distribute, Yet Things Multiply",
        "pdfCode": "hegp106"
      },
      {
        "number": 7,
        "title": "Proportional Reasoning-1",
        "pdfCode": "hegp107"
      }
    ]
  },
  {
    "id": "hegp2",
    "title": "Ganita Prakash Part-II",
    "classNum": 8,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Fractions in Disguise",
        "pdfCode": "hegp201"
      },
      {
        "number": 2,
        "title": "The Baudhayana-Pythagoras Theorem",
        "pdfCode": "hegp202"
      },
      {
        "number": 3,
        "title": "Proportional Reasoning-2",
        "pdfCode": "hegp203"
      },
      {
        "number": 4,
        "title": "Exploring Some Geometric Themes",
        "pdfCode": "hegp204"
      },
      {
        "number": 5,
        "title": "Tales by Dots and Lines",
        "pdfCode": "hegp205"
      },
      {
        "number": 6,
        "title": "Algebra Play",
        "pdfCode": "hegp206"
      },
      {
        "number": 7,
        "title": "Area",
        "pdfCode": "hegp207"
      }
    ]
  },
  {
    "id": "hemh1",
    "title": "Mathematics",
    "classNum": 8,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Rational Numbers",
        "pdfCode": "hemh101"
      },
      {
        "number": 2,
        "title": "Linear Equations in One Variable",
        "pdfCode": "hemh102"
      },
      {
        "number": 3,
        "title": "Understanding Quadrilaterals",
        "pdfCode": "hemh103"
      },
      {
        "number": 4,
        "title": "Data Handling",
        "pdfCode": "hemh104"
      },
      {
        "number": 5,
        "title": "Squares and Square Roots",
        "pdfCode": "hemh105"
      },
      {
        "number": 6,
        "title": "Cubes and Cube Roots",
        "pdfCode": "hemh106"
      },
      {
        "number": 7,
        "title": "Comparing Quantities",
        "pdfCode": "hemh107"
      },
      {
        "number": 8,
        "title": "Algebraic Expressions and Identities",
        "pdfCode": "hemh108"
      },
      {
        "number": 9,
        "title": "Mensuration",
        "pdfCode": "hemh109"
      },
      {
        "number": 10,
        "title": "Exponents and Powers",
        "pdfCode": "hemh110"
      },
      {
        "number": 11,
        "title": "Direct and Inverse Proportions",
        "pdfCode": "hemh111"
      },
      {
        "number": 12,
        "title": "Factorisation",
        "pdfCode": "hemh112"
      },
      {
        "number": 13,
        "title": "Introduction to Graphs",
        "pdfCode": "hemh113"
      }
    ]
  },
  {
    "id": "heky1",
    "title": "Khel Yatra",
    "classNum": 8,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Importance of Physical Education and Well-being",
        "pdfCode": "heky101"
      },
      {
        "number": 2,
        "title": "Motor Fitness",
        "pdfCode": "heky102"
      },
      {
        "number": 3,
        "title": "Fundamental Skills of Kho-Kho",
        "pdfCode": "heky103"
      },
      {
        "number": 4,
        "title": "Fundamental Skills of Handball",
        "pdfCode": "heky104"
      },
      {
        "number": 5,
        "title": "Yoga",
        "pdfCode": "heky105"
      },
      {
        "number": 6,
        "title": "Physical Fitness and Well-being",
        "pdfCode": "heky106"
      }
    ]
  },
  {
    "id": "hecu1",
    "title": "Curiosity",
    "classNum": 8,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Exploring the Investigative World of Science",
        "pdfCode": "hecu101"
      },
      {
        "number": 2,
        "title": "The Invisible Living World: Beyond Our Naked Eye",
        "pdfCode": "hecu102"
      },
      {
        "number": 3,
        "title": "Health: The Ultimate Treasure",
        "pdfCode": "hecu103"
      },
      {
        "number": 4,
        "title": "Electricity: Magnetic and Heating Effects",
        "pdfCode": "hecu104"
      },
      {
        "number": 5,
        "title": "Exploring Forces",
        "pdfCode": "hecu105"
      },
      {
        "number": 6,
        "title": "Pressure, Winds, Storms, and Cyclones",
        "pdfCode": "hecu106"
      },
      {
        "number": 7,
        "title": "Particulate Nature of Matter",
        "pdfCode": "hecu107"
      },
      {
        "number": 8,
        "title": "Nature of Matter: Elements, Compounds, and Mixtures",
        "pdfCode": "hecu108"
      },
      {
        "number": 9,
        "title": "The Amazing World of Solutes, Solvents, and Solutions",
        "pdfCode": "hecu109"
      },
      {
        "number": 10,
        "title": "Light: Mirrors and Lenses",
        "pdfCode": "hecu110"
      },
      {
        "number": 11,
        "title": "Keeping Time with the Skies",
        "pdfCode": "hecu111"
      },
      {
        "number": 12,
        "title": "How Nature Works in Harmony",
        "pdfCode": "hecu112"
      },
      {
        "number": 13,
        "title": "Our Home: Earth, a Unique Life Sustaining Planet",
        "pdfCode": "hecu113"
      }
    ]
  },
  {
    "id": "hesc1",
    "title": "Science",
    "classNum": 8,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Crop Production and Management",
        "pdfCode": "hesc101"
      },
      {
        "number": 2,
        "title": "Microorganisms: Friend and Foe",
        "pdfCode": "hesc102"
      },
      {
        "number": 3,
        "title": "Coal and Petroleum",
        "pdfCode": "hesc103"
      },
      {
        "number": 4,
        "title": "Combustion and Flame",
        "pdfCode": "hesc104"
      },
      {
        "number": 5,
        "title": "Conservation of Plants and Animals",
        "pdfCode": "hesc105"
      },
      {
        "number": 6,
        "title": "Reproduction in Animals",
        "pdfCode": "hesc106"
      },
      {
        "number": 7,
        "title": "Reaching the Age of Adolescence",
        "pdfCode": "hesc107"
      },
      {
        "number": 8,
        "title": "Force and Pressure",
        "pdfCode": "hesc108"
      },
      {
        "number": 9,
        "title": "Friction",
        "pdfCode": "hesc109"
      },
      {
        "number": 10,
        "title": "Sound",
        "pdfCode": "hesc110"
      },
      {
        "number": 11,
        "title": "Chemical Effects of Electric Current",
        "pdfCode": "hesc111"
      },
      {
        "number": 12,
        "title": "Some Natural Phenomena",
        "pdfCode": "hesc112"
      },
      {
        "number": 13,
        "title": "Light",
        "pdfCode": "hesc113"
      }
    ]
  },
  {
    "id": "hees1",
    "title": "Exploring Society India and Beyond Part-I",
    "classNum": 8,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Natural Resources and Their Use",
        "pdfCode": "hees101"
      },
      {
        "number": 2,
        "title": "Reshaping India's Political Map",
        "pdfCode": "hees102"
      },
      {
        "number": 3,
        "title": "The Rise of the Marathas",
        "pdfCode": "hees103"
      },
      {
        "number": 4,
        "title": "The Colonial Era in India",
        "pdfCode": "hees104"
      },
      {
        "number": 5,
        "title": "Universal Franchise and India's Electoral System",
        "pdfCode": "hees105"
      },
      {
        "number": 6,
        "title": "The Parliamentary System — Legislature and Executive",
        "pdfCode": "hees106"
      },
      {
        "number": 7,
        "title": "Factors of Production",
        "pdfCode": "hees107"
      }
    ]
  },
  {
    "id": "hees2",
    "title": "Exploring Society India and Beyond Part-II",
    "classNum": 8,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "World Geography: Some Glimpses",
        "pdfCode": "hees201"
      },
      {
        "number": 2,
        "title": "India's Long Road to Independence",
        "pdfCode": "hees202"
      },
      {
        "number": 3,
        "title": "A Journey Through Indian Architecture",
        "pdfCode": "hees203"
      },
      {
        "number": 4,
        "title": "The Role of the Judiciary in Our Society",
        "pdfCode": "hees204"
      },
      {
        "number": 5,
        "title": "Citizenship: Rights and Duties",
        "pdfCode": "hees205"
      },
      {
        "number": 6,
        "title": "Dynamics of Population",
        "pdfCode": "hees206"
      },
      {
        "number": 7,
        "title": "India's Urban Landscape",
        "pdfCode": "hees207"
      },
      {
        "number": 8,
        "title": "Cultural Currents: 13th to 17th Centuries",
        "pdfCode": "hees208"
      }
    ]
  },
  {
    "id": "hess2",
    "title": "Our-Pasts-III",
    "classNum": 8,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "How, When and Where",
        "pdfCode": "hess201"
      },
      {
        "number": 2,
        "title": "From Trade to Territory",
        "pdfCode": "hess202"
      },
      {
        "number": 3,
        "title": "Ruling the Countryside",
        "pdfCode": "hess203"
      },
      {
        "number": 4,
        "title": "Tribals, Dikus and the Vision of a Golden Age",
        "pdfCode": "hess204"
      },
      {
        "number": 5,
        "title": "When People Revolt 1857 and After",
        "pdfCode": "hess205"
      },
      {
        "number": 6,
        "title": "Civilising the \"Native\", Educating the Nation",
        "pdfCode": "hess206"
      },
      {
        "number": 7,
        "title": "Women, Caste and Reform",
        "pdfCode": "hess207"
      },
      {
        "number": 8,
        "title": "The Making of the National Movement: 1870s–1947",
        "pdfCode": "hess208"
      }
    ]
  },
  {
    "id": "hess4",
    "title": "Resource And Development(Geography)",
    "classNum": 8,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Resources",
        "pdfCode": "hess401"
      },
      {
        "number": 2,
        "title": "Land, Soil, Water, Natural Vegetation and Wildlife Resources",
        "pdfCode": "hess402"
      },
      {
        "number": 3,
        "title": "Agriculture",
        "pdfCode": "hess403"
      },
      {
        "number": 4,
        "title": "Industries",
        "pdfCode": "hess404"
      },
      {
        "number": 5,
        "title": "Human Resources",
        "pdfCode": "hess405"
      }
    ]
  },
  {
    "id": "hess3",
    "title": "Social And Political Life",
    "classNum": 8,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Indian Constitution",
        "pdfCode": "hess301"
      },
      {
        "number": 2,
        "title": "Understanding Secularism",
        "pdfCode": "hess302"
      },
      {
        "number": 3,
        "title": "Parliament and the Making of Laws",
        "pdfCode": "hess303"
      },
      {
        "number": 4,
        "title": "Judiciary",
        "pdfCode": "hess304"
      },
      {
        "number": 5,
        "title": "Understanding Marginalisation",
        "pdfCode": "hess305"
      },
      {
        "number": 6,
        "title": "Confronting Marginalisation",
        "pdfCode": "hess306"
      },
      {
        "number": 7,
        "title": "Public Facilities",
        "pdfCode": "hess307"
      },
      {
        "number": 8,
        "title": "Law and Social Justice",
        "pdfCode": "hess308"
      }
    ]
  },
  {
    "id": "hekb1",
    "title": "Kaushal Bodh",
    "classNum": 8,
    "subject": "Vocational Education",
    "cover": "/covers/vocational-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "Plant Nursery",
        "pdfCode": "hekb101"
      },
      {
        "number": 2,
        "title": "School Habitat Garden",
        "pdfCode": "hekb102"
      },
      {
        "number": 3,
        "title": "Tie and Dye",
        "pdfCode": "hekb103"
      },
      {
        "number": 4,
        "title": "AI Assistant",
        "pdfCode": "hekb104"
      },
      {
        "number": 5,
        "title": "Storytime with Puppets",
        "pdfCode": "hekb105"
      },
      {
        "number": 6,
        "title": "Family Health Handbook",
        "pdfCode": "hekb106"
      },
      {
        "number": 7,
        "title": "Planning for Kaushal Mela",
        "pdfCode": "hekb107"
      }
    ]
  },
  {
    "id": "iemr1",
    "title": "Madhurima",
    "classNum": 9,
    "subject": "Arts",
    "cover": "/covers/arts.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to the History of Arts",
        "pdfCode": "iemr101"
      },
      {
        "number": 2,
        "title": "The Stage Is Yours",
        "pdfCode": "iemr102"
      },
      {
        "number": 3,
        "title": "Symbols and Metaphors on Stage",
        "pdfCode": "iemr103"
      },
      {
        "number": 4,
        "title": "Creativity in Light and Sound",
        "pdfCode": "iemr104"
      },
      {
        "number": 5,
        "title": "From Vision to Performance: Direction and Acting",
        "pdfCode": "iemr105"
      },
      {
        "number": 6,
        "title": "Music and Us",
        "pdfCode": "iemr106"
      },
      {
        "number": 7,
        "title": "The Science of Music",
        "pdfCode": "iemr107"
      },
      {
        "number": 8,
        "title": "Rāga and Tāla",
        "pdfCode": "iemr108"
      },
      {
        "number": 9,
        "title": "Music Travels Around the World",
        "pdfCode": "iemr109"
      },
      {
        "number": 10,
        "title": "Components of Dance",
        "pdfCode": "iemr110"
      },
      {
        "number": 11,
        "title": "Dance as Visual Storytelling",
        "pdfCode": "iemr111"
      },
      {
        "number": 12,
        "title": "Cultural Connections Through Dance",
        "pdfCode": "iemr112"
      },
      {
        "number": 13,
        "title": "Dance Choreography",
        "pdfCode": "iemr113"
      },
      {
        "number": 14,
        "title": "Exploring the Fundamentals of Visual Arts",
        "pdfCode": "iemr114"
      },
      {
        "number": 15,
        "title": "Mediums and Techniques in Visual Art",
        "pdfCode": "iemr115"
      },
      {
        "number": 16,
        "title": "Visual Composition",
        "pdfCode": "iemr116"
      },
      {
        "number": 17,
        "title": "Branches of Visual Arts",
        "pdfCode": "iemr117"
      }
    ]
  },
  {
    "id": "iebe1",
    "title": "Kaveri",
    "classNum": 9,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "How I Taught My Grandmother to Read",
        "pdfCode": "iebe101"
      },
      {
        "number": 2,
        "title": "The Pot Maker",
        "pdfCode": "iebe102"
      },
      {
        "number": 3,
        "title": "Winds of Change",
        "pdfCode": "iebe103"
      },
      {
        "number": 4,
        "title": "Vitamin-M",
        "pdfCode": "iebe104"
      },
      {
        "number": 5,
        "title": "The World of Limitless Possibilities",
        "pdfCode": "iebe105"
      },
      {
        "number": 6,
        "title": "Twin Melodies",
        "pdfCode": "iebe106"
      },
      {
        "number": 7,
        "title": "Carrier of Words",
        "pdfCode": "iebe107"
      },
      {
        "number": 8,
        "title": "Follow That Dream",
        "pdfCode": "iebe108"
      }
    ]
  },
  {
    "id": "iemh1",
    "title": "Ganita Manjari (English)",
    "classNum": 9,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Orienting Yourself: The Use of Coordinates",
        "pdfCode": "iemh101"
      },
      {
        "number": 2,
        "title": "Introduction to Linear Polynomials",
        "pdfCode": "iemh102"
      },
      {
        "number": 3,
        "title": "The World of Numbers",
        "pdfCode": "iemh103"
      },
      {
        "number": 4,
        "title": "Exploring Algebraic Identities",
        "pdfCode": "iemh104"
      },
      {
        "number": 5,
        "title": "I'm Up and Down, and Round and Round",
        "pdfCode": "iemh105"
      },
      {
        "number": 6,
        "title": "Measuring Space: Perimeter and Area",
        "pdfCode": "iemh106"
      },
      {
        "number": 7,
        "title": "The Mathematics of Maybe: Introduction to Probabilty",
        "pdfCode": "iemh107"
      },
      {
        "number": 8,
        "title": "Predicting What Comes Next: Exploring Sequences and Progressions",
        "pdfCode": "iemh108"
      }
    ]
  },
  {
    "id": "iehp1",
    "title": "Khel Praveen",
    "classNum": 9,
    "subject": "Physical Education and Well Being",
    "cover": "/covers/physical-education-and-well-being.png",
    "chapters": [
      {
        "number": 1,
        "title": "Evolution of Physical Education and Well-being",
        "pdfCode": "iehp101"
      },
      {
        "number": 2,
        "title": "Science and Sports",
        "pdfCode": "iehp102"
      },
      {
        "number": 3,
        "title": "Olympism",
        "pdfCode": "iehp103"
      },
      {
        "number": 4,
        "title": "Sports for All",
        "pdfCode": "iehp104"
      },
      {
        "number": 5,
        "title": "Sports",
        "pdfCode": "iehp105"
      },
      {
        "number": 6,
        "title": "Yoga for Holistic Health and Personal Excellence",
        "pdfCode": "iehp106"
      }
    ]
  },
  {
    "id": "iesc1",
    "title": "Exploration",
    "classNum": 9,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Exploration: Entering the World of Secondary Science",
        "pdfCode": "iesc101"
      },
      {
        "number": 2,
        "title": "Cell — The Building Block of Life",
        "pdfCode": "iesc102"
      },
      {
        "number": 3,
        "title": "Tissues in Action",
        "pdfCode": "iesc103"
      },
      {
        "number": 4,
        "title": "Describing Motion Around Us",
        "pdfCode": "iesc104"
      },
      {
        "number": 5,
        "title": "Exploring Mixtures and their Separation",
        "pdfCode": "iesc105"
      },
      {
        "number": 6,
        "title": "How Forces Affect Motion",
        "pdfCode": "iesc106"
      },
      {
        "number": 7,
        "title": "Work, Energy, and Simple Machines",
        "pdfCode": "iesc107"
      },
      {
        "number": 8,
        "title": "Journey Inside the Atom",
        "pdfCode": "iesc108"
      },
      {
        "number": 9,
        "title": "Atomic Foundations of Matter",
        "pdfCode": "iesc109"
      },
      {
        "number": 10,
        "title": "Sound Waves: Characteristics and Applications",
        "pdfCode": "iesc110"
      },
      {
        "number": 11,
        "title": "Reproduction: How Life Continues",
        "pdfCode": "iesc111"
      },
      {
        "number": 12,
        "title": "Patterns in Life: Diversity and Classification",
        "pdfCode": "iesc112"
      },
      {
        "number": 13,
        "title": "Earth as a System: Energy, Matter, and Life",
        "pdfCode": "iesc113"
      }
    ]
  },
  {
    "id": "iekv1",
    "title": "Kaushal Vikas",
    "classNum": 9,
    "subject": "Skill Education",
    "cover": "/covers/skill-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Agricultural Practices",
        "pdfCode": "iekv101"
      },
      {
        "number": 2,
        "title": "Rooftop Gardening",
        "pdfCode": "iekv102"
      },
      {
        "number": 3,
        "title": "Precision Farming",
        "pdfCode": "iekv103"
      },
      {
        "number": 4,
        "title": "Additional Vocations",
        "pdfCode": "iekv104"
      },
      {
        "number": 5,
        "title": "Shaping Materials",
        "pdfCode": "iekv105"
      },
      {
        "number": 6,
        "title": "Construction",
        "pdfCode": "iekv106"
      },
      {
        "number": 7,
        "title": "Apparel",
        "pdfCode": "iekv107"
      },
      {
        "number": 8,
        "title": "Additional Vocations",
        "pdfCode": "iekv108"
      },
      {
        "number": 9,
        "title": "Personal and Lifestyle Services",
        "pdfCode": "iekv109"
      },
      {
        "number": 10,
        "title": "Healthcare",
        "pdfCode": "iekv110"
      },
      {
        "number": 11,
        "title": "Tourism",
        "pdfCode": "iekv111"
      },
      {
        "number": 12,
        "title": "Additional Vocations",
        "pdfCode": "iekv112"
      }
    ]
  },
  {
    "id": "iest1",
    "title": "Understanding Society India and Beyond PART-I",
    "classNum": 9,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Understanding Social Science",
        "pdfCode": "iest101"
      },
      {
        "number": 2,
        "title": "Shaping of the Earth's Surface",
        "pdfCode": "iest102"
      },
      {
        "number": 3,
        "title": "Atmosphere and Climate",
        "pdfCode": "iest103"
      },
      {
        "number": 4,
        "title": "Early Humans and Beginning of Civilisation",
        "pdfCode": "iest104"
      },
      {
        "number": 5,
        "title": "State and Society up to 1000 CE",
        "pdfCode": "iest105"
      },
      {
        "number": 6,
        "title": "Understanding Democracy",
        "pdfCode": "iest106"
      },
      {
        "number": 7,
        "title": "Elections",
        "pdfCode": "iest107"
      },
      {
        "number": 8,
        "title": "Building Blocks in Economics: The Problem of Choice",
        "pdfCode": "iest108"
      },
      {
        "number": 9,
        "title": "The Price Puzzle: What Drives the Market",
        "pdfCode": "iest109"
      }
    ]
  },
  {
    "id": "jeff1",
    "title": "First Flight",
    "classNum": 10,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "A Letter to God",
        "pdfCode": "jeff101"
      },
      {
        "number": 2,
        "title": "Nelson Mandela: Long Walk to Freedom",
        "pdfCode": "jeff102"
      },
      {
        "number": 3,
        "title": "Two Stories about Flying",
        "pdfCode": "jeff103"
      },
      {
        "number": 4,
        "title": "From the Diary of Anne Frank",
        "pdfCode": "jeff104"
      },
      {
        "number": 5,
        "title": "Glimpses of India",
        "pdfCode": "jeff105"
      },
      {
        "number": 6,
        "title": "Mijbil the Otter",
        "pdfCode": "jeff106"
      },
      {
        "number": 7,
        "title": "Madam Rides the Bus",
        "pdfCode": "jeff107"
      },
      {
        "number": 8,
        "title": "The Sermon at Benares",
        "pdfCode": "jeff108"
      },
      {
        "number": 9,
        "title": "The Proposal",
        "pdfCode": "jeff109"
      }
    ]
  },
  {
    "id": "jefp1",
    "title": "Foot Prints Without feet Supp. Reader",
    "classNum": 10,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "A Triumph of Surgery",
        "pdfCode": "jefp101"
      },
      {
        "number": 2,
        "title": "The Thief's Story",
        "pdfCode": "jefp102"
      },
      {
        "number": 3,
        "title": "The Midnight Visitor",
        "pdfCode": "jefp103"
      },
      {
        "number": 4,
        "title": "A Question of Trust",
        "pdfCode": "jefp104"
      },
      {
        "number": 5,
        "title": "Footprints without Feet",
        "pdfCode": "jefp105"
      },
      {
        "number": 6,
        "title": "The Making of a Scientist",
        "pdfCode": "jefp106"
      },
      {
        "number": 7,
        "title": "The Necklace",
        "pdfCode": "jefp107"
      },
      {
        "number": 8,
        "title": "Bholi",
        "pdfCode": "jefp108"
      },
      {
        "number": 9,
        "title": "The Book That Saved the Earth",
        "pdfCode": "jefp109"
      }
    ]
  },
  {
    "id": "jewe2",
    "title": "Words and Expressions 2",
    "classNum": 10,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "Unit 1: Trust and Integrity",
        "pdfCode": "jewe201"
      },
      {
        "number": 2,
        "title": "Unit 2: Communication and Interpersonal Skills",
        "pdfCode": "jewe202"
      },
      {
        "number": 3,
        "title": "Unit 3: Empathy and Compassion",
        "pdfCode": "jewe203"
      },
      {
        "number": 4,
        "title": "Unit 4: Resilience and Adaptability",
        "pdfCode": "jewe205"
      },
      {
        "number": 5,
        "title": "Unit 5: Critical Thinking and Problem Solving",
        "pdfCode": "jewe206"
      },
      {
        "number": 6,
        "title": "Unit 6: Environmental Awareness",
        "pdfCode": "jewe207"
      },
      {
        "number": 7,
        "title": "Unit 7: Digital Literacy and Ethics",
        "pdfCode": "jewe208"
      }
    ]
  },
  {
    "id": "jehp1",
    "title": "Health and Physical Education",
    "classNum": 10,
    "subject": "Health and Physical Education",
    "cover": "/covers/health-and-physical-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "Fitness for Life",
        "pdfCode": "jehp101"
      },
      {
        "number": 2,
        "title": "Physical Activity and Health",
        "pdfCode": "jehp102"
      },
      {
        "number": 3,
        "title": "Sports Training and Coaching",
        "pdfCode": "jehp103"
      },
      {
        "number": 4,
        "title": "Yoga and Well-being",
        "pdfCode": "jehp104"
      },
      {
        "number": 5,
        "title": "Lifestyle Diseases",
        "pdfCode": "jehp105"
      },
      {
        "number": 6,
        "title": "First Aid and Safety",
        "pdfCode": "jehp107"
      },
      {
        "number": 7,
        "title": "Doping in Sports",
        "pdfCode": "jehp109"
      },
      {
        "number": 8,
        "title": "Women in Sports",
        "pdfCode": "jehp110"
      },
      {
        "number": 9,
        "title": "Sports Psychology",
        "pdfCode": "jehp111"
      },
      {
        "number": 10,
        "title": "Career in Physical Education",
        "pdfCode": "jehp112"
      }
    ]
  },
  {
    "id": "jemh1",
    "title": "Mathematics",
    "classNum": 10,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Real Numbers",
        "pdfCode": "jemh101"
      },
      {
        "number": 2,
        "title": "Polynomials",
        "pdfCode": "jemh102"
      },
      {
        "number": 3,
        "title": "Pair of Linear Equations in Two Variables",
        "pdfCode": "jemh103"
      },
      {
        "number": 4,
        "title": "Quadratic Equations",
        "pdfCode": "jemh104"
      },
      {
        "number": 5,
        "title": "Arithmetic Progressions",
        "pdfCode": "jemh105"
      },
      {
        "number": 6,
        "title": "Triangles",
        "pdfCode": "jemh106"
      },
      {
        "number": 7,
        "title": "Coordinate Geometry",
        "pdfCode": "jemh107"
      },
      {
        "number": 8,
        "title": "Introduction to Trigonometry",
        "pdfCode": "jemh108"
      },
      {
        "number": 9,
        "title": "Some Applications of Trigonometry",
        "pdfCode": "jemh109"
      },
      {
        "number": 10,
        "title": "Circles",
        "pdfCode": "jemh110"
      },
      {
        "number": 11,
        "title": "Areas Related to Circles",
        "pdfCode": "jemh111"
      },
      {
        "number": 12,
        "title": "Surface Areas and Volumes",
        "pdfCode": "jemh112"
      },
      {
        "number": 13,
        "title": "Statistics",
        "pdfCode": "jemh113"
      },
      {
        "number": 14,
        "title": "Probability",
        "pdfCode": "jemh114"
      }
    ]
  },
  {
    "id": "jesc1",
    "title": "Science",
    "classNum": 10,
    "subject": "Science",
    "cover": "/covers/science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Chemical Reactions and Equations",
        "pdfCode": "jesc101"
      },
      {
        "number": 2,
        "title": "Acids, Bases and Salts",
        "pdfCode": "jesc102"
      },
      {
        "number": 3,
        "title": "Metals and Non-metals",
        "pdfCode": "jesc103"
      },
      {
        "number": 4,
        "title": "Carbon and its Compounds",
        "pdfCode": "jesc104"
      },
      {
        "number": 5,
        "title": "Life Processes",
        "pdfCode": "jesc105"
      },
      {
        "number": 6,
        "title": "Control and Coordination",
        "pdfCode": "jesc106"
      },
      {
        "number": 7,
        "title": "How do Organisms Reproduce?",
        "pdfCode": "jesc107"
      },
      {
        "number": 8,
        "title": "Heredity",
        "pdfCode": "jesc108"
      },
      {
        "number": 9,
        "title": "Light – Reflection and Refraction",
        "pdfCode": "jesc109"
      },
      {
        "number": 10,
        "title": "The Human Eye and the Colourful World",
        "pdfCode": "jesc110"
      },
      {
        "number": 11,
        "title": "Electricity",
        "pdfCode": "jesc111"
      },
      {
        "number": 12,
        "title": "Magnetic Effects of Electric Current",
        "pdfCode": "jesc112"
      },
      {
        "number": 13,
        "title": "Our Environment",
        "pdfCode": "jesc113"
      }
    ]
  },
  {
    "id": "jess1",
    "title": "Contemporary India",
    "classNum": 10,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Resources and Development",
        "pdfCode": "jess101"
      },
      {
        "number": 2,
        "title": "Forest and Wildlife Resources",
        "pdfCode": "jess102"
      },
      {
        "number": 3,
        "title": "Water Resources",
        "pdfCode": "jess103"
      },
      {
        "number": 4,
        "title": "Agriculture",
        "pdfCode": "jess104"
      },
      {
        "number": 5,
        "title": "Minerals and Energy Resources",
        "pdfCode": "jess105"
      },
      {
        "number": 6,
        "title": "Manufacturing Industries",
        "pdfCode": "jess106"
      },
      {
        "number": 7,
        "title": "Lifelines of National Economy",
        "pdfCode": "jess107"
      }
    ]
  },
  {
    "id": "jess4",
    "title": "Democratic Politics",
    "classNum": 10,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Power Sharing",
        "pdfCode": "jess401"
      },
      {
        "number": 2,
        "title": "Federalism",
        "pdfCode": "jess402"
      },
      {
        "number": 3,
        "title": "Gender, Religion and Caste",
        "pdfCode": "jess403"
      },
      {
        "number": 4,
        "title": "Political Parties",
        "pdfCode": "jess404"
      },
      {
        "number": 5,
        "title": "Outcomes of Democracy",
        "pdfCode": "jess405"
      }
    ]
  },
  {
    "id": "jess3",
    "title": "India and the Contemporary World-II",
    "classNum": 10,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Rise of Nationalism in Europe",
        "pdfCode": "jess301"
      },
      {
        "number": 2,
        "title": "Nationalism in India",
        "pdfCode": "jess302"
      },
      {
        "number": 3,
        "title": "The Making of a Global World",
        "pdfCode": "jess303"
      },
      {
        "number": 4,
        "title": "The Age of Industrialisation",
        "pdfCode": "jess304"
      },
      {
        "number": 5,
        "title": "Print Culture and the Modern World",
        "pdfCode": "jess305"
      }
    ]
  },
  {
    "id": "jess2",
    "title": "Understanding Economic Development",
    "classNum": 10,
    "subject": "Social Science",
    "cover": "/covers/social-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Development",
        "pdfCode": "jess201"
      },
      {
        "number": 2,
        "title": "Sectors of the Indian Economy",
        "pdfCode": "jess202"
      },
      {
        "number": 3,
        "title": "Money and Credit",
        "pdfCode": "jess203"
      },
      {
        "number": 4,
        "title": "Globalisation and the Indian Economy",
        "pdfCode": "jess204"
      },
      {
        "number": 5,
        "title": "Consumer Rights",
        "pdfCode": "jess205"
      }
    ]
  },
  {
    "id": "keac2",
    "title": "Accountancy-II",
    "classNum": 11,
    "subject": "Accountancy",
    "cover": "/covers/accountancy.png",
    "chapters": [
      {
        "number": 1,
        "title": "Bank Reconciliation Statement",
        "pdfCode": "keac201"
      },
      {
        "number": 2,
        "title": "Depreciation, Provisions and Reserves",
        "pdfCode": "keac202"
      }
    ]
  },
  {
    "id": "keac1",
    "title": "Financial Accounting-I",
    "classNum": 11,
    "subject": "Accountancy",
    "cover": "/covers/accountancy.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Accounting",
        "pdfCode": "keac101"
      },
      {
        "number": 2,
        "title": "Theory Base of Accounting",
        "pdfCode": "keac102"
      },
      {
        "number": 3,
        "title": "Recording of Transactions – I",
        "pdfCode": "keac103"
      },
      {
        "number": 4,
        "title": "Recording of Transactions – II",
        "pdfCode": "keac104"
      },
      {
        "number": 5,
        "title": "Bank Reconciliation Statement",
        "pdfCode": "keac105"
      },
      {
        "number": 6,
        "title": "Trial Balance and Rectification of Errors",
        "pdfCode": "keac106"
      },
      {
        "number": 7,
        "title": "Depreciation, Provisions and Reserves",
        "pdfCode": "keac107"
      }
    ]
  },
  {
    "id": "kebo1",
    "title": "Biology",
    "classNum": 11,
    "subject": "Biology",
    "cover": "/covers/biology.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Living World",
        "pdfCode": "kebo101"
      },
      {
        "number": 2,
        "title": "Biological Classification",
        "pdfCode": "kebo102"
      },
      {
        "number": 3,
        "title": "Plant Kingdom",
        "pdfCode": "kebo103"
      },
      {
        "number": 4,
        "title": "Animal Kingdom",
        "pdfCode": "kebo104"
      },
      {
        "number": 5,
        "title": "Morphology of Flowering Plants",
        "pdfCode": "kebo105"
      },
      {
        "number": 6,
        "title": "Anatomy of Flowering Plants",
        "pdfCode": "kebo106"
      },
      {
        "number": 7,
        "title": "Structural Organisation in Animals",
        "pdfCode": "kebo107"
      },
      {
        "number": 8,
        "title": "Cell: The Unit of Life",
        "pdfCode": "kebo108"
      },
      {
        "number": 9,
        "title": "Biomolecules",
        "pdfCode": "kebo109"
      },
      {
        "number": 10,
        "title": "Cell Cycle and Cell Division",
        "pdfCode": "kebo110"
      },
      {
        "number": 11,
        "title": "Photosynthesis in Higher Plants",
        "pdfCode": "kebo111"
      },
      {
        "number": 12,
        "title": "Respiration in Plants",
        "pdfCode": "kebo112"
      },
      {
        "number": 13,
        "title": "Plant Growth and Development",
        "pdfCode": "kebo113"
      },
      {
        "number": 14,
        "title": "Breathing and Exchange of Gases",
        "pdfCode": "kebo114"
      },
      {
        "number": 15,
        "title": "Body Fluids and Circulation",
        "pdfCode": "kebo115"
      },
      {
        "number": 16,
        "title": "Excretory Products and their Elimination",
        "pdfCode": "kebo116"
      },
      {
        "number": 17,
        "title": "Locomotion and Movement",
        "pdfCode": "kebo117"
      },
      {
        "number": 18,
        "title": "Neural Control and Coordination",
        "pdfCode": "kebo118"
      },
      {
        "number": 19,
        "title": "Chemical Coordination and Integration",
        "pdfCode": "kebo119"
      }
    ]
  },
  {
    "id": "kebt1",
    "title": "Biotechnology",
    "classNum": 11,
    "subject": "Biotechnology",
    "cover": "/covers/biotechnology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Biotechnology: An Introduction",
        "pdfCode": "kebt101"
      },
      {
        "number": 2,
        "title": "Biomolecules",
        "pdfCode": "kebt102"
      },
      {
        "number": 3,
        "title": "Cell and Molecular Biology",
        "pdfCode": "kebt103"
      },
      {
        "number": 4,
        "title": "Genetics",
        "pdfCode": "kebt104"
      },
      {
        "number": 5,
        "title": "Microbiology",
        "pdfCode": "kebt105"
      },
      {
        "number": 6,
        "title": "Immunology",
        "pdfCode": "kebt106"
      },
      {
        "number": 7,
        "title": "Bioinformatics",
        "pdfCode": "kebt107"
      },
      {
        "number": 8,
        "title": "Ecology",
        "pdfCode": "kebt108"
      },
      {
        "number": 9,
        "title": "Genetically Modified Organisms",
        "pdfCode": "kebt109"
      },
      {
        "number": 10,
        "title": "Intellectual Property Rights",
        "pdfCode": "kebt110"
      },
      {
        "number": 11,
        "title": "Biotechnology and Society",
        "pdfCode": "kebt111"
      },
      {
        "number": 12,
        "title": "Project Work",
        "pdfCode": "kebt112"
      }
    ]
  },
  {
    "id": "kebs1",
    "title": "Business Studies",
    "classNum": 11,
    "subject": "Business Studies",
    "cover": "/covers/business-studies.png",
    "chapters": [
      {
        "number": 1,
        "title": "Nature and Significance of Management",
        "pdfCode": "kebs101"
      },
      {
        "number": 2,
        "title": "Principles of Management",
        "pdfCode": "kebs102"
      },
      {
        "number": 3,
        "title": "Business Environment",
        "pdfCode": "kebs103"
      },
      {
        "number": 4,
        "title": "Planning",
        "pdfCode": "kebs104"
      },
      {
        "number": 5,
        "title": "Organising",
        "pdfCode": "kebs105"
      },
      {
        "number": 6,
        "title": "Staffing",
        "pdfCode": "kebs106"
      },
      {
        "number": 7,
        "title": "Directing",
        "pdfCode": "kebs107"
      },
      {
        "number": 8,
        "title": "Controlling",
        "pdfCode": "kebs108"
      },
      {
        "number": 9,
        "title": "Financial Management",
        "pdfCode": "kebs109"
      },
      {
        "number": 10,
        "title": "Financial Markets",
        "pdfCode": "kebs110"
      },
      {
        "number": 11,
        "title": "Marketing Management",
        "pdfCode": "kebs111"
      }
    ]
  },
  {
    "id": "kech2",
    "title": "Chemistry Part II",
    "classNum": 11,
    "subject": "Chemistry",
    "cover": "/covers/chemistry.png",
    "chapters": [
      {
        "number": 7,
        "title": "Redox Reactions",
        "pdfCode": "kech201"
      },
      {
        "number": 8,
        "title": "Organic Chemistry: Some Basic Principles and Techniques",
        "pdfCode": "kech202"
      },
      {
        "number": 9,
        "title": "Hydrocarbons",
        "pdfCode": "kech203"
      }
    ]
  },
  {
    "id": "kech1",
    "title": "Chemistry Part-I",
    "classNum": 11,
    "subject": "Chemistry",
    "cover": "/covers/chemistry.png",
    "chapters": [
      {
        "number": 1,
        "title": "Some Basic Concepts of Chemistry",
        "pdfCode": "kech101"
      },
      {
        "number": 2,
        "title": "Structure of Atom",
        "pdfCode": "kech102"
      },
      {
        "number": 3,
        "title": "Classification of Elements and Periodicity in Properties",
        "pdfCode": "kech103"
      },
      {
        "number": 4,
        "title": "Chemical Bonding and Molecular Structure",
        "pdfCode": "kech104"
      },
      {
        "number": 5,
        "title": "Thermodynamics",
        "pdfCode": "kech105"
      },
      {
        "number": 6,
        "title": "Equilibrium",
        "pdfCode": "kech106"
      }
    ]
  },
  {
    "id": "kecs1",
    "title": "Computer Science",
    "classNum": 11,
    "subject": "Computer Science",
    "cover": "/covers/computer-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Computing Machinery and Intelligence",
        "pdfCode": "kecs101"
      },
      {
        "number": 2,
        "title": "Data Representation",
        "pdfCode": "kecs102"
      },
      {
        "number": 3,
        "title": "Boolean Algebra",
        "pdfCode": "kecs103"
      },
      {
        "number": 4,
        "title": "Number Systems",
        "pdfCode": "kecs104"
      },
      {
        "number": 5,
        "title": "Computer Fundamentals",
        "pdfCode": "kecs105"
      },
      {
        "number": 6,
        "title": "Programming Fundamentals",
        "pdfCode": "kecs106"
      },
      {
        "number": 7,
        "title": "Data Structures",
        "pdfCode": "kecs107"
      },
      {
        "number": 8,
        "title": "Database Concepts",
        "pdfCode": "kecs108"
      },
      {
        "number": 9,
        "title": "Networking",
        "pdfCode": "kecs109"
      },
      {
        "number": 10,
        "title": "Societal Impacts",
        "pdfCode": "kecs110"
      },
      {
        "number": 11,
        "title": "Project",
        "pdfCode": "kecs111"
      }
    ]
  },
  {
    "id": "keec1",
    "title": "Indian Economic Development",
    "classNum": 11,
    "subject": "Economics",
    "cover": "/covers/economics.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Indian Economy in a Globalising World",
        "pdfCode": "keec101"
      },
      {
        "number": 2,
        "title": "Economic Reforms since 1991",
        "pdfCode": "keec102"
      },
      {
        "number": 3,
        "title": "Poverty",
        "pdfCode": "keec103"
      },
      {
        "number": 4,
        "title": "Human Capital Formation in India",
        "pdfCode": "keec104"
      },
      {
        "number": 5,
        "title": "Rural Development",
        "pdfCode": "keec105"
      },
      {
        "number": 6,
        "title": "Employment: Growth, Informalisation and Other Issues",
        "pdfCode": "keec106"
      },
      {
        "number": 7,
        "title": "Environment and Sustainable Development",
        "pdfCode": "keec107"
      },
      {
        "number": 8,
        "title": "Development Experience of India: A Comparison with Neighbours",
        "pdfCode": "keec108"
      }
    ]
  },
  {
    "id": "kest1",
    "title": "Statistics for Economics",
    "classNum": 11,
    "subject": "Economics",
    "cover": "/covers/economics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Statistics",
        "pdfCode": "kest101"
      },
      {
        "number": 2,
        "title": "Collection of Data",
        "pdfCode": "kest102"
      },
      {
        "number": 3,
        "title": "Organisation of Data",
        "pdfCode": "kest103"
      },
      {
        "number": 4,
        "title": "Presentation of Data",
        "pdfCode": "kest104"
      },
      {
        "number": 5,
        "title": "Measures of Central Tendency",
        "pdfCode": "kest105"
      },
      {
        "number": 6,
        "title": "Measures of Dispersion",
        "pdfCode": "kest106"
      },
      {
        "number": 7,
        "title": "Correlation",
        "pdfCode": "kest107"
      },
      {
        "number": 8,
        "title": "Index Numbers",
        "pdfCode": "kest108"
      }
    ]
  },
  {
    "id": "kehb1",
    "title": "Hornbill",
    "classNum": 11,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Portrait of a Lady",
        "pdfCode": "kehb101"
      },
      {
        "number": 2,
        "title": "We're Not Afraid to Die... if We Can All Be Together",
        "pdfCode": "kehb102"
      },
      {
        "number": 3,
        "title": "Discovering Tut: the Saga Continues",
        "pdfCode": "kehb103"
      },
      {
        "number": 4,
        "title": "The Ailing Planet: the Green Movement's Role",
        "pdfCode": "kehb104"
      },
      {
        "number": 5,
        "title": "The Adventure",
        "pdfCode": "kehb105"
      },
      {
        "number": 6,
        "title": "Silk Road",
        "pdfCode": "kehb106"
      },
      {
        "number": 7,
        "title": "Note-making",
        "pdfCode": "kehb111"
      },
      {
        "number": 8,
        "title": "Summarising",
        "pdfCode": "kehb112"
      },
      {
        "number": 9,
        "title": "Sub-titling",
        "pdfCode": "kehb113"
      },
      {
        "number": 10,
        "title": "Essay-writing",
        "pdfCode": "kehb114"
      }
    ]
  },
  {
    "id": "kesp1",
    "title": "Snapshots Suppl.Reader English",
    "classNum": 11,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Summer of the Beautiful White Horse",
        "pdfCode": "kesp101"
      },
      {
        "number": 2,
        "title": "The Address",
        "pdfCode": "kesp102"
      },
      {
        "number": 3,
        "title": "Mother's Day",
        "pdfCode": "kesp103"
      },
      {
        "number": 4,
        "title": "Birth",
        "pdfCode": "kesp104"
      },
      {
        "number": 5,
        "title": "The Tale of Melon City",
        "pdfCode": "kesp105"
      }
    ]
  },
  {
    "id": "keww1",
    "title": "Woven Words",
    "classNum": 11,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Lament",
        "pdfCode": "keww101"
      },
      {
        "number": 2,
        "title": "A Pair of Mustachios",
        "pdfCode": "keww102"
      },
      {
        "number": 3,
        "title": "The Rocking-horse Winner",
        "pdfCode": "keww103"
      },
      {
        "number": 4,
        "title": "The Adventure of the Three Garridebs",
        "pdfCode": "keww104"
      },
      {
        "number": 5,
        "title": "Pappachi's Moth",
        "pdfCode": "keww105"
      },
      {
        "number": 6,
        "title": "The Third and Final Continent",
        "pdfCode": "keww106"
      },
      {
        "number": 7,
        "title": "Glory at Twilight",
        "pdfCode": "keww107"
      },
      {
        "number": 8,
        "title": "The Luncheon",
        "pdfCode": "keww108"
      },
      {
        "number": 9,
        "title": "The Peacock",
        "pdfCode": "keww111"
      },
      {
        "number": 10,
        "title": "Let Me Not to the Marriage of True Minds",
        "pdfCode": "keww112"
      },
      {
        "number": 11,
        "title": "Coming",
        "pdfCode": "keww113"
      },
      {
        "number": 12,
        "title": "Telephone Conversation",
        "pdfCode": "keww114"
      },
      {
        "number": 13,
        "title": "The World Is Too Much with Us",
        "pdfCode": "keww115"
      },
      {
        "number": 14,
        "title": "Mother Tongue",
        "pdfCode": "keww116"
      },
      {
        "number": 15,
        "title": "Hawk Roosting",
        "pdfCode": "keww117"
      },
      {
        "number": 16,
        "title": "Ode to a Nightingale",
        "pdfCode": "keww118"
      },
      {
        "number": 17,
        "title": "My Watch",
        "pdfCode": "keww119"
      },
      {
        "number": 18,
        "title": "My Three Passions",
        "pdfCode": "keww120"
      },
      {
        "number": 19,
        "title": "Patterns of Creativity",
        "pdfCode": "keww121"
      },
      {
        "number": 20,
        "title": "Tribal Verse",
        "pdfCode": "keww122"
      }
    ]
  },
  {
    "id": "kefa1",
    "title": "An Introduction to Indian Art Part-I",
    "classNum": 11,
    "subject": "Fine Art",
    "cover": "/covers/fine-art.png",
    "chapters": [
      {
        "number": 1,
        "title": "An Introduction to Indian Art",
        "pdfCode": "kefa101"
      },
      {
        "number": 2,
        "title": "Indus Valley Civilization",
        "pdfCode": "kefa102"
      },
      {
        "number": 3,
        "title": "Buddhist and Jain Art",
        "pdfCode": "kefa103"
      },
      {
        "number": 4,
        "title": "Cave Paintings",
        "pdfCode": "kefa104"
      },
      {
        "number": 5,
        "title": "Temple Architecture",
        "pdfCode": "kefa105"
      },
      {
        "number": 6,
        "title": "Sculpture",
        "pdfCode": "kefa106"
      },
      {
        "number": 7,
        "title": "Bronze and Metal Art",
        "pdfCode": "kefa107"
      },
      {
        "number": 8,
        "title": "Indian Painting",
        "pdfCode": "kefa108"
      }
    ]
  },
  {
    "id": "kegy2",
    "title": "Fundamental of Physical Geography",
    "classNum": 11,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Earth in the Solar System",
        "pdfCode": "kegy201"
      },
      {
        "number": 2,
        "title": "Globe: Latitudes and Longitudes",
        "pdfCode": "kegy202"
      },
      {
        "number": 3,
        "title": "Motions of the Earth",
        "pdfCode": "kegy203"
      },
      {
        "number": 4,
        "title": "Maps",
        "pdfCode": "kegy204"
      },
      {
        "number": 5,
        "title": "Major Domains of the Earth",
        "pdfCode": "kegy205"
      },
      {
        "number": 6,
        "title": "Major Landforms of the Earth",
        "pdfCode": "kegy206"
      },
      {
        "number": 7,
        "title": "Our Country – India",
        "pdfCode": "kegy207"
      },
      {
        "number": 8,
        "title": "India: Climate",
        "pdfCode": "kegy208"
      },
      {
        "number": 9,
        "title": "India: Vegetation",
        "pdfCode": "kegy209"
      },
      {
        "number": 10,
        "title": "Drainage",
        "pdfCode": "kegy210"
      },
      {
        "number": 11,
        "title": "Environment",
        "pdfCode": "kegy211"
      },
      {
        "number": 12,
        "title": "Human – Environment Interaction",
        "pdfCode": "kegy212"
      },
      {
        "number": 13,
        "title": "Natural Hazards and Disasters",
        "pdfCode": "kegy213"
      },
      {
        "number": 14,
        "title": "Human Geography: Nature and Scope",
        "pdfCode": "kegy214"
      }
    ]
  },
  {
    "id": "kegy1",
    "title": "India Physical Environment",
    "classNum": 11,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "India: Location",
        "pdfCode": "kegy101"
      },
      {
        "number": 2,
        "title": "India: Physiography",
        "pdfCode": "kegy102"
      },
      {
        "number": 3,
        "title": "India: Drainage",
        "pdfCode": "kegy103"
      },
      {
        "number": 4,
        "title": "India: Climate",
        "pdfCode": "kegy104"
      },
      {
        "number": 5,
        "title": "India: Natural Vegetation",
        "pdfCode": "kegy105"
      },
      {
        "number": 6,
        "title": "India: Population",
        "pdfCode": "kegy106"
      }
    ]
  },
  {
    "id": "kegy3",
    "title": "Pratical Work in Geography",
    "classNum": 11,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "Map Reading and Field Surveys",
        "pdfCode": "kegy301"
      },
      {
        "number": 2,
        "title": "Data Collection and Processing",
        "pdfCode": "kegy302"
      },
      {
        "number": 3,
        "title": "Graphical Representation of Data",
        "pdfCode": "kegy303"
      },
      {
        "number": 4,
        "title": "Spatial Analysis Techniques",
        "pdfCode": "kegy304"
      },
      {
        "number": 5,
        "title": "Field Study Methods",
        "pdfCode": "kegy305"
      },
      {
        "number": 6,
        "title": "Application of GIS in Geography",
        "pdfCode": "kegy306"
      }
    ]
  },
  {
    "id": "kehp1",
    "title": "Health and Physical Education",
    "classNum": 11,
    "subject": "Health and Physical Education",
    "cover": "/covers/health-and-physical-education.png",
    "chapters": [
      {
        "number": 1,
        "title": "Physical Education",
        "pdfCode": "kehp101"
      },
      {
        "number": 2,
        "title": "Understanding Health",
        "pdfCode": "kehp102"
      },
      {
        "number": 3,
        "title": "Physical and Physiological Aspects of Physical Education and Sports",
        "pdfCode": "kehp103"
      },
      {
        "number": 4,
        "title": "Individual Games",
        "pdfCode": "kehp104"
      },
      {
        "number": 5,
        "title": "Team Games",
        "pdfCode": "kehp105"
      },
      {
        "number": 6,
        "title": "Yoga and its Relevance in the Modern Times",
        "pdfCode": "kehp106"
      },
      {
        "number": 7,
        "title": "Safety and Security",
        "pdfCode": "kehp107"
      },
      {
        "number": 8,
        "title": "Health Related Physical Fitness",
        "pdfCode": "kehp108"
      },
      {
        "number": 9,
        "title": "Measurement and Evaluation",
        "pdfCode": "kehp109"
      },
      {
        "number": 10,
        "title": "Tournaments and Competitions",
        "pdfCode": "kehp110"
      },
      {
        "number": 11,
        "title": "Adventure Sports",
        "pdfCode": "kehp111"
      }
    ]
  },
  {
    "id": "kehs1",
    "title": "Themes in World History",
    "classNum": 11,
    "subject": "History",
    "cover": "/covers/history.png",
    "chapters": [
      {
        "number": 1,
        "title": "From the Beginning of Time",
        "pdfCode": "kehs101"
      },
      {
        "number": 2,
        "title": "Writing and City Life",
        "pdfCode": "kehs102"
      },
      {
        "number": 3,
        "title": "An Empire Across Three Continents",
        "pdfCode": "kehs103"
      },
      {
        "number": 4,
        "title": "The Central Islamic Lands",
        "pdfCode": "kehs104"
      },
      {
        "number": 5,
        "title": "Nomadic Empires",
        "pdfCode": "kehs105"
      },
      {
        "number": 6,
        "title": "The Three Orders",
        "pdfCode": "kehs106"
      },
      {
        "number": 7,
        "title": "Changing Cultural Traditions",
        "pdfCode": "kehs107"
      }
    ]
  },
  {
    "id": "kehe1",
    "title": "Human Ecology and Family Sciences Part I",
    "classNum": 11,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Human Ecology",
        "pdfCode": "kehe101"
      },
      {
        "number": 2,
        "title": "Understanding the Self",
        "pdfCode": "kehe102"
      },
      {
        "number": 3,
        "title": "Food, Nutrition, Health and Fitness",
        "pdfCode": "kehe103"
      },
      {
        "number": 4,
        "title": "Management of Resources",
        "pdfCode": "kehe104"
      },
      {
        "number": 5,
        "title": "Fabrics Around Us",
        "pdfCode": "kehe105"
      },
      {
        "number": 6,
        "title": "Media and Communication Technology",
        "pdfCode": "kehe106"
      },
      {
        "number": 7,
        "title": "Concerns and Needs in Diverse Contexts",
        "pdfCode": "kehe107"
      }
    ]
  },
  {
    "id": "kehe2",
    "title": "Human Ecology and Family Sciences Part II",
    "classNum": 11,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Development of Human Ecology",
        "pdfCode": "kehe201"
      },
      {
        "number": 2,
        "title": "Gender Issues",
        "pdfCode": "kehe202"
      },
      {
        "number": 3,
        "title": "Education",
        "pdfCode": "kehe203"
      },
      {
        "number": 4,
        "title": "Health",
        "pdfCode": "kehe204"
      }
    ]
  },
  {
    "id": "keip1",
    "title": "Informatics Practices",
    "classNum": 11,
    "subject": "Informatics Practices",
    "cover": "/covers/informatics-practices.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Computer Systems",
        "pdfCode": "keip101"
      },
      {
        "number": 2,
        "title": "Introduction to Python",
        "pdfCode": "keip102"
      },
      {
        "number": 3,
        "title": "Python Fundamentals",
        "pdfCode": "keip103"
      },
      {
        "number": 4,
        "title": "Data Types and Operations",
        "pdfCode": "keip104"
      },
      {
        "number": 5,
        "title": "Flow of Control",
        "pdfCode": "keip105"
      },
      {
        "number": 6,
        "title": "Functions",
        "pdfCode": "keip106"
      },
      {
        "number": 7,
        "title": "Lists",
        "pdfCode": "keip107"
      },
      {
        "number": 8,
        "title": "Tuples and Dictionaries",
        "pdfCode": "keip108"
      }
    ]
  },
  {
    "id": "keks1",
    "title": "Knowledge Traditions Practices of India",
    "classNum": 11,
    "subject": "Knowledge Traditions Practices of India",
    "cover": "/covers/knowledge-traditions-practices-of-india.png",
    "chapters": [
      {
        "number": 1,
        "title": "Language and Literature of India",
        "pdfCode": "keks101"
      },
      {
        "number": 2,
        "title": "Indian Philosophical Systems",
        "pdfCode": "keks102"
      },
      {
        "number": 3,
        "title": "Performing Art Traditions in India",
        "pdfCode": "keks103"
      },
      {
        "number": 4,
        "title": "Indian Art and Architecture",
        "pdfCode": "keks104"
      },
      {
        "number": 5,
        "title": "Astronomy in India",
        "pdfCode": "keks105"
      },
      {
        "number": 6,
        "title": "Mathematics in India",
        "pdfCode": "keks106"
      },
      {
        "number": 7,
        "title": "Introducing Ayurveda: the Science of Health and Disease",
        "pdfCode": "keks107"
      },
      {
        "number": 8,
        "title": "Chemistry and Metallurgy in India",
        "pdfCode": "keks108"
      },
      {
        "number": 9,
        "title": "Yoga",
        "pdfCode": "keks109"
      }
    ]
  },
  {
    "id": "kemh1",
    "title": "Mathematics",
    "classNum": 11,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Sets",
        "pdfCode": "kemh101"
      },
      {
        "number": 2,
        "title": "Relations and Functions",
        "pdfCode": "kemh102"
      },
      {
        "number": 3,
        "title": "Trigonometric Functions",
        "pdfCode": "kemh103"
      },
      {
        "number": 4,
        "title": "Complex Numbers and Quadratic Equations",
        "pdfCode": "kemh104"
      },
      {
        "number": 5,
        "title": "Linear Inequalities",
        "pdfCode": "kemh105"
      },
      {
        "number": 6,
        "title": "Permutations and Combinations",
        "pdfCode": "kemh106"
      },
      {
        "number": 7,
        "title": "Binomial Theorem",
        "pdfCode": "kemh107"
      },
      {
        "number": 8,
        "title": "Sequences and Series",
        "pdfCode": "kemh108"
      },
      {
        "number": 9,
        "title": "Straight Lines",
        "pdfCode": "kemh109"
      },
      {
        "number": 10,
        "title": "Conic Sections",
        "pdfCode": "kemh110"
      },
      {
        "number": 11,
        "title": "Introduction to Three Dimensional Geometry",
        "pdfCode": "kemh111"
      },
      {
        "number": 12,
        "title": "Limits and Derivatives",
        "pdfCode": "kemh112"
      },
      {
        "number": 13,
        "title": "Statistics",
        "pdfCode": "kemh113"
      },
      {
        "number": 14,
        "title": "Probability",
        "pdfCode": "kemh114"
      }
    ]
  },
  {
    "id": "keph1",
    "title": "Physics Part-I",
    "classNum": 11,
    "subject": "Physics",
    "cover": "/covers/physics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Units and Measurements",
        "pdfCode": "keph101"
      },
      {
        "number": 2,
        "title": "Motion in a Straight Line",
        "pdfCode": "keph102"
      },
      {
        "number": 3,
        "title": "Motion in a Plane",
        "pdfCode": "keph103"
      },
      {
        "number": 4,
        "title": "Laws of Motion",
        "pdfCode": "keph104"
      },
      {
        "number": 5,
        "title": "Work, Energy and Power",
        "pdfCode": "keph105"
      },
      {
        "number": 6,
        "title": "System of Particles and Rotational Motion",
        "pdfCode": "keph106"
      },
      {
        "number": 7,
        "title": "Gravitation",
        "pdfCode": "keph107"
      }
    ]
  },
  {
    "id": "keph2",
    "title": "Physics Part-II",
    "classNum": 11,
    "subject": "Physics",
    "cover": "/covers/physics.png",
    "chapters": [
      {
        "number": 8,
        "title": "Mechanical Properties of Solids",
        "pdfCode": "keph201"
      },
      {
        "number": 9,
        "title": "Mechanical Properties of Fluids",
        "pdfCode": "keph202"
      },
      {
        "number": 10,
        "title": "Mechanical Properties of Solids",
        "pdfCode": "keph203"
      },
      {
        "number": 11,
        "title": "Thermodynamics",
        "pdfCode": "keph204"
      },
      {
        "number": 12,
        "title": "Kinetic Theory",
        "pdfCode": "keph205"
      },
      {
        "number": 13,
        "title": "Oscillations",
        "pdfCode": "keph206"
      },
      {
        "number": 14,
        "title": "Waves",
        "pdfCode": "keph207"
      }
    ]
  },
  {
    "id": "keps2",
    "title": "India Constitution at Work",
    "classNum": 11,
    "subject": "Political Science",
    "cover": "/covers/political-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Computer System",
        "pdfCode": "keps201"
      },
      {
        "number": 2,
        "title": "Encoding Schemes and Number System",
        "pdfCode": "keps202"
      },
      {
        "number": 3,
        "title": "Emerging Trends",
        "pdfCode": "keps203"
      },
      {
        "number": 4,
        "title": "Introduction to Problem Solving",
        "pdfCode": "keps204"
      },
      {
        "number": 5,
        "title": "Getting Started with Python",
        "pdfCode": "keps205"
      },
      {
        "number": 6,
        "title": "Flow of Control",
        "pdfCode": "keps206"
      },
      {
        "number": 7,
        "title": "Functions",
        "pdfCode": "keps207"
      },
      {
        "number": 8,
        "title": "Strings",
        "pdfCode": "keps208"
      },
      {
        "number": 9,
        "title": "Lists",
        "pdfCode": "keps209"
      },
      {
        "number": 10,
        "title": "Tuples and Dictionaries",
        "pdfCode": "keps210"
      }
    ]
  },
  {
    "id": "keps1",
    "title": "Political Theory",
    "classNum": 11,
    "subject": "Political Science",
    "cover": "/covers/political-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Political Theory: An Introduction",
        "pdfCode": "keps101"
      },
      {
        "number": 2,
        "title": "Freedom",
        "pdfCode": "keps102"
      },
      {
        "number": 3,
        "title": "Equality",
        "pdfCode": "keps103"
      },
      {
        "number": 4,
        "title": "Social Justice",
        "pdfCode": "keps104"
      },
      {
        "number": 5,
        "title": "Rights",
        "pdfCode": "keps105"
      },
      {
        "number": 6,
        "title": "Citizenship",
        "pdfCode": "keps106"
      },
      {
        "number": 7,
        "title": "Nationalism",
        "pdfCode": "keps107"
      },
      {
        "number": 8,
        "title": "Secularism",
        "pdfCode": "keps108"
      }
    ]
  },
  {
    "id": "kepy1",
    "title": "Introduction to Psychology",
    "classNum": 11,
    "subject": "Psychology",
    "cover": "/covers/psychology.png",
    "chapters": [
      {
        "number": 1,
        "title": "What is Psychology?",
        "pdfCode": "kepy101"
      },
      {
        "number": 2,
        "title": "Methods of Enquiry in Psychology",
        "pdfCode": "kepy102"
      },
      {
        "number": 3,
        "title": "The Bases of Human Behaviour",
        "pdfCode": "kepy103"
      },
      {
        "number": 4,
        "title": "Human Development",
        "pdfCode": "kepy104"
      },
      {
        "number": 5,
        "title": "Sensory, Attentional and Perceptual Processes",
        "pdfCode": "kepy105"
      },
      {
        "number": 6,
        "title": "Learning",
        "pdfCode": "kepy106"
      },
      {
        "number": 7,
        "title": "Human Memory",
        "pdfCode": "kepy107"
      },
      {
        "number": 8,
        "title": "Thinking",
        "pdfCode": "kepy108"
      }
    ]
  },
  {
    "id": "kesy1",
    "title": "Introducing Sociology",
    "classNum": 11,
    "subject": "Sociology",
    "cover": "/covers/sociology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Sociology and Society",
        "pdfCode": "kesy101"
      },
      {
        "number": 2,
        "title": "Social Institutions",
        "pdfCode": "kesy102"
      },
      {
        "number": 3,
        "title": "Social Stratification",
        "pdfCode": "kesy103"
      },
      {
        "number": 4,
        "title": "Social Change in Modern India",
        "pdfCode": "kesy104"
      },
      {
        "number": 5,
        "title": "Cultural Change",
        "pdfCode": "kesy105"
      }
    ]
  },
  {
    "id": "kesy2",
    "title": "Understanding Society",
    "classNum": 11,
    "subject": "Sociology",
    "cover": "/covers/sociology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introducing Sociology",
        "pdfCode": "kesy201"
      },
      {
        "number": 2,
        "title": "Social Structure, Stratification and Social Processes in Society",
        "pdfCode": "kesy202"
      },
      {
        "number": 3,
        "title": "Culture and Socialisation",
        "pdfCode": "kesy203"
      },
      {
        "number": 4,
        "title": "Society: Structure and Change",
        "pdfCode": "kesy204"
      },
      {
        "number": 5,
        "title": "Introducing Indian Society",
        "pdfCode": "kesy205"
      }
    ]
  },
  {
    "id": "leac2",
    "title": "Accountancy Part-II",
    "classNum": 12,
    "subject": "Accountancy",
    "cover": "/covers/accountancy.png",
    "chapters": [
      {
        "number": 1,
        "title": "Accounting for Share Capital",
        "pdfCode": "leac201"
      },
      {
        "number": 2,
        "title": "Accounting for Debentures",
        "pdfCode": "leac202"
      },
      {
        "number": 3,
        "title": "Financial Statements of a Company",
        "pdfCode": "leac203"
      },
      {
        "number": 4,
        "title": "Analysis of Financial Statements",
        "pdfCode": "leac204"
      },
      {
        "number": 5,
        "title": "Accounting Ratios",
        "pdfCode": "leac205"
      },
      {
        "number": 6,
        "title": "Cash Flow Statement",
        "pdfCode": "leac206"
      }
    ]
  },
  {
    "id": "leac1",
    "title": "Accountancy-I",
    "classNum": 12,
    "subject": "Accountancy",
    "cover": "/covers/accountancy.png",
    "chapters": [
      {
        "number": 1,
        "title": "Accounting Not-for-Profit Organisation",
        "pdfCode": "leac101"
      },
      {
        "number": 2,
        "title": "Accounting for Partnership Firms",
        "pdfCode": "leac102"
      },
      {
        "number": 3,
        "title": "Reconstitution of a Partnership Firm",
        "pdfCode": "leac103"
      },
      {
        "number": 4,
        "title": "Dissolution of Partnership Firm",
        "pdfCode": "leac104"
      }
    ]
  },
  {
    "id": "leca1",
    "title": "Computerised Accounting System",
    "classNum": 12,
    "subject": "Accountancy",
    "cover": "/covers/accountancy.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Computerised Accounting",
        "pdfCode": "leca101"
      },
      {
        "number": 2,
        "title": "Concepts of Database Management",
        "pdfCode": "leca102"
      },
      {
        "number": 3,
        "title": "Using a Computerised Accounting System",
        "pdfCode": "leca103"
      },
      {
        "number": 4,
        "title": "Accounting Using Database Management Systems",
        "pdfCode": "leca104"
      }
    ]
  },
  {
    "id": "lebo1",
    "title": "Biology",
    "classNum": 12,
    "subject": "Biology",
    "cover": "/covers/biology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Sexual Reproduction in Flowering Plants",
        "pdfCode": "lebo101"
      },
      {
        "number": 2,
        "title": "Human Reproduction",
        "pdfCode": "lebo102"
      },
      {
        "number": 3,
        "title": "Reproductive Health",
        "pdfCode": "lebo103"
      },
      {
        "number": 4,
        "title": "Principles of Inheritance and Variation",
        "pdfCode": "lebo104"
      },
      {
        "number": 5,
        "title": "Molecular Basis of Inheritance",
        "pdfCode": "lebo105"
      },
      {
        "number": 6,
        "title": "Evolution",
        "pdfCode": "lebo106"
      },
      {
        "number": 7,
        "title": "Human Health and Disease",
        "pdfCode": "lebo107"
      },
      {
        "number": 8,
        "title": "Microbes in Human Welfare",
        "pdfCode": "lebo108"
      },
      {
        "number": 9,
        "title": "Biotechnology: Principles and Processes",
        "pdfCode": "lebo109"
      },
      {
        "number": 10,
        "title": "Biotechnology and its Applications",
        "pdfCode": "lebo110"
      },
      {
        "number": 11,
        "title": "Organisms and Populations",
        "pdfCode": "lebo111"
      },
      {
        "number": 12,
        "title": "Ecosystem",
        "pdfCode": "lebo112"
      },
      {
        "number": 13,
        "title": "Biodiversity and Conservation",
        "pdfCode": "lebo113"
      }
    ]
  },
  {
    "id": "lebt1",
    "title": "Biotechnology",
    "classNum": 12,
    "subject": "Biotechnology",
    "cover": "/covers/biotechnology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Nature and Significance of Management",
        "pdfCode": "lebt101"
      },
      {
        "number": 2,
        "title": "Principles of Management",
        "pdfCode": "lebt102"
      },
      {
        "number": 3,
        "title": "Business Environment",
        "pdfCode": "lebt103"
      },
      {
        "number": 4,
        "title": "Planning",
        "pdfCode": "lebt104"
      },
      {
        "number": 5,
        "title": "Organising",
        "pdfCode": "lebt105"
      },
      {
        "number": 6,
        "title": "Staffing",
        "pdfCode": "lebt106"
      },
      {
        "number": 7,
        "title": "Directing",
        "pdfCode": "lebt107"
      },
      {
        "number": 8,
        "title": "Controlling",
        "pdfCode": "lebt108"
      },
      {
        "number": 9,
        "title": "Financial Management",
        "pdfCode": "lebt109"
      },
      {
        "number": 10,
        "title": "Financial Markets",
        "pdfCode": "lebt110"
      },
      {
        "number": 11,
        "title": "Marketing Management",
        "pdfCode": "lebt111"
      },
      {
        "number": 12,
        "title": "Consumer Protection",
        "pdfCode": "lebt112"
      },
      {
        "number": 13,
        "title": "Emerging Modes of Business",
        "pdfCode": "lebt113"
      }
    ]
  },
  {
    "id": "lebs1",
    "title": "Business Studies-I",
    "classNum": 12,
    "subject": "Business Studies",
    "cover": "/covers/business-studies.png",
    "chapters": [
      {
        "number": 1,
        "title": "Nature and Significance of Management",
        "pdfCode": "lebs101"
      },
      {
        "number": 2,
        "title": "Principles of Management",
        "pdfCode": "lebs102"
      },
      {
        "number": 3,
        "title": "Business Environment",
        "pdfCode": "lebs103"
      },
      {
        "number": 4,
        "title": "Planning",
        "pdfCode": "lebs104"
      },
      {
        "number": 5,
        "title": "Organising",
        "pdfCode": "lebs105"
      },
      {
        "number": 6,
        "title": "Staffing",
        "pdfCode": "lebs106"
      },
      {
        "number": 7,
        "title": "Directing",
        "pdfCode": "lebs107"
      },
      {
        "number": 8,
        "title": "Controlling",
        "pdfCode": "lebs108"
      }
    ]
  },
  {
    "id": "lebs2",
    "title": "Business Studies-II",
    "classNum": 12,
    "subject": "Business Studies",
    "cover": "/covers/business-studies.png",
    "chapters": [
      {
        "number": 1,
        "title": "Financial Management",
        "pdfCode": "lebs201"
      },
      {
        "number": 2,
        "title": "Financial Markets",
        "pdfCode": "lebs202"
      },
      {
        "number": 3,
        "title": "Marketing Management",
        "pdfCode": "lebs203"
      }
    ]
  },
  {
    "id": "lech1",
    "title": "Chemistry-I",
    "classNum": 12,
    "subject": "Chemistry",
    "cover": "/covers/chemistry.png",
    "chapters": [
      {
        "number": 1,
        "title": "Solutions",
        "pdfCode": "lech101"
      },
      {
        "number": 2,
        "title": "Electrochemistry",
        "pdfCode": "lech102"
      },
      {
        "number": 3,
        "title": "Chemical Kinetics",
        "pdfCode": "lech103"
      },
      {
        "number": 4,
        "title": "The d- and f-Block Elements",
        "pdfCode": "lech104"
      },
      {
        "number": 5,
        "title": "Coordination Compounds",
        "pdfCode": "lech105"
      }
    ]
  },
  {
    "id": "lech2",
    "title": "Chemistry-II",
    "classNum": 12,
    "subject": "Chemistry",
    "cover": "/covers/chemistry.png",
    "chapters": [
      {
        "number": 6,
        "title": "Haloalkanes and Haloarenes",
        "pdfCode": "lech201"
      },
      {
        "number": 7,
        "title": "Alcohols, Phenols and Ethers",
        "pdfCode": "lech202"
      },
      {
        "number": 8,
        "title": "Aldehydes, Ketones and Carboxylic Acids",
        "pdfCode": "lech203"
      },
      {
        "number": 9,
        "title": "Amines",
        "pdfCode": "lech204"
      },
      {
        "number": 10,
        "title": "Haloalkanes and Haloarenes",
        "pdfCode": "lech205"
      }
    ]
  },
  {
    "id": "lecs1",
    "title": "Computer Science",
    "classNum": 12,
    "subject": "Computer Science",
    "cover": "/covers/computer-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Formal Language and Regular Expressions",
        "pdfCode": "lecs101"
      },
      {
        "number": 2,
        "title": "Boolean Algebra",
        "pdfCode": "lecs102"
      },
      {
        "number": 3,
        "title": "Data Representation",
        "pdfCode": "lecs103"
      },
      {
        "number": 4,
        "title": "Introduction to Python",
        "pdfCode": "lecs104"
      },
      {
        "number": 5,
        "title": "Python Fundamentals",
        "pdfCode": "lecs105"
      },
      {
        "number": 6,
        "title": "Data Types and Operations",
        "pdfCode": "lecs106"
      },
      {
        "number": 7,
        "title": "Flow of Control",
        "pdfCode": "lecs107"
      },
      {
        "number": 8,
        "title": "Functions and User-Defined Functions",
        "pdfCode": "lecs108"
      },
      {
        "number": 9,
        "title": "Lists",
        "pdfCode": "lecs109"
      },
      {
        "number": 10,
        "title": "Tuples and Dictionaries",
        "pdfCode": "lecs110"
      },
      {
        "number": 11,
        "title": "File Handling",
        "pdfCode": "lecs111"
      },
      {
        "number": 12,
        "title": "Database Connectivity",
        "pdfCode": "lecs112"
      },
      {
        "number": 13,
        "title": "Project Work",
        "pdfCode": "lecs113"
      }
    ]
  },
  {
    "id": "leec1",
    "title": "Introductory Macroeconomics",
    "classNum": 12,
    "subject": "Economics",
    "cover": "/covers/economics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Macroeconomics: An Introduction",
        "pdfCode": "leec101"
      },
      {
        "number": 2,
        "title": "National Income Accounting",
        "pdfCode": "leec102"
      },
      {
        "number": 3,
        "title": "Money and Banking",
        "pdfCode": "leec103"
      },
      {
        "number": 4,
        "title": "Income Determination",
        "pdfCode": "leec104"
      },
      {
        "number": 5,
        "title": "The Government: Budget and the Economy",
        "pdfCode": "leec105"
      },
      {
        "number": 6,
        "title": "Balance of Payments",
        "pdfCode": "leec106"
      }
    ]
  },
  {
    "id": "leec2",
    "title": "Introductory Microeconomics",
    "classNum": 12,
    "subject": "Economics",
    "cover": "/covers/economics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Micro Economics: An Introduction",
        "pdfCode": "leec201"
      },
      {
        "number": 2,
        "title": "Consumer Equilibrium and Demand",
        "pdfCode": "leec202"
      },
      {
        "number": 3,
        "title": "Producer Behaviour and Supply",
        "pdfCode": "leec203"
      },
      {
        "number": 4,
        "title": "Forms of Market and Price Determination",
        "pdfCode": "leec204"
      },
      {
        "number": 5,
        "title": "Simple Applications of Tools of Demand and Supply",
        "pdfCode": "leec205"
      }
    ]
  },
  {
    "id": "lefl1",
    "title": "Flamingo",
    "classNum": 12,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Last Lesson",
        "pdfCode": "lefl101"
      },
      {
        "number": 2,
        "title": "Lost Spring",
        "pdfCode": "lefl102"
      },
      {
        "number": 3,
        "title": "Deep Water",
        "pdfCode": "lefl103"
      },
      {
        "number": 4,
        "title": "The Rattrap",
        "pdfCode": "lefl104"
      },
      {
        "number": 5,
        "title": "Indigo",
        "pdfCode": "lefl105"
      },
      {
        "number": 6,
        "title": "Going Places",
        "pdfCode": "lefl106"
      },
      {
        "number": 7,
        "title": "My Mother at Sixty-six",
        "pdfCode": "lefl107"
      },
      {
        "number": 8,
        "title": "Keeping Quiet",
        "pdfCode": "lefl108"
      },
      {
        "number": 9,
        "title": "A Thing of Beauty",
        "pdfCode": "lefl111"
      },
      {
        "number": 10,
        "title": "A Roadside Stand",
        "pdfCode": "lefl112"
      },
      {
        "number": 11,
        "title": "Aunt Jennifer's Tigers",
        "pdfCode": "lefl113"
      }
    ]
  },
  {
    "id": "lekl1",
    "title": "Kaliedoscope",
    "classNum": 12,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Lament",
        "pdfCode": "lekl101"
      },
      {
        "number": 2,
        "title": "A Pair of Mustachios",
        "pdfCode": "lekl102"
      },
      {
        "number": 3,
        "title": "The Rocking-horse Winner",
        "pdfCode": "lekl103"
      },
      {
        "number": 4,
        "title": "The Adventure of the Three Garridebs",
        "pdfCode": "lekl104"
      },
      {
        "number": 5,
        "title": "Pappachi's Moth",
        "pdfCode": "lekl105"
      },
      {
        "number": 6,
        "title": "The Third and Final Continent",
        "pdfCode": "lekl111"
      },
      {
        "number": 7,
        "title": "Glory at Twilight",
        "pdfCode": "lekl112"
      },
      {
        "number": 8,
        "title": "The Luncheon",
        "pdfCode": "lekl113"
      },
      {
        "number": 9,
        "title": "The Peacock",
        "pdfCode": "lekl114"
      },
      {
        "number": 10,
        "title": "Let Me Not to the Marriage of True Minds",
        "pdfCode": "lekl115"
      },
      {
        "number": 11,
        "title": "Coming",
        "pdfCode": "lekl116"
      },
      {
        "number": 12,
        "title": "Telephone Conversation",
        "pdfCode": "lekl117"
      },
      {
        "number": 13,
        "title": "The World Is Too Much with Us",
        "pdfCode": "lekl118"
      },
      {
        "number": 14,
        "title": "Mother Tongue",
        "pdfCode": "lekl121"
      }
    ]
  },
  {
    "id": "levt1",
    "title": "Vistas",
    "classNum": 12,
    "subject": "English",
    "cover": "/covers/english.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Third Level",
        "pdfCode": "levt101"
      },
      {
        "number": 2,
        "title": "The Tiger King",
        "pdfCode": "levt102"
      },
      {
        "number": 3,
        "title": "Journey to the End of the Earth",
        "pdfCode": "levt103"
      },
      {
        "number": 4,
        "title": "The Enemy",
        "pdfCode": "levt104"
      },
      {
        "number": 5,
        "title": "On the Face of It",
        "pdfCode": "levt105"
      },
      {
        "number": 6,
        "title": "Memories of Childhood",
        "pdfCode": "levt106"
      }
    ]
  },
  {
    "id": "lefa1",
    "title": "An Introduction to Indian Art Part-II",
    "classNum": 12,
    "subject": "Fine Art",
    "cover": "/covers/fine-art.png",
    "chapters": [
      {
        "number": 1,
        "title": "Pre-Historic Cave Paintings",
        "pdfCode": "lefa101"
      },
      {
        "number": 2,
        "title": "Indus Valley Civilisation",
        "pdfCode": "lefa102"
      },
      {
        "number": 3,
        "title": "Buddhist and Jain Art",
        "pdfCode": "lefa103"
      },
      {
        "number": 4,
        "title": "Cave Paintings of India",
        "pdfCode": "lefa104"
      },
      {
        "number": 5,
        "title": "Temple Architecture",
        "pdfCode": "lefa105"
      },
      {
        "number": 6,
        "title": "Sculpture",
        "pdfCode": "lefa106"
      },
      {
        "number": 7,
        "title": "Bronze and Metal Art",
        "pdfCode": "lefa107"
      },
      {
        "number": 8,
        "title": "Indian Painting",
        "pdfCode": "lefa108"
      }
    ]
  },
  {
    "id": "legy1",
    "title": "Fundamentals of Human Geography",
    "classNum": 12,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "Human Geography: Nature and Scope",
        "pdfCode": "legy101"
      },
      {
        "number": 2,
        "title": "The World Population",
        "pdfCode": "legy102"
      },
      {
        "number": 3,
        "title": "Migration",
        "pdfCode": "legy103"
      },
      {
        "number": 4,
        "title": "Human Development",
        "pdfCode": "legy104"
      },
      {
        "number": 5,
        "title": "Primary Activities",
        "pdfCode": "legy105"
      },
      {
        "number": 6,
        "title": "Secondary Activities",
        "pdfCode": "legy106"
      },
      {
        "number": 7,
        "title": "Tertiary and Quaternary Activities",
        "pdfCode": "legy107"
      },
      {
        "number": 8,
        "title": "Transport and Communication",
        "pdfCode": "legy108"
      }
    ]
  },
  {
    "id": "legy2",
    "title": "India -People And Economy",
    "classNum": 12,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "People",
        "pdfCode": "legy201"
      },
      {
        "number": 2,
        "title": "Human Development",
        "pdfCode": "legy202"
      },
      {
        "number": 3,
        "title": "Human Settlements",
        "pdfCode": "legy203"
      },
      {
        "number": 4,
        "title": "Land Resources and Land Use",
        "pdfCode": "legy204"
      },
      {
        "number": 5,
        "title": "Water Resources",
        "pdfCode": "legy205"
      },
      {
        "number": 6,
        "title": "Mineral and Energy Resources",
        "pdfCode": "legy206"
      },
      {
        "number": 7,
        "title": "Agricultural Geography",
        "pdfCode": "legy207"
      },
      {
        "number": 8,
        "title": "Manufacturing Industries",
        "pdfCode": "legy208"
      },
      {
        "number": 9,
        "title": "Planning and Sustainable Development",
        "pdfCode": "legy209"
      }
    ]
  },
  {
    "id": "legy3",
    "title": "Practical Work in Geography Part II",
    "classNum": 12,
    "subject": "Geography",
    "cover": "/covers/geography.png",
    "chapters": [
      {
        "number": 1,
        "title": "Map Reading",
        "pdfCode": "legy301"
      },
      {
        "number": 2,
        "title": "Data Collection and Presentation",
        "pdfCode": "legy302"
      },
      {
        "number": 3,
        "title": "Data Analysis and Interpretation",
        "pdfCode": "legy303"
      },
      {
        "number": 4,
        "title": "Practical Work in Geography",
        "pdfCode": "legy304"
      }
    ]
  },
  {
    "id": "lehs1",
    "title": "Themes in Indian History-I",
    "classNum": 12,
    "subject": "History",
    "cover": "/covers/history.png",
    "chapters": [
      {
        "number": 1,
        "title": "Bricks, Beads and Bones",
        "pdfCode": "lehs101"
      },
      {
        "number": 2,
        "title": "Kinship, Caste and Class",
        "pdfCode": "lehs102"
      },
      {
        "number": 3,
        "title": "Fiscal Decentralisation",
        "pdfCode": "lehs103"
      },
      {
        "number": 4,
        "title": "An Imperial Capital: Vijayanagara",
        "pdfCode": "lehs104"
      }
    ]
  },
  {
    "id": "lehs2",
    "title": "Themes in Indian History-II",
    "classNum": 12,
    "subject": "History",
    "cover": "/covers/history.png",
    "chapters": [
      {
        "number": 1,
        "title": "Bricks, Beads and Bones",
        "pdfCode": "lehs201"
      },
      {
        "number": 2,
        "title": "Kinship, Caste and Class",
        "pdfCode": "lehs202"
      },
      {
        "number": 3,
        "title": "Fiscal Decentralisation",
        "pdfCode": "lehs203"
      },
      {
        "number": 4,
        "title": "An Imperial Capital: Vijayanagara",
        "pdfCode": "lehs204"
      }
    ]
  },
  {
    "id": "lehs3",
    "title": "Themes in Indian History-III",
    "classNum": 12,
    "subject": "History",
    "cover": "/covers/history.png",
    "chapters": [
      {
        "number": 1,
        "title": "Bricks, Beads and Bones",
        "pdfCode": "lehs301"
      },
      {
        "number": 2,
        "title": "Kinship, Caste and Class",
        "pdfCode": "lehs302"
      },
      {
        "number": 3,
        "title": "Fiscal Decentralisation",
        "pdfCode": "lehs303"
      },
      {
        "number": 4,
        "title": "An Imperial Capital: Vijayanagara",
        "pdfCode": "lehs304"
      }
    ]
  },
  {
    "id": "lehe1",
    "title": "Human Ecology and Family Sciences Part I",
    "classNum": 12,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Human Ecology",
        "pdfCode": "lehe101"
      },
      {
        "number": 2,
        "title": "Family as a Social Institution",
        "pdfCode": "lehe102"
      },
      {
        "number": 3,
        "title": "Marriage as a Social Institution",
        "pdfCode": "lehe103"
      },
      {
        "number": 4,
        "title": "Food and Nutrition",
        "pdfCode": "lehe104"
      },
      {
        "number": 5,
        "title": "Shelter",
        "pdfCode": "lehe105"
      },
      {
        "number": 6,
        "title": "Clothing",
        "pdfCode": "lehe106"
      },
      {
        "number": 7,
        "title": "Development of Human Ecology",
        "pdfCode": "lehe107"
      }
    ]
  },
  {
    "id": "lehe2",
    "title": "Human Ecology and Family Sciences Part II",
    "classNum": 12,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Gender Issues",
        "pdfCode": "lehe201"
      },
      {
        "number": 2,
        "title": "Education",
        "pdfCode": "lehe202"
      },
      {
        "number": 3,
        "title": "Health",
        "pdfCode": "lehe203"
      },
      {
        "number": 4,
        "title": "Population",
        "pdfCode": "lehe204"
      },
      {
        "number": 5,
        "title": "Environmental Concerns",
        "pdfCode": "lehe205"
      },
      {
        "number": 6,
        "title": "Social Change",
        "pdfCode": "lehe206"
      },
      {
        "number": 7,
        "title": "Contemporary Challenges",
        "pdfCode": "lehe207"
      }
    ]
  },
  {
    "id": "lehh1",
    "title": "Manav Paristhitik avam Parivar Vigyan Bhag 1",
    "classNum": 12,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introduction to Human Ecology",
        "pdfCode": "lehh101"
      },
      {
        "number": 2,
        "title": "Family as a Social Institution",
        "pdfCode": "lehh102"
      },
      {
        "number": 3,
        "title": "Marriage as a Social Institution",
        "pdfCode": "lehh103"
      },
      {
        "number": 4,
        "title": "Food and Nutrition",
        "pdfCode": "lehh104"
      },
      {
        "number": 5,
        "title": "Shelter",
        "pdfCode": "lehh105"
      },
      {
        "number": 6,
        "title": "Clothing",
        "pdfCode": "lehh106"
      },
      {
        "number": 7,
        "title": "Development of Human Ecology",
        "pdfCode": "lehh107"
      }
    ]
  },
  {
    "id": "lehh2",
    "title": "Manav Paristhitiki avam Parivar Vigyan Bhag 2",
    "classNum": 12,
    "subject": "Home Science",
    "cover": "/covers/home-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Gender Issues",
        "pdfCode": "lehh201"
      },
      {
        "number": 2,
        "title": "Education",
        "pdfCode": "lehh202"
      },
      {
        "number": 3,
        "title": "Health",
        "pdfCode": "lehh203"
      },
      {
        "number": 4,
        "title": "Population",
        "pdfCode": "lehh204"
      },
      {
        "number": 5,
        "title": "Environmental Concerns",
        "pdfCode": "lehh205"
      },
      {
        "number": 6,
        "title": "Social Change",
        "pdfCode": "lehh206"
      },
      {
        "number": 7,
        "title": "Contemporary Challenges",
        "pdfCode": "lehh207"
      }
    ]
  },
  {
    "id": "leip1",
    "title": "Informatics Practices",
    "classNum": 12,
    "subject": "Informatics Practices",
    "cover": "/covers/informatics-practices.png",
    "chapters": [
      {
        "number": 1,
        "title": "Computer Networks",
        "pdfCode": "leip101"
      },
      {
        "number": 2,
        "title": "Data Communication",
        "pdfCode": "leip102"
      },
      {
        "number": 3,
        "title": "Security of Computer",
        "pdfCode": "leip103"
      },
      {
        "number": 4,
        "title": "Data Handling Using Pandas",
        "pdfCode": "leip104"
      },
      {
        "number": 5,
        "title": "Introduction to NumPy",
        "pdfCode": "leip105"
      },
      {
        "number": 6,
        "title": "Database Concepts",
        "pdfCode": "leip106"
      },
      {
        "number": 7,
        "title": "Introduction to Structured Query Language",
        "pdfCode": "leip107"
      }
    ]
  },
  {
    "id": "lemh1",
    "title": "Mathematics Part-I",
    "classNum": 12,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Relations and Functions",
        "pdfCode": "lemh101"
      },
      {
        "number": 2,
        "title": "Inverse Trigonometric Functions",
        "pdfCode": "lemh102"
      },
      {
        "number": 3,
        "title": "Matrices",
        "pdfCode": "lemh103"
      },
      {
        "number": 4,
        "title": "Determinants",
        "pdfCode": "lemh104"
      },
      {
        "number": 5,
        "title": "Continuity and Differentiability",
        "pdfCode": "lemh105"
      },
      {
        "number": 6,
        "title": "Application of Derivatives",
        "pdfCode": "lemh106"
      }
    ]
  },
  {
    "id": "lemh2",
    "title": "Mathematics Part-II",
    "classNum": 12,
    "subject": "Mathematics",
    "cover": "/covers/mathematics.png",
    "chapters": [
      {
        "number": 7,
        "title": "Probability",
        "pdfCode": "lemh201"
      },
      {
        "number": 8,
        "title": "Application of Integrals",
        "pdfCode": "lemh202"
      },
      {
        "number": 9,
        "title": "Differential Equations",
        "pdfCode": "lemh203"
      },
      {
        "number": 10,
        "title": "Integrals",
        "pdfCode": "lemh204"
      },
      {
        "number": 11,
        "title": "Three Dimensional Geometry",
        "pdfCode": "lemh205"
      },
      {
        "number": 12,
        "title": "Linear Programming",
        "pdfCode": "lemh206"
      },
      {
        "number": 13,
        "title": "Probability",
        "pdfCode": "lemh207"
      }
    ]
  },
  {
    "id": "leph1",
    "title": "Physics Part-I",
    "classNum": 12,
    "subject": "Physics",
    "cover": "/covers/physics.png",
    "chapters": [
      {
        "number": 1,
        "title": "Electric Charges and Fields",
        "pdfCode": "leph101"
      },
      {
        "number": 2,
        "title": "Electrostatic Potential and Capacitance",
        "pdfCode": "leph102"
      },
      {
        "number": 3,
        "title": "Current Electricity",
        "pdfCode": "leph103"
      },
      {
        "number": 4,
        "title": "Moving Charges and Magnetism",
        "pdfCode": "leph104"
      },
      {
        "number": 5,
        "title": "Magnetism and Matter",
        "pdfCode": "leph105"
      },
      {
        "number": 6,
        "title": "Electromagnetic Induction",
        "pdfCode": "leph106"
      },
      {
        "number": 7,
        "title": "Alternating Current",
        "pdfCode": "leph107"
      },
      {
        "number": 8,
        "title": "Electromagnetic Waves",
        "pdfCode": "leph108"
      }
    ]
  },
  {
    "id": "leph2",
    "title": "Physics Part-II",
    "classNum": 12,
    "subject": "Physics",
    "cover": "/covers/physics.png",
    "chapters": [
      {
        "number": 9,
        "title": "Ray Optics and Optical Instruments",
        "pdfCode": "leph201"
      },
      {
        "number": 10,
        "title": "Ray Optics and Optical Instruments",
        "pdfCode": "leph202"
      },
      {
        "number": 11,
        "title": "Dual Nature of Radiation and Matter",
        "pdfCode": "leph203"
      },
      {
        "number": 12,
        "title": "Atoms",
        "pdfCode": "leph204"
      },
      {
        "number": 13,
        "title": "Nuclei",
        "pdfCode": "leph205"
      },
      {
        "number": 14,
        "title": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
        "pdfCode": "leph206"
      }
    ]
  },
  {
    "id": "leps1",
    "title": "Contemporary World Politics",
    "classNum": 12,
    "subject": "Political Science",
    "cover": "/covers/political-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "The Cold War Era",
        "pdfCode": "leps101"
      },
      {
        "number": 2,
        "title": "The End of Bipolarity",
        "pdfCode": "leps102"
      },
      {
        "number": 3,
        "title": "US Hegemony in World Politics",
        "pdfCode": "leps103"
      },
      {
        "number": 4,
        "title": "Alternative Centres of Power",
        "pdfCode": "leps104"
      },
      {
        "number": 5,
        "title": "Contemporary South Asia",
        "pdfCode": "leps105"
      },
      {
        "number": 6,
        "title": "International Organisations",
        "pdfCode": "leps106"
      },
      {
        "number": 7,
        "title": "Environmental Issues",
        "pdfCode": "leps107"
      }
    ]
  },
  {
    "id": "leps2",
    "title": "Politics in India Since Independence",
    "classNum": 12,
    "subject": "Political Science",
    "cover": "/covers/political-science.png",
    "chapters": [
      {
        "number": 1,
        "title": "Nations",
        "pdfCode": "leps201"
      },
      {
        "number": 2,
        "title": "India's External Relations",
        "pdfCode": "leps202"
      },
      {
        "number": 3,
        "title": "Challenge of Nation-Building",
        "pdfCode": "leps203"
      },
      {
        "number": 4,
        "title": "Era of One-Party Dominance",
        "pdfCode": "leps204"
      },
      {
        "number": 5,
        "title": "Politics of Planned Development",
        "pdfCode": "leps205"
      },
      {
        "number": 6,
        "title": "India's External Relations",
        "pdfCode": "leps206"
      },
      {
        "number": 7,
        "title": "Challenge to and Restoration of Congress System",
        "pdfCode": "leps207"
      },
      {
        "number": 8,
        "title": "Regional Aspirations",
        "pdfCode": "leps208"
      }
    ]
  },
  {
    "id": "lepy1",
    "title": "Psychology",
    "classNum": 12,
    "subject": "Psychology",
    "cover": "/covers/psychology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Variations in Psychological Attributes",
        "pdfCode": "lepy101"
      },
      {
        "number": 2,
        "title": "Self and Personality",
        "pdfCode": "lepy102"
      },
      {
        "number": 3,
        "title": "Meeting Life Challenges",
        "pdfCode": "lepy103"
      },
      {
        "number": 4,
        "title": "Psychological Disorders",
        "pdfCode": "lepy104"
      },
      {
        "number": 5,
        "title": "Therapeutic Approaches",
        "pdfCode": "lepy105"
      },
      {
        "number": 6,
        "title": "Attitude and Social Cognition",
        "pdfCode": "lepy106"
      },
      {
        "number": 7,
        "title": "Social Influence and Group Processes",
        "pdfCode": "lepy107"
      }
    ]
  },
  {
    "id": "lesy1",
    "title": "Indian Society",
    "classNum": 12,
    "subject": "Sociology",
    "cover": "/covers/sociology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Introducing Indian Society",
        "pdfCode": "lesy101"
      },
      {
        "number": 2,
        "title": "The Demographic Structure of the Indian Society",
        "pdfCode": "lesy102"
      },
      {
        "number": 3,
        "title": "Social Institutions: Continuity and Change",
        "pdfCode": "lesy103"
      },
      {
        "number": 4,
        "title": "Market as a Social Institution",
        "pdfCode": "lesy104"
      },
      {
        "number": 5,
        "title": "Patterns of Social Inequality and Exclusion",
        "pdfCode": "lesy105"
      },
      {
        "number": 6,
        "title": "The Challenges of Cultural Diversity",
        "pdfCode": "lesy106"
      },
      {
        "number": 7,
        "title": "Structural Change",
        "pdfCode": "lesy107"
      }
    ]
  },
  {
    "id": "lesy2",
    "title": "Social Change and Development in India",
    "classNum": 12,
    "subject": "Sociology",
    "cover": "/covers/sociology.png",
    "chapters": [
      {
        "number": 1,
        "title": "Structural Change",
        "pdfCode": "lesy201"
      },
      {
        "number": 2,
        "title": "Cultural Change",
        "pdfCode": "lesy202"
      },
      {
        "number": 3,
        "title": "The Story of Indian Democracy",
        "pdfCode": "lesy203"
      },
      {
        "number": 4,
        "title": "Change and Development in Rural Society",
        "pdfCode": "lesy204"
      },
      {
        "number": 5,
        "title": "Change and Development in Industrial Society",
        "pdfCode": "lesy205"
      },
      {
        "number": 6,
        "title": "Globalisation and Social Change",
        "pdfCode": "lesy206"
      },
      {
        "number": 7,
        "title": "Mass Media and Communication",
        "pdfCode": "lesy207"
      },
      {
        "number": 8,
        "title": "Social Movements",
        "pdfCode": "lesy208"
      }
    ]
  }
]

import { SOLUTIONS_CATALOG } from './solutions-catalog'

export const SOLUTIONS: Book[] = SOLUTIONS_CATALOG.map((b) => ({
  ...b,
  kind: 'solution' as const,
}))

export const CLASSES = Array.from({ length: 12 }, (_, i) => i + 1)

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export function toRoman(classNum: number): string {
  return ROMAN[classNum - 1] ?? String(classNum)
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id) ?? SOLUTIONS.find((b) => b.id === id)
}

export function getBooksByClass(classNum: number): Book[] {
  return BOOKS.filter((b) => b.classNum === classNum)
}

export function getSubjectsForClass(classNum: number): string[] {
  return [...new Set(getBooksByClass(classNum).map((b) => b.subject))]
}

export function getAllSubjects(): string[] {
  return [...new Set(BOOKS.map((b) => b.subject))]
}

export function getBooksBySubject(subject: string): Book[] {
  return BOOKS.filter((b) => b.subject === subject)
}

export function getSolution(id: string): Book | undefined {
  return SOLUTIONS.find((b) => b.id === id)
}

export function getSolutionsByClass(classNum: number): Book[] {
  return SOLUTIONS.filter((b) => b.classNum === classNum)
}

export function getSolutionsBySubject(subject: string): Book[] {
  return SOLUTIONS.filter((b) => b.subject === subject)
}

export function getAllSolutionSubjects(): string[] {
  return [...new Set(SOLUTIONS.map((b) => b.subject))]
}

export function getSubjectsForSolutionClass(classNum: number): string[] {
  return [...new Set(getSolutionsByClass(classNum).map((b) => b.subject))]
}

export function getSolutionDriveUrl(bookId: string, chapterIdx: number): string | undefined {
  // Return local generated solution PDF path in public/solutions-pdf/
  const book = SOLUTIONS.find((b) => b.id === bookId)
  if (!book) return undefined
  const chapter = book.chapters[chapterIdx]
  return chapter ? `/solutions-pdf/${chapter.pdfCode}.pdf` : undefined
}

export function findBookByPdfCode(pdfCode: string): { book: Book; chapter: Chapter } | undefined {
  for (const book of BOOKS) {
    const chapter = book.chapters.find((c) => c.pdfCode === pdfCode)
    if (chapter) return { book, chapter }
  }
  for (const book of SOLUTIONS) {
    const chapter = book.chapters.find((c) => c.pdfCode === pdfCode)
    if (chapter) return { book, chapter }
  }
  return undefined
}

const SOLUTION_SHARD_BASES = [
  '/solutions-pdf-1',
  '/solutions-pdf-2',
  '/solutions-pdf-3',
  '/solutions-pdf-4',
] as const

let _sortedSolutionCodes: string[] | null = null
function getSortedSolutionCodes(): string[] {
  if (_sortedSolutionCodes) return _sortedSolutionCodes
  _sortedSolutionCodes = SOLUTIONS.flatMap((b) => b.chapters.map((c) => c.pdfCode)).sort()
  return _sortedSolutionCodes
}

export function getSolutionPdfUrl(pdfCode: string): string {
  const codes = getSortedSolutionCodes()
  const idx = codes.indexOf(pdfCode)
  if (idx === -1) return `${SOLUTION_SHARD_BASES[0]}/${pdfCode}.pdf`
  return `${SOLUTION_SHARD_BASES[idx % SOLUTION_SHARD_BASES.length]}/${pdfCode}.pdf`
}
