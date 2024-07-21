let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".food-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      },
  });

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
    food.onClick = () =>{
        previewContainer.style.display = flex;
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
     });
  };
});

previewContainer.querySelector('#close-preview').onClick = () =>{
    previewContainer.style.display = none;
    previewBox.forEach(close=>{
        preview.classList.remove('active');
    });
};

var swiper = new Swiper(".menu-slider",{
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".blogs-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
  });