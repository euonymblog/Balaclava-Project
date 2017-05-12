$(document).ready(function(){

  $( ".menu" ).hide();
  $( ".responsive-nav" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  // $( ".responsive-nav" ).hide();
  // $( ".cross" ).show();
  });
  });

  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  // $( ".cross" ).hide();
  $( ".responsive-nav" ).show();
  });
  });

});
