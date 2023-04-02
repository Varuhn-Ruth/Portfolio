import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eiffel,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    freshii,
    de10,
    aim,
    java,
    c,
    python,
    matlab,
    spring,
    sql,
    aws,
    spacedefender,
    aimlearning,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "3D Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java, 
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "spring",
      icon: spring,
      
    },
    {
      name: "sql",
      icon: sql,
    },

    // below does not display due to server overload
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    // {
    //   name: "aws",
    //   icon: aws,
    // },
  ];
  
  const experiences = [
    {
      title: "Hardware Designer",
      company_name: "DE10-Lite",
      icon: de10,
      iconBg: "#383E56",
      date: "Sep 2020 - Dec 2020",
      points: [
        "Developed code using Verilog that takes user input collected for a DE10-Lite board.",
        "Calculator was designed to perform basic equations such as addition, subtraction, division, multiplication, and exponential functions.",
        "Implementing responsive design and ensuring hardware compatibility.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Eiffel",
      icon: eiffel,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Dec 2020",
      points: [
        "Recreated a frontend Space Defender game to mimic the functionalty of the game through the Eiffel software.",
        "Created a gameboard for users where they are given the abilities to input various commands for an interactive gaming experience.",
        "Game is programmed to incorporate a random-number generator which allows for spawning and movement of enemy ships and missiles accordingly.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freshii Foods",
      icon: freshii,
      iconBg: "#383E56",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Designed and implemented the application to operate on the Spring framework, Hibernate, Thymeleaf, and MySQL stack",
        "Stack provided the MVC architecture to develop flexible and loosely coupled web applications",
        "Coded the frontend of the application using JavaScript and CSS files to make an easy to use and interactive application for the users to navigate.",
        "Page was designed to help users search and select their food orders from the wide variety available on the menu so purchases can be completed on third party application.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "AiM (AI Learning Platform)",
      icon: aim,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Apr 2022",
      points: [
        "Worked with a small team to design an online application that provides an easier platform for professors and students to interact and engage with class work.",
        "Frontend development was done using React JS, HTML, CSS, and JS.",
        "Backend storage and distribution of data included Google Cloud and Node express (Node JS).",
        "Application also included various AI’s to further enhance the applications abilities by using machine learning. (i.e., Natural Language API, Quiz API, Sentiment Analysis)",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "Web application developed to demonstrate and represent my personal skills and growth as a software developer. This web application also incorprates 3D animations.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "ReactThreeFiber",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "AiM Learning",
      description:
        "Web application that allows students and professors to work hand in hand with our eLearning tools. Application utilizes AI implementation to improve student growth.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "GoogleCloud",
          color: "pink-text-gradient",
        },
      ],
      image: aimlearning,
      source_code_link: "https://github.com/Varuhn-Ruth/AI_Learning_Platform-AiM",
    },
    {
      name: "Space Defender",
      description:
        "A remake of the popular space defender game using the Eiffel programming Language. This is a single player game performed using command line arguments.",
      tags: [
        {
          name: "Eiffel",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: spacedefender,
      source_code_link: "https://github.com/Varuhn-Ruth/Eiffel-programming/tree/main/space_defender_2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };