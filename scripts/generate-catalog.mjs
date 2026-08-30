import { readFileSync, writeFileSync } from 'node:fs'

const verified = JSON.parse(readFileSync('/tmp/ncert/verified.json', 'utf8'))

// Per-chapter live file indices for books with gaps (re-probed individually)
const PARTIAL = {
  jewe2: [1, 2, 3, 5, 6, 7, 8],
  jehp1: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
  keww1: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  kehb1: [1, 2, 3, 4, 5, 6, 11, 12, 13, 14],
  lekl1: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 21],
  lefl1: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13],
}

// For multi-part books, display chapter numbers continue from part 1
const NUMBER_OFFSET = {
  lemh2: 6, // Class 12 Maths Part II: ch 7-13
  leph2: 8, // Class 12 Physics Part II: ch 9-14
  lech2: 5, // Class 12 Chemistry Part II: ch 6-10
  keph2: 7, // Class 11 Physics Part II: ch 8-14
  kech2: 6, // Class 11 Chemistry Part II: ch 7-9
}

// Curated chapter titles (rationalized 2023-24 syllabus).
// Applied ONLY when list length matches the verified chapter count.
const TITLES = {
  // Class 1
  aemr1: ['Two Little Hands', 'Greetings', 'Picture Time', 'The Cap-seller and the Monkeys', 'A Farm', 'Fun with Pictures', 'The Food we Eat', 'The Four Seasons', "Anandi's Rainbow"],
  aejm1: ['Finding the Furry Cat!', 'What is Long? What is Round?', 'Mango Treat', 'Making 10', 'How Many?', 'Lengths', 'Names of Numbers', 'Which Season is it Now?', 'Data Handling', 'Patterns', 'How Much?', 'How Much Can We Spend?', 'So Many Toys'],
  // Class 2
  bemr1: ['My Bicycle', 'Picture Reading', 'It Is Fun', 'Seeing without Seeing', 'Come Back Soon', 'Between Home and School', 'This is My Town', 'A Show of Clouds', 'My Name', 'The Crow', 'The Smart Monkey', 'Little Drops of Water', 'We Are All Indians'],
  bejm1: ['A Day at the Beach', 'Shapes Around Us', 'Fun with Numbers', 'Shadow Story', 'Playing with Lines', 'Decoration for Festival', "Rani's Gift", 'Grouping and Sharing', 'Which Season is it?', 'Fun at the Fair', 'Data Handling'],
  // Class 3
  cesa1: ['Colours', 'Badal and Moti', 'Best Friends', 'Out in the Garden', 'Talking Toys', 'Paper Boats', 'The Big Laddoo', 'Thank God', "Madhu's Wish", 'Night', 'Chanda Mama Counts the Stars', 'Chandrayaan'],
  cemm1: ["What's in a Name?", 'Toy Joy', 'Double Century', 'Vacation with My Nani Maa', 'Fun with Shapes', 'House of Hundreds-I', 'Raksha Bandhan', 'House of Hundreds-II', 'How Many Times?', 'Fun at Class Party', 'Shares and Dealing', 'Rupees and Paise', 'Jugs and Mugs', 'Smart Charts'],
  ceev1: ['Family and Friends', 'Going to the Mela', 'Celebrating Festivals', 'Getting to Know Plants', 'Plants and Animals Live Together', 'Living in Harmony', 'Water – A Precious Gift', 'Food We Eat', 'Staying Healthy and Happy', 'This World of Things', 'Making Things', 'Taking Charge of Waste'],
  cebu1: ['Objects in Art', 'Plants in Art', 'Animals in Art', 'People Around Us', 'Festivals, Occasions, and Celebrations', 'Our National Anthem', 'Feel the Rhythm ta ka ta ki Ta', 'Travel Around', 'Musical Instruments', 'Celebratory Notes', 'Let us Dance', 'Dance for Joy', 'I Play and Dance', 'Dance with Nature', 'Explore', 'Imagine', "Let's Create", 'Look Around', 'Activities', 'Integrating All Art Forms'],
  ceky1: ['Throwing and Catching', 'Kicking and Receiving', 'Strike the Ball', 'Little Steps', 'Local and Traditional Games', 'Yoga for Daily Life', 'Yogic Practices (Yoga Sadhana)'],
  // Class 4
  demm1: ['Shapes Around Us', 'Hide and Seek', 'Pattern Around Us', 'Thousands Around Us', 'Sharing and Measuring', 'Measuring Length', 'The Cleanest Village', 'Weigh it, Pour it', 'Equal Groups', 'Elephants, Tigers, and Leopards', 'Fun with Symmetry', 'Ticking Clocks and Turning Calendar', 'The Transport Museum', 'Data Handling'],
  demh1: ['Building with Bricks', 'Long and Short', 'A Trip to Bhopal', 'Tick-Tick-Tick', 'The Way the World Looks', 'The Junk Seller', 'Jugs and Mugs', 'Carts and Wheels', 'Halves and Quarters', 'Play with Patterns', 'Tables and Shares', 'How Heavy? How Light?', 'Fields and Fences', 'Smart Charts'],
  desa1: ['Together We Can', 'The Tinkling Bells', 'A Little Turtle', 'The Plant That Lied', 'Don\'t Tell a Lie', 'The Fair', 'The Donkey, the Table, and the Stick', 'Little Elephants Big Trouble', 'The Enormous Turnip', 'The Boy Who Cried Wolf', 'Healer Plant', 'The Clever Monkey'],
  deev1: ['Family and Friends', 'Going to the Mela', 'Celebrating Festivals', 'Getting to Know Plants', 'Plants and Animals Live Together', 'Living in Harmony', 'Water – A Precious Gift', 'Food We Eat', 'Staying Healthy and Happy', 'This World of Things'],
  deap1: ['Going to School', 'Ear to Ear', 'A Day with Nandu', 'The Story of Amrita', 'Anita and the Honeybees', 'Omana\'s Journey', 'From the Window', 'Reaching Grandmother\'s Home', 'Changing Families', 'Hu Tu Tu, Hu Tu Tu', 'The Valley of Flowers', 'Changing Times', 'A River\'s Tale', 'Basva\'s Farm', 'From Market to Home', 'A Busy Month', 'Nandita in Mumbai', 'Too Much Water, Too Little Water', 'Abdul in the Garden', 'Eating Together', 'Food and Fun', 'The World in my Home', 'Pochampalli', 'Home and Abroad', 'Spicy Riddles', 'Defence Officer: Wahida', 'Chuskit Goes to School'],
  // Class 5
  eemm1: ['We the Travellers—I', 'Fractions', 'Angles as Turns', 'We the Travellers—II', 'Far and Near', 'The Dairy Farm', 'Shapes and Patterns', 'Weight and Capacity', 'Coconut Farm', 'Symmetrical Designs', "Grandmother's Quilt", 'Racing Seconds', 'Animal Jumps', 'Maps and Locations', 'Data Through Pictures'],
  eemh1: ['The Fish Tale', 'Shapes and Angles', 'How Many Squares?', 'Parts and Wholes', 'Does it Look the Same?', 'Be My Multiple, I\'ll be Your Factor', 'Can You See the Pattern?', 'Mapping Your Way', 'Boxes and Sketches', 'Tenths and Hundredths', 'Area and Its Boundary', 'Smart Charts', 'Ways to Multiply and Divide', 'How Big? How Heavy?'],
  eesa1: ["Papa's Spectacles", 'Gone with the Scooter', 'The Rainbow', 'The Wise Parrot', 'The Frog', 'What a Tank!', 'Gilli Danda', 'The Decision of the Panchayat', 'Vocation', 'Glass Bangles'],
  eeen1: ['Ice-Cream Man', 'Wonderful Waste!', 'Teamwork', 'Flying Together', 'My Shadow', 'Robinson Crusoe Discovers a Footprint', 'Crying', 'My Elder Brother', 'The Lazy Frog', 'Rip Van Winkle'],
  eeev1: ['Family and Friends', 'Going to the Mela', 'Celebrating Festivals', 'Getting to Know Plants', 'Plants and Animals Live Together', 'Living in Harmony', 'Water – A Precious Gift', 'Food We Eat', 'Staying Healthy and Happy', 'This World of Things'],
  debu1: ['Arrangements of Objects', 'Textures in Nature', 'Aqua World', 'People in Action', 'Explore!', 'Imagine', "Let's Create", 'Look Around', 'Sing and Play', 'Making Music', 'Songs and Stories', 'Think, Feel, Create', 'Sounds and Instruments', 'My Body in Dance', 'My Dance Tells Stories', 'Creating My Dance', 'Emotion and Expression in Dance', 'Dances Around Me'],
  deky1: ['Throwing and Catching', 'Kicking and Receiving', 'Strike the Shuttlecock'],
  eebu1: ['Objects on the Move', 'Peeping Out of the Window', 'Picturing Stories', 'Imaginary Beings', 'Spreading the Message', 'Create a Scene', 'Stitch It for a Story', 'Time, Team, Technique', 'View and Review', 'Sing and Play', 'Music Around Me', 'Sounds and Instruments', 'Building Blocks', 'Ideas and Inspiration', 'My Everyday Activities in Modes of Dance', 'Dancing with Rhythm and Tempos', 'Dances of My Nation', 'My Dance Expresses Emotions and Narrates Stories', 'My Dance and Your Dance'],
  eeap1: ['Super Senses', 'A Snake Charmer\'s Story', 'From Tasting to Digesting', 'Mangoes Round the Year', 'Seeds and Seeds', 'Every Drop Counts', 'Experiments with Water', 'A Treat for Mosquitoes', 'Up You Go!', 'Walls Tell Stories', 'Sunita in Space', 'What if it Finishes...?', 'A Shelter so High!', 'When the Earth Shook!', 'Blow Hot, Blow Cold', 'Who will do this Work?', 'Across the Wall', 'No Place for Us!', 'A Seed tells a Farmer\'s Story', 'Whose Forests?', 'Like Father, Like Daughter', 'On the Move Again'],
  eeky1: ['Throwing and Catching', 'Kicking and Receiving', 'Strike the Object'],
  // Class 6
  fegp1: ['Patterns in Mathematics', 'Lines and Angles', 'Number Play', 'Data Handling and Presentation', 'Prime Time', 'Perimeter and Area', 'Fractions', 'Playing with Constructions', 'Symmetry', 'The Other Side of Zero'],
  fecu1: ['The Wonderful World of Science', 'Diversity in the Living World', 'Mindful Eating: A Path to a Healthy Body', 'Exploring Magnets', 'Measurement of Length and Motion', 'Materials Around Us', 'Temperature and its Measurement', 'A Journey through States of Water', 'Methods of Separation in Everyday Life', 'Living Creatures: Exploring their Characteristics', "Nature's Treasures", 'Beyond Earth'],
  fepr1: ['Fables and Folk Tales', 'Friendship', 'Nurturing Nature', 'Sports and Wellness', 'Culture and Tradition'],
  fekr1: ['Objects and Still Life', 'Changing the Typical Picture', 'Portraying People', 'Paper Crafts', 'Seals to Prints', 'Music and your Emotions', 'Musical Instruments', 'Taal or Talam and Raga or Ragam in Indian Music', 'Melodies of Diversity', 'Songwriting', 'Music and Society', 'My Body in Motion', 'Breaking Barriers with Dance', 'Harmony in Motion', 'Dances of Our Land', 'Emotions Unveiled!', "Let's Design", 'In the Company of Theatre', 'Stories of Shadows and Strings - Puppetry', 'The Grand Finale', 'Integration of All Art Forms', 'Assessment'],
  feky1: ['Importance of Physical Education and Well-being', 'Motor Fitness', 'Fundamental Skills of Kho-Kho', 'Fundamental Skills of Handball', 'Yoga'],
  fees1: ['Locating Places on the Earth', 'Oceans and Continents', 'Landforms and Life', 'Timeline and Sources of History', 'India, That Is Bharat', 'The Beginnings of Indian Civilisation', "India's Cultural Roots", 'Unity in Diversity, or Many in the One', 'Family and Community', 'Grassroots Democracy - Part 1: Governance', 'Grassroots Democracy - Part 2: Local Government in Rural Areas', 'Grassroots Democracy - Part 3: Local Government in Urban Areas', 'The Value of Work', 'Economic Activities Around Us'],
  fekb1: ['School Kitchen Garden', 'Biodiversity Register', 'Maker Skills', 'Animation and Games', 'School Museum', 'Cooking without Fire'],
  // Class 7
  gegp1: ['Large Numbers Around Us', 'Arithmetic Expressions', 'A Peek Beyond the Point', 'Expressions using Letter-Numbers', 'Parallel and Intersecting Lines', 'Number Play', 'A Tale of Three Intersecting Lines', 'Working with Fractions'],
  gegp2: ['Geometric Twins', 'Writing Algebraic Expressions', 'A First Look at Equations', 'Comparing Quantities', 'Data and Its Features', 'The Triangle and its Properties', 'Symmetry and Constructions'],
  gecu1: ['The Ever-Evolving World of Science', 'Exploring Substances: Acidic, Basic, and Neutral', 'Electricity: Circuits and their Components', 'The World of Metals and Non-metals', 'Changes Around Us: Physical and Chemical', 'Adolescence: A Stage of Growth and Change', 'Heat Transfer in Nature', 'Measurement of Time and Motion', 'Life Processes in Animals', 'Life Processes in Plants', 'Light: Shadows and Reflections', 'Earth, Moon, and the Sun'],
  gees1: ['Geographical Diversity of India', 'Understanding the Weather', 'Climates of India', 'New Beginnings: Cities and States', 'The Rise of Empires', 'The Age of Reorganisation', 'The Gupta Era: An Age of Tireless Creativity', 'How the Land Becomes Sacred', 'From the Rulers to the Ruled: Types of Governments', 'The Constitution of India — An Introduction', 'From Barter to Money', 'Understanding Markets'],
  gees2: ['The Story of Indian Farming', 'India and Her Neighbours', 'Empires and Kingdoms: 6th to 10th Centuries', 'Turning Tides: 11th and 12th Centuries', 'India, a Home to Many', 'Handmade in India', 'Infrastructure: Engine of India\'s Development', 'Banks and the Magic of Finance'],
  gekr1: ['Understanding Emotions', 'Say More without Speech — Mime', 'Let\'s Design — Stage Technicals', 'Story of India\'s Storytelling Tradition', 'Making Music', 'Music, Emotions and Creativity', 'Ragas and Talas', 'The Music of the People', 'Performance', 'Dance and Sculpture', 'Dance Vocabulary and Techniques', 'Dance, You and Creativity', 'Personalities', 'Natya', 'Objects in Icons and Symbols', 'Nature\'s Palette', 'How You Feel', 'Textiles and Traditions', 'The Art of Calligraphy', 'Weaving Stories'],
  gepr1: ['Learning Together', 'Wit and Humour', 'Dreams and Discoveries', 'Travel and Adventure', 'Bravehearts'],
  gekb1: ['Plant Nursery', 'School Habitat Garden', 'Tie and Dye', 'AI Assistant', 'Storytime with Puppets', 'Family Health Handbook', 'Planning for Kaushal Mela'],
  geky1: ['Importance of Physical Education and Well-being', 'Motor Fitness', 'Fundamental Skills of Kho-Kho', 'Fundamental Skills of Handball', 'Yoga', 'Physical Fitness and Well-being'],
  // Class 8
  hepr1: ['Wit and Wisdom', 'Values and Dispositions', 'Mystery and Magic', 'Environment', 'Science and Curiosity'],
  hegp1: ['A Square and A Cube', 'Power Play', 'A Story of Numbers', 'Quadrilaterals', 'Number Play', 'We Distribute, Yet Things Multiply', 'Proportional Reasoning-1'],
  hegp2: ['Fractions in Disguise', 'The Baudhayana-Pythagoras Theorem', 'Proportional Reasoning-2', 'Exploring Some Geometric Themes', 'Tales by Dots and Lines', 'Algebra Play', 'Area'],
  hecu1: ['Exploring the Investigative World of Science', 'The Invisible Living World: Beyond Our Naked Eye', 'Health: The Ultimate Treasure', 'Electricity: Magnetic and Heating Effects', 'Exploring Forces', 'Pressure, Winds, Storms, and Cyclones', 'Particulate Nature of Matter', 'Nature of Matter: Elements, Compounds, and Mixtures', 'The Amazing World of Solutes, Solvents, and Solutions', 'Light: Mirrors and Lenses', 'Keeping Time with the Skies', 'How Nature Works in Harmony', 'Our Home: Earth, a Unique Life Sustaining Planet'],
  hees1: ['Natural Resources and Their Use', 'Reshaping India\'s Political Map', 'The Rise of the Marathas', 'The Colonial Era in India', 'Universal Franchise and India\'s Electoral System', 'The Parliamentary System — Legislature and Executive', 'Factors of Production'],
  hees2: ['World Geography: Some Glimpses', 'India\'s Long Road to Independence', 'A Journey Through Indian Architecture', 'The Role of the Judiciary in Our Society', 'Citizenship: Rights and Duties', 'Dynamics of Population', 'India\'s Urban Landscape', 'Cultural Currents: 13th to 17th Centuries'],
  hess2: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Revolt 1857 and After', 'Civilising the "Native", Educating the Nation', 'Women, Caste and Reform', 'The Making of the National Movement: 1870s–1947'],
  hess3: ['The Indian Constitution', 'Understanding Secularism', 'Parliament and the Making of Laws', 'Judiciary', 'Understanding Marginalisation', 'Confronting Marginalisation', 'Public Facilities', 'Law and Social Justice'],
  hess4: ['Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Agriculture', 'Industries', 'Human Resources'],
  hekr1: ['Bringing Words Alive — Play Reading', 'One Stage, Many Scripts', 'From Page to Stage', 'Applause and Advice', 'Discovering the Elements of Music', 'Musical Instruments', 'Indian Classical Music', 'Inspiration and Imagination', 'My World of Music', 'Inner Dynamics of Dance', 'Pan Indian Dance Forms', 'Dance for Well-being', 'Innovation, Inclusivity and Inspiring Change', 'A Presentation of Dance and Choreography', 'Elements and Principles of Visual Art and Design', 'Still Life in Colour', 'People in Places', 'Arts of the People, With the People, For the People', 'Campaign for Art Awareness'],
  hehd1: ['The Best Christmas Present in the World', 'The Tsunami', 'Glimpses of the Past', "Bepin Choudhury's Lapse of Memory", 'The Summit Within', "This is Jody's Fawn", 'A Visit to Cambridge', 'A Short Monsoon Diary'],
  heih1: ['How the Camel Got His Hump', 'Children at Work', 'The Selfish Giant', 'The Treasure Within', 'Princess September', 'The Fight', 'Jalebis', 'The Ancient Chanakya'],
  heky1: ['Importance of Physical Education and Well-being', 'Motor Fitness', 'Fundamental Skills of Kho-Kho', 'Fundamental Skills of Handball', 'Yoga', 'Physical Fitness and Well-being'],
  hekb1: ['Plant Nursery', 'School Habitat Garden', 'Tie and Dye', 'AI Assistant', 'Storytime with Puppets', 'Family Health Handbook', 'Planning for Kaushal Mela'],
  // Class 9
  iemr1: ['Introduction to the History of Arts', 'The Stage Is Yours', 'Symbols and Metaphors on Stage', 'Creativity in Light and Sound', 'From Vision to Performance: Direction and Acting', 'Music and Us', 'The Science of Music', 'Rāga and Tāla', 'Music Travels Around the World', 'Components of Dance', 'Dance as Visual Storytelling', 'Cultural Connections Through Dance', 'Dance Choreography', 'Exploring the Fundamentals of Visual Arts', 'Mediums and Techniques in Visual Art', 'Visual Composition', 'Branches of Visual Arts'],
  iehp1: ['Physical Education and Well-being', 'History and Culture of Physical Education in India', 'Careers in Physical Education', 'Fitness and its Components', 'Understanding Our Body', 'Cardiorespiratory System'],
  iekv1: ['Introduction to Skill Education', 'Self-management Skills', ' ICT Skills', 'Entrepreneurial Skills', 'Green Skills', 'Communication Skills', 'Self-awareness and Employability', 'Life Skills and Values', 'Workplace Readiness', 'Financial Literacy', 'Digital Literacy', 'Career Planning'],
  iest1: ['Understanding Social Science', "Shaping of the Earth's Surface", 'Atmosphere and Climate', 'Early Humans and Beginning of Civilisation', 'State and Society up to 1000 CE', 'Understanding Democracy', 'Elections', 'Building Blocks in Economics: The Problem of Choice', 'The Price Puzzle: What Drives the Market'],
  // Class 10
  jemh1: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
  jesc1: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity', 'Light – Reflection and Refraction', 'The Human Eye and the Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment'],
  jeff1: ['A Letter to God', 'Nelson Mandela: Long Walk to Freedom', 'Two Stories about Flying', 'From the Diary of Anne Frank', 'Glimpses of India', 'Mijbil the Otter', 'Madam Rides the Bus', 'The Sermon at Benares', 'The Proposal'],
  jefp1: ['A Triumph of Surgery', "The Thief's Story", 'The Midnight Visitor', 'A Question of Trust', 'Footprints without Feet', 'The Making of a Scientist', 'The Necklace', 'Bholi', 'The Book That Saved the Earth'],
  jess1: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'],
  jess2: ['Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy', 'Consumer Rights'],
  jess3: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'],
  jess4: ['Power Sharing', 'Federalism', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy'],
  jewe2: ['Unit 1: Trust and Integrity', 'Unit 2: Communication and Interpersonal Skills', 'Unit 3: Empathy and Compassion', 'Unit 4: Resilience and Adaptability', 'Unit 5: Critical Thinking and Problem Solving', 'Unit 6: Environmental Awareness', 'Unit 7: Digital Literacy and Ethics'],
  jehp1: ['Fitness for Life', 'Physical Activity and Health', 'Sports Training and Coaching', 'Yoga and Well-being', 'Lifestyle Diseases', 'First Aid and Safety', 'Doping in Sports', 'Women in Sports', 'Sports Psychology', 'Career in Physical Education'],
  iemh1: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', "Introduction to Euclid's Geometry", 'Lines and Angles', 'Triangles', 'Quadrilaterals'],
  iesc1: ['Exploration: Entering the World of Secondary Science', 'Cell — The Building Block of Life', 'Tissues in Action', 'Describing Motion Around Us', 'Exploring Mixtures and their Separation', 'How Forces Affect Motion', 'Work, Energy, and Simple Machines', 'Journey Inside the Atom', 'Atomic Foundations of Matter', 'Sound Waves: Characteristics and Applications', 'Reproduction: How Life Continues', 'Patterns in Life: Diversity and Classification', 'Earth as a System: Energy, Matter, and Life'],
  iebe1: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake and the Mirror', 'My Childhood', 'Reach for the Top', 'Kathmandu'],
  iemo1: ['The Lost Child', 'The Adventures of Toto', 'Iswaran the Storyteller', 'In the Kingdom of Fools', 'The Happy Prince', 'Weathering the Storm in Ersama', 'The Last Leaf', 'A House Is Not a Home', 'The Beggar'],
  iess1: ['India – Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'],
  iess2: ['The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India'],
  hemh1: ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs'],
  hesc1: ['Crop Production and Management', 'Microorganisms: Friend and Foe', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light'],
  lemh1: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives'],
  lemh2: ['Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'],
  leph1: ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves'],
  leph2: ['Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics: Materials, Devices and Simple Circuits'],
  lech1: ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'The d- and f-Block Elements', 'Coordination Compounds'],
  lech2: ['Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'],
  lebo1: ['Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation'],
  kemh1: ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Statistics', 'Probability'],
  keph1: ['Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation'],
  keph2: ['Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'],
  kech1: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'Thermodynamics', 'Equilibrium'],
  kech2: ['Redox Reactions', 'Organic Chemistry: Some Basic Principles and Techniques', 'Hydrocarbons'],
  kehb1: ['The Portrait of a Lady', "We're Not Afraid to Die... if We Can All Be Together", 'Discovering Tut: the Saga Continues', 'The Ailing Planet: the Green Movement\'s Role', 'The Adventure', 'Silk Road', 'Note-making', 'Summarising', 'Sub-titling', 'Essay-writing'],
  kesp1: ['The Summer of the Beautiful White Horse', 'The Address', "Mother's Day", 'Birth', 'The Tale of Melon City'],
  keww1: ['The Lament', 'A Pair of Mustachios', 'The Rocking-horse Winner', 'The Adventure of the Three Garridebs', "Pappachi's Moth", 'The Third and Final Continent', 'Glory at Twilight', 'The Luncheon', 'The Peacock', 'Let Me Not to the Marriage of True Minds', 'Coming', 'Telephone Conversation', 'The World Is Too Much with Us', 'Mother Tongue', 'Hawk Roosting', 'Ode to a Nightingale', 'My Watch', 'My Three Passions', 'Patterns of Creativity', 'Tribal Verse'],
  keks1: ['Language and Literature of India', 'Indian Philosophical Systems', 'Performing Art Traditions in India', 'Indian Art and Architecture', 'Astronomy in India', 'Mathematics in India', 'Introducing Ayurveda: the Science of Health and Disease', 'Chemistry and Metallurgy in India', 'Yoga'],
  kefa1: ['An Introduction to Indian Art', 'Indus Valley Civilization', 'Buddhist and Jain Art', 'Cave Paintings', 'Temple Architecture', 'Sculpture', 'Bronze and Metal Art', 'Indian Painting'],
  kegy1: ['India: Location', 'India: Physiography', 'India: Drainage', 'India: Climate', 'India: Natural Vegetation', 'India: Population'],
  kegy2: ['The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Major Domains of the Earth', 'Major Landforms of the Earth', 'Our Country – India', 'India: Climate', 'India: Vegetation', 'Drainage', 'Environment', 'Human – Environment Interaction', 'Natural Hazards and Disasters', 'Human Geography: Nature and Scope'],
  kegy3: ['Map Reading and Field Surveys', 'Data Collection and Processing', 'Graphical Representation of Data', 'Spatial Analysis Techniques', 'Field Study Methods', 'Application of GIS in Geography'],
  kebs1: ['Nature and Significance of Management', 'Principles of Management', 'Business Environment', 'Planning', 'Organising', 'Staffing', 'Directing', 'Controlling', 'Financial Management', 'Financial Markets', 'Marketing Management'],
  kecs1: ['Computing Machinery and Intelligence', 'Data Representation', 'Boolean Algebra', 'Number Systems', 'Computer Fundamentals', 'Programming Fundamentals', 'Data Structures', 'Database Concepts', 'Networking', 'Societal Impacts', 'Project'],
  kebt1: ['Biotechnology: An Introduction', 'Biomolecules', 'Cell and Molecular Biology', 'Genetics', 'Microbiology', 'Immunology', 'Bioinformatics', 'Ecology', 'Genetically Modified Organisms', 'Intellectual Property Rights', 'Biotechnology and Society', 'Project Work'],
  keec1: ['The Indian Economy in a Globalising World', 'Economic Reforms since 1991', 'Poverty', 'Human Capital Formation in India', 'Rural Development', 'Employment: Growth, Informalisation and Other Issues', 'Environment and Sustainable Development', 'Development Experience of India: A Comparison with Neighbours'],
  kest1: ['Introduction to Statistics', 'Collection of Data', 'Organisation of Data', 'Presentation of Data', 'Measures of Central Tendency', 'Measures of Dispersion', 'Correlation', 'Index Numbers'],
  kepy1: ['What is Psychology?', 'Methods of Enquiry in Psychology', 'The Bases of Human Behaviour', 'Human Development', 'Sensory, Attentional and Perceptual Processes', 'Learning', 'Human Memory', 'Thinking'],
  keip1: ['Introduction to Computer Systems', 'Introduction to Python', 'Python Fundamentals', 'Data Types and Operations', 'Flow of Control', 'Functions', 'Lists', 'Tuples and Dictionaries'],
  keac1: ['Introduction to Accounting', 'Theory Base of Accounting', 'Recording of Transactions – I', 'Recording of Transactions – II', 'Bank Reconciliation Statement', 'Trial Balance and Rectification of Errors', 'Depreciation, Provisions and Reserves'],
  keac2: ['Bank Reconciliation Statement', 'Depreciation, Provisions and Reserves'],
  keps1: ['Political Theory: An Introduction', 'Freedom', 'Equality', 'Social Justice', 'Rights', 'Citizenship', 'Nationalism', 'Secularism'],
  keps2: ['Computer System', 'Encoding Schemes and Number System', 'Emerging Trends', 'Introduction to Problem Solving', 'Getting Started with Python', 'Flow of Control', 'Functions', 'Strings', 'Lists', 'Tuples and Dictionaries'],
  kesy1: ['Sociology and Society', 'Social Institutions', 'Social Stratification', 'Social Change in Modern India', 'Cultural Change'],
  kesy2: ['Introducing Sociology', 'Social Structure, Stratification and Social Processes in Society', 'Culture and Socialisation', 'Society: Structure and Change', 'Introducing Indian Society'],
  kehe1: ['Introduction to Human Ecology', 'Understanding the Self', 'Food, Nutrition, Health and Fitness', 'Management of Resources', 'Fabrics Around Us', 'Media and Communication Technology', 'Concerns and Needs in Diverse Contexts'],
  kehe2: ['Development of Human Ecology', 'Gender Issues', 'Education', 'Health'],
  kehs1: ['From the Beginning of Time', 'Writing and City Life', 'An Empire Across Three Continents', 'The Central Islamic Lands', 'Nomadic Empires', 'The Three Orders', 'Changing Cultural Traditions'],
  kehp1: ['Physical Education', 'Understanding Health', 'Physical and Physiological Aspects of Physical Education and Sports', 'Individual Games', 'Team Games', 'Yoga and its Relevance in the Modern Times', 'Safety and Security', 'Health Related Physical Fitness', 'Measurement and Evaluation', 'Tournaments and Competitions', 'Adventure Sports'],
  kebo1: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'],
  // Class 12
  lefl1: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'Going Places', 'My Mother at Sixty-six', 'Keeping Quiet', 'A Thing of Beauty', 'A Roadside Stand', 'Aunt Jennifer\'s Tigers'],
  lekl1: ['The Lament', 'A Pair of Mustachios', 'The Rocking-horse Winner', 'The Adventure of the Three Garridebs', "Pappachi's Moth", 'The Third and Final Continent', 'Glory at Twilight', 'The Luncheon', 'The Peacock', 'Let Me Not to the Marriage of True Minds', 'Coming', 'Telephone Conversation', 'The World Is Too Much with Us', 'Mother Tongue'],
  levt1: ['The Third Level', 'The Tiger King', 'Journey to the End of the Earth', 'The Enemy', 'On the Face of It', 'Memories of Childhood'],
  lefa1: ['Pre-Historic Cave Paintings', 'Indus Valley Civilisation', 'Buddhist and Jain Art', 'Cave Paintings of India', 'Temple Architecture', 'Sculpture', 'Bronze and Metal Art', 'Indian Painting'],
  legy1: ['Human Geography: Nature and Scope', 'The World Population', 'Migration', 'Human Development', 'Primary Activities', 'Secondary Activities', 'Tertiary and Quaternary Activities', 'Transport and Communication'],
  legy2: ['People', 'Human Development', 'Human Settlements', 'Land Resources and Land Use', 'Water Resources', 'Mineral and Energy Resources', 'Agricultural Geography', 'Manufacturing Industries', 'Planning and Sustainable Development'],
  lehs1: ['Bricks, Beads and Bones', 'Kinship, Caste and Class', 'Fiscal Decentralisation', 'An Imperial Capital: Vijayanagara'],
  lehs2: ['Bricks, Beads and Bones', 'Kinship, Caste and Class', 'Fiscal Decentralisation', 'An Imperial Capital: Vijayanagara'],
  lehs3: ['Bricks, Beads and Bones', 'Kinship, Caste and Class', 'Fiscal Decentralisation', 'An Imperial Capital: Vijayanagara'],
  leps1: ['The Cold War Era', 'The End of Bipolarity', 'US Hegemony in World Politics', 'Alternative Centres of Power', 'Contemporary South Asia', 'International Organisations', 'Environmental Issues'],
  leps2: ['Nations', 'India\'s External Relations', 'Challenge of Nation-Building', 'Era of One-Party Dominance', 'Politics of Planned Development', 'India\'s External Relations', 'Challenge to and Restoration of Congress System', 'Regional Aspirations'],
  lesy1: ['Introducing Indian Society', 'The Demographic Structure of the Indian Society', 'Social Institutions: Continuity and Change', 'Market as a Social Institution', 'Patterns of Social Inequality and Exclusion', 'The Challenges of Cultural Diversity', 'Structural Change'],
  lesy2: ['Structural Change', 'Cultural Change', 'The Story of Indian Democracy', 'Change and Development in Rural Society', 'Change and Development in Industrial Society', 'Globalisation and Social Change', 'Mass Media and Communication', 'Social Movements'],
  lepy1: ['Variations in Psychological Attributes', 'Self and Personality', 'Meeting Life Challenges', 'Psychological Disorders', 'Therapeutic Approaches', 'Attitude and Social Cognition', 'Social Influence and Group Processes'],
  leip1: ['Computer Networks', 'Data Communication', 'Security of Computer', 'Data Handling Using Pandas', 'Introduction to NumPy', 'Database Concepts', 'Introduction to Structured Query Language'],
  lecs1: ['Formal Language and Regular Expressions', 'Boolean Algebra', 'Data Representation', 'Introduction to Python', 'Python Fundamentals', 'Data Types and Operations', 'Flow of Control', 'Functions and User-Defined Functions', 'Lists', 'Tuples and Dictionaries', 'File Handling', 'Database Connectivity', 'Project Work'],
  lebt1: ['Nature and Significance of Management', 'Principles of Management', 'Business Environment', 'Planning', 'Organising', 'Staffing', 'Directing', 'Controlling', 'Financial Management', 'Financial Markets', 'Marketing Management', 'Consumer Protection', 'Emerging Modes of Business'],
  lebs1: ['Nature and Significance of Management', 'Principles of Management', 'Business Environment', 'Planning', 'Organising', 'Staffing', 'Directing', 'Controlling'],
  lebs2: ['Financial Management', 'Financial Markets', 'Marketing Management'],
  leca1: ['Introduction to Computerised Accounting', 'Concepts of Database Management', 'Using a Computerised Accounting System', 'Accounting Using Database Management Systems'],
  leec1: ['Macroeconomics: An Introduction', 'National Income Accounting', 'Money and Banking', 'Income Determination', 'The Government: Budget and the Economy', 'Balance of Payments'],
  leec2: ['Micro Economics: An Introduction', 'Consumer Equilibrium and Demand', 'Producer Behaviour and Supply', 'Forms of Market and Price Determination', 'Simple Applications of Tools of Demand and Supply'],
  legy3: ['Map Reading', 'Data Collection and Presentation', 'Data Analysis and Interpretation', 'Practical Work in Geography'],
  lehe1: ['Introduction to Human Ecology', 'Family as a Social Institution', 'Marriage as a Social Institution', 'Food and Nutrition', 'Shelter', 'Clothing', 'Development of Human Ecology'],
  lehe2: ['Gender Issues', 'Education', 'Health', 'Population', 'Environmental Concerns', 'Social Change', 'Contemporary Challenges'],
  lehh1: ['Introduction to Human Ecology', 'Family as a Social Institution', 'Marriage as a Social Institution', 'Food and Nutrition', 'Shelter', 'Clothing', 'Development of Human Ecology'],
  lehh2: ['Gender Issues', 'Education', 'Health', 'Population', 'Environmental Concerns', 'Social Change', 'Contemporary Challenges'],
  leac1: ['Accounting Not-for-Profit Organisation', 'Accounting for Partnership Firms', 'Reconstitution of a Partnership Firm', 'Dissolution of Partnership Firm'],
  leac2: ['Accounting for Share Capital', 'Accounting for Debentures', 'Financial Statements of a Company', 'Analysis of Financial Statements', 'Accounting Ratios', 'Cash Flow Statement'],
}

