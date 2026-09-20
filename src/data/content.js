// Central place for editable portfolio content.
// Update this file to change text across the site without touching components.

export const profile = {
  name: 'Sapna',
  role: 'Full Stack Developer',
  tagline: "I build responsive and user-friendly web applications using React, Node.js, MongoDB, Python and more.",
  greeting: "Hi, I'm Sapna",
  education: 'B.Tech CSE | Full Stack Developer',
  location: 'Bareilly, UP',
  degree: 'B.Tech (2023 – 2027)',
  email: 'sapnaml4004@gmail.com',
  linkedin: 'linkedin.com/in/sapna-4004d',
  github: 'github.com/sapna84',
  resumeUrl: '/resume.pdf',
  about: [
    "I'm Sapna, a Computer Science Engineering student at SRMS CET&R, Bareilly. I'm passionate about building web applications and solving real-world problems through technology. I enjoy learning new tools, exploring data, and creating meaningful digital experiences.",
    "I'm currently in my final year of B.Tech (CSE) and working towards my goal of becoming a Full Stack Developer. I love working with the MERN stack, and I'm also exploring Python, Salesforce CRM and data-related technologies.",
  ],
  quickFacts: [
    { icon: 'GraduationCap', label: 'Education', value: 'SRMS CET&R, Bareilly' },
    { icon: 'Target', label: 'Focus', value: 'Full Stack Development' },
    { icon: 'Languages', label: 'Languages', value: 'Hindi, English' },
    { icon: 'Heart', label: 'Hobbies', value: 'Nature, Photography, Sketching, Leaf Collection' },
  ],
}

export const heroTech = [
  { name: 'React', icon: 'Atom' },
  { name: 'Node.js', icon: 'Hexagon' },
  { name: 'MongoDB', icon: 'Leaf' },
  { name: 'Python', icon: 'Terminal' },
  { name: 'SQL', icon: 'Database' },
]

export const featureCards = [
  {
    title: 'Clean Code',
    description: 'Writing maintainable, scalable and efficient code.',
    icon: 'Code2',
  },
  {
    title: 'Problem Solver',
    description: 'I enjoy turning complex problems into simple solutions.',
    icon: 'Puzzle',
  },
  {
    title: 'Always Learning',
    description: 'Exploring new technologies and building better every day.',
    icon: 'BookOpen',
  },
]

export const projectCategories = ['All', 'Web Apps', 'Full Stack', 'ML / Data', 'Others']

