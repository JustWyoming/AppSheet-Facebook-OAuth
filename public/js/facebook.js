
$(document).ready(function(){

  var imageTemplate = $('<div class="col-xs-6 col-md-3 my-thumb"><a href="#" class="thumbnail"><img class="img-responsive"></a></div>')

  window.fbAsyncInit = function() {
    FB.init({
      status: true,
      appId      : '1384450601877922',
      xfbml      : true,
      version    : 'v2.3'
    });

    FB.getLoginStatus(function(response) {

      if (response.status === 'connected') {

        FB.api(
            "/me/photos",
            function (response) {
             if (response && !response.error) {
                // console.log(response.data.length)
                console.log(response, "photo object");
                for(var i=0; i<response.data.length-1; i++) {
                  var thisImage = imageTemplate.clone();
                  thisImage.find('img').attr('src',response.data[i].source);
                  $('.photo-list').append(thisImage);

                }
              }else{
                console.log("not working");
              }
            }
        );
     } else {

      // FB.login();
      FB.login(function(){
       FB.api('/me/feed', 'get');
     }, {scope: 'user_photos, email,publish_actions'});
    }
  });

  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1384450601877922&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

});





