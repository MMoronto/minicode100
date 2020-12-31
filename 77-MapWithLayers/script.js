window.onload = init;

function init(){
  var map = new ol.Map({
      target: 'map',
      layers: [
      new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor',})
      }),
      new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'terrain-labels'})
      })    
       ],
      view: new ol.View({
      center: ol.proj.fromLonLat([-110.0, 40.0]),
      zoom: 10
      })
  });
}
