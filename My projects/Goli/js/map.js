
 function initMap() {
        var uluru = {lat: 13.009866, lng: 76.098980};
        var map = new google.maps.Map(document.getElementById('map'), {
         
          zoom: 4
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }