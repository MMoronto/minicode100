import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import View from 'ol/View';
import {Raster as RasterSource, Stamen} from 'ol/source';

/**
 * Color manipulation functions below are adapted from
 * https://github.com/d3/d3-color.
 */
 var Xn = 0.95047;
 var Yn = 1;
 var Zn = 1.08883;
 var t0 = 4 / 29;
 var t1 = 6 / 29;
 var t2 = 3 * t1 * t1;
 var t3 = t1 * t1 * t1;
 var twoPi = 2 * Math.PI;

 /**
  * Convert an RGB pixel into an HCL pixel.
  * @param {Array<number>} pixel A pixel in RGB space.
  * @return {Array<number>} A pixel in HCL space.
  */
 function rgb2hcl(pixel) {
    var red = rgb2xyz(pixel[0]);
    var green = rgb2xyz(pixel[1]);
    var blue = rgb2xyz(pixel[2]);

    var x = xyz2lab(
      (0.4124564 * red + 0.3575761 * green + 0.1804375 * blue) / Xn
      );
    var y = xyz2lab(
      (0.2126729 * red + 0.7151522 * green + 0.072175 * blue) / Xn
      );
    var z = xyz2lab(
      (0.0193339 * red + 0.119192 * green + 0.9503041 * blue) / Xn
      );

    var l = 116 * y - 16;
    var a = 500 * (x - y);
    var b = 200 * (y - z);

    var c = Math.sqrt(a * a + b * b);
    var h = Math.atan2(b, a);
    if (h < 0) {
      h += twoPi;
    }

    pixel[0] = h;
    pixel[1] = c;
    pixel[2] = l;

    return pixel;
 }

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
 }

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);  
 }

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x, 0.055) / 1.055, 2.4);
 }

function xyz2rgb(x) {
  return (
    255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055)
  );
 }

var raster = new RasterSource({
  sources: [
    new Stamen({
      layer: 'watercolor',
    }) ],
  operation: function (pixels, data) {
    var hcl = rgb2hcl(pixels[0]);

    var h = hcl[0] + (Math.PI * data.hue) / 180;
    if (h < 0) {
      h += twoPi;
    } else if (h > twoPi) {
      h -= twoPi;
    }
    hcl[0] = h;

    hcl[1] *= data.chroma / 100;
    hcl[2] *= data.lightness / 100;

    return hcl2rgb(hcl);
  },
  lib: {
    rgb2hcl: rgb2hcl,
    hcl2rgb: hcl2rgb,
    rgb2xyz: rgb2xyz,
    lab2xyz: lab2xyz,
    xyz2lab: xyz2lab,
    xuyz2rgb: xyz2rgb,
    Xn: Xn,
    Yn: Yn,
    Zn: Zn,
    t0: t0,
    t1: t1,
    t2: t2,
    t3: t3,
    twoPi: twoPi,
  },
});

var controls = {};

raster.on('beforeoperations', function (event) {
  var data = event.data;
  for (var id in controls) {
    data[id] = Number(controls[id].value);
  }
});

var map = new Map({
  layers: [
    new TImageLayer({
      source: raster,
    }) ],
  target: 'map',
  view: new View({
    center: [0, 2500000],
    zoom: 2,
    maxZoom: 18,
  }),
});




