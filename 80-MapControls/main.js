window.onload = init;

function init(){

  //Controls
  const fullScreenControl = new ol.control.FullScreen();
  const mousePositionControl = new ol.control.MousePosition();
  const overViewMapControl = new ol.control.OverviewMap({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ]
  })

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
      target: 'js-map',
      keyboardEventTarget: document,
      controls: ol.control.defaults().extend([
        fullScreenControl,
        mousePositionControl,
        overViewMapControl
      ])
  })

  console.log(ol.control.defaults())

  const popupContainerElement = document.getElementById('popup-coordinates')
  const popup = new ol.Overlay({
    element: popupContainerElement,
    positioning: 'center-right'
  })

  map.addOverlay(popup);

  map.on('click', function(e){
    const clickedCoordinate = e.coordinate;
    popup.setPosition(undefined);
    popup.setPosition(clickedCoordinate);
    popupContainerElement.innerHTML = clickedCoordinate;
  })


}


