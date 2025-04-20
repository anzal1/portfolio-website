// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anzals's Portfolio",
  description:
    "A passionate individual who always thrives to work and learn new skills along with active contribution to open source projects.",
  og: {
    title: "Anzal Husain Abidi's Portfolio",
    type: "website",
    url: "https://anzalabidi.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Anzal Husain Abidi",
  logo_name: "AnzalHusainAbidi",
  nickname: "Lucifer's Hangout",
  subTitle:
    "A passionate individual who always thrives to work and learn new skills along with active contribution to open source projects.",
  resumeLink:
    "https://drive.google.com/file/d/1ZNwVTRo56HmF_VmlkukYUd4u942CDosL/view?usp=drive_link",
  portfolio_repository: "https://github.com/anzal1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/anzal1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anzal-husain-abidi-740a40204/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:cofclan145@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AnzalAbidi",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/anzalabidi/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/lucifer_who",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/Lucif3r_/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jamia Milia Islamia",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "jamia.png",
      alt_name: "JMI",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I secured an CGPA of 9.67 at the end of my course.",
      ],
      website_link: "https://www.jmi.ac.in",
    },
  ],
};

const certifications = {
  certifications: [],
  // certifications: [
  //   {
  //     title: "Machine Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "stanford_logo.png",
  //     certificate_link: "",
  //     alt_name: "Stanford University",
  //     color_code: "#8C151599",
  //   },
  //   {
  //     title: "Deep Learning",
  //     subtitle: "- Andrew Ng",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link: "",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link: "",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "Data Science",
  //     subtitle: "- Alex Aklson",
  //     logo_path: "ibm_logo.png",
  //     certificate_link: "",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Big Data",
  //     subtitle: "- Kim Akers",
  //     logo_path: "microsoft_logo.png",
  //     certificate_link: "",
  //     alt_name: "Microsoft",
  //     color_code: "#D83B0199",
  //   },
  //   {
  //     title: "Advanced Data Science",
  //     subtitle: "- Romeo Kienzler",
  //     logo_path: "ibm_logo.png",
  //     certificate_link: "",
  //     alt_name: "IBM",
  //     color_code: "#1F70C199",
  //   },
  //   {
  //     title: "Advanced ML on GCP",
  //     subtitle: "- GCP Training",
  //     logo_path: "google_logo.png",
  //     certificate_link: "",
  //     alt_name: "Google",
  //     color_code: "#0C9D5899",
  //   },
  //   {
  //     title: "DL on Tensorflow",
  //     subtitle: "- Laurence Moroney",
  //     logo_path: "deeplearning_ai_logo.png",
  //     certificate_link: "",
  //     alt_name: "deeplearning.ai",
  //     color_code: "#00000099",
  //   },
  //   {
  //     title: "Fullstack Development",
  //     subtitle: "- Jogesh Muppala",
  //     logo_path: "coursera_logo.png",
  //     certificate_link: "",
  //     alt_name: "Coursera",
  //     color_code: "#2A73CC",
  //   },
  //   {
  //     title: "Kuberenetes on GCP",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link: "",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  //   {
  //     title: "Cryptography",
  //     subtitle: "- Saurabh Mukhopadhyay",
  //     logo_path: "nptel_logo.png",
  //     certificate_link: "",
  //     alt_name: "NPTEL",
  //     color_code: "#FFBB0099",
  //   },
  //   {
  //     title: "Cloud Architecture",
  //     subtitle: "- Qwiklabs",
  //     logo_path: "gcp_logo.png",
  //     certificate_link: "",
  //     alt_name: "GCP",
  //     color_code: "#4285F499",
  //   },
  // ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with a range of startups and organizations, building products across web, backend, and platform engineering. My roles have spanned frontend design, scalable backend architecture, DevOps workflows, and community mentorship.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Zomato",
          company_url: "https://www.zomato.com",
          logo_path: "zomato_logo.avif",
          duration: "Jan 2023 - Present",
          location: "Gurugram, India",
          description:
            "At Zomato, I work as a full-time Software Engineer on the Platforms and Internal Tools team, where I architect and develop scalable systems that directly support operations, partner integrations, and NGO-led initiatives. I led the development of core backend services using Go and Node.js, optimized for performance and maintainability. One of my key contributions includes building 'Espresso' – a high-performance PDF generation library that powers invoicing and reporting at scale across multiple verticals.\n\n" +
            "I also played a crucial role in scaling Feeding India, an NGO platform under Zomato, where I implemented authentication and authorization using Casbin RBAC, designed RESTful APIs, and handled data modeling in MySQL and Redis. Additionally, I worked on a facial recognition-based attendance system in React Native, using on-device image deduplication and pose detection to ensure accuracy and low-latency operation in low-connectivity environments.\n\n" +
            "Beyond product delivery, I contributed to improving developer experience by streamlining CI/CD pipelines, integrating commit hooks, and enforcing typed contracts across services. My work has consistently focused on system reliability, cross-functional collaboration, and impact-driven engineering that enables large-scale social and commercial initiatives.",
          color: "#FF5A5F",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company: "Angage360",
          company_url: "https://www.angage360.com/",
          logo_path: "angage_logo.jpeg",
          duration: "Dec 2021 - Jan 2022",
          location: "Remote",
          description:
            "At Angage360, I worked on developing analytics dashboards aimed at tracking industrial growth trends and detecting early signs of developer burnout. I contributed to the backend API architecture and frontend data visualization using React and Chart.js. This role helped me understand data-driven product development in early-stage startups.",
          color: "#ee3c26",
        },
        {
          title: "Frontend Developer",
          company: "Oriflame",
          company_url: "#",
          logo_path: "oriflame_logo.jpg",
          duration: "Sept 2021 - Nov 2021",
          location: "Remote",
          description:
            "At Oriflame, I worked with the design team to build a modern and responsive product showcase for their e-commerce platform. I focused on creating clean, interactive components using React and improved page load performance across various screen sizes. The experience strengthened my grasp of UX principles and production-ready UI engineering.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "Sopay",
          company_url: "https://www.sopay.world",
          logo_path: "sopay.webp",
          duration: "Sept 2022 - Nov 2022",
          location: "Remote",
          description:
            "At Sopay, a Web3 startup, I helped design and implement their product landing website and initial full-stack prototype. I used Next.js for SSR, integrated smart contract APIs for wallet management, and worked closely with designers to iterate on user feedback. The experience taught me how to work within fast-paced, speculative product teams.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer",
          company: "DevDynamics",
          company_url: "https://devdynamics.ai",
          logo_path: "logomark-64.png",
          duration: "Nov 2021 - Jan 2023",
          location: "Remote",
          description:
            "At DevDynamics, I was responsible for building the end-to-end portal system and contributing to the main landing page design. My role involved both backend and frontend work using Node.js, Express, React, and PostgreSQL. I implemented dashboard views, user roles, and integrated analytics systems that provided real-time insights to customers.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "BeABrand",
          company_url: "https://www.admin.beabrand.app",
          logo_path: "beabrand.svg",
          duration: "Feb 2023 - June 2024",
          location: "Remote",
          description:
            "At BeABrand, I built and maintained the admin dashboard using React.js, created the brand's customer-facing website with Next.js, and managed backend services using Node.js. I implemented REST APIs, integrated authentication, and focused on performance tuning and deployment workflows. My work enabled the team to launch new marketing campaigns faster and scale operations.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technical Advisor",
          company: "IEEE CS JMI",
          company_url: "#",
          logo_path: "IEES_logo.png",
          duration: "Feb 2022 - Present",
          location: "Delhi, India",
          description:
            "As a Technical Advisor for IEEE CS JMI, I guide student developers in navigating career paths in tech, reviewing projects, and organizing hands-on sessions in web development, backend engineering, and system design. I also assist with speaker events and project mentorship.",
          color: "#4285F4",
        },
        {
          title: "DSA Lead",
          company: "IEEE CS JMI",
          company_url: "#",
          logo_path: "IEES_logo.png",
          duration: "Jan 2021 - Jan 2022",
          location: "Delhi, India",
          description:
            "I mentored junior students in foundational data structures and algorithms, conducted weekly problem-solving sessions, and curated problem sets. I also introduced students to CP platforms and helped them prepare for coding contests and interviews.",
          color: "#D83B01",
        },
        {
          title: "Member, Cloud Team",
          company: "Google Developer Student Club - JMI",
          company_url: "https://gdsc.community.dev/",
          logo_path: "gdsclogo.webp",
          duration: "July 2021 - Present",
          location: "Delhi, India",
          description:
            "As part of the Cloud Team at GDSC JMI, I contributed to workshops on cloud infrastructure, GCP, and serverless applications. I also helped organize tech events, mentored juniors on deployment workflows, and participated in solution challenges.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I am looking forward to work upon and publish a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "lucifer_animated.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://anzal.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "337/215,Kazmain Road,Lucknow,Uttar Pradesh,India",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Sayyed+Chand/@26.8568043,80.8890082,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x399bfde18e0dcebb:0x4036ae5089f2ab65!2sKatra+Bizanbeg,+Chowk,+Lucknow,+Uttar+Pradesh+226003!3b1!8m2!3d26.8608076!4d80.9000331!3m4!1s0x399bfd24e8451297:0x9694d02b5584a30e!8m2!3d26.8567854!4d80.8977415",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9140459232",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
// competitiveSites,
//   degrees,
//   certifications,
// experience,
//   projectsHeader,
//   publicationsHeader,
