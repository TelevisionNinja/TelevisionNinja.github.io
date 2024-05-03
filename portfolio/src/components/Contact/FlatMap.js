import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';

const latitude = 34.74460280742035;
const longitude = -92.28834370644515;

export default function FlatMap() {
    return (
        <>
            <MapContainer center={[latitude, longitude]} zoom={5}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[latitude, longitude]}>
                    <Popup>Arkansas</Popup>
                </Marker>
            </MapContainer>
        </>
    );
}
