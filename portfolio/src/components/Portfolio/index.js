import ProjectCard from "./ProjectCard";
import projectImage1 from '../../assets/images/projects/drone.gif';
import projectImage2 from '../../assets/images/projects/3dp.png';
import projectImage3 from '../../assets/images/projects/diffusion.gif';
import projectImage4 from '../../assets/images/projects/discord.png';
import projectImage5 from '../../assets/images/projects/laserTag.jpg';
import projectImage6 from '../../assets/images/projects/search.png';
import projectImage7 from '../../assets/images/projects/maps.png';
import projectImage8 from '../../assets/images/projects/cpu.jpg';
import projectImage9 from '../../assets/images/projects/mario.png';
import projectImage10 from '../../assets/images/projects/mandelbrot.png';
import projectImage11 from '../../assets/images/projects/flocking.png';
import {
    Row,
    Col
} from "react-bootstrap";
import 'animate.css';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';


export default function Portfolio() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const projects = [
        {
            title: "AI Targeting Drone",
            description: "Firmware and simulation of an AI targeting drone",
            imgUrl: projectImage1,
            link: "https://github.com/TelevisionNinja/hunter-killer-drone"
        },
        {
            title: "Cooperative Robotic Arm 3D Printing",
            description: "Cooperative 3D printing with industrial robotic arms",
            imgUrl: projectImage2,
            link: "https://gitlab.com/capstone-team16/ambots"
        },
        {
            title: "AI Diffusion Model",
            description: "Denoising diffusion probabilistic model using PyTorch",
            imgUrl: projectImage3,
            link: "https://github.com/TelevisionNinja/Denoising-Diffusion-Probabilistic-Model"
        },
        {
            title: "Discord Bot",
            description: "Advanced Discord chatbot",
            imgUrl: projectImage4,
            link: "https://github.com/TelevisionNinja/Row-Bot"
        },
        {
            title: "Laser Tag System",
            description: "A laser tag frontend and backend system",
            imgUrl: projectImage5,
            link: "https://github.com/nesrak1/LaserTagThing"
        },
        {
            title: "Search Engine",
            description: "A search engine using information retrieval techniques",
            imgUrl: projectImage6,
            link: "https://github.com/TelevisionNinja/search-engine"
        },
        {
            title: "Mandelbrot Set",
            description: "The Mandelbrot set rendered using p5.js and shaders",
            imgUrl: projectImage10,
            link: "https://github.com/TelevisionNinja/mandelbrot-set"
        },
        {
            title: "Flocking Simulation",
            description: "Flocking simulation with boids and octrees rendered using p5.js",
            imgUrl: projectImage11,
            link: "https://github.com/TelevisionNinja/Flocking-Simulation"
        },
        {
            title: "Campus Map",
            description: "A map of the university campus",
            imgUrl: projectImage7,
            link: "https://github.com/TelevisionNinja/maps"
        },
        {
            title: "Basic CPU",
            description: "A basic MIPS-like single cycle CPU",
            imgUrl: projectImage8,
            link: "https://github.com/TelevisionNinja/basic-cpu"
        },
        {
            title: "MVC Mario",
            description: "A mario like game with a model view controller architecture",
            imgUrl: projectImage9,
            link: "https://github.com/TelevisionNinja/mvc-mario"
        }
    ];

    const index = 20; // start after loader
    const portfolioArray = [
        'P',
        'r',
        'o',
        'j',
        'e',
        'c',
        't',
        's'
    ];
    // (starting delay index / 15 second delay + 0.75 second delay) * 1000 ms
    // delays come from animated letters scss
    const delay = ((index + portfolioArray.length - 1) / 15 + 0.75) * 1000;
    const portfolioSpans = portfolioArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index}
            delay={delay}
        />
    ));

    const projectsPerColumn = 3;
    const projectColumns = [];

    for (let i = 0; i < projects.length; i += projectsPerColumn) {
        const columnProjects = projects.slice(i, i + projectsPerColumn);
        const projectRows = columnProjects.map((project, index) => (
            <Col key={index} md={4} sm={12}>
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                    link={project.link}
                />
            </Col>
        ));

        projectColumns.push(
            <Row key={i}>
                {projectRows}
            </Row>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        {portfolioSpans}
                    </h1>
                    <p align="center">
                        Check out my GitHub and GitLab for more projects!
                    </p>
                </div>
                <div className="project">
                    {projectColumns}
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}
