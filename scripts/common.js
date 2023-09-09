var signupM1 =  document.getElementById("modal1")

var signupB1 = document.getElementById("sign-up")

var span = document.getElementsByClassName("close")[0]

signupB1.onclick = function(){
    signupM1.style.display= "block";
}

span.onclick = function(){
    signupM1.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == signupM1) {
//       signupM1.style.display = "none";
//     }
//   }

var signupM2 = document.getElementById("modal2")
var signupB2 = document.getElementById("sign-in")
var span1 = document.getElementsByClassName("close1")[0]
var sl = document.getElementById("sign-up-l")


signupB2.onclick = function(){
    signupM2.style.display= "block";
}

span1.onclick = function(){
    signupM2.style.display = "none";
}
s1.onclick = function(){
    signupM2.style.display ="none";
    signupM1.style.display= "block";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event1) {
//     if (event1.target == signupM2) {
//       signupM2.style.display = "none";
//     }
//   }