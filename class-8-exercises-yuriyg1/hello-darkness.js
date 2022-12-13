document.addEventListener("DOMContentLoaded", function() {

    a = 255
    let changeBG = setInterval(() =>{
        document.body.style.backgroundColor = `rgb(${a}, ${a}, ${a})`;
        // console.log('a',a)
        a -= 1
        if(a===0){
            clearInterval(changeBG)
        }
    }, 500)

})
