# Interactive Form

<img src="static/images/form.png" style="width: 600px; height: auto; margin: 0 auto;">

## Project Summary

The idea of this project is to perform custom form validation on varius form inputs using only the Jquery library. The form should also be functional when JavaScript has been disabled.

## Features

The form include validation for text input and numeric input using regex. Check box inputs are validated with conditional logic. Validation messages are shown conditionally depending on the validation error, and unfilled fields are highlighted when there is an attempt to submit an incomplete form. As longas validation checks are not passed the form is prevented from being submitted. The form is fully functional when JavaScript is disabled, allowing for unobstrusive JavaScript and progressive enhancement.

## Code sample

```JavaScript
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
```

## Sources 

Initial html and css files provided by treehouse.

