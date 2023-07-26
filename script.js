function validation(){
var fristname = document.forms["myForm"]["fristname"].value;
var email = document.forms["myForm"]["email"].value;
if(fristname==""|| email==""){
alert("fill the contact form.");
}
else{
alert("thanks for your message");
}
}
