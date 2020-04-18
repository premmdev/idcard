document.querySelector(".okay").addEventListener("click",go);

function go(){
    var myName = document.getElementById("name").value;
    var myDesignation = document.getElementById("designation").value;
    var myEcode = document.getElementById("ecode").value;
    var myAadhaar = document.getElementById("aadhaar").value;
    var myAddress = document.getElementById("resadd").value;
    var myMobile = document.getElementById("mobile").value;
    var myDoi = document.getElementById("doi").value;
    var myValid = document.getElementById("validity").value;


    document.getElementsByClassName("name")[0].innerHTML = myName;
    document.getElementsByClassName("designation")[0].innerHTML = myDesignation;
    document.getElementsByClassName("ecode")[0].innerHTML = myEcode;
    document.getElementsByClassName("aadhaar")[0].innerHTML = myAadhaar;
    document.getElementsByClassName("resadd")[0].innerHTML = myAddress;
    document.getElementsByClassName("mobile")[0].innerHTML = myMobile;
    document.getElementsByClassName("doi")[0].innerHTML = myDoi;
    document.getElementsByClassName("valid")[0].innerHTML = myValid;

    document.querySelector(".input").style.display = "none";
    document.querySelector(".title").style.display = "initial";
    document.querySelector("nav").style.display = "none";
    document.querySelector(".sign1").classList.remove("sign");
    document.querySelector(".output1").classList.remove("output");
    // document.querySelector(".myb").disabled="false";
    // document.querySelector(".print").style.display = "initial";
    // document.querySelector(".print").style.textAlign = "center";
}

function display(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function(event) {
          $('#image').attr('src', event.target.result);
       }
       reader.readAsDataURL(input.files[0]);
    }
 }
 
 $("#photo").change(function() {
    display(this);
 });