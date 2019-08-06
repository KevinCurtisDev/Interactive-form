//JQuery wrapper function
$(document).ready(() => {
    
    /******************* EMAIL & NAME VALIDATION ************************/

    //Reference the first form field and set cursor to focus on it
    name.focus();

    //Name validation check
    $(name).on('input', () => nameInputCheck());

    //Email validation check
    inputValidation(email, emailRegEx);
    /*****************************************************************/

    /************************ JOB ROLE CHECK ********************************/

    //Hide "other" option on page load
    $("#other-title").addClass('is-hidden')

    //Set field as correctly selected on initial page load
    if($('#title').val() !== "other") {
        $('#titleTick').removeClass('is-hidden');
    }

    //check selected job role
    $('#title').change(() => {
        checkOtherSelected();
        titleCheck();
    });

    $("#other-title").on('input', () => titleFieldIsFilled());

    /*****************************************************************************/

    /********************** T-SHIRT & COLOUR SELECTION ***************************/

    //Select the color selection element from the dom
    $('#colors-js-puns').addClass('is-hidden')

    //Set initial text and value T-shirt color to empty
    $('#first-value').val('').text('');

    //check selected color
    $('#design').change(() => designChoiceCheck());

    /***********************************************************************/


    /********************** AVTIVITIES REGISTER ****************************/
    //Check ticked boxes and calculate fee
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
    $('#payment').change(() => checkPaymentMethod());


    $('#credit-card').on('input', () => cardErrorMessages());

    inputValidation(creditCardNumber, cardNumberRegEx);
    inputValidation(cvvNuber, cvvRegEx);
    inputValidation(zipCodeNumber, zipCodeRegEx);

    /****************************************************************************/


    /******************************* FINAL CHECKS *******************************/

    $('button').on('click', () => formSubmitChecks());
        
    //Conditinal message for credit card number input
    $(creditCardNumber).on('input', () => conditionalCheck());

    /***************************************************************************/
});