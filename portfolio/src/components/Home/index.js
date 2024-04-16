import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import LogoImage from '../../assets/images/logo.png';

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const greeting = [
        'H',
        'i'
    ];

    const nameArray = [
        'I',
        '\'',
        'm',
        ' ',
        'T',
        'e',
        'l',
        'e',
        'v',
        'i',
        's',
        'i',
        'o',
        'n',
        'N',
        'i',
        'n',
        'j',
        'a'
    ];
    const jobArray = [
        'A',
        ' ',
        'S',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r'
    ];

    const startingIndex = 20; // start after loader
    const index2 = startingIndex + greeting.length - 1;
    const index3 = index2 + nameArray.length - 1;
    // (starting delay index / 15 second delay + 0.75 second delay + 0.75 second delay) * 1000 ms
    // delays come from animated letters scss
    const delay = (index3 / 15 + 0.75 + 0.75) * 1000;

    const greetingSpans = greeting.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + startingIndex}
            delay={delay}
        />
    ));
    const nameSpans = nameArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index2}
            delay={delay}
        />
    ));
    const jobSpans = jobArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index3}
            delay={delay}
        />
    ));

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        {greetingSpans}
                        <br/>
                        {nameSpans}
                        <br/>
                        {jobSpans}
                    </h1>
                    <h2>B.S. in Computer Science, Minor in Mathematics</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div>
                    <img
                        className="container home-page logo-container solid-logo"
                        src={LogoImage}
                        alt="Software Engineer"
                    />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}
