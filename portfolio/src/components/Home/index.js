import {
    useEffect,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';

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

    const startingIndex = 20;
    const index2 = startingIndex + greeting.length - 1;
    const index3 = index2 + nameArray.length - 1;

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, (index2 + index3 + jobArray.length - startingIndex) / 15 * 1000 + 0.75 * 1000); // + 0.75 bc of the animation delay and duration
    });

    return (
        <>
            <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={greeting}
                        idx={startingIndex}
                    />
                    <br/>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={index2}
                    />
                    <br/>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={index3}
                    />
                </h1>
                <h2>Software Engineer, Computer Scientist</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
            </div>

            <Loader type="pacman" />
        </>
    );
}
