import choroplethImg from '../assets/images/choropleth-project.webp'
import ghiProjectImg from '../assets/images/ghi-project.webp'
import tenziesImg from '../assets/images/tenzies-project.webp'
import heatmapImg from '../assets/images/heatmap-project.webp'

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
        description: "This is a Data Visualization certification project on freeCodeCamp built with the D3.js library.",
        skills: ["HTML", "CSS", "JavaScript", "D3.js"]
    },
    {
        title: "Heat Map",
        img: heatmapImg,
        url: "https://heatmap623.netlify.app/",
        github: "https://github.com/BSims623/fcc_choropleth",
        description: "This is a Data Visualization certification project on freeCodeCamp built with the D3.js library.",
        skills: ["HTML", "CSS", "JavaScript", "D3.js"]
    }
]