export const projects = [
  {
    name: 'AdoptBuddy',
    category: 'Full Stack',
    tag: 'MERN Stack',
    description: 'A pet care & adoption platform with features like pet listing, vet appointments, lost & found and more.',
    links: [
      { label: 'Live Site', type: 'live', url: 'https://www.adoptbuddy.online/' },
      { label: 'GitHub', type: 'github', url: 'https://github.com/sapna84/AdoptBuddy' },
    ],
    color: '#F3A65B',
  },
  {
    name: 'STPPS',
    fullName: 'Smart Traffic & Pollution Prediction System',
    category: 'ML / Data',
    tag: 'MERN + Python',
    description: 'Smart Traffic & Pollution Prediction System using real-time data and route recommendations.',
    links: [
      { label: 'Live Demo', type: 'live', url: '#' },
      { label: 'GitHub', type: 'github', url: '#' },
    ],
    color: '#5B9EF3',
  },
  {
    name: 'Sri Adi Ananta',
    category: 'Web Apps',
    tag: 'React + Vite · Tailwind',
    description: 'A professional static website for a watch store (authorized associate of Titan/Fastrack).',
    links: [
      { label: 'Live Site', type: 'live', url: 'https://www.sriadiananta.com/' },
      { label: 'GitHub', type: 'github', url: 'https://github.com/Sri-Adi-Ananta/Shri-Adi-Ananta' },
    ],
    color: '#E8D48A',
  },
  {
    name: 'Fitzzi',
    category: 'Web Apps',
    tag: 'React',
    description: 'Fitness tracker with BMI, calorie and food intake features.',
    links: [{ label: 'GitHub', type: 'github', url: '#' }],
    color: '#B08CE0',
  },
  {
    name: 'Agri Dost',
    category: 'ML / Data',
    tag: 'Flask · TensorFlow',
    description: 'Crop disease prediction using ML.',
    links: [{ label: 'GitHub', type: 'github', url: '#' }],
    color: '#8FD19E',
  },
  /*{
    name: 'Salesforce Attendance System',
    category: 'Others',
    tag: 'LWC · Apex',
    description: 'College attendance system with subject filters and percentage tracking.',
    links: [{ label: 'GitHub', type: 'github', url: '#' }],
    color: '#7FB3D5',
  },
  {
    name: 'PDF Topic Search',
    category: 'Others',
    tag: 'Python',
    description: 'Search topics from PDF files using NLP.',
    links: [{ label: 'GitHub', type: 'github', url: '#' }],
    color: '#D5A6BD',
  },*/
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'LayoutGrid',
    skills: [
      { name: 'React.js', icon: 'Atom' },
      { name: 'HTML5', icon: 'Code' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'JavaScript', icon: 'FileCode' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'Hexagon' },
      { name: 'Express.js', icon: 'Route' },
      { name: 'Java', icon: 'Coffee' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'C', icon: 'FileCode2' },
    ],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'Leaf' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'SQL', icon: 'Table' },
      { name: 'DBMS', icon: 'Layers' },
    ],
  },
  {
    title: 'Salesforce',
    icon: 'Cloud',
    skills: [
      { name: 'Salesforce Admin', icon: 'ShieldCheck' },
      { name: 'Custom Objects', icon: 'Box' },
      { name: 'Flows', icon: 'GitBranch' },
      { name: 'Apex', icon: 'Code2' },
      { name: 'Validation Rules', icon: 'CheckCircle2' },
      { name: 'Security & User Mgmt', icon: 'Lock' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'VS Code', icon: 'Code' },
      { name: 'Figma', icon: 'Figma' },
      { name: 'Canva', icon: 'PenTool' },
      { name: 'Jupyter (basic)', icon: 'BookOpen' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      { name: 'Teamwork', icon: 'Users' },
      { name: 'Adaptability', icon: 'RefreshCw' },
      { name: 'Fast Learner', icon: 'Zap' },
    ],
  },
]

export const experiences = [
  {
    org: 'Full Stack Development Internship',
    role: 'MERN Stack Intern',
    duration: 'Jun 2025 – Aug 2025',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    points: [
      'Built and deployed AdoptBuddy, a pet adoption and care platform, as the core project of the internship.',
      'Developed reusable React components and REST APIs connecting the frontend to a MongoDB database.',
      'Implemented authentication, appointment booking and a lost & found module.',
      'Collaborated with a small team using Git and GitHub for version control.',
    ],
  },
  {
    org: 'Salesforce Developer Virtual Internship',
    role: 'Salesforce Trainee',
    duration: '2025',
    tech: ['Salesforce Admin', 'Apex', 'Flows', 'LWC'],
    points: [
      'Configured custom objects, validation rules and security/user access for sample business processes.',
      'Built automated Flows to handle record updates and approval processes.',
      'Practiced Apex fundamentals and Lightning Web Components for a college attendance tracking system.',
    ],
  },
]

export const contactInfo = [
  { icon: 'Mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'MapPin', label: 'Location', value: profile.location },
  { icon: 'Linkedin', label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}` },
  { icon: 'Github', label: 'GitHub', value: profile.github, href: `https://${profile.github}` },
]

export const notes = {
  hero: 'Turning ideas into real solutions',
  heroCorner: 'Code • Build • Improve',
  about: 'Better version of me',
  skills: 'Keep Growing',
  contact: 'Thanks for visiting!',
}
