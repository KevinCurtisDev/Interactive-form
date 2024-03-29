# Interactive Form

<img src="static/images/form.png" style="width: 600px; height: auto; margin: 0 auto;">

## Project Summary

The idea of this project is to perform custom form validation on varius form inputs using only the Jquery library. The form should also be functional when JavaScript has been disabled.

## Features

The form include validation for text input and numeric input using regex. Check box inputs are validated with conditional logic. Validation messages are shown conditionally depending on the validation error, and unfilled fields are highlighted when there is an attempt to submit an incomplete form. As longas validation checks are not passed the form is prevented from being submitted. The form is fully functional when JavaScript is disabled, allowing for unobstrusive JavaScript and progressive enhancement.

## Deployment

The form app is deployed to gihub pages and can be viewed here: [Form app](https://kevincurtisdev.github.io/Interactive-form/)]

To run the site on your localhost, first clone or download the repo.CD into the root directory and run a simple http server with whichever language you have running on your machine. Alternatively, install the live server extension from vs code. Open the project in vs code, navigate to the index.html page. Right click anywhere on that page and select run server in order to preview the site in your browser.

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

