/* Sitewide variable text */

export default
  [
    {
      section: 'Personal',
      name: 'Lawrence Castillo',
      email: 'Lawrence.g.castillo@gmail.com',
      location: 'NYC',
      headline: 'Webhead in NYC',
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
          name: 'Threshold',
          image_url: '',
          site_url: 'https://www.threshold.co/site/about-us',
          location: 'Remote',
          timeframe: '05/20 - Current',
          role: 'Web Developer intern',
          description: 'Front-end web developer focused on Preact and Redux component implementation',
        },
        {
          id: 2,
          name: 'Freelance',
          image_url: '',
          site_url: 'http://lawrence-gabriel.com/',
          location: 'NYC',
          timeframe: '04/14 - Current',
          role: 'Web Designer & Photographer',
          description: 'Do-it-all creative, photographer, web designer, pitch writer, Photoshop expert/ trainer',
        },
        {
          id: 3,
          name: 'WeWork Labs',
          image_url: '',
          site_url: 'https://www.wework.com/labs/',
          location: 'NYC',
          timeframe: '06/19 - 08/19',
          role: 'Software Engineer intern',
          description: 'Fullstack web product developer in React and Node with Airtable',
        },
        {
          id: 4,
          name: 'L-3 Com',
          image_url: '',
          site_url: 'https://www.l3t.com/',
          location: 'PAFB (FL)',
          timeframe: '10/05 - 04/14',
          role: 'Data Analyst & Supervisor',
          description: 'Project control department supervisor, project manager, budget manager (’10-’14); data analyst (’05-’10)',
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
          image_url: '',
          site_url: 'https://github.com/LawrenceCastillo/ada-theme-react-template',
          location: 'NYC',
          timeframe: '2020',
          role: 'Front-end',
          description: 'While [finally] developing my own personal website, I decided early on I wanted to be able to share the site. React templates are often hard to decipher so I made it simple by putting all data in one place and creating simple switches to change a section look instantly. Deployed via Netlify.',
        },
        {
          id: 2,
          name: 'Photowall App',
          image_url: '',
          site_url: 'https://github.com/LawrenceCastillo/photowall',
          location: 'NYC',
          timeframe: '2020',
          role: 'Fullstack',
          description: 'Photowall application allows users to post images with descriptions, remove images, and leave comments. Deployed via Netlify, the app exists for the greater community to share their thoughts. Built with React, Redux, React-router, and Firebase.',
        },
        {
          id: 3,
          name: 'Silent Alarm App',
          image_url: '',
          site_url: 'https://github.com/LawrenceCastillo/fashion_forward',
          location: 'NYC',
          timeframe: '2019',
          role: 'Team back-end developer',
          description: 'Official HackNY hackathon entry and winner of best social good award. I helped implement the backend (Node.js) with connectivity to MongoDB and authentication via Passport. I also set up Twilio so that our app could automatically send text messages.',
        },
        {
          id: 4,
          name: 'Matchmaking App',
          image_url: '',
          site_url: 'https://github.com/LawrenceCastillo/LLL',
          location: 'NYC',
          timeframe: '2019',
          role: 'Fullstack',
          description: 'Matchmaking application designed to pair individuals based on guidelines from "The Four Tendencies" by Gretchen Rubin -- but only for a limited time. Deployed to Raspberry (Apache) via port-forwarding, I designed the app in PHP and MySQL (LAMP).',
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
          role: 'Graduated Jan 2020',
          description: 'Bachelor of Science (BS) degree in Computer Science. Coursework included a focus on object oriented programming (OOP), algorithms, databases, data structures, and discreet mathematics, with an emphasis in C++, MySQL, Bash, and Python.',
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
      ],
    },
  ]