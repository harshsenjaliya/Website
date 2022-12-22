$(function() {

    // Get the form.
    var form = $('#contact-us');

    // Get the messages div.
    var formMessages = $('.contact-send-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(data) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text('Successfully Submitted');

                // Clear the form.
                $('.input-box input, .message-box textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                  $(formMessages).text('Successfully Submitted');

                // Clear the form.
                $('.input-box input, .message-box textarea').val('');
            });
    });

});
