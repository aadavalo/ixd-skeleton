'use strict';

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
    $(".favedroutes button").click(goToFaves);

}

function goToRoutes(e) {
    e.preventDefault();
    var rid = $(this).closest('.lists').attr('id');
    location.href="/routeA?bus="+rid;
}

function goToFaves(e){
    e.preventDefault();
    var rid=$(this).closest('.favebutton').attr('id');
    location.href="/routeA?bus="+rid;

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

var routeURL = window.location.href;
var routeName = routeURL.substring(routeURL.lastIndexOf('/') + 1);
console.log(routeName);
$("routes-title").html(routeName);

//////////// faves stuff

function addRoute () {
    var routeURL = window.location.href;
    var routeID = routeURL.substring(routeURL.lastIndexOf('/') +1);
}

$("#endStop").click(function(){

});

function favehelp (e) {
    console.log("favehelp gets called");
    var popup = document.getElementById("help-popup");
    popup.classList.toggle("show");
}

