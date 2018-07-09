// This code assumes:
//   1.  jQuery is installed
//   2.  the theme is using body_class() in the body tag e.g. <body <?php body_class(); ?>>

jQuery.get("/wp-json/", function(sitedata){
console.log(sitedata);
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
  window.location = url;
}

})