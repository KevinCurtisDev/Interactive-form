//JQuery wrapper function
$(document).ready(() => {
    //global variables
    
    //Reference the first form field and set cursor to focus on it
    const name = $('#name');
    name.focus();

    //Hide color selection on page load
    $("#other-title").addClass('is-hidden')

    //check selected job role
    $('#title').change(function () {
        //If other is selected, display idden input field
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

/*************************************************************************/


/********************** FORM VALIDATION LOGIC *************************/


//TODO


/********************************************************************/
 
});
