//JQuery wrapper function
$(document).ready(() => {
    //global variables

    // hidden job role input
    const hiddenFormField = $("#other-title");
    
    //Reference the first form field and set cursor to focus on it
    const name = $('#name');
    name.focus();

    //check selected job role
    $('#title').change(function () {
        //If other is selected, display idden input field
        if($(this).val() === "other") {
            hiddenFormField.css('display', 'block')
            hiddenFormField.focus();
        }
    });


    //Set initial text andvalue T-shirt color to empty
    $('#first-value').val('');
    $('#first-value').text('');

    //check selected color
    $('#design').change(function () {
        if($(this).val() !== "Select Theme") {
            $('#first-value').text('Cornflower Blue (JS Puns shirt only)');
            $('#first-value').val('cornflowerblue');
        } else {
            $('#first-value').val('');
            $('#first-value').text('');
        }
    });

    
    
});