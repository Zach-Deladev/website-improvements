// Registration form validation - this form checks if the users input matched the regular expressions and requirements need to sign up, then directs them to a thankyou page when validated.

// Grabs all inputs from  registration form.
const inputs = document.forms.contactForm.querySelectorAll("input");

// Object containing Regex patterns for each input field

const patterns = {
    // UK mobile phone number, with optional +44 national code.
    telephone: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
    // Username must start with a letter and can contatin only letters
    username: /^[A-Za-z][A-Za-z]{3,12}$/,
    // Email address e.g yourname@domain.com
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    //  make regex for message that is 10-1500 characters long
    message: /^.{10,1500}$/
};

// Validation function - Two parameters, input field we are testing and regex to test against
function validate(field, regex){

   console.log(regex.test(field.value));

//    This if statement adds a valid class to the input field if the users input matches the regex requirements
//    This if statement also adds a invalid class to the input field if the users input does not meet the requirements.
   if(regex.test(field.value)) {
    field.className = "valid"
   } else {
    field.className = "invalid"
   }
 
}

// This function checks each input field on each key (keyup) entry to see if the users input matches the regex requirements
inputs.forEach((input) => {

    input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
    });
    });
    
 
// This function gets the form element and adds an event listener to it, when the form is submitted it checks if any of the inputs have the invalid class, if they do it prevents the form from being submitted and displays an error message.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e)=> {
    let messages = []

    for (let i = 0; i < inputs.length; i ++) {
        if (inputs[i].classList.contains("invalid")){
            messages.push("All inputs need to be valid.");
            console.log(inputs[i]);
            document.getElementById("errorElement").innerHTML = "All inputs need to be valid.";
            
        }
    }

    if (messages.length > 0 ) {
        e.preventDefault();
        console.log(messages)
    }
})
