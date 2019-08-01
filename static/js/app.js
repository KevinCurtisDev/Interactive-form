//JQuery wrapper function
$(document).ready(() => {
    //global variables

    // hidden job role input
    const hiddenFormField = $("#other-title");
    
    //Reference the first form field and set cursor to focus on it
    const name = $('#name');
    name.focus();

    //Hide color selection on page load
    hiddenFormField.addClass('is-hidden')

    //check selected job role
    $('#title').change(function () {
        //If other is selected, display idden input field
        if($(this).val() === "other") {
            hiddenFormField
            .removeClass('is-hidden')
            .focus();
        }
    });

    $('#colors-js-puns').addClass('is-hidden')

    //Set initial text andvalue T-shirt color to empty
    $('#first-value').val('').text('');



    //check selected color
    $('#design').change(function () {
        if($(this).val() !== "Select Theme") {
            // Display color option
            $('#colors-js-puns').removeClass('is-hidden')
            $('#first-value')
            .text('Cornflower Blue (JS Puns shirt only)')
            .val('cornflowerblue');
        } else {
            $('#first-value')
            .text('')
            .val('');
        }
        
        if ($(this).val() === "js puns") {
            $('.heart').addClass('is-hidden');
        } else {
            $('.heart').removeClass('is-hidden');
            $('.puns').addClass('is-hidden');
        }
    });

    
    
});

// $('#first-value').val('').text('');