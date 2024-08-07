import GlobeMap from './GlobeMap.js';
import FlatMap from './FlatMap.js';

function isWebGLAvailable() {
    try {
        const canvas = document.createElement('canvas');
        return Boolean(window.WebGLRenderingContext) && (Boolean(canvas.getContext('webgl')) || Boolean(canvas.getContext('experimental-webgl')));
    }
    catch(e) {
        return false;
    }
}

export default function Map() {
    if (isWebGLAvailable()) {
        return (
            <>
                <div className="map-wrap">
                    <GlobeMap/>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="info-map">
                I am located in Arkansas
            </div>
            <div className="map-wrap">
                <FlatMap/>
            </div>
        </>
    );
}
