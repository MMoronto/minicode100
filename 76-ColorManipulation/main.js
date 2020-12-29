import 'ol/ol.css';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import View from 'ol/View';
import {Raster as RasterSource, Stamen} from 'ol/source';


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




