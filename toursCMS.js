let map;

const center = { lat: {{wf {&quot;path&quot;:&quot;location-latitude-longitude-for-google-street-view&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}, lng: {{wf {&quot;path&quot;:&quot;location-longitude-for-google-street-view-maps&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }} };

document.getElementById("buttonprimaryschools").addEventListener("click", initMap);
document.getElementById("buttonsecondaryschools").addEventListener("click", initMap2);
document.getElementById("buttonuniversities").addEventListener("click", initMap3);
document.getElementById("buttonparks").addEventListener("click", initMap4);
document.getElementById("buttonmalls").addEventListener("click", initMap5);



function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("mapviewer"),
    placeTypePreferences: [
      { type: "primary_school", weight: 1 },
    ],
    maxPlaceCount: 24,
    directionsOptions: { origin: center },
      placeChooserViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {position: 'BLOCK_END'};
    }
  },
  placeDetailsViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {layoutMode: 'INFO_WINDOW'};
    }
  },
  });
  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });
    // Set inner map options.
  map.setOptions({
    center: center,
    zoom: 14,
  });
  
new google.maps.Marker({
  position: center,
  map: map,
  animation: google.maps.Animation.DROP,
  zIndex: 30,
});

}


function initMap2() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("mapviewer"),
    placeTypePreferences: [
      { type: "secondary_school", weight: 1 },
    ],
    maxPlaceCount: 24,
    directionsOptions: { origin: center },
      placeChooserViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {position: 'BLOCK_END'};
    }
  },
  placeDetailsViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {layoutMode: 'INFO_WINDOW'};
    }
  },
  });
  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });
    // Set inner map options.
  map.setOptions({
    center: center,
    zoom: 14,
  });
  
new google.maps.Marker({
  position: center,
  map: map,
  animation: google.maps.Animation.DROP,
  zIndex: 30,
});

}

function initMap3() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("mapviewer"),
    placeTypePreferences: [
      { type: "university", weight: 1 },
    ],
    maxPlaceCount: 24,
    directionsOptions: { origin: center },
      placeChooserViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {position: 'BLOCK_END'};
    }
  },
  placeDetailsViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {layoutMode: 'INFO_WINDOW'};
    }
  },
  });
  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });
    // Set inner map options.
  map.setOptions({
    center: center,
    zoom: 14,
  });
  
new google.maps.Marker({
  position: center,
  map: map,
  animation: google.maps.Animation.DROP,
  zIndex: 30,
});

}

function initMap4() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("mapviewer"),
    placeTypePreferences: [
      { type: "park", weight: 1 },
    ],
    maxPlaceCount: 24,
    directionsOptions: { origin: center },
      placeChooserViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {position: 'BLOCK_END'};
    }
  },
  placeDetailsViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {layoutMode: 'INFO_WINDOW'};
    }
  },
  });
  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });
    // Set inner map options.
  map.setOptions({
    center: center,
    zoom: 14,
  });
  
new google.maps.Marker({
  position: center,
  map: map,
  animation: google.maps.Animation.DROP,
  zIndex: 30,
});

}


function initMap5() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("mapviewer"),
    placeTypePreferences: [
      { type: "shopping_mall", weight: 1 },
    ],
    maxPlaceCount: 24,
    directionsOptions: { origin: center },
      placeChooserViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {position: 'BLOCK_END'};
    }
  },
  placeDetailsViewSetup: ({defaultLayoutMode}) => {
    if (defaultLayoutMode === 'SHEET') {
      return {layoutMode: 'INFO_WINDOW'};
    }
  },
  });
  map = localContextMapView.map;
  // Trigger hidePlaceDetailsView() with a click event handler on the inner map.
  map.addListener("click", () => {
    localContextMapView.hidePlaceDetailsView();
  });
    // Set inner map options.
  map.setOptions({
    center: center,
    zoom: 14,
  });
  
new google.maps.Marker({
  position: center,
  map: map,
  animation: google.maps.Animation.DROP,
  zIndex: 30,
});

}

