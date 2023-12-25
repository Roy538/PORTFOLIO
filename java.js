$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('sidemenu').addClass("sticky");
        }else{
            $('sidemenu').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    })
});
//slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "smooth");
});

//typing animation 
var typed = new Typed(".typing",{
    strings: ["Web Developer", "Android App Developer", "DataBase Admin", "IT specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Mobile App Developer", "Programmer", "DataBase Admin", "IT specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//owl carousel
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

