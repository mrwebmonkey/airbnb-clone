const map = document.getElementById("map");
const lat = map.dataset.lat;
const lon = map.dataset.lon;
const popup = map.dataset.popup;

function showMap(lon, lat, popup) {
  var map = L.map("map").setView([lat, lon], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(`<b>${popup}</b>`).openPopup();
}
showMap(lon, lat, popup);