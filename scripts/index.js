var pModal = document.getElementById("modal3") 
var postbtn = document.getElementById("cp-btn")
var span2 = document.getElementsByClassName("close2")[0]

postbtn.onclick = function(){
    pModal.style.display = "block"
}

span2.onclick = function(){
    pModal.style.display = "none";
}