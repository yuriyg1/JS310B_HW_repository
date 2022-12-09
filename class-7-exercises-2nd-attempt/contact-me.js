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
    const language = document.querySelector(".langr")
    const codeL = document.querySelector("#codeL")
    // const forBusiness = document.querySelector(".business")
    // const forTech = document.querySelector(".technical")

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
            inputValue.setCustomValidity('')
            inputValue.reportValidity()
            return true
        }
    }

    let a = false // firstName
    let b = false // lastName
    let c = false // checkEmail
    let d = false // checkURL
    let e = false // jobTitle
    let f = false // commentLength
    let g = false // Code Lang

    function checkValidation(e){

//Check Comment length
        if (comment.value.length < 10){
            comment.validity.valid = false;
            comment.classList.remove("pass")
            comment.classList.add("fail")
            comment.setCustomValidity(`Your messege is not long enough`)
            comment.reportValidity()
            f = false;
        }
        else{
            comment.validity.valid = true;
            comment.classList.remove("fail")
            comment.classList.add("pass")
            comment.setCustomValidity(`Length Requirement Met`)
            comment.reportValidity()
            f = true;
        }
//Check Job Title field length
        if (jobID.value.length < 1){
            jobID.validity.valid = false;
            jobID.classList.remove("pass")
            jobID.classList.add("fail")
            jobID.setCustomValidity(`Your job title is not long enough`)
            jobID.reportValidity()
            e = false;
        }
        else{
            jobID.validity.valid = true;
            jobID.setCustomValidity('')
            jobID.reportValidity()
            jobID.classList.remove("fail")
            jobID.classList.add("pass")
            jobID.setCustomValidity(`Your job title length met`)
            jobID.reportValidity()
            e = true;
        }

//Check URL
        const urlRgx = /https?\:\/\/.+\..+/
        let urlResult = urlRgx.test(webAd.value)
        if (!urlResult){ 
            d = false;
            webAd.classList.add("fail")
            webAd.classList.remove("pass")
            webAd.validity.valid = false;
            webAd.setCustomValidity(`${webAd.value} is not a proper URL`)
            webAd.reportValidity()
        }
        else{
            webAd.classList.remove("fail")
            webAd.classList.add("pass")
            webAd.validity.valid = true;
            webAd.setCustomValidity('')
            webAd.reportValidity()
            d = true;
        }

//Check email regex
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
            email.setCustomValidity('')
            email.reportValidity()
            c=true
        }
// checks firstName length >= 3 & lastName length >= 3
        b = checkStringLength(lastName)
        a = checkStringLength(firstName)
        console.log('a',a,'b',b,'c',c,'d',d,'e',e,'f',f,'g',g)

//check coding language selection
        if(codeL.offsetParent !== null){
            if(codeL.value === "choose"){
                codeL.setCustomValidity('You need to choose')
                codeL.reportValidity()
                g=false
            }else{
                codeL.classList.add("pass")
                codeL.classList.remove("fail")
                codeL.setCustomValidity('')
                codeL.reportValidity()
                g=true
            }
        }

        if(jobID.offsetParent === null && codeL.offsetParent === null){
            if(!a || !b || !c || !f){
                event.preventDefault()
            }
        }
        else if(jobID.offsetParent === null ){
            if(!a || !b || !c || !f || !g){
                event.preventDefault()
            }
        }
        else if(codeL.offsetParent === null){
            if(!a || !b || !c || !d || !e || !f){
                event.preventDefault()
            }
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
    
language.addEventListener('change', ()=>{

    if(codeL.offsetParent !== null){
        if(codeL.value === "choose"){
            codeL.setCustomValidity('You need to choose')
            codeL.reportValidity()
            g=false
        }else{
            codeL.classList.add("pass")
            codeL.classList.remove("fail")
            codeL.setCustomValidity('')
            codeL.reportValidity()
            g=true
        }
    }  
}
)

    document.getElementById("comment").onkeypress = function(event) {
        //Check Comment length
        if (comment.value.length < 10){
            comment.validity.valid = false;
            comment.classList.remove("pass")
            comment.classList.add("fail")
            comment.setCustomValidity(`Your messege is not long enough`)
            comment.reportValidity()
            f = false;
        }
        else{
            comment.validity.valid = true;
            comment.classList.remove("fail")
            comment.classList.add("pass")
            comment.setCustomValidity(`Length Requirement Met`)
            comment.reportValidity()
            f = true;
        }
    }

    // form.addEventListener('change', (e) => {
    //     checkValidation(e)
    // })

    document.getElementById("submitIt").addEventListener("click", function(event){
        checkValidation(event)
    });
    
});