const parallax = document.getElementById('parallax');
const parallax1 = document.getElementById('parallax1');
const parallax2 = document.getElementById('parallax2');


window.addEventListener('scroll', ()=>{
    let offset = window.pageYOffset;

    //OPPOSITE DIRECTION
    parallax.style.backgroundPositionY  = offset*1.3 + "px";
    //SAME DIRECTION
    parallax1.style.backgroundPositionY = offset*0.7 + "px";
    //ALONG X AXIS
    parallax2.style.backgroundPositionX = offset*0.5 + "px";
})

