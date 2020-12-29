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




