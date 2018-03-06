'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    changeTitle();
    getStops();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
    $("#endStop").click(addToFavs);
    $(".dropbtn").click(dropDownButt);
    $("#notifybutton").click(notifyDriver);
    /*$(".trackchat").click(clickChat);*/

}

function changeTitle(){
    var u = window.location.href;
    var newU = u.substr(u.lastIndexOf('=')+1);
    var finalU = newU.split('%20').join(' ');
    $("#routes-title").html(finalU);
}

function addToFavs(e) {
    e.preventDefault();
    var u = window.location.href;
    var newU = u.substr(u.lastIndexOf('=')+1);
    var finalU = newU.split('%20').join(' ');
    var q = "/fav?bus=" +finalU;
    $.get(q);
}

function getStops(){
    var u = window.location.href;
    var newU = u.substr(u.lastIndexOf('=')+1);
    var finalU = newU.split('%20').join('');
    var q = "stops?stop=" + finalU;
    $.get(q);
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
    document.getElementById("myNav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}



function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}

function dropDownButt() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function notifyDriver(e) {
    e.preventDefault();
    $("#routes-title").click(function(){
        event.stopPropagation();
    });
    alert("Notified Driver!");
}




function setLocally(){

    $(".favourite_icon").click(function(){
    $(this).css({"color": "yellow"})
    });
}


/*function clickChat (e) {
    e.preventDefault();
    console.log("clickChat gets called");
    ga('create', 'UA-114625153-1', 'auto');
    ga('send', 'event', 'chat', 'click');
    _gaq.push(['_trackSocial', 'facebook', 'comment']);
}*/


window.fbAsyncInit = function () {
    FB.Event.subscribe('comment.create', function(targetURL){
    ga('send','social', 'Facebook', 'comment', targetURL);
});
};


