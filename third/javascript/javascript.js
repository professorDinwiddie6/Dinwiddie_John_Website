$(document).ready(function(){
    
    $('#hamburger-menu').click(function(){
        $('#mobile-nav').fadeIn();
    });

    $('#x-btn').click(function(){
        $('#mobile-nav').fadeOut();
    });
});