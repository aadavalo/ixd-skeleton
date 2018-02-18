function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
  }
}

function changeUser(response) {
  $('.facebookLogin').hide();
  $('.U-P').text(response.name);
  $('.avatar').attr("src",response.picture.data.url);
}
