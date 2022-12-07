// TODO
document.addEventListener("DOMContentLoaded", function() {

    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const comment = document.getElementById("comment")
    const email = document.getElementById("email")
    const webAd = document.getElementById("webAd")
    const jobID = document.getElementById("jobID")
    const form = document.querySelector("form")
    const submit = document.querySelector("btn")
    const selectEl = document.getElementById("contact-kind")
    // const forBusiness = document.querySelector(".business")
    // const forTech = document.querySelector(".technical")

    function checkStringLength(inputValue){
        if (inputValue.value.length < 3){
            allValid = false;
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
//Check first & last name
        checkStringLength(firstName)
        checkStringLength(lastName)

//Check email regex
        const rgx = /\w+@\w+\.\w+/
        let result = rgx.test(email.value)
        if (!result){ 
            allValid = false;
            email.classList.add("invalid")
            email.validity.valid = false;
            email.setCustomValidity(`${email.value} is not a proper email`)
            email.reportValidity()
        }
        else{
            email.classList.remove("invalid")
            email.validity.valid = true;
            allValid = true;
        }

//Check Comment length
        if (comment.value.length < 10){
            allValid = false;
            comment.validity.valid = false;
            comment.classList.add("invalid")
            comment.setCustomValidity(`Your messege is not long enough`)
            comment.reportValidity()
        }
        else{
            comment.validity.valid = true;
            comment.classList.remove("invalid")
            allValid = true;
        }

//Check Job Title field length
        if (jobID.value.length < 1){
            allValid = false;
            jobID.validity.valid = false;
            jobID.classList.add("invalid")
            jobID.setCustomValidity(`Your job title is not long enough`)
            jobID.reportValidity()
        }
        else{
            jobID.validity.valid = true;
            jobID.classList.remove("invalid")
            allValid = true;
        }

//Check URL
        const urlRgx = /https?\:\/\/.+\..+/
        let urlResult = urlRgx.test(webAd.value)
        if (!urlResult){ 
            allValid = false;
            webAd.classList.add("invalid")
            webAd.validity.valid = false;
            webAd.setCustomValidity(`${webAd.value} is not a proper URL`)
            webAd.reportValidity()
        }
        else{
            webAd.classList.remove("invalid")
            webAd.validity.valid = true;
            allValid = true;
        }

//if any of the above forms invalid, prevent default
        if(!allValid){
            e.preventDefault()
        }

    }

    
    selectEl.addEventListener('change', ()=>{
            if(selectEl.value === 'choose'){
                selectEl.setCustomValidity('You need to choose')
            }

            selectEl.setCustomValidity('')
            const forBusiness = document.querySelector(".business")
            const forTech = document.querySelector(".technical")
            if(selectEl.value === 'business'){
                forBusiness.classList.remove('hide')
                forTech.classList.add('hide')
                forBusiness.querySelector('input').required = true
                forTech.querySelector('input').required = false
            }
            else{
                forBusiness.classList.add('hide')
                forTech.classList.remove('hide')
                forBusiness.querySelector('input').required = false
                forTech.querySelector('input').required = true
            }      
    }
)

    form.addEventListener('change', (e) => {
        checkValidation(e)
    })

});