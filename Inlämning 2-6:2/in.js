$(document).ready(function(){
$('.slider').slick({
     arrows:false, 
     // arrows:false används för att ta bort "previous" och "nästa" knapparna
     dots:true,
     //dots:rue är för att ersätta knapparna
     appendDots: '.slider-dot',
     dotsClass:'dots'
    
});
let hamberger = document.querySelector('.hamberger-button');
let tid = document.querySelector ('.tid')

hamberger.addEventListener('click', function(){

});

tid.addEventListener('click', function(){

});

}); 
//Rad 1 är en kod förhindrar att den körs innan dokumentet i sin helhet har laddat in
//slick slider använde för att få flera blilder att slide i en och samma linje
// arrows:false används för att ta bort "previous" och "nästa" knapparna
// detta innebär att när webbsidan laddas så vill jag att denna funktion skall funka