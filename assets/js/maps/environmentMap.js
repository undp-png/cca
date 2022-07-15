const eruptions = {
  "type": "FeatureCollection",
  "name": "eruptions_1920-2021",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    { "type": "Feature", "properties": { "name": "Bagana", "count": 18, "vei_avg": 2.33, "years": "1937, 1938, 1939, 1943, 1945, 1948, 1952, 1953, 1956, 1959, 1961, 1962, 1964, 1966, 1968, 1970, 1972, 2000" }, "geometry": { "type": "Point", "coordinates": [155.196, -6.137] } },
    { "type": "Feature", "properties": { "name": "Bam", "count": 9, "vei_avg": 1.89, "years": "1924, 1944, 1947, 1954, 1957, 1958, 1958, 1959, 1960" }, "geometry": { "type": "Point", "coordinates": [144.818, -3.613] } },
    { "type": "Feature", "properties": { "name": "Central Bismarck Sea", "count": 1, "vei_avg": 0.0, "years": "1972" }, "geometry": { "type": "Point", "coordinates": [147.78, -3.03] } },
    { "type": "Feature", "properties": { "name": "Kadovar", "count": 1, "vei_avg": 2.0, "years": "2018" }, "geometry": { "type": "Point", "coordinates": [144.588, -3.608] } },
    { "type": "Feature", "properties": { "name": "Karkar", "count": 6, "vei_avg": 2.17, "years": "1974, 1974, 1979, 2012, 2013, 2014" }, "geometry": { "type": "Point", "coordinates": [145.964, -4.649] } },
    { "type": "Feature", "properties": { "name": "Krummel-Garbuna-Welcker", "count": 3, "vei_avg": 1.67, "years": "2005, 2008, 2008" }, "geometry": { "type": "Point", "coordinates": [150.027, -5.416] } },
    { "type": "Feature", "properties": { "name": "Lamington", "count": 1, "vei_avg": 4.0, "years": "1951" }, "geometry": { "type": "Point", "coordinates": [148.15, -8.95] } },
    { "type": "Feature", "properties": { "name": "Langila", "count": 21, "vei_avg": 2.05, "years": "1954, 1955, 1955, 1956, 1958, 1960, 1962, 1964, 1967, 1969, 1970, 1971, 1973, 2002, 2004, 2004, 2005, 2006, 2009, 2012, 2015" }, "geometry": { "type": "Point", "coordinates": [148.42, -5.525] } },
    { "type": "Feature", "properties": { "name": "Long Island", "count": 9, "vei_avg": 2.0, "years": "1933, 1938, 1943, 1953, 1955, 1968, 1973, 1976, 1993" }, "geometry": { "type": "Point", "coordinates": [147.12, -5.358] } },
    { "type": "Feature", "properties": { "name": "Manam", "count": 27, "vei_avg": 2.22, "years": "1920, 1922, 1925, 1926, 1932, 1936, 1946, 1953, 1954, 1956, 1959, 1959, 1961, 1962, 1963, 1963, 1965, 1974, 2000, 2001, 2002, 2002, 2003, 2003, 2004, 2010, 2014" }, "geometry": { "type": "Point", "coordinates": [145.037, -4.08] } },
    { "type": "Feature", "properties": { "name": "Rabaul", "count": 13, "vei_avg": 2.38, "years": "1937, 1940, 1941, 1943, 1994, 1995, 2002, 2005, 2006, 2010, 2011, 2013, 2014" }, "geometry": { "type": "Point", "coordinates": [152.203, -4.271] } },
    { "type": "Feature", "properties": { "name": "Ritter Island", "count": 4, "vei_avg": 1.0, "years": "1972, 1974, 2006, 2007" }, "geometry": { "type": "Point", "coordinates": [148.115, -5.519] } },
    { "type": "Feature", "properties": { "name": "St. Andrew Strait", "count": 1, "vei_avg": 2.0, "years": "1953" }, "geometry": { "type": "Point", "coordinates": [147.35, -2.38] } },
    { "type": "Feature", "properties": { "name": "Ulawun", "count": 37, "vei_avg": 1.94, "years": "1927, 1941, 1958, 1960, 1963, 1967, 1970, 1973, 1978, 1980, 1983, 1984, 1984, 1985, 1989, 1993, 1994, 1999, 2000, 2001, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2010, 2012, 2012, 2013, 2016, 2017, 2018, 2018, 2019, 2021" }, "geometry": { "type": "Point", "coordinates": [151.33, -5.05] } },
    { "type": "Feature", "properties": { "name": "Waiowa", "count": 1, "vei_avg": 3.0, "years": "1943" }, "geometry": { "type": "Point", "coordinates": [149.075, -9.57] } },
    { "type": "Feature", "properties": { "name": "Witori", "count": 5, "vei_avg": 1.6, "years": "1920, 1933, 2002, 2007, 2012" }, "geometry": { "type": "Point", "coordinates": [150.516, -5.576] } }
  ]
}

