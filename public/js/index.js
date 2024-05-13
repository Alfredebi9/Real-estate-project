// owl carousel
document.addEventListener('DOMContentLoaded', function () {
  const owl =  $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000,
    nav:true,
    dots:false,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        850:{
            items:2,
        }
    }
  })
})


  function logout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/logout';
  }

