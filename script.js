let myForm = document.getElementById("myForm")
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let otherNames = document.getElementById('otherNames');
let radio = document.getElementsByName('radio')
let dob = document.getElementById('dob')
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById('repeatPassword')
let country = document.getElementById('country')

function validate(){
  if(myForm.elements[0].value == ""){
    document.getElementById('error1').textContent = "Please provide your First Name"
    firstName.classList.remove("border-primary")
    firstName.classList.add("border-danger")
  }else{
    firstName.classList.remove("border-danger")
    firstName.classList.add("border-primary")
    document.getElementById('error1').textContent = ""
  } 
  if(myForm.elements[1].value == ""){
    document.getElementById('error2').textContent = "Please provide your Last Name"
    lastName.classList.remove("border-primary")
    lastName.classList.add("border-danger")
  }else {
    lastName.classList.remove("border-danger")
    lastName.classList.add("border-primary")
    document.getElementById('error2').textContent = ""
  }
  if(myForm.elements[2].value == ""){
    document.getElementById('error3').textContent = "Please provide other names"
    otherNames.classList.remove("border-primary")
    otherNames.classList.add("border-danger")
  }else {
    otherNames.classList.remove("border-danger")
    otherNames.classList.add("border-primary")
    document.getElementById('error3').textContent = ""
  }
  if(myForm.dob.value === ""){
    document.getElementById('error4').textContent = "Please provide your date of birth"
    dob.classList.remove("border-primary")
    dob.classList.add("border-danger")
  }else {
    dob.classList.remove("border-danger")
    dob.classList.add("border-primary")
    document.getElementById('error4').textContent = ""
  }
  if(myForm.email.value === ""){
    document.getElementById('error5').textContent = "Please provide your email"
    email.classList.remove("border-primary")
    email.classList.add("border-danger")
  }else {
    email.classList.remove("border-danger")
    email.classList.add("border-primary")
    document.getElementById('error5').textContent = ""
  }  
  if(myForm.password.value === ""){
    document.getElementById('error6').textContent = "Please provide your password"
    password.classList.remove("border-primary")
    password.classList.add("border-danger")
  }else {
    password.classList.remove("border-danger")
    password.classList.add("border-primary")
    document.getElementById('error6').textContent = ""
  }
  if(myForm.repeatPassword.value != password.value){
    document.getElementById('error7').textContent = "The password does not match"
    repeatPassword.classList.remove("border-primary")
    repeatPassword.classList.add("border-danger")
  }else {
    repeatPassword.classList.remove("border-danger")
    repeatPassword.classList.add("border-primary")
    document.getElementById('error7').textContent = ""
  }
  if(radio[0].checked == false && radio[1].checked == false){
    document.getElementById('error8').textContent = "Please select your gender"
  }  else {
    document.getElementById('error8').textContent = ''
  }
} 



country.addEventListener('change', function(e){
  if (e.target ==='nigeria'){
    let
  }
})










