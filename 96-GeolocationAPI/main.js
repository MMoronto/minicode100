window.onload = init;

function init(){
  // EPSG:32632 for Nigeria
  proj4.defs("EPSG:32632","+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs");
  // EPSG:27700 for the UK
  proj4.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs");
  ol.proj.proj4.register(proj4);

  // Map Controls
  const attributionControl = new ol.control.Attribution({
    collapsible: true
  })

  const scaleLineControl = new ol.control.ScaleLine({
    units: 'us',
    minWidth: 200,
    bar: true,
    steps: 6,
    text: true
  }) 

  const overViewMapControl = new ol.control.OverviewMap({
    tipLabel: 'Custom Overview Map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ]
  })

  const zoomControl = new ol.control.Zoom()

  const mapControls = [attributionControl, scaleLineControl, overViewMapControl, zoomControl]

  const map = new ol.Map({
      view: new ol.View({
        // center: ol.proj.fromLonLat([7.395390, 9.071273], 'EPSG:32632'),
        center: [0,0],
        zoom: 3,
        rotation: 0,
        // projection: 'EPSG:32632',
        // extent: ol.proj.transformExtent([2.66, 4.15, 14.74, 13.99], 'EPSG:4326', 'EPSG:32632')
      }),      
      target: 'js-map',
      controls: ol.control.defaults({attribution: false}).extend(mapControls)
  })

  // Base Layers
  // Openstreet Map Standard
  const openstreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: false,
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
    visible: true,
    title: 'CartoDarkAll'
  })  

  // Stamen basemap Layer
  const StamenTerrainWithLabels = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
    }),
    visible: false,
    title: 'StamenTerrainWithLabels'
  })
  
  const StamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
    }),
    visible: false,
    title: 'StamenTerrain'
  })

  // Base Vector Layers
  //Vector Tile Layer OpenstreetMap
  const openstreetMapVectorTile =  new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
      url:'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=6ODXIGIZVeUbAIOgBEGa',
      format: new ol.format.MVT(),
      attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>'
    }),
    visible: false,
    title: 'VectorTileLayerOpenstreetMap'
  })

  const openstreetMapVectorTileStyles = 'https://api.maptiler.com/maps/8229f1f8-ae11-4822-be84-245abac1e1c8/style.json?key=6ODXIGIZVeUbAIOgBEGa';
  fetch(openstreetMapVectorTileStyles).then(function(response) {
    response.json().then(function(glStyle) {
      olms.applyStyle(openstreetMapVectorTile, glStyle, 'c8d958ad-ff6d-4678-9730-893520ecf11a');
    })
  })


  // Base Layer Group
  const baseLayerGroup = new ol.layer.Group({
    layers: [
      openstreetMapStandard, openstreetMapHumanitarian, bingMaps, cartoDBBaseLayer, StamenTerrainWithLabels, StamenTerrain, openstreetMapVectorTile
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
      })
    })
  }

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: false,
    title: 'TileDebugLayer'
  })

  // tile ArcGIS REST API Layer
  const tileArcGISLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer",
      attributions: 'Copyright© 2008, MSD, PVA, Louisville Water Company, Louisville Metro Government'
    }),
    visible: false,
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
    visible: false,
    title: 'NOAAWMSLayer'
  })

  // Static Image OpenstreetMap
  const openstreetMapFragmentStatic = new ol.layer.Image({
    source: new ol.source.ImageStatic({
      url: './data/static_images/openlayers_static_humanitarian.png',
      imageExtent: [33980.914615188725, -22317.830773413647, 2500565.598863683, 2501365.313604108],
      attributions: '<a href=https://www.openstreetmap.org/copyright/>© OpenStreetMap contributors<a/>' 
    }),
    visible: false,
    title: 'OpenstreetMapFragmentStatic'
  })  

  // Vector Layers
  // Styling of vector features
  // Point Style
  const pointStyle = new ol.style.Style({
    image: new ol.style.Circle({
      fill: new ol.style.Fill({
        color: [246, 11, 14, 1]
      }),
      radius: 8,
      stroke: new ol.style.Stroke({
        color: [246, 11, 14, 1],
        width: 2
      })
    })
  })
  // Line Style
  const lineStringStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: [59, 59, 59, 1],
      width: 2
    })
  })

  // Polygon Style
  // Blue polygons
  const blueCountriesStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: [56, 41, 194, 0.8]
    })
  })
  // Purple polygons
  const purpleCountriesStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: [164, 63, 204, 0.8]
    })
  })

  const ECOWASCountriesStyle = function(feature) {
    let geometryType = feature.getGeometry().getType();
    let incomeProperty = feature.get('income');

    // Text Styles
    let featureID = feature.get('ID');
    let featureIDString = featureID.toString();

    let textStyles = new ol.style.Style({
      text: new ol.style.Text({
        text: featureIDString,
        scale: 1.5,
        fill: new ol.style.Fill({
          color: [18, 19, 18, 1]
        })
      })
    });

    if(geometryType === 'Point'){
      feature.setStyle([pointStyle, textStyles]);
    }

    if(geometryType === 'LineString'){
      feature.setStyle([lineStringStyle, textStyles])
    }

    if (geometryType === 'Polygon'){
      if(incomeProperty === 'Blue'){
        feature.setStyle([blueCountriesStyle, textStyles])
      };
      if(incomeProperty === "Purple"){
        feature.setStyle([purpleCountriesStyle, textStyles])
      }
    }
  }

  //Nigerian Cities EPSG:27700
  const NigerianCities = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: './data/vector_data/nigerian_cities_EPSG_27700.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:27700'
      })
    }),
    visible: true,
    title: 'NigerianCities',
    style: new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: [15, 15, 15, 1]
        }),
        radius: 10,
        stroke: new ol.style.Stroke({
          color: [15, 15, 15, 1],
          width: 2
        })
      })
    })
  })
  map.addLayer(NigerianCities)

  // ECOWAS Countries GeoJSON VectorImage Layer
  const ECOWASCountriesGeoJSONVectorImage = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: './data/vector_data/ECOWAS_countries_GEOJSON.geojson',
      format: new ol.format.GeoJSON()
    }),
    visible: true,
    title: 'ECOWASCountriesGeoJSON',
    style: ECOWASCountriesStyle
  })

  // ECOWAS Countries KML
  const ECOWASCountriesKML = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: './data/vector_data/ECOWAS_countries_KML.kml',
      format: new ol.format.KML()
    }),
    visible: false,
    title: 'ECOWASCountriesKML'
  })

  // HeatMap
  const heatMapOnlineFBUsers = new ol.layer.Heatmap({
    source: new ol.source.Vector({
      url: './data/vector_data/onlineFBUsers.geojson',
      format: new ol.format.GeoJSON()
    }),
    radius: 20,
    blur: 12,
    gradient: ['#00f', '#0ff', '#0f0', '#ff0', '#000000'],
    title: 'OnlineFBUsers',
    visible: false
  })

  // Layer Group
  const layerGroup = new ol.layer.Group({
    layers:[
      tileDebugLayer, NOAAWMSLayer, tileArcGISLayer, openstreetMapFragmentStatic, ECOWASCountriesGeoJSONVectorImage, ECOWASCountriesKML, heatMapOnlineFBUsers
    ]
  })
  map.addLayer(layerGroup);

  // Layer Switcher Logic for Raster Tile Layers
  const tileRasterLayerElements = document.querySelectorAll('.sidebar > input[type=checkbox]')
  for(let tileRasterLayerElement of tileRasterLayerElements){
    tileRasterLayerElement.addEventListener('change',function(){
      let tileRasterLayerElementValue = this.value;
      let tileRasterLayer;

      layerGroup.getLayers().forEach(function(element, index, array){
        if(tileRasterLayerElementValue === element.get('title')){
          tileRasterLayer =  element;
        }
      })
      this.checked ? tileRasterLayer.setVisible(true) : tileRasterLayer.setVisible(false) 
    })
  }

  // Vector Feature Popup Information
  const overlayContainerElement = document.querySelector('.overlay-container')
  const overlayLayer = new ol.Overlay({
    element: overlayContainerElement
  })
  map.addOverlay(overlayLayer);
  const overlayFeatureName = document.getElementById('feature-name');
  const overlayFeatureAdditionInfo = document.getElementById('feature-additional-info');
  
  // Vector Feature Popup Logic
  map.on('click', function(e) {
    overlayLayer.setPosition(undefined);
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
      let clickedCoordinate = e.coordinate;
      let clickedFeatureName = feature.get('name');
      let clickedFeatureAdditionInfo = feature.get('additionalinfo');
      // if(clickedFeatureName && clickedFeatureAdditionInfo != undefined){
        overlayLayer.setPosition(clickedCoordinate);
        overlayFeatureName.innerHTML = clickedFeatureName;
        overlayFeatureAdditionInfo.innerHTML = clickedFeatureAdditionInfo;
      // }
      },
      {
        layerFilter: function(layerCandidate){
          return layerCandidate.get('title') === 'ECOWASCountriesGeoJSONVectorImage'
      }      
    })
  })
  
  // Select Interaction - For Styling Selected Points
  const selectInteractionV2 = new ol.interaction.Select();
  map.addInteraction(selectInteractionV2);
  selectInteractionV2.on('select', function(e){
    let selectedFeature = e.selected;
    if(e.selected.length > 0 && selectedFeature[0].getGeometry().getType() === 'Point'){
      selectedFeature[0].setStyle(
        new ol.style.Style({
              image: new ol.style.Circle({
                fill: new ol.style.Fill({
                  color: [247, 147, 11, 1]
                }),
                radius: 14,
                stroke: new ol.style.Stroke({
                  color: [247, 147, 11, 1],
                  width: 4
                })
              })
            })
          )
    };
  })

  // Switch ON/OFF Controls Logic
  const controlButtonElements = document.querySelectorAll('.sidebar > button[type=button]')
  console.log(controlButtonElements);
  for(let controlButton of controlButtonElements){
    controlButton.addEventListener('click', function(e){
      let buttonElement = e.target;
      if(buttonElement.className === 'btn-success'){
        map.getControls().forEach(function(controlElement){
          if(controlElement instanceof ol.control[buttonElement.innerHTML]){
            map.removeControl(controlElement);
          }
        })
        buttonElement.className = buttonElement.className.replace(
          'btn-success', 'btn-default'
        );
      } else {
        mapControls.forEach(function(controlElement){
          if(controlElement instanceof ol.control[buttonElement.innerHTML]){
            map.addControl(controlElement);
          }
        })
        buttonElement.className = buttonElement.className.replace(
          'btn-default', 'btn-success'
        );
      }
    })
  }

// Geolocation API
const viewProjection = map.getView().getProjection();
const geolocation = new ol.Geolocation({
  tracking: true,
  trackingOptions: {
    enableHeightAccuracy: true
  },
  projection: viewProjection
})

geolocation.on('change:position', function(e){
  console.log(e.target.getPosition);
})

}


