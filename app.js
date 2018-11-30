$.getJSON('data/usa_states.json', function(data){
  var div = $("#map");
  var map = new L.GeoJSONBoundedMap(div.get(0));
  var geojson = new L.GeoJSON(data);
  var mapUrl = "//cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png";
  var osmAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
  var bg = new L.TileLayer(mapUrl, {maxZoom: 18, attribution: osmAttribution, subdomains: 'abcd'});
  map.addLayer(bg);
  geojson.addTo(map);
  map.zoomToGeometries(geojson);
  $('#zoomToGeometries').click(function(e){
    map.zoomToGeometries(geojson);
  })
});
