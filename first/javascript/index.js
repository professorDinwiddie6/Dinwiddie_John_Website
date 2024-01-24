$(document).ready(function(){
    $("#mobile-button").click(function(){
        $("#mobile-menu").slideDown("slow");
    });
    $("#close-menu").click(function(){
        $("#mobile-menu").slideUp("slow");
    });
});