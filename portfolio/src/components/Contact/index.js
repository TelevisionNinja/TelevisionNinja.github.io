import {
    useEffect,
    useState
} from 'react';
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

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    });

    const index = 20;
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
    const contactSpans = contactArray.map((char, i) => (
        <AnimatedLetters
            letterClass={letterClass}
            strArray={[char]}
            idx={i + index}
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
                        I'm interested in professional software development. If you have any other requests or questions, don't hesitate to contact me.
                        <h2>
                            <a href="mailto:TelevisionNinja@gmail.com">TelevisionNinja@gmail.com</a>
                        </h2>
                    </p>
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
