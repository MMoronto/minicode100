window.onload = init;

function init(){
  const map = new ol.Map({
      view: new ol.View({
        center: [-110.0, 40.0],
        zoom: 4,
        maxZoom: 6,
        minZoom: 2,
        rotation: 0.5
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })   
      ],      
      target: 'js-map'
  })
  
  const popupContainerElement = document.getElementById('popup-coordinates')
  const popup = new ol.Overlay({
    element: popupContainerElement
  })

  map.addOverlay(popup);

  map.on('click', function(e){
    console.log(e.coordinate);
  })
}


