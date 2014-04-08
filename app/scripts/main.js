/* jshint undef: true, unused: true global google */
'use strict';

var orgs = [
    {
        name: 'The Victory Center',
        lat: 41.677112,
        lng: -83.674458
    },
    {
        name: 'Hunters Helping Hands',
        lat: 41.257394,
        lng: -81.271068
    },
    {
        name: 'The Centers',
        lat: 41.503377,
        lng: -81.655449
    },
    {
        name: '4 Paws for Ability',
        lat: 39.694229,
        lng: -83.874300
    },
    {
        name: 'Hope for Javier',
        lat: 40.905485,
        lng: -73.130082
    },
    {
        name: 'Jewish Big Brother Big Sister Association',
        lat: 41.486798,
        lng: -81.525695
    },
    {
        name: 'RePlay for Kids',
        lat: 41.120673,
        lng: -81.879608
    },
    {
        name: 'Budget Meals',
        lat: 40.167338,
        lng: -83.078621
    },
    {
        name: 'Family Promise of Lorain County',
        lat: 41.360227,
        lng: -82.107466
    }

];

function initialize() {
    'use strict';
    var image = {
        url: '/images/map-marker.png',
        size: new google.maps.Size(20, 42),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(10, 42)
    };

    var mapOptions = {
        zoom: 5,
        scrollwheel: false,
        center: new google.maps.LatLng(40.868715, -82.316758),
        icon: image,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var mapStyles = [
      {
    "featureType": "administrative.locality",
    "stylers": [
      { "visibility": "off" },
      { "lightness": -100 },
      { "saturation": -60 },
      { "gamma": 1.91 }
    ]
  },{
    "stylers": [
      { "gamma": 0.93 },
      { "weight": 0.6 },
      { "saturation": -38 }
    ]
  }
    ];

    var styledMap = new google.maps.StyledMapType(mapStyles, {name: 'Drive Days'});

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var markers = [];

    $.each(orgs, function(i,e) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(e.lat, e.lng),
            map: map,
            icon: image,
            title: e.name
        });
        markers.push(marker);
    });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
