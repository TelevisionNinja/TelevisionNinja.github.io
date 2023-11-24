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
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs
        .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
        .then(() => {
                alert('Message successfully sent!');
                window.location.reload(false);
            }, () => {
                alert('Failed to send the message, please try again');
            }
        );
    }

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
                        I am interested in professional software development. If you have any other requests or questions, don't hesitate to contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required/>
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Arkansas <br />
                    <br />
                    TelevisionNinja@gmail.com
                </div>
                <div className="map-wrap">
                    <MapContainer center={[34.74460280742035, -92.28834370644515]} zoom={5}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[34.74460280742035, -92.28834370644515]}>
                            <Popup>Located here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}
