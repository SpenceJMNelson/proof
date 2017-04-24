

$( document ).ready(function() {
    $( "#main-design-link" ).hover(
	  function() {
	    $( ".design-preview" ).addClass("showpreview");
	  }, function() {
	    $( ".design-preview" ).removeClass("showpreview");
	  }
	);

	$( "#main-space-link" ).hover(
	  function() {
	    $( ".space-preview" ).addClass("showpreview");
	  }, function() {
	    $( ".space-preview" ).removeClass("showpreview");
	  }
	);

	$( "#main-bakery-link" ).hover(
	  function() {
	    $( ".bakery-preview" ).addClass("showpreview");
	  }, function() {
	    $( ".bakery-preview" ).removeClass("showpreview");
	  }
	);
});