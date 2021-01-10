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
          zIndex: 0,
          visible: false,
          extent: [283239.2900911544, 432768.68455942767, 1647964.7192883273, 1590293.5028198026],
          opacity: 0.1
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
        visible: false,
        extent: [283239.2900911544, 432768.68455942767, 1647964.7192883273, 1590293.5028198026],
        opacity: 0
      }),
      // Bing Maps Basemap Layer
      new ol.layer.Tile({
        source: new ol.source.BingMaps({
          key: "Air0OfLruh0B_W9_cIKwJ1FxgL1pOOgaDY7LwPeYTQy5ts_W0DQJXiGdxS-Qahyn",
          imagerySet: 'AerialWithLabels' // Road, CanvasDark, CanvasGray, OrdnanceSurvey
        }),
        visible: true
      })
    ]
  })
  map.addLayer(layerGroup);

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{scale}.png'
    }),
    visible: true
  })

  map.addLayer(cartoDBBaseLayer);

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug()
  })
  map.addLayer(tileDebugLayer);
}


