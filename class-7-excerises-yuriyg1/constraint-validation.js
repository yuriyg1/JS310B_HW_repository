// TODO
document.addEventListener("DOMContentLoaded", function() {

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.querySelector("form")

    function checkStringLength(inputValue){
        if (inputValue.value.length < 3){
            inputValue.validity.valid = false;
            inputValue.classList.add("invalid")
            inputValue.setCustomValidity(`Your name is too short, it's only ${inputValue.value.length} characters long`)
            inputValue.reportValidity()
        }
        else{
            inputValue.validity.valid = true;
            inputValue.classList.remove("invalid")
            allValid = true;
        }
    }

    function checkValidation(e){
        let allValid = false

//checks firstName length >= 3
        // if(firstName.value.length < 3){
        //     firstName.validity.valid = false;
        //     allValid = false;
        //     firstName.classList.add("invalid")
        //     firstName.classList.remove("valid")
        //     firstName.setCustomValidity('Your name is too short')
        //     firstName.reportValidity()
        // } else {
        //     firstName.validity.valid = true;
        //     firstName.classList.remove("invalid")
        //     firstName.classList.add("valid")
        //     allValid = true;
        // }

//checks lastName length >= 3
        // if(lastName.value.length < 3){
        //     lastName.validity.valid = false;
        //     lastName.classList.add("invalid")
        //     lastName.classList.remove("valid")
        //     allValid1 = false;
        //     lastName.setCustomValidity('Your lastname is too short')
        //     lastName.reportValidity()
        // } else {
        //     lastName.validity.valid = true;
        //     lastName.classList.remove("invalid")
        //     lastName.classList.add("valid")
        //     allValid1 = true;
        // }

        checkStringLength(firstName)
        checkStringLength(lastName)

//checks email regex
        const rgx = /\w+@\w+\.\w+/
        let result = rgx.test(email.value)
        if (!result){ 
            email.classList.add("invalid")
            email.setCustomValidity(`${email.value} is not a proper email`)
            email.reportValidity()
        }
        else{
            email.classList.remove("invalid")
        }


        if(!allValid){
            e.preventDefault()
        }
    }

    form.addEventListener('change', (e) => {
        checkValidation(e)
    })

});