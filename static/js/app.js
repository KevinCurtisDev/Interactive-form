//JQuery wrapper function
$(document).ready(() => {
    /******************* EMAIL & NAME VALIDATION ************************/

    //Reference the first form field and set cursor to focus on it
    name.focus();

    //Name validation check
    $(name).on('input', function() {
        nameInputCheck();
    });

    //Email validation check
    inputValidation(email, emailRegEx);
    /*****************************************************************/
    
    //Hide "other" option on page load
    $("#other-title").addClass('is-hidden')

    if($('#title').val() !== "other") {
        $('#titleTick').removeClass('is-hidden');
    } else {
        $('#titleTick').addClass('is-hidden');
    }


    //check selected job role
    $('#title').change(function () {
        //If other is selected, display hidden input field
        if($(this).val() === "other") {
            $("#other-title")
            .removeClass('is-hidden')
            .focus();
        }
    });

    $("#other-title").on('input', function () {
        if($(this).val().length > 1) {
            $('#titleTick').removeClass('is-hidden');
        } else {
            $('#titleTick').addClass('is-hidden');
        }
    });


    /********************** T-SHIRT & COLOUR SELECTION ***************************/

    //Select the color selection element from the dom
    $('#colors-js-puns').addClass('is-hidden')

    //Set initial text and value T-shirt color to empty
    $('#first-value').val('').text('');

    //check selected color
    $('#design').change(function () {
        designChoiceCheck();
    });

    /***********************************************************************/


    /********************** AVTIVITIES REGISTER ****************************/
    //Check ticked boxes and calculate ffinal charge
    tickedBox("all", '', 200)
    tickedBox("js-frameworks", 3, 100)
    tickedBox("express", 1, 100)
    tickedBox("build-tools", '', 100)
    tickedBox("js-libs", 4, 100)
    tickedBox("node", 2, 100)
    tickedBox("npm", '', 100)

    /************************************************************************/


    /************************** PAYMENT INFO LOGIC *************************/

    $("#payment option:eq(0)").addClass('is-hidden');
    //Initial state set on credit card selection
    $("#payment").val($("#payment option:eq(1)").val());
    $('#credit-card').siblings('div').addClass('is-hidden');


    //Check for options being selected
    $('#payment').change(function () {
        //Hide paypal and bitcoin options
        if($(this).val() === "credit card") {
            $('#credit-card').removeClass('is-hidden')
            $('#credit-card').siblings('div').addClass('is-hidden');
            $('#paymentTick').addClass('is-hidden');
        }

        // Hide credit card and bitcoin options
        if($(this).val() === "paypal") {
            $('#credit-card').next().removeClass('is-hidden');
            $('#credit-card').next().siblings('div').addClass('is-hidden');
            $('#paymentTick').removeClass('is-hidden');
        }

        //Hide credit card and paypal options
        if($(this).val() === "bitcoin") {
            $('#credit-card').next().next().removeClass('is-hidden');
            $('#credit-card').next().next().siblings('div').addClass('is-hidden');
            $('#paymentTick').removeClass('is-hidden');
        }

    });


    $('#credit-card').on('input', function(){
        cardErrorMessages();
    });

    inputValidation(creditCardNumber, cardNumberRegEx);
    inputValidation(cvvNuber, cvvRegEx);
    inputValidation(zipCodeNumber, zipCodeRegEx);


/******************************* Final checks *******************************/

    $('button').on('click', () => {
        formSubmitChecks();
    });

    //Conditinal essage for credit card number input
    $(creditCardNumber).on('input', function(){
        $('.red').remove();
        if($(creditCardNumber).val().length < 13) {
            $(creditCardNumber).after('<label class="red" style="color: red;">*Number must be at least 13 digits</label>')
        }
        if($(creditCardNumber).val().length > 16) {
            $(creditCardNumber).after('<label class="red" style="color: red;">*Number can\'t be more than 16 digits</label>')
        }
    });
});