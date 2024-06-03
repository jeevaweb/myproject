<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

var swiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  autoplay: {
    delay: 3500
  }

// const tooltipTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="tooltip"]'
// );
// const tooltipList = [...tooltipTriggerList].map(
//   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
// );

// //  swich case....................
// switch (new Date().getDay()) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Twesday";
//     break;

//   case 3:
//     day = "Wednessday";
//     break;

//   case 4:
//     day = " Thursday";
//     break;

//   case 5:
//     day = " Friday";
//     break;

//   case 6:
//     day = "Saturday";
//     break;
// }

//////
// const anyDay=prompt();

// switch (anyDay){
//   case Monday:
//     day="Today is office";
//     break;

//   case Twesday:
//    day=" today is office";
//    break;

//    case Wednesday:
//     day="Today is office";
//     break;

//     case Thrusday:
//     day="Today is office";
//     break;

//   case Friday:
//     day="Today is office";
//     break;

//   case Saturday:
//     day="Today is hollyday";
//     break;

//   case Sunday:
//     day="Today is hollyday";

//     break;



//  }console.log(anyDay);


// const anynum=12;

// switch (anynum){
//   case 1:
//     day="monday";
//     break;
//   case 2:
//     day="twesday";
//     break;
//   case 3:
//     day="wednesday";
//     break;
//   case 3:
//     day="thrusday";
//     break;
//   case 4:
//   day="friday";
//   break;
//   case 5:
//     day="saturday , today is hollyday";
// }console.log(anynum);
