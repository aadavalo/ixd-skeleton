'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    changeTitle();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
    $("#endStop").click(addToFavs);

}

function changeTitle(){
    var u = window.location.href;
    var newU = u.substr(u.lastIndexOf('=')+1);
    var finalU = newU.split('%20').join(' ');
    $("#routes-title").html(finalU);
}

function addToFavs(e) {
    e.preventDefault();
    var q = "/fav";
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

function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}




