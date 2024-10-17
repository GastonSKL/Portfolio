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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    beClever,
    grupoTX,
    aws,
    netcore,
    csharp,
    sqlserver,
    generativeApp,
    carhub
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
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "SQL Server",
      icon: sqlserver,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: ".NET Core",
      icon: netcore,
    },
    {
      name: "AWS Services",
      icon: aws,
    },
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company_name: "BeClever",
      icon: beClever,
      iconBg: "#383E56",
      date: "January 2023 - May 2024",
      points: [
        "Developing and maintaining web applications using .Net Core 4.8, React.js and other related technologies such as SQL Server, Git/SVN and Azzure.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Grupo TX",
      icon: grupoTX,
      iconBg: "#E6DEDD",
      date: "May 2024 - Act.",
      points: [
        "Developing and maintaining web applications using .Net Core 4.8, React.js and other related technologies such as SQL Server, Git/SVN and Azzure.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Image Generation AI App",
      description:
        "Full stack app created to be a clone of DALL-E. Its build using express, react, and stability ai api.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: generativeApp,
      source_code_link: "https://github.com/GastonSKL/AI-Image-Generation-App",
      deployed: "https://generativeapp.netlify.app/"
    },
    {
      name: "chatAPP",
      description:
        "Web application that eneables you to chat with other people using Stream, and sms notifications with Twilio",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "twilio",
          color: "pink-text-gradient",
        },
        {
          name: "stream",
          color: "red-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/GastonSKL/chatAPP",
      deployed: "https://chatapp-gaston-skamlec.netlify.app/"
    },
    {
      name: "carhub",
      description:
        "Web application builded for showcasing cars from different angles an its characteristics",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "next",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "red-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/GastonSKL/carShowcase",
      deployed: "https://car-showcase-rho-ten.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };