//<script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
import React, {Component} from 'react'
import * as firebase from "firebase";

module.exports.firebase = firebase;

initializeFirebase();


function initializeFirebase() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGRj36TpUDZtgnFZudiEBNXJb8_lu_H5c",
    authDomain: "prevju-62450.firebaseapp.com",
    databaseURL: "https://prevju-62450.firebaseio.com",
    projectId: "prevju-62450",
    storageBucket: "prevju-62450.appspot.com",
    messagingSenderId: "855384335828"
  };
	firebase.initializeApp(config);
}

module.exports.addAudio = async function(file){
  var storageRef = firebase.storage().ref('audio/' + file.name)
  var task = storageRef.put(file).then(function (url) {

  }).catch(function(error){});
}

module.exports.getAudio = async function(file){
    return firebase.storage().ref().child('audio/' + file).getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
      console.log(url)
      // This can be downloaded directly:
    /*  var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();*/

      return url;
    // Or inserted into an <img> element:
  }).catch(function(error) {
    // Handle any errors
  });
}
