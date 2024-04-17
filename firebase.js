// Solicitare nume
// window.onload = function() {
//    var nume = prompt('Cum te numesti?');
//    console.log(nume);
// };

// Firebase
let firebaseConfig = {
    apiKey: "AIzaSyApDwUTTwPtwaDes-cEzIAfflAQDbXLG3M",
    authDomain: "biologie-ec8e0.firebaseapp.com",
    databaseURL: "https://biologie-ec8e0-default-rtdb.firebaseio.com/",
    projectId: "biologie-ec8e0",
    storageBucket: "biologie-ec8e0",
    messagingSenderId: "527167628453",
    appId: "1:527167628453:web:5c04788af04a52bf19594c"
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database()
    .ref('Jucatori');

document.getElementById('contactForm')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = prompt('Cum te numesti?');
    console.log(name);
    let score = getInputVal('score');
    let test = getInputVal('check');

    saveMessage(name, score, test);
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, score, tst) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        score: score,
        feedback: tst,
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function show()
{
    // verificare raspunsuri  
    var sum=0;
    var r1 = document.querySelector('input[name="intrebare1"]:checked').value;
    if(r1=='1') sum++;
    var r2 = document.querySelector('input[name="intrebare3"]:checked').value;
    if(r2=='1') sum++;
    var r3 = document.querySelector('input[name="intrebare2"]:checked').value;
    if(r3=='1') sum++;
    var r4 = document.querySelector('input[name="intrebare4"]:checked').value;
    if(r4=='1') sum++;
    var r5 = document.querySelector('input[name="intrebare5"]:checked').value;
    if(r5=='1') sum++;
    var r6 = document.querySelector('input[name="intrebare6"]:checked').value;
    if(r6=='1') sum++;
    var r7 = document.querySelector('input[name="intrebare7"]:checked').value;
    if(r7=='1') sum++;
    var r8 = document.querySelector('input[name="intrebare8"]:checked').value;
    if(r8=='1') sum++;
    var r9 = document.querySelector('input[name="intrebare9"]:checked').value;
    if(r9=='1') sum++;
    var r10 = document.querySelector('input[name="intrebare10"]:checked').value;
    if(r10=='1') sum++;

    //var sum=r1+r2+r3+r4+r5+r6+r7+r8+r9+r10;
    console.log("suma");
    console.log(sum);
    let name = prompt('Cum te numesti?');
    let feedback = getInputVal('feedback');
    saveMessage(name, sum, feedback);
}