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
            description: "AI Targeting Drone",
            imgUrl: projectImage1
        },
        {
            title: "Cooperative Robotic Arm 3D Printing",
            description: "Cooperative Robotic Arm 3D Printing",
            imgUrl: projectImage2
        },
        {
            title: "AI Diffusion Model",
            description: "AI Diffusion Model",
            imgUrl: projectImage3
        },
        {
            title: "Discord Bot",
            description: "Discord Bot",
            imgUrl: projectImage4
        },
        {
            title: "Laser Tag System",
            description: "Laser Tag System",
            imgUrl: projectImage5
        },
        {
            title: "Search Engine",
            description: "Search Engine",
            imgUrl: projectImage6
        },
        {
            title: "Campus Map",
            description: "Campus Map",
            imgUrl: projectImage7
        },
        {
            title: "Basic CPU",
            description: "Basic CPU",
            imgUrl: projectImage8
        },
        {
            title: "MVC Mario",
            description: "MVC Mario",
            imgUrl: projectImage9
        }
    ];

    const index = 20;
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
    const portfolioSpans = portfolioArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index}
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
                </div>
                <div className="project">
                    {projectColumns}
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}
