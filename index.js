// navbar updown code
// let nav = document.querySelector(".navbar");
// window.scroll = function(){
//   if(document.documentElement.scrollTop >50){
//     nav.classList.add("header-scrolled");
//   }else{
//     nav.classList.remove("header-scrolled");
//   }
// }


 
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 10) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});



// const header = document.querySelector(".page-header");
// const toggleClass = "is-sticky";

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll > 150) {
//     header.classList.add(toggleClass);
//   } else {
//     header.classList.remove(toggleClass);
//   }
// });

// nav scroll
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-50px";
//   }
// }

 
    var swiper = new Swiper('.mySwiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:'true'
        },
       autoplay:{
        delay:3500,
       },
        
      });
 


 


    var swiper1 = new Swiper("#mySlider", {
        slidesPerView: 4,
        spaceBetween: 30,
       
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay:{
            delay:3500,
           },
           breakpoints: {
            640: {
              slidesPerView: 2,
             
            },
            540: {
                slidesPerView: 1,
               
              },
              300: {
                slidesPerView: 1,
               
              },
              275: {
                slidesPerView: 1,
               
              },
            768: {
              slidesPerView: 3,
             
            },
            1200: {
                slidesPerView: 4,
               
              },
            1400: {
              slidesPerView: 4,
               
            },
          },
      });
 



//   let swiper = new Swiper('.swiper-container-1',{
//     slidesPerView: 4,
//     spaceBetween: 30,
//     slidesPerView:4,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay:{
//         delay:3500,
//        },
//        navigation:{
//         nextEl: "Swiper-button-next",
//         nextEl: "Swiper-button-prev",
//        },
//        breakpoints: {
//         640: {
//           slidesPerView: 2,
          
//         },
//         768: {
//           slidesPerView: 4,
           
//         },
//         1024: {
//           slidesPerView: 4,
//           spaceBetween: 50,
//         },
//       },
//   })
  