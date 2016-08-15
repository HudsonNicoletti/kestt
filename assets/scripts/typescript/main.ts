declare const jQuery
(($)=>{

  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

  $(window).ready(()=>{

    $('.brain-2 .brain').addClass("animate").one(animationEnd,()=>{
      $('.brain-3 .brain').addClass("animate")
      $('.brain-3 .brain:last').one(animationEnd,()=>{
        $('.piggy .bar').addClass("animate")
      })
    })

    $("a.trigger").on("click",()=>{
      $(this).addClass("active")
    })

  })

})(jQuery)
