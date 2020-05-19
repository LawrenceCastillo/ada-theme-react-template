/* Sitewide variable text */

export default
  [
    {
      section: 'Personal',
      name: 'Lawrence Castillo',
      email: 'Lawrence.g.castillo@gmail.com',
      domain: 'http://lawrencecastillo.com',
      location: 'NYC',
      headline: 'Webhead in NYC',
      description: 'I\'m a software developer in New York City, NY. Welcome to my personal portfolio page where you can view some of my web app projects, my academic achievements, as well as my employment history. Have a look around and feel free to contact me!',
      image: 'https://avatars1.githubusercontent.com/u/33098457?s=460&u=65f0d2c78bc9870e13e0b2147cc8f533a175d497&v=4',
      about: 'Hey, I\'m Lawrence 👋 I\'m a fanatic about new technologies including microprocessors for around-the-home projects and all things involving AR... It\'s the future of tech. When I\'m not geeking out on new technology or coding apps for the web, you can generally find me getting my hands dirty with everything from carving woodblocks and making paper, to electroplating silver to copper for Daguerreotypes. Say hi and let\'s talk about your project.',
      skills:
      [
        'JavaScript', 'React.js', 'Node.js', 'Express.js', 'Redux', 'MongoDB', 'GraphQL', 'Firebase'
      ],
      social:       
      [
        {
          id: 1,
          name: 'Github',
          icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          profile_url: 'https://github.com/lawrencecastillo'
        },
        {
          id: 2,
          name: 'LinkedIn',
          icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/768px-Linkedin_icon.svg.png',
          profile_url: 'https://www.linkedin.com/in/lawrence-gabriel-castillo/'
        },
      ],
      interests:
      [
        'Making tools from microprocessors', 'Soldering gadgets', 'Photographing architecture', 'Reading critical art texts', 'Running for fun',
      ],
    },
    {
      section: 'Experience',
      groups: 
      [
        {
          id: 1,
          name: 'Threshold.co',
          image_url: '',
          site_url: 'https://www.threshold.co/site/about-us',
          location: 'Remote',
          timeframe: '05/20 - Current',
          role: 'Web Developer intern',
          description: 'Front-end web developer focused on Preact and Redux component development and testing within a progressive web app (PWA).',
        },
        {
          id: 2,
          name: '[ Freelance ]',
          image_url: '',
          site_url: 'http://lawrence-gabriel.com/',
          location: 'NYC',
          timeframe: '04/14 - Current',
          role: 'Web Designer & Photographer',
          description: 'Do-it-all creative, photographer, web designer, pitch writer, Photoshop expert/ trainer. Develop custom (CSS/JS/PHP) website solutions on platforms with built-in editing and hosting features for small-scale clients.',
        },
        {
          id: 3,
          name: 'WeWork Labs',
          image_url: '',
          site_url: 'https://www.wework.com/labs/',
          location: 'NYC',
          timeframe: '06/19 - 08/19',
          role: 'Software Engineer intern',
          description: 'Fullstack web product developer in React and Node with Airtable. Developed custom profile matching algorithm (Node.js) to predict candidate success and developed solution (React.js) to prioritize user feedback and route it to the appropriate department.',
        },
        {
          id: 4,
          name: 'L3 (now L3Harris)',
          image_url: '',
          site_url: 'https://www.l3t.com/',
          location: 'PAFB (FL)',
          timeframe: '10/05 - 04/14',
          role: 'Data Analyst & Supervisor',
          description: 'Project control department supervisor, project manager, budget manager (’10-’14); data analyst (’05-’10). Wrote macro scripts to automate financial analysis and developed project estimation toolset to automate pricing of external work requests.',
        },
        {
          id: 5,
          name: 'ITT (now L3Harris)',
          image_url: '',
          site_url: 'https://www.l3t.com/',
          location: 'VAFB (CA)',
          timeframe: '08/04 - 10/05',
          role: 'Hardware Engineer',
          description: 'Hardware maintenance and testing, configuration management, and site inspections as they related to data transport and communications.',
        },
        {
          id: 6,
          name: 'ITT (now L3Harris)',
          image_url: '',
          site_url: 'https://www.l3t.com/',
          location: 'VAFB (CA)',
          timeframe: '06/04 - 08/04',
          role: 'Hardware Engineer intern',
          description: 'Documentation support, administration, issue tracking and response.',
        },
      ],
    },
    {
      section: 'Projects', 
      groups: 
      [
        {
          id: 1,
          name: 'React Template: "Ada"',
          image_url: 'https://raw.githubusercontent.com/LawrenceCastillo/__content__/master/Ada-theme-thumbnail_.jpg',
          site_url: 'https://github.com/LawrenceCastillo/ada-theme-react-template',
          location: 'NYC',
          timeframe: '2020',
          role: 'Front-end',
          description: 'While developing this website for my personal use, I decided early on I wanted to be able to share the site. React templates are often hard to decipher so I made this one simple by putting all data in one place and creating simple switches to change a collection look instantly. Deployed via Netlify.',
        },
        {
          id: 2,
          name: 'Photowall App',
          image_url: 'https://raw.githubusercontent.com/LawrenceCastillo/__content__/master/Photowall-thumbnail.jpg',
          site_url: 'https://github.com/LawrenceCastillo/photowall',
          location: 'NYC',
          timeframe: '2020',
          role: 'Fullstack',
          description: 'The Photowall app allows users to create image posts with descriptions, delete posts, and add comments. Built with React, Redux, React-router, Firebase, and deployed via Netlify, the app is the result of completing an online course I undertook in order to refine my React/Redux skillset.',
        },
        {
          id: 3,
          name: 'Silent Alarm App',
          image_url: 'https://raw.githubusercontent.com/LawrenceCastillo/__content__/master/silent-alarm-app.jpg',
          site_url: 'https://github.com/LawrenceCastillo/fashion_forward',
          location: 'NYC',
          timeframe: '2019',
          role: 'Team back-end developer',
          description: 'Official HackNY entry & winner of best social good. This app is designed to curb domestic abuse by fronting as a clothing outlet but hiding panic buttons capable of auto-texting local PD. I implemented parts of the backend (Node.js) including connectivity to MongoDB, authentication (Passport), and Twilio for messaging.',
        },
        {
          id: 4,
          name: 'Matchmaking App',
          image_url: 'https://raw.githubusercontent.com/LawrenceCastillo/__content__/master/Fashion-Forward-thumbnail_.jpg',
          site_url: 'https://github.com/LawrenceCastillo/LLL',
          location: 'NYC',
          timeframe: '2019',
          role: 'Fullstack',
          description: 'Matchmaking application created to blindly pair individuals based on guidelines from "The Four Tendencies" by Gretchen Rubin -- but only for a limited time. I designed and developed the app in PHP and MySQL (LAMP) and deployed it (temporarily) from my home network via Raspberry Pi/ Apache server with port-forwarding.',
        },
      ],
    },
    {
      section: 'education',
      groups:
      [
        {
          id: 1,
          name: 'Hunter College / CUNY',
          image_url: '',
          site_url: 'https://hunter.cuny.edu/',
          location: 'NYC',
          timeframe: '10/17 - 01/20',
          role: 'Computer Science major',
          description: 'Graduated with Bachelor of Science (BS) degree in Computer Science on Jan 31, 2020. Coursework included a focus on object oriented programming (OOP), algorithms, databases, data structures, and discreet mathematics, with an emphasis in C++, MySQL, Bash, and Python.',
        },
        {
          id: 2,
          name: 'Tech Talent Pipeline (TTP)',
          image_url: '',
          site_url: 'https://ttp.nyc/cuny-programs',
          location: 'NYC',
          timeframe: '06/19 - 01/20',
          role: '2019 Resident',
          description: 'Intensive fullstack web application bootcamp with focus on MERN stack (JS, React, Node, Mongo, Express ), with additional study in Git, MySQL, authentication with Passport, and deployment to Heroku.',
        },
        {
          id: 3,
          name: 'Allan Hancock College',
          image_url: '',
          site_url: 'https://www.hancockcollege.edu/',
          location: 'CA',
          timeframe: '08/03 - 12/09',
          role: 'Electronics Technology major',
          description: 'Associate of Science (AS) degree in Electronics completed in \'09. Coursework included digital circuit design and analysis, measurement and instrumentation, and programming',
        },
      ],
    },
  ]
