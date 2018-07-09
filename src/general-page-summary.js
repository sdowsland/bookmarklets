// ==Bookmarklet==
// @name PageSummary
// @author Stephen
// @style !loadOnce https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css
// @script https://code.jquery.com/jquery-3.2.1.slim.min.js
// @script https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js
// @script https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js
// ==/Bookmarklet==

(function(){

    var $ = jQuery.noConflict(true);

    if ($(".summary-modal").length === 0) {
        var html = '<div class="modal summary-modal" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Modal title</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div><div class="modal-body"> <p>Modal body text goes here.</p></div><div class="modal-footer"> <button type="button" class="btn btn-primary">Save changes</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div></div></div></div>';
        var $elem = $(html);
        $('body').append($elem)
    }

    var pageTitle = $("h1").text();
    $(".summary-modal .modal-body").append($("<p>").html(pageTitle))

    $(".summary-modal").modal();
    $(".summary-modal").modal('show');
}())