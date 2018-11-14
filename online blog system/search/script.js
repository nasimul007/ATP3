"use strict"

$(document).ready(function(){

    $("#autocomplete").autocomplete({
        minLength: 1,
            source: function( request, response ) {  
                $.ajax({  
                    url: "/home/search",
                    method: "POST",
                    dataType: "json",  
                    data: {  
                        value: request.term  
                    },  
                    success: function( data ) {  
                        response( $.map( data, function( result ) {  
                            return {  
                                label: " ID : " + result.id + " NAME : "+result.username ,    
                                value: result.username
                            }  
                        }));  
                    }  
                });  
            }
            
        });

});