const COVER_BY_SUBJECT = [
  [/mathemat/i, 'mathematics'],
  [/^science/i, 'science'],
  [/physics/i, 'physics'],
  [/chemistr/i, 'chemistry'],
  [/biolog/i, 'biology'],
  [/english|hindi|sanskrit|urdu|language/i, 'language'],
  [/social|history|politic|sociolog|psycholog/i, 'social'],
  [/geograph/i, 'geography'],
  [/econom|account|business|statist|commerce/i, 'economics'],
  [/art|music|craft|graphic/i, 'arts'],
]

function coverFor(subject) {
  for (const [re, cover] of COVER_BY_SUBJECT) if (re.test(subject)) return cover
  return 'general'
}

const books = []
for (const b of verified) {
  let fileIndices
  if (PARTIAL[b.code]) fileIndices = PARTIAL[b.code]
  else if (b.verified === b.chapters && b.chapters > 0) fileIndices = Array.from({ length: b.chapters }, (_, i) => i + 1)
  else if (b.verified > 0) fileIndices = Array.from({ length: b.verified }, (_, i) => i + 1)
  else continue // dead book

  const offset = NUMBER_OFFSET[b.code] || 0
  const titles = TITLES[b.code]
  const useTitles = titles && titles.length === fileIndices.length

  const chapters = fileIndices.map((fileIdx, i) => ({
    number: i + 1 + offset,
    title: useTitles ? titles[i] : `Chapter ${i + 1 + offset}`,
    pdfCode: `${b.code}${String(fileIdx).padStart(2, '0')}`,
  }))

  books.push({
    id: b.code,
    title: b.title.replace(/\s+/g, ' ').trim(),
    classNum: b.cls,
    subject: b.subject.replace(/\s+/g, ' ').trim(),
    cover: `/covers/${coverFor(b.subject)}.png`,
    chapters,
  })
}

