window.onload = init;

function init(){
  var map = new ol.Map({
      target: 'map',
      layers: [
      new ol.layer.Tile({
        source: new ol.source.Stamen({layer: 'watercolor',})
      })    
       ],
      view: new ol.View({
      center: ol.proj.fromLonLat([-110.0, 40.0]),
      zoom: 10
      })
  });
}

var controlIds = ['hue', 'chroma', 'lightness'];
controlIds.forEach(function (id) {
  var control = document.getElementById(id);
  var output = document.getElementById(id + 'Out');
  control.addEventListener('input', function () {
    output.innerText = control.value;
    raster.changed();
  });
  output.innerText = control.value;
  controls[id] = control;
});

