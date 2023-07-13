// genrate random data
const socials = {
  linkedin: "https://www.linkedin.com/in/brahimdidi/",
  github: "https://github.com/brahimdidi",
  twitter: "https://twitter.com/brahim",
  facebook: "https://facebook.com/brahim.didi.7",
};
const about = {
  clients: 34,
  experience: "2 years",
  projects: 80,
  aboutBio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
const experienceFrontend = [
  { field: "HTML", level: "Very Experienced" },
  { field: "CSS", level: "Experienced" },
  { field: "JAVASCRIPT", level: "Very Experienced" },
  { field: "REACT JS", level: " Very Experienced" },
  { field: "REDUX REDUX TOOLKIT", level: " Very Experienced" },
  { field: "REACT NATIVE", level: "Not Experienced" },
  { field: "FLUTTER", level: "Not Experienced" },
];
const experienceBackend = [
  { field: "Ruby on Rails", level: "Very Experienced" },
  { field: "POSTGRESQL", level: "Experienced" },
  { field: "FIREBASE", level: "Experienced" },
  { field: "C SHARP ASP.NET CORE", level: "Not Experienced" },
];
const services = [
  {
    title: "Web Development",
    list: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "REDUX REDUX TOOLKIT",
      "REACT NATIVE",
      "FLUTTER",
    ],
  },
  {
    title: "Backend Development",
    list: ["Ruby on Rails", "POSTGRESQL", "FIREBASE", "C SHARP ASP.NET CORE"],
  },
  { title: "Mobile Development", list: ["REACT NATIVE", "FLUTTER"] },
];
const portfolios = [
  {
    title: "school app",
    image: "https://l8.nu/rIKf",
    githubLink: "https://github.com/brahimdidi/Budget-app",
    liveDemo: "https://github.com/brahimdidi/Budget-app",
  },
  {
    title: "shopping website",
    image: "https://l8.nu/rIKf",
    githubLink: "https://github.com/brahimdidi/Budget-app",
    liveDemo: "https://github.com/brahimdidi/Budget-app",
  },
  {
    title: "live sport app",
    image: "https://l8.nu/rIKf",
    githubLink: "https://github.com/brahimdidi/Budget-app",
    liveDemo: "https://github.com/brahimdidi/Budget-app",
  },
];
const testimonials = [
  {
    name: "brahim didi",
    image: "https://l8.nu/rIKf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "bamo min",
    image: "https://l8.nu/rIKf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
const contactOptions = [
  // {type: 'whatsapp', value: '+222 42524652', link: 'https://wa.me/212666666666'},
  { type: "email", value: "brahimgb1team@gmail.com", link: "mailto:" },
  {
    type: "messenger",
    value: "brahim didi",
    link: "https://m.me/brahim.didi.7",
  },
];

const data = {
  socials,
  about,
  experienceFrontend,
  experienceBackend,
  services,
  portfolios,
  testimonials,
  contactOptions,
};

export default data;
