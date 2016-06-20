$(document).ready(function() {

    $( "#release-info-form" ).submit(function( e ) {
      e.preventDefault();
      $("#loading1").show();
        // Get the form instance
        var $form = $(e.target);

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbwyf4XypYFJFbh6QCrdPNpl-VMBE9-PWmYUVsYcz3alfjNUDKM/exec';
        //https://script.google.com/macros/s/AKfycbwbixmN6ug4jpPuddkWAkmGrr8nHyZvGa8duSl7593kIAkaWqnp/exec
        var redirectUrl = '#products';
        // show the loading 
        //$('#product_notify').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
            $("#loading1").hide();
            $("#save_success1").show(),
            //$("#thanks_message").show(),
           // $("#save_success").hide('blind', {}, 500)
            $('#save_success1').delay(3000).fadeOut('slow'),
          //  $("#thanks_message").delay(20000).fadeOut('slow'),
        //alert("Success");
        $( '#release-info-form' ).each(function(){
    this.reset();
});
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });



    $( "#get_in_touch_form" ).submit(function( e ) {
      e.preventDefault();
        $("#loading2").show();
//alert();
        // Get the form instance
        var $form = $(e.target);

        // Use Ajax to submit form data

        var url = 'https://script.google.com/macros/s/AKfycbwEp5eO9cWCusnQkMYBj3QdJufm4wY_xcFW2c4UXT0DROapj9A/exec';
        
        var redirectUrl = '#GetInTouch';
        // show the loading 
//        $('#form_send_message').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
           //$(location).reload();
            // $("#form_send_message").html('Save');
            $("#loading2").hide();
            $("#save_success2").show(),
            $("#thanks_message").show(),
           // $("#save_success").hide('blind', {}, 500)
            $('#save_success2').delay(3000).fadeOut('slow'),
            $("#thanks_message").delay(10000).fadeOut('slow'),
            $( '#get_in_touch_form' ).each(function(){
    this.reset();
});
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});
