import cameraPng from "assets/image/camera.png"
import activeCameraPng from "assets/image/activeCamera.png"

const cameraIcon = L.icon({
    iconUrl: cameraPng,
    iconSize: [27, 32],
    iconAnchor: [13, 21]
})

const activeCameraIcon = L.icon({
    iconUrl: activeCameraPng,
    iconSize: [40, 46],
    iconAnchor: [13, 21]
})

const trafficMapConfig = {
    maxZoom: 18,
    minZoom: 18,
    zoom: 18,
    latlng: [
        { lat: 23.140833, lng: 113.305649, },
        { lat: 23.138604, lng: 113.306835, },
        { lat: 23.138535, lng: 113.305821, },
        { lat: 23.138055, lng: 113.305821, }
    ],
    bounds: {
        flag: true,
        start: { lat: 23.138055, lng: 113.305649, },
        end: { lat: 23.140833, lng: 113.306835, }
    }
}

const overviewMapConfig = {
    maxZoom: 18,
    minZoom: 6,
    zoom: 12,
    latlng: [
        { lat: 23.140833, lng: 113.305649, },
        { lat: 23.138604, lng: 113.306835, },
        { lat: 23.138535, lng: 113.305821, },
        { lat: 23.138055, lng: 113.305821, }
    ],
}

export { cameraIcon, activeCameraIcon, trafficMapConfig, overviewMapConfig }

