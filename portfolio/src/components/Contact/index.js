import { useState } from 'react';
import Loader from 'react-loaders';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');

    const index = 20; // start after loader
    const contactArray = [
        'C',
        'o',
        'n',
        't',
        'a',
        'c',
        't',
        ' ',
        'm',
        'e'
    ];
    // (starting delay index / 15 second delay + 0.75 second delay) * 1000 ms
    // delays come from animated letters scss
    const delay = ((index + contactArray.length - 1) / 15 + 0.75) * 1000;
    const contactSpans = contactArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index}
            delay={delay}
        />
    ));

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        {contactSpans}
                    </h1>
                    <p>
                        I'm interested in professional software development and engineering. If you have any other requests or questions, don't hesitate to contact me.
                        <h2>
                            <a href="mailto:StanleyC.Van@gmail.com">StanleyC.Van@gmail.com</a>
                        </h2>
                    </p>
                </div>
                <div className="info-map">
                    I am located in Arkansas, USA
                </div>
                <div className="map-wrap">
                    <MapContainer center={[34.74460280742035, -92.28834370644515]} zoom={5}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[34.74460280742035, -92.28834370644515]}>
                            <Popup>Arkansas</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}
