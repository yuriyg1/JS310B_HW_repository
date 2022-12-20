document.addEventListener("DOMContentLoaded", function() {

let alertFlag = false
let users = [];
// For presentation purposes
const user = {
    username: 'admin',
    password: 'admin'
  };
    users.push(user);

const username = document.getElementById('loginUsername');
const password = document.getElementById('loginPassword');
const createUsername = document.getElementById('createUsername');
const createPassword = document.getElementById('createPassword');
const createPassword2 = document.getElementById('createPassword2');

function checkValidation(e){

class UserList {
    constructor() {
    }
  
    addUser(username, password) {

        function checkFields(){
            if(createUsername.value.length<3){
                createUsername.setCustomValidity(`Must have 3 letters minimum`)
                createUsername.reportValidity()
                // createUsername.validity.valid = false;
                e.preventDefault()
                return false
                
            } 
            if(createPassword.value.length<3){
                createPassword.setCustomValidity(`Must have 3 letters minimum`)
                createPassword.reportValidity()
                // createPassword.validity.valid = false;
                e.preventDefault()
                return false
            } 
            if(createPassword2.value.length<3){
                createPassword2.setCustomValidity(`Must have 3 letters minimum`)
                createPassword2.reportValidity()
                // createPassword2.validity.valid = false;
                e.preventDefault()
                return false
            } 
            if(createPassword.value !== createPassword2.value){
                createPassword2.setCustomValidity(`Doesn't match password`)
                createPassword2.reportValidity()
                // createPassword.validity.valid = false;
                e.preventDefault()
                return false
            } 
            else{
                // createUsername.validity.valid = true;
                // createPassword.validity.valid = true;
                // createPassword2.validity.valid = true;
                return true
            }
        }

        if(checkFields()){
            for (let i = 0; i < users.length; i++) { //Check if Username/Email is already taken, if so give an error
                if (users[i].username === createUsername.value) {
                    alert('Username Taken, Please Try Another');
                } else{
                    //Add User to database & redirect to sign-in page
                    const user = {
                        username: username,
                        password: password
                    };
                        users.push(user);
                    alert('User created, please login');
                    document.getElementById("login-form").style.display = "block";
                    document.getElementById("signup-form").style.display = "none";
                    
                    //clear input fields
                    createUsername.value = ''
                    createPassword.value = ''
                    createPassword2.value = ''
                    break
                    }
            }
        }

    }
  }
    const userList = new UserList();
    userList.addUser(createUsername.value, createPassword.value);
    console.log('ALL uList', users)
}

document.getElementById("submitIt").addEventListener("click", function(event){
    checkValidation(event)
  });


document.getElementById("submitt").addEventListener("click", function(event){
    console.log('val', username.value, password.value, users.length, users)

    function checkLoginFields(){
        if(username.value.length<3){
            // alert('Username & Password must be 3 characters minimum');
            username.setCustomValidity(`Must have 3 letters minimum`)
            username.reportValidity()
            return false
        }
        if(password.value.length<3){
            password.setCustomValidity(`Must have 3 letters minimum`)
            password.reportValidity()
            return false
        }
        else{
            return true
        }
    }


    function checkUserExists(username, password) {
        if(checkLoginFields()){
        for (let i = 0; i < users.length; i++) {
          if (users[i].username === username.value && users[i].password === password.value) {
            window.location = "best-foods.html";
            alertFlag = false
          } 
          else{
            alertFlag = true
          }

        }
        if(alertFlag){
            alert('Incorrect User/Password, or User DNE');}
        }
      }

      checkUserExists(username,password)


});
});
