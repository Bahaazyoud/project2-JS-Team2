sign_up_buttton = document.getElementById("signUp");
sign_in_buttton = document.getElementById("signIn");
container = document.getElementById("container");
body = document.querySelector("body");

sign_up_buttton.addEventListener("click" , function(){  
    if(getWidth()> 768){

        container.classList.add("active");
        body.classList.add("active");
        }else{
   
            document.getElementsByClassName("sign-in-container")[0].classList.add("active-media");
            document.getElementsByClassName("overlay-container")[0].classList.add("active-media");
            document.getElementsByClassName("overlay")[0].classList.add("active-media");
            document.getElementsByClassName("form-container")[0].classList.add("active-media");
            document.getElementsByClassName("sign-up-container")[0].classList.add("active-media");

        }

})

sign_in_buttton.addEventListener("click" , function(){
    if(getWidth() > 768){
    container.classList.remove("active");
    body.classList.remove("active");
    }else{
        document.getElementsByClassName("sign-in-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay")[0].classList.remove("active-media");
            document.getElementsByClassName("form-container")[0].classList.remove("active-media");
            document.getElementsByClassName("sign-up-container")[0].classList.remove("active-media");
    }
})


function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  validationResult = false;
  validationResult1 = false;
  validationResult2 = false;


document.getElementById('register').addEventListener('click', function() {
    let nameerror = document.querySelector("#name");
    let nameInput = document.querySelector("#name").value;
    let nameExp = /^[a-z_-\s]{3,15}$/;
     validationResult = nameExp.test(nameInput);

    if (validationResult == false && nameInput == '') {
        document.querySelector("#name").placeholder = "Type name here..";
        nameerror.style.animation = "mynewmove .4s ";
        nameerror.style.border = "2px solid red";
        nameerror.style.borderRadius = "5px ";
    }
    if (validationResult == false && nameInput != '') {
        document.querySelector("#name").value = '';
        document.querySelector("#name").placeholder = "name from 3 to 15 char";
        nameerror.style.animation = "mynewmove .4s ";
        nameerror.style.border = "2px solid red";
        nameerror.style.borderRadius = "5px ";
    } else if (validationResult == true) {
       
        localStorage.setItem("UserName", nameInput);
        nameerror.style.border = "none";
    }
    let emailerror = document.querySelector("#email");
    let emailInput = document.querySelector("#email").value;
    let emailExp = /^([a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    validationResult1 = emailExp.test(emailInput);
    if (validationResult1 == false && emailInput == '') {
        document.querySelector("#email").placeholder = "Type Email here..";
        emailerror.style.border = "2px solid red";
        emailerror.style.animation = "mynewmove .4s ";
        emailerror.style.borderRadius = "5px ";
    }
    if (validationResult1 == false && emailInput != '') {
        document.querySelector("#email").value = '';
        document.querySelector("#email").placeholder = "User@company.url";
        emailerror.style.border = "2px solid red";
        emailerror.style.animation = "mynewmove .4s ";
        emailerror.style.borderRadius = "5px";
    } else if (validationResult1 == true) {
        localStorage.setItem("Email", emailInput);
        emailerror.style.border = "none";
    }


    let passerror = document.querySelector("#password");
    let passInput = document.querySelector('#password').value;
    let passExp = /(?=(.*[0-9]))(?=.*[!@#$%^&*])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    validationResult2 = passExp.test(passInput);
    if (validationResult2 == false && passInput == '') {
        document.querySelector("#password").placeholder = "Type pass here..";
        passerror.style.border = "2px solid red ";
        passerror.style.animation = "mynewmove .4s ";
        passerror.style.borderRadius = "5px ";

    }


    if (validationResult2 == false && passInput != '') {
        document.querySelector("#password").value = '';
        document.querySelector("#password").placeholder = "1 upper & lower char.$*";
        passerror.style.border = "1px solid red";
        passerror.style.animation = "mynewmove .4s ";
    } else if (validationResult2 == true) {
        localStorage.setItem("Password", passInput);
        passerror.style.border = "none";
    }
});
emaillocal = false;
passwordlocal = false;
document.getElementById('Signin').addEventListener('click', function() {
     emaillocal = document.querySelector("#email1").value;

    if (localStorage.getItem("Email") != emaillocal) {
        document.querySelector("#email1").value = '';
        document.querySelector("#email1").placeholder = "Wrong Email";
        document.querySelector("#email1").style.border = "2px solid red";
        document.querySelector("#email1").style.animation = "mynewmove .4s ";
        document.querySelector("#email1").style.borderRadius = "5px ";
    }


     passwordlocal = document.querySelector("#password1").value;
    if (localStorage.getItem("Password") != passwordlocal) {
        document.querySelector("#password1").value = '';
        document.querySelector("#password1").placeholder = "Wrong Password";
        document.querySelector("#password1").style.border = "2px solid red";
        document.querySelector("#password1").style.animation = "mynewmove .4s ";
        document.querySelector("#password1").style.borderRadius = "5px ";
    }
});




document.getElementById("sign-up-btn").addEventListener("click", function(){
    console.log(validationResult)
    console.log(validationResult1)
    console.log(validationResult2)
    if(validationResult & validationResult1 & validationResult2){
        if(getWidth() > 768){
            container.classList.remove("active");
            body.classList.remove("active");
            }else{
                document.getElementsByClassName("sign-in-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("overlay-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("overlay")[0].classList.remove("active-media");
                    document.getElementsByClassName("form-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("sign-up-container")[0].classList.remove("active-media");
            }
    }
})



document.getElementById("Signin").addEventListener("click",function(){
    if(emaillocal && passwordlocal){
        window.location.href = "../Welcome Page/index.html";
    }
})