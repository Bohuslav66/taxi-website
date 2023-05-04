let map;

async function initMap() {

  const position = { lat: 50.32648274099709, lng: 13.544581084096682 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "map",
  });

  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Marker_1",
  });
}

initMap();