define(['app', 'async!//maps.google.com/maps/api/js?v=3&sensor=false'], function (app) {
    'use strict';
    app.service('MapService', function () {
        var gmaps =  window.google.maps,
            mapOptions = {
                zoom: 15,
                draggable: false,
                mapTypeId: gmaps.MapTypeId.ROADMAP,
                panControl: false,
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false
            },
            latLng;

        this.initialize = function (scope, elementName) {

              var contentString = '<div id="content">'+
                  '<div id="siteNotice">'+
                  '</div>'+
                  '<h1 id="firstHeading" class="firstHeading">Digital Legend</h1>'+
                  '<div id="bodyContent">'+
                  '<p>Szklana 20 /18<br>26-600 Radom<br>Phone: (+48) 782910591<br>eMail: <a href="mailto:bisect@me.com">bisect@me.com.</a></p>'+
                  '</div>'+
                  '</div>';
              var infowindow = new google.maps.InfoWindow({
                  content: contentString
              });

              var lat = scope.latitude || 41.8902,
                  lng = scope.longitude || 12.4923,
                  map = new gmaps.Map(document.getElementById(elementName), mapOptions);

              // Set initial position
              if (!latLng) {
                  latLng = new gmaps.LatLng(lat, lng);
              } else {
                  scope.latitude = latLng.lat();
                  scope.longitude = latLng.lng();
              }
              map.setCenter(latLng);
              var marker = new gmaps.Marker({position: latLng, draggable: false, map: map, title: 'Digital Legend'});

              google.maps.event.addListener(marker, 'click', function() {
                  infowindow.open(map,marker);
              });
          };

      });
});