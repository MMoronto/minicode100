window.onload = init;

function init(){

  const map = new ol.Map({
      view: new ol.View({
        center: [-110.0, 40.0],
        zoom: 4,
        // extent: [283239.2900911544, 432768.68455942767, 1647964.7192883273, 1590293.5028198026]
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
          zIndex: 1,
          visible: true,
          extent: [283239.2900911544, 432768.68455942767, 1647964.7192883273, 1590293.5028198026],
          opacity: 0.5
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
        visible: true,
        extent: [283239.2900911544, 432768.68455942767, 1647964.7192883273, 1590293.5028198026],
        opacity: 0.5
      })
    ]
  })
  map.addLayer(layerGroup);

  map.on('click', function(e){
    console.log(e.coordinate);
  })
}


