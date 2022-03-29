let slideIndex = 0;
let allSlides = $(".slide");


$(".nextSlide").click(function () {
    if (allSlides.length==slideIndex+1) {
        slideIndex=-1;
    }
    showSlide(++slideIndex);
})

$(".prevSlide").click(function () {
    if (slideIndex==0) {
        slideIndex=allSlides.length;
    }
    showSlide(--slideIndex);
})



function showSlide(n) {
    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display="none";
    $("span").eq(i).removeClass("dotClick")


       
    }

    allSlides[n].style.display="block";
    $("span").eq(n).addClass("dotClick")
}

$(".dot").click(function(){
    slideIndex=$(this).index();
    showSlide(slideIndex);
    

})

showSlide(slideIndex);