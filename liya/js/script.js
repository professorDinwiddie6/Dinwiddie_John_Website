$(document).ready(function() {
    $('.menu').click(function() {
      alert('Yummy food on the way!');
    });

    $('.connect').click(function() {
      $(this).toggle();
    });
    $('.visit').click(function() {
        alert('We will see you soon!');
      });
      $('.connect').click(function() {
        alert('Oops! Do not worry. We will not ghost you!');
      });
  });