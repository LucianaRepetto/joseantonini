
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBrEgwtxcPZZrvy36MN9IY3-cCepgXxXPQ",
    authDomain: "jose-antonini.firebaseapp.com",
    databaseURL: "https://jose-antonini.firebaseio.com",
    projectId: "jose-antonini",
    storageBucket: "jose-antonini.appspot.com",
    messagingSenderId: "281616319319"
};
firebase.initializeApp(config);

// Reference messages collections
var messagesRef = firebase.database().ref("messages");



//Contact Form
document.getElementById("contactForm").addEventListener("submit", submitform);

//submit form
function submitform(evento) {
    evento.preventDefault();

    //get values-- la funcion de que hace getInputVal esta abajo
    var name = getInputVal("name");
    var email = getInputVal("email");
    var message = getInputVal("message");

    //call and save the firebase function
    saveMessage(name, email, message);

    // Muestra un alerta cuando el mensaje se haya mandado
    document.querySelector(".alert").style.display = "block";

    //Esconder alerta despues de 3 segundos
    setTimeout(function () {
        document.querySelector(".alert").style.display = 'none';

    }, 3000);
    //clear form
    document.getElementById("contactForm").reset();
}

//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save de messages to firebase
function saveMessage(name, email, message) {
    //send an object of data to de messages collection in firebase
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email,
        message: message
    });
}