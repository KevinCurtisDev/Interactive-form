//JQuery wrapper function
$(document).ready(() => {

    /*****************************VARIABLES**************************/
    //Regex validations patterns
    const zipCodeRegEx = /^\d{5}$/;
    const cardNumberRegEx = /^\d{13,16}$/;
    const cvvRegEx = /^\d{3}$/;
    const nameRegEx = /^[A-Z]+$/i
    const emailRegEx = /^[^@]+@[^@.]+\.[a-z]+$/i

    //Input elements in the dom
    const creditCardNumber = $('#cc-num');
    const zipCodeNumber = $('#zip');
    const cvvNuber = $('#cvv');
    const name = $('#name');
    const email = $('#mail');
    const activities = $('.activities input');
    const activitiesText = $('.activities label');

    let price = 0;
    const checkedList = [];

    /**************************************************************/

    /********************* FORM SUBMISSION ***********************/
    // Allow form submission
    const submitForm = () => {
        $('form').unbind('submit');
        $('form').reset();
    }    

    // Prevent form submission
    const dontSubmitForm = () => {
        $('form').on('submit', (e) => {
            e.preventDefault();
        });
    }

    /***********************************************************/

    /**
     * Generic input validator function takes the input id and the regex 
     * pattern as 'fieled' and 'reg' arguments
     **/
    
    const inputValidation = (field, reg) => {
        
        field.on('input', function(){
            $(this).css('background', 'rgb(247, 247, 73)');
            if(reg.test($(this).val())) {
                $(this).css('background', 'white');

                if($(this === $(email))){
                    $('#emailTick').removeClass('is-hidden');
                }
            } else {
                if($(this === $(email))){
                    $('#emailTick').addClass('is-hidden');
                }

                $(this).css('background', 'rgb(247, 247, 73)');
            }
        });
    };


    //Credit card checks on form submission
    const checkCardDetailsOnSubmit = (numType, numRegEx, labelDesc, mssg) => {
        if($(numType).val() === ''){
            $(numType).css('background', 'rgb(247, 247, 73)');
            $(numType).attr('placeholder', 'Enter number..');
        } else if (!numRegEx.test($(numType).val())) {
            $(numType).after(labelDesc);
            $(numType).css('background', 'rgb(247, 247, 73)');
        } 
    }

    /******************* EMAIL & NAME VALIDATION ************************/

    //Reference the first form field and set cursor to focus on it
    name.focus();
    
    $(name).on('input', function() {
        if($('#nameBad')){
            $('#nameBad').remove();
        }
        if($(this).val().length > 1 && nameRegEx.test($(this).val())) {
            $('#nameTick').removeClass('is-hidden');
            $(this).css('background', 'white');
            $('#nameBad').remove();
        } else {
            $('#nameTick').addClass('is-hidden');
            $(this).after("<label id='nameBad' style='color: red;'>*Please enter a valid name...</label>")
            $(this).css('background', 'rgb(247, 247, 73)');
        }
    });

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
        if($(this).val() !== "Select Theme" && $(this).val() !=="heart js") {
            // Display color options
            $('#colors-js-puns').removeClass('is-hidden')
            $('.heart').addClass('is-hidden');
            $('.puns').removeClass('is-hidden');
            //Set the selected option value
            $('#first-value')
            .text('Cornflower Blue (JS Puns shirt only)')
            .val('cornflowerblue');
            $('#shirtBad').remove();
            $('#shirtTick').removeClass('is-hidden');
        } else if ($(this).val() !== "Select Theme" && $(this).val() !=="js puns") {
            // Display color options
            $('#colors-js-puns').removeClass('is-hidden')
            $('.heart').removeClass('is-hidden');
            $('.puns').addClass('is-hidden');
            //Set the selected option value
            $('#first-value')
            .text('Tomato (I ♥ JS shirt only)')
            .val('tomato');
            $('#shirtBad').remove();
            $('#shirtTick').removeClass('is-hidden');
        }else {
            //Oterwise don't display colour selection option
            $('#first-value')
            .text('')
            .val('');
            $('#shirtTick').addClass('is-hidden');
        }
    });

    /***********************************************************************/


    /********************** AVTIVITIES REGISTER ****************************/


    const tickedBox = (boxName, box1, cost) => {
        let totalHtml = $(`<div>Total cost: €${price}</div>`)
        $(activities).change(function () {
            if(this.checked && this.name === boxName) {
                checkedList.push(boxName)
                $('#activitiesBad').remove();
                $($('.activities .cost')).remove();
                price += cost;
                totalHtml = $(`<div class="cost">Total cost: €${price}</div>`)
                $('.activities').append(totalHtml);
                $(activities[box1]).prop("disabled", true);
                $($(activitiesText)[box1]).css("color", "gray");
                $('#activitiesTick').removeClass('is-hidden');
            } else if (!this.checked && this.name === boxName) {
                let num = checkedList.indexOf(boxName);
                checkedList.splice(num, 1)
                $($('.activities .cost')).remove();
                price -= cost;
                totalHtml = $(`<div class="cost">Total cost: €${price}</div>`)
                $('.activities').append(totalHtml);
                $(activities[box1]).prop("disabled", false);
                $($(activitiesText)[box1]).css("color", "black");
                $('#activitiesTick').addClass('is-hidden');
            }
        });
    }

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
        if(cardNumberRegEx.test($(creditCardNumber).val())
        && cvvRegEx.test($(cvvNuber).val())
        && zipCodeRegEx.test($(zipCodeNumber).val())) {
            $('#paymentTick').removeClass('is-hidden')
        } else {
            $('#paymentTick').addClass('is-hidden')
        }

        if(cardNumberRegEx.test($(creditCardNumber).val())){
            $('#cardNoBad').remove();
        }

        if(cvvRegEx.test($(cvvNuber).val())){
            $('#cvvNoBad').remove();
        }

        if(zipCodeRegEx.test($(zipCodeNumber).val())){
            $('#zipNoBad').remove();
        }

    });

    inputValidation(creditCardNumber, cardNumberRegEx);
    inputValidation(cvvNuber, cvvRegEx);
    inputValidation(zipCodeNumber, zipCodeRegEx);


