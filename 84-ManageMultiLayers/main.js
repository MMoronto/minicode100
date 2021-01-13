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
          zIndex: 1,
          visible: true,
          opacity: 1
        })   
      ],      
      target: 'js-map',
      controls: ol.control.defaults({attribution: false}).extend([attributionControl])
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
        extent: [12400753.6, -5658730.0, 17174426.3, -980228.5],
        opacity: 0.1
      }),
      // Bing Maps Basemap Layer
      new ol.layer.Tile({
        source: new ol.source.BingMaps({
          key: "Air0OfLruh0B_W9_cIKwJ1FxgL1pOOgaDY7LwPeYTQy5ts_W0DQJXiGdxS-Qahyn",
          imagerySet: 'AerialWithLabels' // CanvasGray, CanvasDark, Road, OrdnanceSurvey
        }),
        visible: true
      })
    ]
  })
  map.addLayer(layerGroup);

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{scale}.png',
      attributions: '© CARTO'
    }),
    visible: true
  })
  map.addLayer(cartoDBBaseLayer);

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: true
  })
  map.addLayer(tileDebugLayer);

  // Stamen basemap Layer
  const stamenBaseLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: true
  })
  map.addLayer(stamenBaseLayer);

  const stamenBaseMapLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: true
  })
  map.addLayer(stamenBaseMapLayer);

  // tile ArcGIS REST API Layer
  const tileArcGISLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer",
      attributions: 'Copyright© 2008, MSD, PVA, Louisville Water Company, Louisville Metro Government'
    }),
    visible: true
  })
  map.addLayer(tileArcGISLayer);

  // NOAA WMS Layer
  const NOAAWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
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


