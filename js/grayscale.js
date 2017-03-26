/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//unused quotes. Leaving in case they could be useful later.
// var quotes = [["Oh my god that was terrifying. Do it again.", "David Rappaport"],
//               ["Did you know that you can buy 2 gallons of 8 molar HCl at Home Depot at 8:50 on a Tuesday night?", "Wyatt Peck"],
//               ["The location of this meeting and the location of my body will not be identical at any point during the time this meeting is occuring.", "Jordan Buchman"],
//               ["If plan A didn't work, the alphabet has 25 more letters.", "Unknown"],
//               ["While math is my jam, robotics is the bread to make the jam useful.", "Rahul Krishnan"],
//               ["If we win, how big will the team dinner be?", "Jackson Chen"],
//               ["Ultra precise is more than just two words. It's a lifestyle.", "Adam Chehadi"],
//               ["Robotics is like riding a bike. You have to keep moving forward.", "Rahul Krishnan"]];

//Returns a shuffled array. Used for carousel randomization.
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// jQuery to collapse the navbar on scroll and for parallax
var scrollAdjustments = function() {
  var scroll = $(window).scrollTop();
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
  if (scroll >= 600) {
    $("#image-parallax").css("position", "absolute");
  } else {
    $("#image-parallax").css("position", "fixed");
  }
  // Parallax for the intro image.
  // $(".intro").css("background-position", "50% " + (0.5*scroll) + "px");
};

$(window).scroll(function() {
  scrollAdjustments();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.btn-circle').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 500
        }, 1500, 'easeInOutQuad');
        event.preventDefault();
    });

    //Immediately check the window's scroll
    scrollAdjustments();

    setTimeout(function() {
      var currImage = 0;

      // Intro image shifting
      var descriptions = ["a team", "learners", "builders", "planners", "coders", "cheerers", "workers", "knights", "doers", "technicians", "thinkers", "scouters", "2036"];

      //shuffle that array
      descriptions = shuffle(descriptions);

      //make sure it doesn't start with 2036 again
      if(descriptions[0] === "2036") {
        descriptions = descriptions.push(descriptions.shift());
      }

      $("#image-parallax").css("background-image", "url('img/new-intro/" + (descriptions[currImage]) +".jpg')");

      //there's a transition delay going on so the images can have time to load
      setTimeout(function() {
        $('#we-are').animate({'opacity': 0}, 500, function () {
          $("#we-are-inner").html(descriptions[currImage]);
        }).animate({'opacity': 1}, 1000);
      }, 1500);

      //go through each image
      setInterval(function() {
        currImage++;
        if(currImage >= descriptions.length) {
          currImage = 0;
        }
        $("#image-parallax").css("background-image", "url('img/new-intro/" + (descriptions[currImage]) +".jpg')");
        setTimeout(function() {
          $('#we-are').animate({'opacity': 0}, 500, function () {
            $("#we-are-inner").html(descriptions[currImage]);
          }).animate({'opacity': 1}, 1000);
        }, 1500);
      }, 5000);
    }, 2000);

    //Change the about image to a random x-coordinate
    //Therefore users can see everyone!
    $(".about-section").css("background-position",
                            (Math.random()*window.innerHeight*1.25 - window.innerHeight*0.25) + "px 50%");
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);
//
// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 15,
//
//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York
//
//         // Disables the default Google Maps UI components
//         disableDefaultUI: true,
//         scrollwheel: false,
//         draggable: false,
//
//         // How you would like to style the map.
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 29
//             }, {
//                 "weight": 0.2
//             }]
//         }, {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 18
//             }]
//         }, {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 21
//             }]
//         }, {
//             "elementType": "labels.text.stroke",
//             "stylers": [{
//                 "visibility": "on"
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "elementType": "labels.text.fill",
//             "stylers": [{
//                 "saturation": 36
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 40
//             }]
//         }, {
//             "elementType": "labels.icon",
//             "stylers": [{
//                 "visibility": "off"
//             }]
//         }, {
//             "featureType": "transit",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 19
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }, {
//                 "weight": 1.2
//             }]
//         }]
//     };
//
//     // Get the HTML DOM element that will contain your map
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');
//
//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);
//
//     // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//     var image = 'img/map-marker.png';
//     var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//     var beachMarker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: image
//     });
// }
