'use strict';


var data = require('../data.json');

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
    $(".lists a").click(goToRoutes);

}

function goToRoutes(e) {
    e.preventDefault();
    var lid = $(this).closest('.lists').attr('id');
    console.log(lid);
    location.href = "/"+lid;
    // get rid of 'project' from the front of the id 'project3'
}

function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-p");
    filter = input.value.toUpperCase();
    ul = document.getElementById("routes-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$("#search-p").focus(function() {
    $("#routes-ul").fadeIn();
}).blur(function() {
    $("#routes-ul").fadeOut();
})

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}

<<<<<<< HEAD
//////////// faves stuff

function addRoute () {
    var routeURL = window.location.href;
    var routeID = routeURL.substring(routeURL.lastIndexOf('/') +1);
}

 function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback.init();// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }


function init() {
    loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
 });
}

$("#endStop").click(function(){

});