mapboxgl.accessToken = 'pk.eyJ1IjoidW5kcC1wbmciLCJhIjoiY2t3azcycjRwMTRkczJubDV0MnYwaGxxdSJ9.t8Ig_87-rrruUWdJkSDoKw';
// Create a new map.
const enviroMap = new mapboxgl.Map({
  container: 'environment-map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [146, -6.315],
  zoom: 5.3
});

enviroMap.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');
enviroMap.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
enviroMap.dragRotate.disable();
enviroMap.touchZoomRotate.disableRotation();

enviroMap.on('load', () => {

  enviroMap.addSource('floods', {
    'type': 'raster',
    'tiles': [
      'https://datacore.unepgrid.ch/geoserver/ECO-DRR/wms?bbox={bbox-epsg-3857}&service=WMS&version=1.1.1&styles=&request=getMap&ZINDEX=10&srs=EPSG%3A3857&layers=fl_freq&format=image%2Fpng&transparent=true&height=512&width=512'
    ],
    'tileSize': 512,
  });

  enviroMap.addLayer({
    'id': 'floods',
    'type': 'raster',
    'source': 'floods',
    'layout': {
      'visibility': 'none'
    }
  }, 'admin-1-boundary');

  enviroMap.addSource('range-size', {
    'type': 'raster',
    'tiles': [
      'https://png-geoportal.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode%3Ageonode__png_wcmc_range_size_rarity&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&styles=&format=image%2Fpng&transparent=true'
    ],
    'tileSize': 512
  });

  enviroMap.addLayer({
    'id': 'range-size',
    'type': 'raster',
    'source': 'range-size',
    'layout': {
      'visibility': 'none'
    }
  }, 'admin-1-boundary');


  enviroMap.addSource('digital-elevation', {
    'type': 'raster',
    'tiles': [
      'https://datacore.unepgrid.ch/geoserver/MapX_UNDP/wms?bbox={bbox-epsg-3857}&service=WMS&version=1.1.1&styles=&request=GetMap&ZINDEX=10&srs=EPSG:3857&layers=dem90&format=image/png8&transparent=true&height=512&width=512'
    ],
    'tileSize': 512
  });

  enviroMap.addLayer({
    'id': 'digital-elevation',
    'type': 'raster',
    'source': 'digital-elevation',
    'layout': {
      'visibility': 'visible'
    }
  }, 'admin-1-boundary');


  enviroMap.addSource('volcanos', {
    'type': 'geojson',
    'data': eruptions
  })

  enviroMap.addLayer({
    'id': 'volcanos',
    'type': 'circle',
    'source': 'volcanos',
    'layout': {
      'visibility': 'none'
    },
    'paint': {
      'circle-color': [
        'interpolate',
        ['linear'],
        ['get', 'count'],
        1,
        '#e5b23b',
        40,
        '#991c1f',

      ],
      'circle-opacity': 0.75,
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['get', 'count'],
        1,
        8,
        4,
        10,
        9,
        12,
        14,
        14,
        19,
        16,
        24,
        18,
        29,
        20,
        34,
        22
      ]
    }
  })

  enviroMap.addLayer({
    'id': 'volcano-labels',
    'type': 'symbol',
    'source': 'volcanos',
    'layout': {
      'text-field': ["to-string", ['get', 'count']],
      'text-size': 12,
      'visibility': 'none'
    },
    'paint': {
      'text-color': 'rgba(255,255,255,0.8)'
    },
  });

  enviroMap.addSource('population', {
    'type': 'raster',
    'tiles': [
      'https://png-geoportal.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode%3Apng_pd_2020_1km_UNadj&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&styles=&format=image%2Fpng&transparent=true'
    ],
    'tileSize': 512
  });

  enviroMap.addLayer({
    'id': 'population',
    'type': 'raster',
    'source': 'population',
    'layout': {
      'visibility': 'none'
    }
  }, 'admin-1-boundary');

  enviroMap.addSource('coral', {
    'type': 'raster',
    'tiles': [
      'https://png-geoportal.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode%3Abenthic_png&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&styles=&format=image%2Fpng&transparent=true'
    ],
    'tileSize': 512
  });

  enviroMap.addLayer({
    'id': 'coral',
    'type': 'raster',
    'source': 'coral',
    'layout': {
      'visibility': 'none'
    }
  }, 'admin-1-boundary');


  const volcanoPopup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  })

  enviroMap.on('mouseenter', 'volcanos', (e) => {
    enviroMap.getCanvas().style.cursor = 'pointer';
    volcanoPopup
      .setLngLat(e.lngLat)
      .setHTML(`
      <div class="popup-content">
        <div class="popup-name">${e.features[0].properties.name}</div>
        <div class="popup-years">Eruption year${e.features[0].properties.count > 1 ? 's' : ''}: ${e.features[0].properties.years}</div>
        </div>
      `)
      .addTo(enviroMap)
  })
  enviroMap.on('mouseleave', 'volcanos', () => {
    enviroMap.getCanvas().style.cursor = '';
    volcanoPopup.remove();
  })

  const defaultHighlight = document.getElementById('digital-elevation-label')
  defaultHighlight.classList.add('text-yellow')
  defaultHighlight.classList.add('font-semibold')

});