/******************************* Final checks *******************************/

    $('button').on('click', () => {
        $('#cardNoBad').remove();
        $('#cvvNoBad').remove();
        $('#zipNoBad').remove();

        //Check name field
        if($(name).val() === '') {
            $(name).css('background', 'rgb(247, 247, 73)');
            $(name).attr('placeholder', 'This field must be filled..');
            $(window).scrollTop(0);
        }

        //Check email field
        if(!emailRegEx.test($(email).val())) {
            $(email).css('background', 'rgb(247, 247, 73)');
            $(email).attr('placeholder', 'Please enter a valid email address..');
            $(window).scrollTop(0);
        }

        //Check title field
        if($('#title').val() === 'other' && $("#other-title").val() === '') {
            $("#other-title").css('background', 'rgb(247, 247, 73)');
            $("#other-title").attr('placeholder', 'This field must be filled..');
            $(window).scrollTop(0);
        }

        //Check t-shirt option
        if($('#design').val() !== 'Select Theme') {
            $('#shirtBad').remove();
        } else {
            $('#shirtBad').remove();
            $('.shirt legend').after('<label id="shirtBad" style="color: red;">*Please select a Tshirt theme</label>');
        }

        // Check Activities check boxes 
        if(checkedList.length > 0) {
            $('#activitiesBad').remove();
        } else {
            $('#activitiesBad').remove();
            $('.activities legend').after('<label id="activitiesBad" style="color: red;">*Please select an activity</label>');
        }

        // Check credit card fields
        if($("#payment").val() === "credit card") {
            checkCardDetailsOnSubmit(creditCardNumber, cardNumberRegEx, '<label id="cardNoBad" style="color: red;">*Enter a valid card number</label>', '#cardNoBad')
            checkCardDetailsOnSubmit(zipCodeNumber, zipCodeRegEx, '<label id="zipNoBad" style="color: red;">*Enter a valid area code</label>', '#zipNoBad')
            checkCardDetailsOnSubmit(cvvNuber, cvvRegEx, '<label id="cvvNoBad" style="color: red;">*Enter a valid cvv</label>', '#cvvNoBad')

            if(checkedList.length > 0 && $('#design').val() !== 'Select Theme' && emailRegEx.test($(email).val()) && $(name).val() !== '' && cardNumberRegEx.test($(creditCardNumber).val()) && zipCodeRegEx.test($(zipCodeNumber).val()) && cvvRegEx.test($(cvvNuber).val())) {
                if($('#title').val() === 'other' && $("#other-title").val() !== ''){
                    submitForm();
                } else if($('#title').val() !== 'other') {
                    submitForm();
                }   
            } else {
                dontSubmitForm();
            }
        } else if($("#payment").val() !== "credit card") {
            if(checkedList.length > 0 && $('#design').val() !== 'Select Theme' && emailRegEx.test($(email).val()) && $(name).val() !== '' ) {
                if($('#title').val() === 'other' && $("#other-title").val() !== ''){
                    submitForm();
                } else if($('#title').val() !== 'other') {
                    submitForm();
                }   
            } else {
                dontSubmitForm();
            }
        } 
    });
});