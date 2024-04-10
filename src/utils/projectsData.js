import choroplethImg from '../assets/images/choropleth-project.webp'
import ghiProjectImg from '../assets/images/ghi-project.webp'
import tenziesImg from '../assets/images/tenzies-project.webp'
import heatmapImg from '../assets/images/heatmap-project.webp'

export const projectsData = [
    {
        title: "Tenzies",
        img: tenziesImg,
        alt: "Tenzies Landing page.",
        url: "https://tenzies-fxan.onrender.com/",
        ariaLabelWebLink: "Visit Tenzies website.",
        ariaLabelGitLink: "View Tenzies source code on github",
        github: "https://github.com/BSims623/Tenzies",
        description: "This is a dice game application I built using the MERN stack.",
        skills: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"]
    },
    {
        title: "Greenwood Home Inspection",
        img: ghiProjectImg,
        alt: "Greenwood Home Inspection landing page.",
        url: "https://www.greenwoodhomeinspection.com/",
        ariaLabelWebLink: "Visit Greenwood Home Inspection website.",
        ariaLabelGitLink: "View Greenwood Home Inspection source code on github",
        github: "https://github.com/BSims623/Greenwood_Home_Inspection",
        description: "This is a website I built for a home inspector. He wanted a simple website for his business.",
        skills: ["React", "Bootstrap"]
    },
    {
        title: "Choropleth Map",
        img: choroplethImg,
        alt: "Choropleth map project.",
        url: "https://choropleth623.netlify.app/",
        ariaLabelWebLink: "Visit Choropleth website.",
        ariaLabelGitLink: "View Choropleth source code on github",
        github: "https://github.com/BSims623/fcc_choropleth",
        description: "This is a Data Visualization certification project on freeCodeCamp built with the D3.js library.",
        skills: ["HTML", "CSS", "JavaScript", "D3.js"]
    },
    {
        title: "Heat Map",
        img: heatmapImg,
        alt: "Heatmap project.",
        url: "https://heatmap623.netlify.app/",
        ariaLabelWebLink: "Visit Heatmap website.",
        ariaLabelGitLink: "View Heatmap source code on github",
        github: "https://github.com/BSims623/fcc_choropleth",
        description: "This is a Data Visualization certification project on freeCodeCamp built with the D3.js library.",
        skills: ["HTML", "CSS", "JavaScript", "D3.js"]
    }
]