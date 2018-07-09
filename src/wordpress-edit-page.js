// This code assumes:
//   1.  jQuery is installed
//   2.  The theme is using wp_head()
//   3.  The theme is using body_class() in the body tag e.g. <body <?php body_class(); ?>>

var API_URL = jQuery("link[rel='https://api.w.org/']").attr("href");

jQuery.get(API_URL, function(sitedata){
var classList = document.getElementsByTagName("body")[0].classList;

var postId = null;
  var url = null;

classList.forEach(function(item){

    if (item.indexOf("page-id") !== -1){
        postId = item.split("-")[2];
      
        url = sitedata.url + "/wp-admin/post.php?post=" + postId + "&action=edit"
    }
});

if (url){
  // console.log(url)
  window.location = url;
}

})