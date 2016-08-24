/// <reference path="jquery.d.ts" />

(()=>{

  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

  $(window).ready(()=>{

    $('.brain-2 .brain').addClass("animate").one(animationEnd,()=>{
      $('.brain-3 .brain').addClass("animate")
      $('.brain-3 .brain:last').one(animationEnd,()=>{
        $('.piggy .bar').addClass("animate")
      })
    })

    $("a.trigger").on("click",function(){
      $(this).toggleClass("active")
      $("nav ul").toggleClass("active")
    })

    $("section.info ul.about li").on("click",function(){
      $(this).siblings(".active").removeClass("active")
      $(this).addClass("active")

      return false
    })

    $("[data-href]").on("click",function(){
      window.location.href = $(this).data("href")
    })

    if($("#carousel").length)
    {
      $("#carousel").slidingCarousel({
        shadow: false,
        squeeze: 124,
        animate: 250
      });
    }

  })

})()
