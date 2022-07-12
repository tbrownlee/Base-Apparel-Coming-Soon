"use strict" 




/* This section deals with page width and things I need to do to elements depending on the page width */

let header = document.querySelector(".header");
let textContainer = document.querySelector(".text");
let main = document.querySelector(".main");
let mediaQuery = window.matchMedia("(min-width: 40rem)");


/* If the page loads as the desktop size, put the header in the text container div */
if(mediaQuery.matches) {
    textContainer.prepend(header);
}

/* This eventListener puts the header where it needs to be depending on the page size */
mediaQuery.addEventListener("change", function(e) {
    if(e.matches) {
        textContainer.prepend(header);
    } else {
        main.prepend(header);
    }
})

/* This eventListener changes the border type depending on the page size (this is more for me as I swap between different page widths (mobile and desktop) ) */
mediaQuery.addEventListener("change", function(e) {
    if(e.matches) {
        if(input.classList.contains("border-mobile")) {
            input.classList.toggle("border-mobile");
            input.classList.toggle("border-desktop");
        }
    } else {
        if(input.classList.contains("border-desktop")) {
            input.classList.toggle("border-desktop");
            input.classList.toggle("border-mobile");
        }
    }
})










/* Form section */

let button = document.querySelector(".button");
let input = document.querySelector(".input");
let errorMessage = document.querySelector(".error-message");
let errorImage = document.querySelector(".error-image");
let form = document.querySelector(".form")
let thankYouMessage = document.querySelector(".thank-you-message");

let emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;



/* this stops the page from reloading onsubmit */
form.onsubmit = function() {
    return false;
}

/* Changes the state to error or valid, or if already error do nothing */
button.addEventListener("click", function() {
    if(isErrorStateShown()) {
        return;
    } else if (!isValidEmail() || input.value == "") {
        toggleErrorState();
    } else {
        toggleValidState();
    }
});

function toggleErrorState() {
    toggleCorrectErrorBorder();
    errorMessage.classList.toggle("show");
    errorImage.classList.toggle("show");
}

function toggleValidState() {
    form.classList.toggle("hidden");
    thankYouMessage.classList.toggle("show");
}

function toggleCorrectErrorBorder() {
    if(mediaQuery.matches) {
        input.classList.toggle("border-desktop");
    } else if(!mediaQuery.matches) {
        input.classList.toggle("border-mobile")
    }
}

function isValidEmail() {
    return emailValidation.test(input.value.toLowerCase());
}

function isErrorStateShown() {
    return errorImage.classList.contains("show");
}





/* If they start typing, disable ErrorState */
input.addEventListener("keyup", function() {
    if(isErrorStateShown()) {
        toggleErrorState();
    }
})