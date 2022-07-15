mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1wbmciLCJhIjoiY2t3azcycjRwMTRkczJubDV0MnYwaGxxdSJ9.t8Ig_87-rrruUWdJkSDoKw';
// Create a new forestMap.
const forestMap = new mapboxgl.Map({
  container: 'forests-map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [149, -6.315],
  zoom: 5.5
});

forestMap.addControl(new mapboxgl.FullscreenControl(), 'top-left');
forestMap.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
forestMap.dragRotate.disable();
forestMap.touchZoomRotate.disableRotation();

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');

forestMap.on('load', () => {
  const layers = forestMap.getStyle().layers;

  let firstSymbolId;
    for (const layer of layers) {
    if (layer.type === 'symbol') {
    firstSymbolId = layer.id;
    break;
    }
  }

  forestMap.addSource('satellite', {
    type: 'raster',
    url: 'mapbox://mapbox.satellite'
  });

  forestMap.addLayer({
      "id": "satellite",
      "type": "raster",
      "source": "satellite",
      'layout': {
        'visibility': 'none',
      }
  });


  forestMap.addSource('terrabase', {
    'type': 'raster',
    'tiles': [
      'https://png-geoportal.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode%3ATerrabase_Map&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&styles=&format=image%2Fpng&transparent=true'
      ],
      'tileSize': 256,
    });

  forestMap.addLayer({
    'id': 'terrabase',
    'source': 'terrabase',
    'type': 'raster',
    'layout': {
      'visibility': 'visible',
    }
  });

  forestMap.addSource('deforestation', {
    'type': 'raster',
    'tiles': [
      'https://png-geoportal.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode%3AHansen_GFC_2020_v1_8_lossyear_compressed&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&styles=&format=image%2Fpng&transparent=true'
      ],
      'tileSize': 256,
    });

  forestMap.addLayer({
    'id': 'deforestation',
    'source': 'deforestation',
    'type': 'raster'
  });

    slider.addEventListener('input', (e) => {
      forestMap.setPaintProperty(
      'deforestation',
      'raster-opacity',
      parseInt(e.target.value, 10) / 100
      );
      
      // Value indicator
      sliderValue.textContent = e.target.value + '%';
    });
  });

  function landUseToggle () {
    const visibility = forestMap.getLayoutProperty(
      'terrabase',
      'visibility'
    );
    if (visibility === 'visible') {
      forestMap.setLayoutProperty('terrabase', 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      forestMap.setLayoutProperty(
      'terrabase',
      'visibility',
      'visible'
      );
    }
  }

  function showSatellite () {
    const visibility = forestMap.getLayoutProperty(
      'satellite',
      'visibility'
    );
    if (visibility === 'visible') {
      forestMap.setLayoutProperty('satellite', 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      forestMap.setLayoutProperty(
      'satellite',
      'visibility',
      'visible'
      );
    }
  }