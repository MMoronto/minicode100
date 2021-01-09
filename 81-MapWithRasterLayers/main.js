window.onload = init;

function init(){

  const map = new ol.Map({
      view: new ol.View({
        center: [-110.0, 40.0],
        zoom: 4,
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })   
      ],      
      target: 'js-map',
  })

  // Layer Group
  const layerGroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        zIndex: 0,
        visible: false
      })
    ]
  })
  map.addLayer(layerGroup);
}


