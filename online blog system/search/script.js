"use strict"

$(document).ready(function(){

    $("#autocomplete").autocomplete({
            source: function( request, response ) {  
                $.ajax({  
                    url: "/home/search",
                    method: "POST",
                    dataType: "json",  
                    data: {  
                        term: request.term  
                    },  
                    success: function( data ) {  
                        response( $.map( data, function( result ) {  
                            return {  
                                label: "Name : "+result.username + "      " + " Id : " + result.id ,  
                                value: result.username
                            }  
                        }));  
                    }  
                });  
            },
            minLength: 1
        });

});
