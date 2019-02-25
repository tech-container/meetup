(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('body').scrollspy({
    target: '#sideNav',
    offset: 100
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

 
})(jQuery); // End of use strict

$(window).on('load', function(){
//   var config = {
//     apiKey: "AIzaSyBZyYFQn5iE5X2h_Pgddxe4WUSkCfzUdG0",
//     authDomain: "techtainer-27401.firebaseapp.com",
//     databaseURL: "https://techtainer-27401.firebaseio.com",
//     projectId: "techtainer-27401",
//     storageBucket: "techtainer-27401.appspot.com",
//     messagingSenderId: "35378115146"
//   };
//   firebase.initializeApp(config);

//   var dbRefObj = firebase.database().ref().child('events');
//   var dbRefObj2 = firebase.database().ref().child('past-events');

//   dbRefObj.on('child_added', function(snap){
//       var event = document.createElement('div');
//       event.setAttribute('class', 'resume-item d-flex flex-column flex-md-row justify-content-between mb-5');
//       event.innerHTML = `<div class="resume-content">
//         <h3 class="mb-0" style="color: #BD5D3D">`+snap.val().name+`</h3>
//         <div class="social-icons2 subheading mb-3"><a target="_blank" class="" href="`+snap.val().profile_link+`">
//         <i class="fab fa-linkedin-in"></i>
//         </a>`+snap.val().speaker+ ` | ` + snap.val().company +`

//         </div>
//         <p>`+snap.val().descr+`</p>
//         <span class="text-dark">`+snap.val().date+`</span><br><br>
//         <h4>Address</h4>
//         <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
//         <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
//         <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
//         </div>
//         <div class="resume-date text-md-right">

//         <img class="rounded-circle" style="border: 3px solid grey;" src="img/speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
//         </div>`;

//     var upcoming_events = document.getElementById('eventsList');
//     upcoming_events.appendChild(event);
//   })
	$.getJSON('techcontainer.json', function(data) {
       $.each(data.events, function(i, f) {
	        var event = document.createElement('div');
event.setAttribute('class', 'resume-item d-flex flex-column flex-md-row justify-content-between mb-5');
         event.innerHTML = `<div class="resume-content">
        <h3 class="mb-1 mt-1" style="color: #BD5D3D">`+f.name+`</h3>
        <div class="social-icons2 subheading mb-3"><a class="" href="#">
        <i class="fab fa-linkedin-in"></i>
        </a>`+f.speaker+ ` | ` + f.company +`

        </div>
        <p>`+f.descr+`</p>
        <span class="text-dark">`+f.date+`</span><br><br>
        <h4>Address</h4>
        <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
        <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
        <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
        </div>
        <div class="resume-date text-md-right">

        <img class="rounded-circle" style="border: 3px solid grey;" src="img/speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
        </div>`;
		    var upcoming_events = document.getElementById('eventsList');
    upcoming_events.appendChild(event);
     })
 
   });
//   dbRefObj2.on('child_added', function(snap){
//       var past_event = document.createElement('div');
//       past_event.setAttribute('class','resume-item d-flex flex-column flex-md-row justify-content-between' );
//       past_event.innerHTML = `<div class="resume-content">
//       <h3 class="mb-0 mt-4 " style="color:#bd5d3d">`+snap.val().name+`</h3>
//       <div class="social-icons2 subheading mb-3">    <a class="" href="#">
//           <i class="fab fa-linkedin-in"></i>
//           </a>`+snap.val().speaker+ ` | ` + snap.val().company+` 
        
//       </div>

//       <p>`+snap.val().descr+`</p>
//       <span class="text-dark">`+snap.val().date+`</span><br><br>
//       <h4>Address</h4>
//       <p style="font-weight: bolder;" class="lead mb-1">Navis India Technologies, Chennai</p>
//         <p style="font-weight: bold;" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
//       <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">

//       </div>
//       <div class="resume-date text-md-right">
//       <img class="rounded-circle" style="border: 3px solid grey;" src="img/speaker1.jpg" alt="Generic placeholder image" width="140" height="140">
//       </div>`;
//       var past_events = document.getElementById('pastEventsList');
//       past_events.appendChild(past_event);
//   })
});

