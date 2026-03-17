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
  jira,
  meta,
  starbucks,
  smartreach,
  holograph,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  confluence,
  bitbucket,
  linux,
  flutter,
  leaveapp,
  chi,
  tawuniya,
  avrioc,
  hyundai,
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
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Atlassian Product Expert",
    icon: mobile,
  },
  {
    title: "ITSM Process Implementation",
    icon: backend,
  },
  {
    title: "Web Developer",
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
    name: "Jira",
    icon: jira,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Confluence",
    icon: confluence,
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
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "Flutter",
    icon: flutter,
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
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Smart Reach",
    icon: smartreach,
    iconBg: "#383E56",
    date: "Aug 2022 - April 2023",
    points: [
      "Developing and maintaining web & mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Atlassian Expert",
    company_name: "Holograph Technologies",
    icon: holograph,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Administering and maintaining Atlassian tools including Jira, Confluence, and Bitbucket for enterprise clients.",
    "Designing and implementing ITSM processes in Jira Service Management such as Incident, Change, Problem, and Continual Improvement.",
    "Developing custom Atlassian Forge applications to extend Jira and Confluence capabilities with automation and custom UI modules.",
    "Customizing workflows, permissions, screens, and automations to align with organizational business processes.",
    "Integrating Atlassian tools with external systems and implementing DevOps practices using Bitbucket pipelines.",
    "Optimizing Jira Data Center performance by troubleshooting thread blockages, database queries, and automation scripts.",
    "Providing Atlassian product training and technical support to teams to improve collaboration and productivity."
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Employee Leave Management System",
    description:
      "Developed a cross-platform mobile application for managing employee leave requests and approvals. The application enables employees to apply for leave, track request status, and allows managers to review and approve requests efficiently. Implemented responsive UI components, integrated backend APIs, and ensured compatibility across both iOS and Android platforms using Flutter.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: leaveapp,
  },
  {
    name: "CHI (Council of Health Insurance)",
    description:
      "Implemented IT Service Management (ITSM) processes using Jira Service Management to streamline service operations. Configured workflows, request types, SLAs, automation rules, and dashboards to support processes such as Incident Management, Service Request Management, Problem Management, and Change Management. Also utilized Confluence for knowledge management and documentation.",
    tags: [
      {
        name: "jsm",
        color: "blue-text-gradient",
      },
      {
        name: "jira",
        color: "green-text-gradient",
      },
      {
        name: "confluence",
        color: "pink-text-gradient",
      },
    ],
    image: chi,
  },
  {
    name: "Tawuniya",
    description:
      "Led the implementation of ITSM practices within Jira Service Management to enhance service delivery and operational efficiency. Designed workflows, service portals, SLA configurations, and reporting dashboards. Collaborated with stakeholders to align ITSM processes with business requirements and improve team collaboration using Confluence.",
    tags: [
      {
        name: "jsm",
        color: "blue-text-gradient",
      },
      {
        name: "itsm",
        color: "green-text-gradient",
      },
      {
        name: "plugins",
        color: "pink-text-gradient",
      },
    ],
    image: tawuniya,
  },
  {
    name: "Avrioc Technologies",
    description:
      "Implemented and optimized ITSM processes in Jira Service Management Cloud (Including Assets), including workflow configuration, automation rules, custom fields, and service request management. Provided guidance on best practices for Jira administration and process standardization. Supported teams in adopting Atlassian tools to improve project tracking, collaboration, and service management.",
    tags: [
      {
        name: "jsm",
        color: "blue-text-gradient",
      },
      {
        name: "opsgenie",
        color: "green-text-gradient",
      },
      {
        name: "assets",
        color: "pink-text-gradient",
      },
    ],
    image: avrioc,
  },
  {
    name: "Hyundai Mobis",
    description:
      "Provided enterprise-level support for Atlassian Data Center applications deployed at the client location. Responsible for administration, troubleshooting, and maintenance of Jira, Confluence, Bitbucket, and Crowd. Managed Linux servers hosting Atlassian applications, performed upgrades, monitored system performance, and resolved application and infrastructure-related issues to ensure high availability and reliability.",
    tags: [
      {
        name: "jira_software",
        color: "blue-text-gradient",
      },
      {
        name: "eazyBI",
        color: "green-text-gradient",
      },
      {
        name: "scriptrunner",
        color: "pink-text-gradient",
      },
    ],
    image: hyundai,
  },
];

export { services, technologies, experiences, projects };
