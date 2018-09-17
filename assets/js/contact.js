//Contact Form
document.getElementById("contactForm").addEventListener("submit", submitform);

function submitform(evento){
    evento.preventDefault();
    
    //get values
    var name = getInputVal("name");
    var email = getInputVal("email");
    var message = getInputVal("message");

   
}


//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}