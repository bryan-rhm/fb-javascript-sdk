function fb_login(){
    FB.login(function(response) {
        if (response.authResponse) {
            // if user authorized the app
            getUserData();
        }
    }, {scope: 'email,public_profile', return_scopes: true});
}

function getUserData() {
    FB.api('/me',{fields:'first_name,last_name,email'}, function(response) {
        var email = response.email ? response.email: '';
        var first_name = response.first_name ? response.first_name : '';
        var last_name = response.last_name ? response.last_name : '';
        var fb_id = response.id;
        //Do whatever you want with the information retrieved
        alert ("Hello "+first_name);
    });
}

window.fbAsyncInit = function() {
    //SDK loaded, initialize it
    FB.init({
        appId      : 123456789101,// Replace with your APP ID provided by Facebook
        xfbml      : true,
        version    : 'v3.0'
    });

};

//load the JavaScript SDK
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.com/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));