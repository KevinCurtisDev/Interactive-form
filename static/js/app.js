//JQuery wrapper function
$(document).ready(() => {

    // Prevent form submit function
    const preventSubmit = () => {
        $('button').click((e) => {
            e.preventDefault();
        });

        $('form').submit((e) => {
            e.preventDefault();
        })
    }

/******************* EMAIL & NAME VALIDATION ************************/
    const name = $('#name');
    const email = $('#mail');

    //Reference the first form field and set cursor to focus on it
    name.focus();

    const nameRegEx = /^[A-Z]+$/i
    const emailRegEx = /^[^@]+@[^@.]+\.[a-z]+$/i

    $(name).on('input', function() {
        if($(this).val().length > 1 && nameRegEx.test($(this).val())) {
            $(this).css('background', 'white');
        } else {
            $(this).css('background', 'rgb(247, 247, 73)');
        }
    });


    $(email).on('input', function() {
        $(this).css('background', 'rgb(247, 247, 73)');
        if(emailRegEx.test(email.val())) {
            $(this).css('background', 'white');
        } else {
            $(this).css('background', 'rgb(247, 247, 73)');
        }
    });
/*****************************************************************/
    


    //Hide "other" option on page load
    $("#other-title").addClass('is-hidden')

    //check selected job role
    $('#title').change(function () {
        //If other is selected, display hidden input field
        if($(this).val() === "other") {
            $("#other-title")
            .removeClass('is-hidden')
            .focus();
        }
    });

/********************** T-SHIRT & COLOUR SELECTION ***************************/

    //Select the color selection element from the dom
    $('#colors-js-puns').addClass('is-hidden')

    //Set initial text and value T-shirt color to empty
    $('#first-value').val('').text('');


    //check selected color
    $('#design').change(function () {
        if($(this).val() !== "Select Theme") {
            // Display color options
            $('#colors-js-puns').removeClass('is-hidden')
            //Set teh selected option value
            $('#first-value')
            .text('Cornflower Blue (JS Puns shirt only)')
            .val('cornflowerblue');
        } else {
            //Oterwise don't display colour selection option
            $('#first-value')
            .text('')
            .val('');
        }
        
        /***
         * Check which T-shirt type has been selected
         * Then show the related colours for that T-shirt type
         ***/
        if ($(this).val() === "js puns") {
            $('.heart').addClass('is-hidden');
        } else {
            $('.heart').removeClass('is-hidden');
            $('.puns').addClass('is-hidden');
        }
    });

/***********************************************************************/


/********************** AVTIVITIES REGISTER ****************************/
    const activities = $('.activities input');
    const activitiesText = $('.activities label');
    price = 0;
    totalList = [];

    const tickedBox = (boxName, box1, box2, cost) => {
        let totalHtml = $(`<div>Total cost: €${price}</div>`)
        $(activities).change(function () {
            if(this.checked && this.name === boxName) {
                $($('.activities .cost')).remove();
                price += cost;
                totalHtml = $(`<div class="cost">Total cost: €${price}</div>`)
                $('.activities').append(totalHtml);
                $(activities[box1]).prop("disabled", true);
                $($(activitiesText)[box1]).css("color", "gray");
                $(activities[box2]).prop("disabled", true);
                $($(activitiesText)[box2]).css("color", "gray");
            } else if (!this.checked && this.name === boxName) {
                $($('.activities .cost')).remove();
                price -= cost;
                totalHtml = $(`<div class="cost">Total cost: €${price}</div>`)
                $('.activities').append(totalHtml);
                $(activities[box1]).prop("disabled", false);
                $($(activitiesText)[box1]).css("color", "black");
                $(activities[box2]).prop("disabled", false);
                $($(activitiesText)[box2]).css("color", "black");
            }
        });
    }

    tickedBox("all", '', '', 200)
    tickedBox("js-frameworks", 3, 5, 100)
    tickedBox("express", 1, 5, 100)
    tickedBox("build-tools", 1, 3, 100)
    tickedBox("js-libs", 4, 6, 100)
    tickedBox("node", 2, 6, 100)
    tickedBox("npm", 2, 4, 100)

/************************************************************************/


/************************** PAYMENT INFO LOGIC *************************/

//Initial state set on credit card selection
$("#payment").val($("#payment option:eq(1)").val());
$('#credit-card').siblings('div').addClass('is-hidden');

//Check for options being selected
$('#payment').change(function () {
    //Hide paypal and bitcoin options
    if($(this).val() === "credit card") {
        $('#credit-card').removeClass('is-hidden')
        $('#credit-card').siblings('div').addClass('is-hidden');
    }

    // Hide credit card and bitcoin options
    if($(this).val() === "paypal") {
        $('#credit-card').next().removeClass('is-hidden');
        $('#credit-card').next().siblings('div').addClass('is-hidden');
    }

    //Hide credit card and paypal options
    if($(this).val() === "bitcoin") {
        $('#credit-card').next().next().removeClass('is-hidden');
        $('#credit-card').next().next().siblings('div').addClass('is-hidden');
    }

});


const cvv = /\d{3}/;
/***********************************************************************/




/********************** FORM VALIDATION LOGIC *************************/


//TODO


/********************************************************************/
    
});
