import * as Cesium from 'cesium';

// Cesium.Ion.defaultAccessToken = '';

const longitude = -92.28834370644515;
const latitude = 34.74460280742035;
const position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
const startingZoomDistance = 3000000;
const cameraPosition = Cesium.Cartesian3.fromDegrees(longitude, latitude, startingZoomDistance);

// point
const point = new Cesium.Entity({
    position: position,
    point: {
        pixelSize: 15,
        outlineWidth: 3,
        outlineColor: Cesium.Color.WHITE,
        color: Cesium.Color.fromBytes(0x5D, 0xC2, 0xFF),

        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // position is clamped to the terrain
        disableDepthTestDistance: 2 * 6.3781 * Math.pow(10, 6) // diameter of the earth in meters (using maximum radius), prevent clipping into globe
    },
    description: 'Arkansas',
    label: {
        text: 'I am located in\nArkansas',
        style: Cesium.LabelStyle.FILL,

        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -20),

        backgroundColor: Cesium.Color.fromBytes(0xFB, 0x4E, 0x4E),
        showBackground: true,
        backgroundPadding: new Cesium.Cartesian2(10, 10),

        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // position is clamped to the terrain
        disableDepthTestDistance: 2 * 6.3781 * Math.pow(10, 6) // diameter of the earth in meters (using maximum radius), prevent clipping into globe
    }
});

const buildings = await Cesium.createOsmBuildingsAsync();

const maximumZoomDistance = 10000000;
const selectedImagery = [
    'Bing Maps Aerial with Labels',
    'Open­Street­Map'
];

function createGlobeMap(id) {
    const viewer = new Cesium.Viewer(id, {
        geocoder: false, // search
        homeButton: false,
        shouldAnimate: true, // move time
        animation: false, // time interface
        sceneModePicker: false,
        baseLayerPicker: true,
        terrain: Cesium.Terrain.fromWorldTerrain({ requestWaterMask: false }),
        navigationHelpButton: false,
        timeline: false,
        fullscreenButton: false
    });

    // limit imagery layer options
    const imageryProviderViewModels = viewer.baseLayerPicker.viewModel.imageryProviderViewModels.filter(model => {
        return selectedImagery.includes(model.name);
    }).map(model => {
        return new Cesium.ProviderViewModel({
            name: model.name,
            tooltip: model.tooltip,
            iconUrl: model.iconUrl,
            creationFunction: model._creationCommand
        });
    });
    viewer.baseLayerPicker.viewModel.imageryProviderViewModels = imageryProviderViewModels;
    viewer.baseLayerPicker.viewModel.selectedImagery = imageryProviderViewModels[0];
    viewer.baseLayerPicker.viewModel.terrainProviderViewModels = [];

    // globe lighting
    viewer.scene.globe.enableLighting = true;

    // nighttime lights
    const blackMarble = Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3812), {
        maximumTerrainLevel: 5, // level to disappear
    });
    blackMarble.brightness = 2.0;
    blackMarble.nightAlpha = 0.5;
    blackMarble.dayAlpha = 0;
    viewer.scene.imageryLayers.add(blackMarble);

    // zoom limits
    viewer.scene.screenSpaceCameraController.maximumZoomDistance = maximumZoomDistance;
    viewer.scene.screenSpaceCameraController._zoomFactor = 4;

    // buildings
    viewer.scene.primitives.add(buildings);

    // camera animation
    viewer.camera.flyTo({
        destination: cameraPosition,
        duration: 5,
        maximumHeight: 100000000
    });

    // point
    viewer.entities.add(point);
}

export default function GlobeMap() {
    return (
        <>
            <div className="cesium" id="cesiumContainer" ref={() => createGlobeMap('cesiumContainer')}/>
        </>
    );
}
