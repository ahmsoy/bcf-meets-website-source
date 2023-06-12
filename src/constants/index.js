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
  education,
  disaster,
  environment,
  health,
  pt1,
  pt2,
  pt3,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Compassion",
    icon: web,
  },
  {
    title: "Community",
    icon: mobile,
  },
  {
    title: "Integrity",
    icon: backend,
  },
  {
    title: "Impact",
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
    title: "Raised Funds for Education:",
    company_name: "Community",
    icon: education,
    iconBg: "#383E56",
    date: "Community",
    points: [
      "Donated over $50,000 to support educational initiatives for underprivileged children.",
      "Provided scholarships to 30 students, enabling them to pursue their dreams of higher education.",
      "Partnered with local schools to enhance educational resources and infrastructure.",
      "Organized career guidance workshops, empowering students with valuable insights and mentorship.",
    ],
  },
  {
    title: "Disaster Relief Efforts:",
    company_name: "Compassion",
    icon: disaster,
    iconBg: "#E6DEDD",
    date: "Compassion",
    points: [
      "Responded swiftly to natural disasters, providing immediate aid and relief to affected regions.",
      "Distributed emergency supplies, including food, water, and shelter, to thousands of displaced families.",
      "Collaborated with relief organizations to rebuild homes, schools, and community centers.",
      "Supported long-term rehabilitation projects, offering trauma counseling and livelihood assistance.",
    ],
  },
  {
    title: "Environmental Conservation:",
    company_name: "Impact",
    icon: environment,
    iconBg: "#383E56",
    date: "Impact",
    points: [
      "Organized tree planting drives, contributing to the reforestation of deforested areas.",
      "Conducted awareness campaigns on eco-friendly practices, promoting sustainability and waste reduction.",
      "Implemented recycling programs, reducing carbon footprint and promoting a greener lifestyle.",
      "Supported wildlife preservation initiatives, including wildlife sanctuaries and conservation projects.",
    ],
  },
  {
    title: "Healthcare Initiatives:",
    company_name: "Integrity",
    icon: health,
    iconBg: "#E6DEDD",
    date: "Integrity",
    points: [
      "Partnered with healthcare facilities to provide medical assistance to marginalized communities.",
      "Conducted health camps, offering free check-ups and medical services to underserved populations.",
      "Supported the procurement of medical equipment for hospitals and clinics in low-income areas.",
      "Raised awareness about critical health issues through educational campaigns and workshops.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Joining this organization's car meets has not only allowed me to connect with fellow car enthusiasts, but it has also given me the opportunity to make a tangible difference in the lives of those affected by natural disasters.",
    name: "Sarah Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never experienced a car community so dedicated to charitable causes; it's incredible to see how we can come together, have fun, and support meaningful initiatives that positively impact communities in need.",
    name: "John Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Being a part of this organization's events has shown me the true power of combining our love for cars with a genuine desire to give back. It's a remarkable feeling to know that our passion can make a lasting impact on people's lives.",
    name: "Emily Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PT. 1",
    description:
      "An impactful gathering, our first meet served as a charity-driven event where car enthusiasts joined forces to raise vital funds for earthquake victims in Turkey and Syria, fostering a sense of solidarity and compassion within the automotive community while actively contributing to the relief and recovery efforts in the affected regions.",
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
    image: pt1,
    source_code_link: "https://github.com/",
  },
  {
    name: "PT. 2",
    description:
      "Driven by compassion, our second meet became a rallying point for car enthusiasts, pooling together resources to open a life-sustaining water well in Uganda and extend financial support to orphanages across Africa, exemplifying the power of collective action in bringing clean water and hope to those in need, while reinforcing the bonds of generosity and empathy within the car community.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pt2,
    source_code_link: "https://github.com/",
  },
  {
    name: "PT. 3",
    description:
      "Driving towards sight and empowerment, our third meet rallied car enthusiasts to raise funds that would transform the lives of thousands of people affected by cataracts, an incapacitating eye disease, by enabling access to life-changing surgeries and restoring their vision for a brighter future.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pt3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
