# Facebook Javascript SDK Login Example
Get customer's profile info using Facebook Javascript SDK

### Usage
To be able to use this script first you need to have created a Facebook App and get your App ID
For more information about how to create a Facebook App please visit [App Development](https://developers.facebook.com/docs/apps/)

Once you have gotten your App Id, replace it on the fbAsyncInit function and you are ready to go.
```
    window.fbAsyncInit = function() {
        //SDK loaded, initialize it
        FB.init({
            appId      : 123456789101,// Replace with your APP ID provided by Facebook
            xfbml      : true,
            version    : 'v3.0'
        });
    };
```
For more information about Facebook Graph-api
See [Graph-api documentation](https://developers.facebook.com/docs/graph-api/reference/user/)