const digitalElevationLegend = document.getElementById('digital-elevation-legend');
const volcanosLegend = document.getElementById('volcano-legend');
const legendRiverFlood = document.getElementById('floods-legend');
const rangeSizeLegendEl = document.getElementById('range-size-legend');
const populationLegend = document.getElementById('population-legend');
const coralLegend = document.getElementById('benthic-legend');

const mapAnchor = document.getElementById('environment-map');

function enviroLayerSelect(event) {
  let clickedLayer = event.value

  let layers = [
    {
      id: "volcanos",
      legend: null,
      labelid: "volcanos-label"
    },
    {
      id: "digital-elevation",
      legend: digitalElevationLegend,
      labelid: "digital-elevation-label"
    }, 
    {
      id: "floods",
      legend: legendRiverFlood,
      labelid: "floods-label"
    },
    {
      id: "range-size",
      legend: rangeSizeLegendEl,
      labelid: "range-size-label"
    },
    {
      id: "population",
      legend: populationLegend,
      labelid: "population-label"
    },
    {
      id: "coral",
      legend: coralLegend,
      labelid: "coral-label"
    }
  ]

  // remove visibility of all layers
  layers.forEach((layer) => {
    if (enviroMap.getLayer(layer.id)) {
      enviroMap.setLayoutProperty(layer.id, 'visibility', 'none')
      enviroMap.setLayoutProperty('volcano-labels', 'visibility', 'none')
    }
  })
  // only show the currently selected layer
  if (enviroMap.getLayer(clickedLayer)) {
    enviroMap.setLayoutProperty(clickedLayer, 'visibility', 'visible')
    if (clickedLayer === 'volcanos') {
      enviroMap.setLayoutProperty('volcano-labels', 'visibility', 'visible')
    }
  }


  layers.forEach((val) => {
    if (val.legend) {
      val.legend.style.display = 'none'
    }
  })

  let currentLegend = layers.find(x => x.id === clickedLayer)
  if (currentLegend.legend) {
    currentLegend.legend.style.display = 'block'
  }

  // account for label highlight if selected through text

  if (event.id) {
    const checkedItem = document.getElementById(clickedLayer + '-label')
  
    layers.forEach((val) => {
      if (val.labelid) {
        const label = document.getElementById(val.labelid)
        label.classList.remove('text-yellow')
      }
    })
    checkedItem.classList.add('peer-checked:text-yellow')
  }

  if (!event.id) {
    const checkedItem = document.getElementById(clickedLayer + '-label')
    mapAnchor.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

    layers.forEach((val) => {
      if (val.labelid) {
        const label = document.getElementById(val.labelid)
        label.classList.remove('text-yellow')
        label.classList.remove('peer-checked:text-yellow')
      }
    })
  
    checkedItem.classList.add('text-yellow')
  }
}


