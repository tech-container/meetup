(function($) {
  "use strict"; 


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

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  $('body').scrollspy({
    target: '#sideNav'
  });

 
})(jQuery);

$(window).on('load', function(){

	$.getJSON('techcontainer.json', function(data) {
       $.each(data.upcomingEvents, function(i, f) {
         if(f.num_speakers==="2"){
          //  console.log("something");
          var event = document.createElement('div');
            event.setAttribute('class', 'event-item d-flex flex-column flex-md-row justify-content-between mb-5');
            event.innerHTML = `<div data-animatable="animatable" class="event-content">
                <h3 class="mb-1 mt-1" style="color: #BD5D3D">`+f.name+`</h3>
                <div class="social-icons2 subheading mb-1"><a class="" target="_blank" href="`+f.profile_link1+`">
                <i class="fab fa-linkedin-in"></i>
                </a>`+f.speaker1+`
                </div>
                <div class="social-icons2 subheading mb-3"><a class="" target="_blank" href="`+f.profile_link2+`">
                <i class="fab fa-linkedin-in"></i>
                </a>`+f.speaker2+`
                </div>
                
                <p>`+f.descr+`</p>
                <p>`+f.subDescr+`</p>
                <span class="text-dark">`+f.date+`</span><br><br>
                <div class="mt-2 mb-2">
                <a target="_blank" class="btn btn-success" href="https://www.meetup.com/tech-container-chennai/events/264117647">Participate Now</a>
                </div>
                <h4>Address</h4>
                <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
                <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
                <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
                </div>
                <div class="techcontainer-date text-md-right">
                <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/upcoming_`+i+`_speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
                <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/upcoming_`+i+`_speaker2.jpg" alt="Generic placeholder image" width="160" height="160">
                
                </div>`;
            var upcoming_events = document.getElementById('eventsList');
            upcoming_events.appendChild(event);
         }
         else{
          var event = document.createElement('div');
          event.setAttribute('class', 'event-item d-flex flex-column flex-md-row justify-content-between mb-5');
          event.innerHTML = `
              <div data-animatable="animatable" class="event-content">
                <h3 class="mb-1 mt-1" style="color: #BD5D3D">`+f.name+`</h3>
                <div class="social-icons2 subheading mb-3">
                  <a class="" target="_blank" href="`+f.profile_link1+`">
                    <i class="fab fa-linkedin-in"></i>
                  </a>`+f.speaker1+`
                </div>
                <p>`+f.descr+`</p>
                <p>`+f.subDescr+`</p>
                <span class="text-dark">`+f.date+`</span><br><br>
                <div class="mt-2 mb-2">
                  <a target="_blank" class="btn btn-success" href="https://www.meetup.com/tech-container-chennai/events/264117647">Participate Now</a>
                </div>
                <h4>Address</h4>
                <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
                <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
                <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
              </div>
              <div class="techcontainer-date text-md-right">
              <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/upcoming_`+i+`_speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
              </div>`;
          var upcoming_events = document.getElementById('eventsList');
          upcoming_events.appendChild(event);
         }
	        
     })
   });

    
	$.getJSON('techcontainer.json', function(data) {
       $.each(data.pastEvents, function(i, f) {
        if(f.num_speakers==="2"){
          // console.log("something");
         var event = document.createElement('div');
           event.setAttribute('class', 'event-item d-flex flex-column flex-md-row justify-content-between mb-5');
           event.innerHTML = `<div data-animatable="animatable" class="event-content">
               <h3 data-animatable="animatable" class="mb-1 mt-1" style="color: #BD5D3D">`+f.name+`</h3>
               <div data-animatable="animatable" class="social-icons2 subheading mb-1"><a class="" target="_blank" href="`+f.profile_link1+`">
               <i class="fab fa-linkedin-in"></i>
               </a>`+f.speaker1+`
               </div>
               <div class="social-icons2 subheading mb-3"><a class="" target="_blank" href="`+f.profile_link2+`">
               <i class="fab fa-linkedin-in"></i>
               </a>`+f.speaker2+`
               </div>
               
               <p>`+f.descr+`</p>
               <p>`+f.subDescr+`</p>
               <span class="text-dark">`+f.date+`</span><br><br>
               <div class="mt-2 mb-2">
               </div>
               <h4>Address</h4>
               <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
               <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
               <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
               </div>
               <div data-animatable="animatable" class="techcontainer-date text-md-right">
               <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/past_`+i+`_speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
               <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/past_`+i+`_speaker2.jpg" alt="Generic placeholder image" width="160" height="160">
               
               </div>`;
               var past_events = document.getElementById('pastEventsList');
               past_events.appendChild(event);
        }
        else{
         var event = document.createElement('div');
         event.setAttribute('class', 'event-item d-flex flex-column flex-md-row justify-content-between mb-5');
         event.innerHTML = `
             <div data-animatable="animatable" class="event-content">
               <h3 data-animatable="animatable" class="mb-1 mt-1" style="color: #BD5D3D">`+f.name+`</h3>
               <div data-animatable="animatable" class="social-icons2 subheading mb-3">
                 <a class="" target="_blank" href="`+f.profile_link1+`">
                   <i class="fab fa-linkedin-in"></i>
                 </a>`+f.speaker1+`
               </div>
               <p>`+f.descr+`</p>
               <p>`+f.subDescr+`</p>
               <span class="text-dark">`+f.date+`</span><br><br>
               <div class="mt-2 mb-2">
              
               </div>
               <h4>Address</h4>
               <p style="font-weight: bold" class="lead mb-1">Navis, Chennai</p>
               <p style="font-weight: bold" class="lead mb-5">9th floor, Zenith Phase III, Ascendas IT Park, Taramani, CSIR Road, Chennai</p>
               <hr class="bg-secondary d-none d-lg-block mb-0 ml-0">
             </div>
             <div data-animatable="animatable" class="techcontainer-date text-md-right">
             <img class="rounded-circle m-3" style="border: 3px solid grey;" src="img/past_`+i+`_speaker1.jpg" alt="Generic placeholder image" width="160" height="160">
             </div>`;
             var past_events = document.getElementById('pastEventsList');
             past_events.appendChild(event);
        }
            
     })
   });
    
});

