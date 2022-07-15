function activeThreat(val) {
  const threats = [1, 2, 3, 4, 5, 6, 7]
  const all_sdgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const threat_1_sdg = [2, 3, 5, 11, 14, 15, 16]
  const threat_2_sdg = [2, 3, 5, 10, 11, 12, 14, 15, 16]
  const threat_3_sdg = [2, 14, 15]
  const threat_4_sdg = [2, 14, 15]
  const threat_5_sdg = [14, 15]
  const threat_6_sdg = [2, 3, 11, 13]
  const threat_7_sdg = [2, 5, 11, 13, 14, 15, 16]

  const threat_1_areas = [
    'Biodiversity',
    'Climate change (loss of carbon sink)',
    'Clean water (loss of protected catchments, sedimentation)',
    'Food security (soil erosion, loss of forest resources, fish catch)',
    'Disasters (increased likelihood of landslides, floods, famine, fires)',
    'Increased conflict and women most affected'
  ]
  const threat_2_areas = [
    'Biodiversity',
    'Climate change (loss of carbon sink)',
    'Clean water (loss of protected catchments, sedimentation)',
    'Food security (soil erosion, loss of forest resources, fish catch)',
    'Disasters (increased likelihood of landslides, floods, famine, fires)',
    'Increased conflict and women most affected',
    'Pollution',
    'Greater inequality due to loss of land and basic sustenance'
  ]

  const threat_3_areas = [
    'Biodiversity',
    'Food security (decline in available hunting and fish catch)'
  ]

  const threat_4_areas = [
    'Biodiversity (competition, predation)',
    'Food security (loss of crops and native fish)'
  ]

  const threat_5_areas = [
    'Biodiversity (loss of knowledge and traditional sustainability measures)',
    'Loss of cultural identity and language'
  ]


  const threat_6_areas = [
    'Loss of clean water (loss of protected catchments, sedimentation)',
    'Climate change (emissions)',
    'Food security (loss of farming lands and fish catch)'
  ]

  const threat_7_areas = [
    'Biodiversity',
    'Climate change',
    'Food security (loss of cultivable land, fish catch)',
    'Disasters (increased likelihood of landslides, floods, famine, fires)',
    'Displacement, increased conflict and women most affected'
  ]


  var currentThreat = document.getElementById(`threat_${val}`).getAttribute('id')

  // remove all active sdgs on change
  all_sdgs.forEach((sdg) => {
    const sdgList = document.getElementById(`sdg_${sdg}`)
    sdgList.classList.remove('active');
  })

  threats.forEach((val) => {
    const threat = document.getElementById(`threat_${val}`)
    threat.classList.remove('active');

    // set active state on threats
    if (threat.id === currentThreat) {
      threat.classList.add('active');

      // set active sdgs
      const sdgList = 
      threat.id === 'threat_1' ? threat_1_sdg : 
      threat.id === 'threat_2' ? threat_2_sdg : 
      threat.id === 'threat_3' ? threat_3_sdg : 
      threat.id === 'threat_4' ? threat_4_sdg : 
      threat.id === 'threat_5' ? threat_5_sdg : 
      threat.id === 'threat_6' ? threat_6_sdg : 
      threat.id === 'threat_7' ? threat_7_sdg : ""

      sdgList.forEach((sdg) => {
        const sdgList = document.getElementById(`sdg_${sdg}`)
        sdgList.classList.add('active');
      })

      const innerText = 
      threat.id === 'threat_1' ? threat_1_areas : 
      threat.id === 'threat_2' ? threat_2_areas :
      threat.id === 'threat_3' ? threat_3_areas : 
      threat.id === 'threat_4' ? threat_4_areas : 
      threat.id === 'threat_5' ? threat_5_areas : 
      threat.id === 'threat_6' ? threat_6_areas : 
      threat.id === 'threat_7' ? threat_7_areas : ""

      var str = ''

      innerText.forEach(function(val) {
        str += '<li>'+ val + '</li>';
      }); 

      document.getElementById('areas-affected').innerHTML =  str
    }
  });

}
