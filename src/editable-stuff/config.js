// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#46fa76, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Christian",
  middleName: "",
  lastName: "Gerhardt",
  message: " I type stuff and hope it works.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/clgerhardt",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/christiangerhardt/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://twitter.com/gurgledirt",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/christian_lieble/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Thou das not know me?",
  imageLink: require("../editable-stuff/IMG_9591.JPG"),
  imageSize: 375,
  message:
    "My name is Christian Gerhardt. I am a software engineer with a passion for learning. I am a graduate from the Valdosta State University - Valdosta Georgia with a degree in Computer Science. Majority of my professional experience is in full-stack development with personal projects in varying fields. I am currently working as a software engineer at T-Mobile.",
  resume: "https://docs.google.com/document/d/1xPKbItByUj3E_8FxA09k4tSqwPGL4TFaZyMGXXCavkA/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "clgerhardt", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [
    'better-twitch-sidebar',
    'Senior-Seminar-Travelly-Ruby-Frontend',
    'Senior-Seminar-Travelly-Ruby-Backend',
    'manga-app-backend',
    'Group_chat',
    'ComputerGraphics',
    'CG_Final_Project'
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/IMG_9591.JPG"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/IMG_9591.JPG"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 70 },
    { name: "SQL", value: 55 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 25 },
    { name: "JavaScript", value: 90 },
    { name: "Typescript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 75 },
    { name: "C#", value: 20 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// computer graphics

const computerGraphics = {
  show: true,
  heading: "Computer Graphics",
  assignments: []
}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Game Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lieblegerhardt@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/tmobile.png'),
      date: 'Oct 2020 – Present',
    },
    {
      role: 'Application Developer',
      companylogo: require('../assets/img/hntb.png'),
      date: 'May 2018 – Oct 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, computerGraphics};
