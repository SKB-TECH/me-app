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
    stock,
    tripguide,
    threejs,
    compulse,
    cetraca,
    ecr,
    kweek,
    tech,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Compulse-Africa",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tech-upgrad",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "September 2022 - Nov 2022",
      points: [
        "Developing and maintaining Mobile applications using React-native and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Ecr-drc",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2022 - Fev 2023",
      points: [
        "Developing and maintaining web applications using React.js, Express js and other related technologies.",
        "Collaborating with cross-functional teams including designers  and other developers to create high-quality web site.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Freelance",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Avril 2023 - Present",
      points: [
        "Developing and maintaining web applications, Mobile App using React.js , Next Js, React-Native and other related technologies.",
        "Collaborating with cross-functional teams.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Benjamin proved me wrong.",
      name: "Doddy Matabaro",
      designation: "Software Develop",
      company: " Compulse",
      image: "https://avatars.githubusercontent.com/u/77513342?v=4",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Benjamin does.",
      name: "Leader Mushi",
      designation: "IT",
      company: " Rapidi",
      image: "https://avatars.githubusercontent.com/u/82439819?v=4",
    },
    {
      testimonial:
        "I like Benjamin by his way to challenge yourself with new situations in this coding profession",
      name: "David Emedi",
      designation: "CEO",
      company: "  Tech-upgrad",
      image: "https://media.licdn.com/dms/image/D4D03AQGSxgbyCUkHlg/profile-displayphoto-shrink_800_800/0/1689514926057?e=1704931200&v=beta&t=-9Vujphko6GDSJTFn45IbNRdITJInIC9JZg-5Gbpyns",
    },
  ];
  
  const projects = [
    {
      name: "Compulse Job",
      description:
        "Web-based platform that allows users to search, jobs, and manage accounts , any company can post a new job in the platform",
      tags: [
        {
          name: "Next js",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "ReduxToolKit",
          color: "orange-text-gradient",
        },
        {
          name: "Express Js",
          color: "red-text-gradient",
        },
        {
          name: "Antd ",
          color: "blue-text-gradient",
        },
      ],
      image: compulse,
      source_code_link: "https://github.com/SKB-TECH",
    },
    {
      name: "Ecr-drc",
      description:
        "Website to promote the achievements of the construction company erc-drc, By giving visitors the opportunity to see house plans and purchase these plans online and place orders for their house plans",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: ecr,
      source_code_link:"https://github.com/SKB-TECH",
    },
    {
      name: "Tech-upgrad",
      description:
        "The website to put tech-upgrad customers in touch with each other and finally enable them to purchase IT product markets",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Nest Js",
          color: "green-text-gradient",
        },
        {
          name: "RestaApi",
          color: "orange-text-gradient",
        },
        {
          name: "RedaxToolKit",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tech,
      source_code_link: "https://github.com/SKB-TECH",
    },
    {
      name: "Kweek App",
      description:
        "Kweek App a mobile application to connect growers and seed sellers but also growers and consumers with a secure online payment system, With Kweek App you can order, buy and sell your crops online but also receive advice on how to produce well in mass",
      tags: [
        {
          name: "React-native",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Ardino",
          color: "yellow-text-gradient",
        },
      ],
      image: kweek,
      source_code_link: "https://github.com/SKB-TECH",
    },
    {
      name: "Cetraca",
      description:
       "Cetraca App is a mobile application that allows you to manage your cash register via mobile phone: validate exits, check entries, take cash inventories",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "Php",
          color: "red-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: cetraca,
      source_code_link: "https://github.com/SKB-TECH",
    },
    {
      name: "Inventory management",
      description:
      "Complete stock management: procurement, sales, suppliers, customers and inventories with the production of reports in PDF",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSql",
          color: "green-text-gradient",
        },
        {
          name: "RestApi",
          color: "orange-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/SKB-TECH",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };