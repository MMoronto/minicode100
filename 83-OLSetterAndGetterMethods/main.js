window.onload = init;
const attributionControl = new ol.control.Attribution({
  collapsible: true
})

function init(){

  const map = new ol.Map({
      view: new ol.View({
        center: [-110.0, 40.0],
        zoom: 4,
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
          zIndex: 0,
          visible: true,
          opacity: 0.8
        })   
      ],      
      target: 'js-map',
      controls: ol.control.defaults({attribution: false})
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
          imagerySet: 'AerialWithLabels' // CanvasGray, CanvasDark, Road, OrdnanceSurvey
        }),
        visible: false
      })
    ]
  })
  map.addLayer(layerGroup);

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{scale}.png'
    }),
    visible: false
  })

  map.addLayer(cartoDBBaseLayer);

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: false
  })
  map.addLayer(tileDebugLayer);

  // Stamen basemap Layer
  const stamenBaseLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels'
    }),
    visible: false
  })
  map.addLayer(stamenBaseLayer);

  const stamenBaseMapLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      // url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
      // url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
    }),
    visible: true
  })

  map.addLayer(stamenBaseMapLayer);

  // tile ArcGIS REST API Layer
  const tileArcGISLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      // url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer"
      url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer"
    }),
    visible: false
  })
  map.addLayer(tileArcGISLayer);

  // NOAA WMS Layer
  const NOAAWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      // url:'https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?',
      url:'https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer?',
      params: {
        LAYERS: 5,
        FORMAT: 'image/png',
        TRANSPARENT: true
      },
      // attributions: '<a href=https://nowcoast.noaa.gov/> © NOAA<a/>'
    })
  })
  map.addLayer(NOAAWMSLayer);
  NOAAWMSLayer.getSource().setAttributions('<a href=https://nowcoast.noaa.gov/> © NOAA<a/>');
  NOAAWMSLayer.set('maxZoom', 5)
}