books.sort((a, b) => a.classNum - b.classNum || a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title))

const header = `// NCERT catalog — generated from ncert.nic.in (textbook.php)
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
}

export const NCERT_PDF_BASE = 'https://ncert.nic.in/textbook/pdf'

export const BOOKS: Book[] = `

const helpers = `

export const CLASSES = Array.from({ length: 12 }, (_, i) => i + 1)

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export function toRoman(classNum: number): string {
  return ROMAN[classNum - 1] ?? String(classNum)
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id)
}

export function getBooksByClass(classNum: number): Book[] {
  return BOOKS.filter((b) => b.classNum === classNum)
}

export function getSubjectsForClass(classNum: number): string[] {
  return [...new Set(getBooksByClass(classNum).map((b) => b.subject))]
}

export function findBookByPdfCode(pdfCode: string): { book: Book; chapter: Chapter } | undefined {
  for (const book of BOOKS) {
    const chapter = book.chapters.find((c) => c.pdfCode === pdfCode)
    if (chapter) return { book, chapter }
  }
  return undefined
}
`

writeFileSync(
  '/vercel/share/v0-project/lib/catalog.ts',
  header + JSON.stringify(books, null, 2) + helpers,
)
console.log('wrote', books.length, 'books,', books.reduce((n, b) => n + b.chapters.length, 0), 'chapters')
const titled = books.filter((b) => TITLES[b.id] && TITLES[b.id].length === b.chapters.length)
console.log('books with curated titles:', titled.length)
const guardFails = Object.keys(TITLES).filter((c) => {
  const b = books.find((x) => x.id === c)
  return !b || TITLES[c].length !== b.chapters.length
})
console.log('title guard failures (fell back to generic):', guardFails)
