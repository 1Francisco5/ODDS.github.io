$("formvalidation").validate({
    rules:{
        nome:{
            minlength: 2
        },
        email:{
            email:true
        },
        password:{
            Number:true,
            minlength:2,
        }
    },
    messages: {
        nome:{
        required: "input necessario",
        minlength: jQuery.validator.format("Por favor entra com o seu nome"),
        minlength:"Nome com pelo menos 2 caracteres"
        },
        email:"por favor entra com seu email",
        password:"por favor entra com a sua palavra passe"
      },


    submitHandler: function(form) {
      form.submit();
    }
   });

   const nome = document.getElementById(nome);

const password = document.getElementById(password);

const email = document.getElementById(email);

let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let titulo = document.getElementById("titulo");

signinbtn.onclick = function(){
    if(signupbtn.classList.contains("disable")){
    var tem = document.getElementById("email").value;
    var tpass = document.getElementById("password").value;
    if(email.addEventListener('email',() =>{console.log(email.value)}).contains(tem) && password.addEventListener('password',() =>{console.log(password.value)}).contains(tpass)){
        location.replace("Home.html")
    }


    }else{
    namefield.style.maxHeight = "0";
    titulo.innerHTML = "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
    }
}
signupbtn.onclick = function(){
if(signinbtn.classList.contains("disable")){
    nome = document.getElementById(nome);

    password = document.getElementById(password);

    email = document.getElementById(email);

}else{
    namefield.style.maxHeight = "60px";
    titulo.innerHTML = "Sign Up";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}
}
