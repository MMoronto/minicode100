window.onload = init;
// Attribution Control
const attributionControl = new ol.control.Attribution({
  collapsible: true
})

function init(){

  const map = new ol.Map({
      view: new ol.View({
        center: [-110.0, 40.0],
        zoom: 4,
      }),      
      target: 'js-map',
      controls: ol.control.defaults({attribution: false}).extend([attributionControl])
  })

  // Base Layers
  // Openstreet Map Standard
  const openstreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard'
  }) 

  // Openstreet Map Humanitarian
  const openstreetMapHumanitarian =  new ol.layer.Tile({
    source: new ol.source.OSM({
      url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    }),
    visible: false,
    title: 'OSMHumanitarian'
  })

  // Bing Maps Basemap Layer
  const bingMaps = new ol.layer.Tile({
    source: new ol.source.BingMaps({
      key: "Air0OfLruh0B_W9_cIKwJ1FxgL1pOOgaDY7LwPeYTQy5ts_W0DQJXiGdxS-Qahyn",
      imagerySet: 'AerialWithLabels' // CanvasGray, CanvasDark, Road, OrdnanceSurvey
    }),
    visible: false,
    title: 'BingMaps'
  })

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{scale}.png',
      attributions: '© CARTO'
    }),
    visible: false,
    title: 'CartoDarkAll'
  })  

  // Stamen basemap Layer
  const StamenTerrainWithLabels = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: 'StamenTerrainWithLabels'
  })
  
  const StamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: 'StamenTerrain'
  })

  // Base Vector Layers
  //Vector Tile Layer OpenstreetMap
  const openStreetrMapVectorTile =  new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
      url:'https://api.maptiler.com/tiles/v3-4326/{z}/{x}/{y}.pbf?key=6ODXIGIZVeUbAIOgBEGa',
      format: new ol.format.MVT(),
      attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }),
    visible: true
    // title:
  })

  // Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [
      openstreetMapStandard, openstreetMapHumanitarian, bingMaps, cartoDBBaseLayer, StamenTerrainWithLabels, StamenTerrain
    ]
  })
  map.addLayer(baseLayerGroup);

  // Layer Switcher Logic for BaseLayers
  const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]')
  for(let baseLayerElement of baseLayerElements){
    baseLayerElement.addEventListener('change', function(){
      let baseLayerElementValue = this.value;
      baseLayerGroup.getLayers().forEach(function(element, index, array){
        let baseLayerName = element.get('title');
        element.setVisible(baseLayerName === baseLayerElementValue)
        // console.log('baseLayerName: ' + baseLayerName, 'baseLayerElementValue: ' + baseLayerElementValue);
        // console.log(baseLayerName === baseLayerElementValue);
        // console.log(element.get('title'), element.get('visible'));
      })
    })
  }

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: true,
    title: 'TileDebugLayer'
  })

  // tile ArcGIS REST API Layer
  const tileArcGISLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer",
      attributions: 'Copyright© 2008, MSD, PVA, Louisville Water Company, Louisville Metro Government'
    }),
    visible: true,
    title: 'TileArcGISLayer'
  })

  // NOAA WMS Layer
  const NOAAWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url:'https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer?',
      params: {
        LAYERS: 5,
        FORMAT: 'image/png',
        TRANSPARENT: true
      },
      attributions: '<a href=https://nowcoast.noaa.gov/> © NOAA<a/>'
    }),
    visible: true,
    title: 'NOAAWMSLayer'
  })

  // Static Image OpenstreetMap
  const openstreetMapFragmentStatic = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: './data/static_images/openlayers_static_humanitarian.png',
      imageExtent: [33980.914615188725, -22317.830773413647, 2500565.598863683, 2501365.313604108],
      attributions: '<a href=https://www.openstreetmap.org/copyright/>© OpenStreetMap contributors<a/>' 
    }),
    visible: true,
    title: 'OpenstreetMapFragmentStatic'
  })  

  // Raster Tile Layer Group
  const rasterLayerGroup = new ol.layer.Group({
    layers:[
      tileDebugLayer, NOAAWMSLayer, tileArcGISLayer, openstreetMapFragmentStatic
    ]
  })
  map.addLayer(rasterLayerGroup);

  // Layer Switcher Logic for Raster Tile Layers
  const tileRasterLayerElements = document.querySelectorAll('.sidebar > input[type=checkbox]')
  for(let tileRasterLayerElement of tileRasterLayerElements){
    tileRasterLayerElement.addEventListener('change',function(){
      let tileRasterLayerElementValue = this.value;
      let tileRasterLayer;

      rasterLayerGroup.getLayers().forEach(function(element, index, array){
        if(tileRasterLayerElementValue === element.get('title')){
          tileRasterLayer =  element;
        }
      })
      this.checked ? tileRasterLayer.setVisible(true) : tileRasterLayer.setVisible(false) 
    })
  }

}


