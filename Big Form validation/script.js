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

	// $('name').on('keyup',function(){
	// 	var x = document.forms["myForm"]["name"].value;
 //    	if (x == "") {
 //    		$('ename').html("error")
 //        // alert();
	// }
	// })

  $("#sub").on('click',function(e){

    e.preventDefault(e);
        // alert("The paragraph was clicked.");
        var name = $('#name').val();
        if(!name)
        {
          $('#ename').html("empty");
        }
        else {
        $('#output').html(""+name);
        $('#ename').html("");
      }
    });
});







