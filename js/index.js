const featureSection = document.querySelector('.section-features').offsetTop;
const stepSection = document.querySelector('.section-steps').offsetTop;
const plansSection = document.querySelector('.section-plans').offsetTop;
const navEl = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    if(window.scrollY > featureSection- 100){
        navEl.classList.add('sticky');
    }else{
        navEl.classList.remove('sticky')
    }
})

// window.addEventListener('scroll', ()=>{
//     if(window.scrollY > featureSection- 100){
//         $('.box').fadeIn()
//     }
// })

$(document).ready(function(){
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > featureSection- 500){
            $('.box').addClass('animate__fadeIn')
        }
        if(window.scrollY > stepSection){
            $('.app-screen').addClass('animate__fadeInUp')
        }
        if(window.scrollY > plansSection){
            $('.special').addClass('animate__pulse')
        }

      
    })
   
   
});

$('.mobile-nav-icon').click(function(){
   var x =$('.main-nav').slideToggle()
   if($('.mobile-nav-icon i').hasClass('fa fa-bars')){
       $('.mobile-nav-icon i').removeClass('fa fa-bars')
    $('.mobile-nav-icon i').addClass('fa fa-times')
   }else{
    $('.mobile-nav-icon i').removeClass('fa fa-times')
    $('.mobile-nav-icon i').addClass('fa fa-bars')

   }
})