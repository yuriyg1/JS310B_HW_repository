document.addEventListener("DOMContentLoaded", function() {

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.querySelector("form")

    function checkStringLength(inputValue){
        if (inputValue.value.length < 3){
            inputValue.validity.valid = false;
            inputValue.classList.add("fail")
            inputValue.classList.remove("pass")
            inputValue.setCustomValidity(`Must have 3 letters minimum`)
            inputValue.reportValidity()
            return false
        }
        else{
            inputValue.validity.valid = true;
            inputValue.classList.remove("fail")
            inputValue.classList.add("pass")
            return true
        }
    }

    let a = false
    let b = false
    let c = false

    function checkValidation(e){

//checks email regex
        const rgx = /\w+@\w+\.\w+/
        let result = rgx.test(email.value)
        if (!result){ 
            email.classList.add("invalid")
            email.setCustomValidity(`${email.value} is not a proper email`)
            email.reportValidity()
            email.classList.add("fail")
            email.classList.remove("pass")
            c=false
        }
        else{
            email.classList.remove("invalid")
            email.classList.add("pass")
            email.classList.remove("fail")
            c=true
        }
//Check first & last name
        a = checkStringLength(lastName)
        b = checkStringLength(firstName)
        console.log('a',a,'b',b,'c',c)
        
        if(!c || !b || !a){
            event.preventDefault()
        }
    }

    document.getElementById("submitIt").addEventListener("click", function(event){
        checkValidation(event)
      });

    //   form.addEventListener("change", function(event){
    //     checkValidation(event)
    //   });

});