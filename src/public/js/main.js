const urlISSGeoLocation = 'http://api.open-notify.org/iss-now.json';
let map, marker, tempMarker = null
let defaultLatitude = -17.402430521844348;
let defaultLongitude = -66.15768144757541;
let latitude, longitude = 0.0;
let trackin = [];
let defaultTracking = [];


let points = [
    { point: { lat: -17.404928516258646, lng: -66.15800331259474}},
    { point: { lat: -17.4076005134309, lng: -66.15718792111277 }},
    { point: { lat: -17.409996063925124, lng: -66.15681241191021}},
    { point: { lat: -17.412749884437048, lng: -66.15952680724004}},
];

$(document).ready(function () {
    console.log("Start App");
    init();
    loadPoints();
    updateMap();
});
function init(){
    map = L.map('map').setView([defaultLatitude, defaultLongitude], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    var marker = L.marker([defaultLatitude, defaultLongitude]).addTo(map);

    map.locate({enableHightAccuracy:true});
    map.on('locationfound', event =>{
        const myCoords = [event.latlng.lat, event.latlng.lng];
        const auxiliarMarker = L.marker(myCoords);
        auxiliarMarker.bindPopup("My position"); 
        map.addLayer(auxiliarMarker);
    });
}

function loadPoints(){    
    defaultTracking.push([defaultLatitude,defaultLongitude]);
    drawCircle([defaultLatitude,defaultLongitude],'red','#A9465F',20);

    for (let i = 0; i < points.length; i++) {
            var marker = L.marker([points[i].point.lat, points[i].point.lng]).addTo(map);  
            defaultTracking.push([points[i].point.lat, points[i].point.lng])            
    }
    var polyline = L.polyline(defaultTracking, {color: 'orange'}).addTo(map);
    drawCircle(defaultTracking[points.length],'green','#46A949',20);
}

function drawCircle(point, color,fillColor,radius){
    var circle = L.circle(point, {
        color: color,
        fillColor: fillColor,
        fillOpacity: 0.5,
        radius: radius
    }).addTo(map);
}

function updateMap(){
  $.ajax({
    url: urlISSGeoLocation,
    type: 'GET',
    success: (data) => {
        const {latitude,longitude} = data.iss_position
        if (tempMarker) {
            map.removeLayer(tempMarker)
        }else{
            drawCircle([latitude,longitude],'red','#A9465F',100)
        }
          
          console.log(latitude, longitude)
          tempMarker = L.marker([latitude, longitude]).addTo(map);
          trackin.push([latitude,longitude]);
          
          var polyline = L.polyline(trackin, {color: 'orange'}).addTo(map);
    }
  })
  setTimeout(updateMap, 3000);
}





