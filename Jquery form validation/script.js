"use strict"

$(document).ready(function(){

    var availableTags = [
      "A+",
      "B+",
      "AB+",
      "AB-",
      "O+",
      "O-",
      "A-",
      "B-"
    ];

    $( "#auto" ).autocomplete({
      source: availableTags
    });

	 $('#date').datepicker();
	// $('#auto').autocomplete();

	$('name').on('keyup',function(){
		var x = document.forms["myForm"]["name"].value;
    	if (x == "") {
    		$('ename').html("error")
        // alert();
	})
	});







