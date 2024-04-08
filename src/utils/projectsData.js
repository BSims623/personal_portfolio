import choroplethImg from '../assets/images/choropleth-project.png'
import ghiProjectImg from '../assets/images/ghi-project.png'
import tenziesImg from '../assets/images/tenzies-project.png'

export const projectsData = [
    {
        title: "Tenzies",
        img: tenziesImg,
        url: "https://tenzies-fxan.onrender.com/",
        github: "https://github.com/BSims623/Tenzies",
        description: "This is a dice game application I built using the MERN stack.",
        skills: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"]
    },
    {
        title: "Greenwood Home Inspection",
        img: ghiProjectImg,
        url: "https://www.greenwoodhomeinspection.com/",
        github: "https://github.com/BSims623/Greenwood_Home_Inspection",
        description: "This is a website I built for a home inspector. He wanted a simple website for his business.",
        skills: ["React", "Bootstrap"]
    },
    {
        title: "Choropleth Map",
        img: choroplethImg,
        url: "https://choropleth623.netlify.app/",
        github: "https://github.com/BSims623/fcc_choropleth",
        description: "This is one of the Data Visualization projects on freeCodeCamp using the D3.js library.",
        skills: ["HTML", "CSS", "JavaScript", "D3.js"]
    }
]