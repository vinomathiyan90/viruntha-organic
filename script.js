// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  window.onscroll = function () { changeNavbarColor() };
  
  function changeNavbarColor() {
      var navbar = document.querySelector("#navbarScroll");
      var logo = document.querySelector("#navlogo");
      var navlinks = document.querySelectorAll('.navbar-nav .nav-link');
      var icons = document.querySelectorAll('.navbar-icon')
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          navbar.classList.add("scrolled");
          logo.classList.add("scrolled");
         navlinks.forEach(link=>link.classList.add("scrolled"))
         icons.forEach(icon=>icon.classList.add("scrolled"))
  
      }
       else {
          navbar.classList.remove("scrolled");
          logo.classList.remove("scrolled");
         navlinks.forEach(link=>link.classList.remove("scrolled"))
         icons.forEach(icon=>icon.classList.remove("scrolled"))
      }
      
        
  
  }
  
  document.addEventListener('DOMContentLoaded', function () {
      const dropdowns = document.querySelectorAll('.dropdown');
    
      dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        let closeTimeout; // Variable to hold the timeout ID
    
        // Show dropdown on mouse enter
        dropdown.addEventListener('mouseenter', function () {
          clearTimeout(closeTimeout); // Clear any pending timeout to close
          menu.classList.add('show'); // Add the show class immediately
        });
    
        // Hide dropdown with delay on mouse leave
        dropdown.addEventListener('mouseleave', function () {
          closeTimeout = setTimeout(() => {
            menu.classList.remove('show'); // Remove the show class after delay
          }, 300); // Adjust delay time in milliseconds (e.g., 500ms)
        });
      });
    });
    
   let myVideo = document.querySelector("#videoLoaded");
  
   var videoimg = document.querySelector("#videoimg")
   var farmcontent = document.querySelector("#farmcontent")
   myVideo.addEventListener('loadeddata',function(){
    if(myVideo.autoplay == true){
      videoimg.classList.add("added")
      farmcontent.classList.add("added")
      // alert("worked autoplay")
    }
    else{
      videoimg.classList.remove("added")
      farmcontent.classList.remove("added")
    }
    // h2.style.display ="block";
    // alert("video is loaded")
   })
  
  
  // document.getElementById("Toggle").addEventListener("click", function () {
  //     const navList = document.querySelector(".nav-list");
  //     navList.classList.toggle("show"); // Toggle the visibility of the nav items
  // });
  
  
  
  // document.addEventListener('DOMContentLoaded', () => {
  //     const navbar = document.querySelector('#navbarScroll');
  //     let lastScrollY = 0;
    
  //     const handleScroll = () => {
  //       if (window.scrollY > lastScrollY) {
  //         // Scrolling down: Hide the navbar
  //         navbar.classList.add('hidden');
  //       } else {
  //         // Scrolling up: Show the navbar
  //         navbar.classList.remove('hidden');
  //       }
    
  //       // Add a background color when scrolled beyond 50px
  //       if (window.scrollY > 50) {
  //         navbar.classList.add('scrolled');
  //       } else {
  //         navbar.classList.remove('scrolled');
  //       }
    
  //       lastScrollY = window.scrollY; // Update last scroll position
  //     };
    
  //     window.addEventListener('scroll', handleScroll);
  //   });
    
  
  
  
  