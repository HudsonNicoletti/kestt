(($) => {

  function flip()
  {
    let words1 = $(".word-flip-1"),
        words2 = $(".word-flip-2"),
        words3 = $(".word-flip-3"),
        words4 = $(".word-flip-4")

    words1.each((i,e)=>{
      console.log(i)
    })
  }

  setInterval( flip() , 3500 )

})(jQuery)
