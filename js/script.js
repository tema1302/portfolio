// ПРЕЛОАДЕР

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
}

/* РЕАЛИЗАЦИz СЛАЙДЕРА */
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide"); // Get all elements with the class .mySlide
    var dots = document.getElementsByClassName("dots"); // Get all elements with the class name of .dot

    if (n > slides.length) { // slides.length - количество всех возможных слайдов (изображений) 
        slideIndex = 1; // Если наш индекс превышает количество имеющихся у нас изображений, вернитесь к первому индексу.
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all of our images
    }
    //    for(i = 0; i > dots.length; i++) {
    //        dots[i].className = dots[i].className.remove(" active"); // Удалить .active из всех точек, которым этот  класс назначен
    //    }
    $('li').removeClass("active");
    slides[slideIndex - 1].style.display = "block"; // Display the slide with the current slide index.
    dots[slideIndex - 1].className += " active"; // Add the .active class to the dot with the current slideIndex
}



    // НАЧАЛО СЕНДВИЧ КНОПКИ:
    $('.mob-sandwich').click(function () {
        $(this).toggleClass('mob-sandwich-active'); 
        $('.main-nav').toggleClass('main-nav-mob-active');
    });
    $('.dots').click(function () {
        $('.mob-sandwich').toggleClass('mob-sandwich-active'); 
        $('.main-nav').toggleClass('main-nav-mob-active');
    });
    //КОНЕЦ