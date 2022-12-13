document.addEventListener("DOMContentLoaded", function() {

    a = 0
    function changeBG(){
        document.body.style.backgroundColor = `rgb(${a}, ${a}, ${a})`;
        console.log('a',a)
        a += 1
        if(a<=255){
            requestAnimationFrame(changeBG)
        }
    }

    window.requestAnimationFrame(changeBG)
})