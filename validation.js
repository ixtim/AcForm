function sendEnquiryform(){
        var name=$('#name').val();
        var email=$('#email').val();
        var surname=$('#surname').val();
        $.post("https://actum-form-ulcrunoxba.now.sh/api/submit",'name='+name+'&email='+email'&surname='+surname,function(result,status,xhr) {
                if( status.toLowerCase()=="error".toLowerCase() )
                { alert("An Error Occurred.."); }
                else { 
                    //alert(result);
                    $('#results').html(result);

                }

                success: function(data) {
  $("#results").html(data.response.status);
}


            })
            .fail(function(){ alert("something went wrong. Please try again") });
    }

