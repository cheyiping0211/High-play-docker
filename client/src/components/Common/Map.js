import React, { useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { cameraIcon, activeCameraIcon } from 'util/mapUtil'

const Map = props => {
    const [group, setGroup] = useState();
    const { deviceId, sendDeviceId, dataList, maxZoom, minZoom, zoom, latlng, bounds } = props;

    useLayoutEffect(() => {
        setTimeout(() => {
            createMap();
        }, 500)
    }, [])

    useEffect(() => {
        const camera = dataList.filter((item) => item.deviceId === deviceId);
        group && Object.keys(group._layers).forEach((key, index) => {
            if (Array.isArray(camera) && camera.length >= 1 && index === camera[0].index) {
                group._layers[key].setIcon(activeCameraIcon)
                return;
            }
            group._layers[key].setIcon(cameraIcon)
        })
    }, [deviceId])

    const createMap = () => {
        const L = window.L;
        const mapBounds = bounds && bounds.flag ? L.latLngBounds(L.latLng(bounds.start.lat, bounds.start.lng), L.latLng(bounds.end.lat, bounds.end.lng)) : {};
        const map = L.map('map', {
            crs: L.CRS.Baidu,
            maxZoom,
            minZoom,
            zoom,
            attributionControl: false,
            center: [19, 167],
            maxBounds: mapBounds,
        });

        const markerGroup = L.layerGroup().addTo(map);
        L.layerGroup().addTo(map)
        for (let i = 0; i < latlng.length; i++) {
            latlng[i].deviceId = dataList[i].deviceId;
            const marker = new L.marker([latlng[i].lat, latlng[i].lng], {
                icon: cameraIcon,
            }).addTo(markerGroup).bindPopup('').openPopup();
            marker.on('click', () => sendDeviceId(latlng[i].deviceId));
        }
        map.addLayer(markerGroup);
        setGroup(markerGroup);

        L.tileLayer.baidu({ layer: 'custom', customid: 'midnight' }).addTo(map)
    }

    return (
        <div id="map" style={{
            padding: 0,
            margin: 0,
            height: '100%',
            width: '100%'
        }}>
        </div>
    )
}

Map.propTypes = {
    maxZoom: PropTypes.number.isRequired,
    minZoom: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    deviceId: PropTypes.string.isRequired,
    bounds: PropTypes.shape({
        flag: PropTypes.bool.isRequired,
        start: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired,
        end: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired
    }),
    latlng: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    sendCameraId: PropTypes.func,
};

export default Map;