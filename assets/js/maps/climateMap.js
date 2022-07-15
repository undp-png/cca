const loadingIcon = document.getElementById('loading')
const legendDate = document.getElementById('legend-date')
const legendMax = document.getElementById('legend-max')


mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1wbmciLCJhIjoiY2t3azcycjRwMTRkczJubDV0MnYwaGxxdSJ9.t8Ig_87-rrruUWdJkSDoKw';
// Create a new map.
const coralMap = new mapboxgl.Map({
  container: 'coral-map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [149, -6.315],
  zoom: 5.3,
  maxBounds: ([[138.76, -12.47], [158.55, -0.811]])
});

coralMap.dragRotate.disable();
coralMap.touchZoomRotate.disableRotation();
coralMap.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');
coralMap.addControl(new mapboxgl.NavigationControl(), 'bottom-left');

const today = new Date()
const threeDaysAgo = new Date(today.setDate(today.getDate() - 3))
const formattedDate = threeDaysAgo.getFullYear() + '-' + (threeDaysAgo.getMonth() + 1) + '-' + threeDaysAgo.getDate()
var readableOption = { year: 'numeric', month: 'short', day: 'numeric' }
const readableDate = threeDaysAgo.toLocaleDateString("en", readableOption)


function getMinMaxVals(bbox) {
  var result = null;
  var scriptUrl = `https://pae-paha.pacioos.hawaii.edu/thredds/wms/dhw_5km?service=WMS&version=1.3.0&REQUEST=GetMetadata&item=minmax&LAYERS=CRW_HOTSPOT&BBOX=${bbox}&SRS=EPSG:4326&CRS=EPSG:4326&WIDTH=1061&HEIGHT=923&TIME=2022-6-17T12:00:00.000Z`
  $.ajax({
    url: scriptUrl,
    type: 'get',
    dataType: 'json',
    async: false,
    success: function (data) {
      result = data;
    }
  });
  return result;
}


coralMap.on('load', () => {

  const bounds = coralMap.getBounds()
  const bboxVals = Object.values(bounds._sw) + ',' + Object.values(bounds._ne)
  let bbox = bboxVals.toString()
  let minMax = getMinMaxVals(bbox)
  let max = minMax ? minMax.max : null

  if (max) {
    coralMap.addSource('coral', {
      'type': 'raster',
      'tiles': [
        `https://pae-paha.pacioos.hawaii.edu/thredds/wms/dhw_5km?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=CRW_HOTSPOT&STYLES=boxfill/rainbow&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=true&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&TIME=${formattedDate}T12:00:00.000Z&NUMCOLORBANDS=256&COLORSCALERANGE=0.1,${max}&ABOVEMAXCOLOR=extend&BELOWMINCOLOR=transparent`
      ],
      'tileSize': 256,
    });

    coralMap.addLayer({
      'id': 'coral',
      'source': 'coral',
      'type': 'raster'
    });

    legendDate.innerHTML = readableDate
    legendMax.innerHTML = max + '&#8451;'


    coralMap.on('render', () => {
      if (!coralMap.isSourceLoaded('coral')) return;
      loadingIcon.classList.add('hidden')

    });
  }

})

coralMap.on('zoom', () => {
  const bounds = coralMap.getBounds()
  const bboxVals = Object.values(bounds._sw) + ',' + Object.values(bounds._ne)
  let bbox = bboxVals.toString()
  let minMax = getMinMaxVals(bbox)
  let max = minMax ? minMax.max : 0

  if (max) {

    coralMap.removeLayer('coral')
    coralMap.removeSource('coral')

    coralMap.addSource('coral', {
      'type': 'raster',
      'tiles': [
        `https://pae-paha.pacioos.hawaii.edu/thredds/wms/dhw_5km?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=CRW_HOTSPOT&STYLES=boxfill/rainbow&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=true&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&TIME=${formattedDate}T12:00:00.000Z&NUMCOLORBANDS=256&COLORSCALERANGE=0.1,${max}&ABOVEMAXCOLOR=extend&BELOWMINCOLOR=transparent`
      ],
      'tileSize': 256,
    });

    coralMap.addLayer({
      'id': 'coral',
      'source': 'coral',
      'type': 'raster'
    });

    legendMax.innerHTML = max + '&#8451;'

    coralMap.on('render', () => {
      if (!coralMap.isSourceLoaded('coral')) return;
      loadingIcon.classList.add('hidden')

    });
  }
});
