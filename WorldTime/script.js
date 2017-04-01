(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var indiaTime = document.getElementById('current-time');
  var londonTime = document.getElementById('current-time_b');
  //var canvas = document.getElementById('mapspot');

	var d = new Date();

	indiaTime.innerHTML = d.toTimeString();
  londonTime.innerHTML = d.toGMTString();


});
})();

function initMap() {

  var map = new google.maps.Map(document.getElementById('mapspot'), {
   'center' : {lat: 12.972442, lng: 77.580643},
  //  'center' : latlong;
    'zoom' : 6,
    'mapTypeId' : google.maps.MapTypeId.ROADMAP,
    'draggable' : false,
    'scrollwheel' : false
  });
  //var latlong = {lat: 12.972442, lng: 77.580643};
  var marker = new google.maps.Marker({
    positon: {lat: 12.972442, lng: 77.580643},
     map: map
  });

/**
  var infoWindow = new google.maps.InfoWindow({map: map});
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
***/
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
