﻿
//请引入 proj4.js 和 proj4leaflet.js
L.CRS.Baidu = new L.Proj.CRS('EPSG:900913', '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
    resolutions: function () {
        level = 19
        var res = [];
        res[0] = Math.pow(2, 18);
        for (var i = 1; i < level; i++) {
            res[i] = Math.pow(2, (18 - i))
        }
        return res;
    }(),
    origin: [0, 0],
    bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
});



L.tileLayer.baidu = function (option) {
    option = option || {};

    var layer;

    //可选值：dark,midnight,grayscale,hardedge,light,redalert,googlelite,grassgreen,pink,darkgreen,bluish
    option.customid = option.customid || 'midnight';
    layer = L.tileLayer('http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid=' + option.customid, {
        name: option.name, subdomains: "012", tms: true
    });

    return layer;
};