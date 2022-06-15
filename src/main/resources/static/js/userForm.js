/* 

Business Logic:

1) If all the input fields are validated,the values from the input fields will be stored into an Array of Object 

2) Validation of the input fields include:
- All Fields are required
- For this project, only limit to 1 NFT upload per collection
- User has to select at least one experience from the checkboxes
- User has to select either agree or disagree from the radio buttons

 */

// Declaration of all Global variables
const userList = [];

// function clears user inputs in form
function clearInput() {
    document.querySelector("#exampleInputEmail1").value = "";
    document.querySelector("#exampleInputPassword1").value = "";
}

// function handle form submission
function submitForm() {
    // store input values into variables
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;

    // pattern for checking user email and password
    const emailPattern = /@/g && /.com/g;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/g;
    let correctInput = true; 
    
    // check and show error message for email
    if (email == "" || !emailPattern.test(email)) {
        document.querySelector("#exampleInputEmail1").setCustomValidity("Please input correct email format.");
        document.querySelector("#exampleInputEmail1").reportValidity();
        correctInput = false;
    }

    // check and show error message for password
    if (password == "" || !passwordPattern.test(password)) {
        document.querySelector("#exampleInputPassword1").setCustomValidity("Please ensure your password has at least 1 digit, 1 lowercase, uppercase & special character. Password length between 8-32.");
        document.querySelector("#exampleInputPassword1").reportValidity();
        correctInput = false;
    }
    
    if (correctInput) {

        // clear error message
        document.querySelector("#exampleInputEmail1").setCustomValidity("");
        document.querySelector("#exampleInputEmail1").reportValidity();
        document.querySelector("#exampleInputPassword1").setCustomValidity("");
        document.querySelector("#exampleInputPassword1").reportValidity();

        // create object to store values
        const userDetails = {
            email: email,
            password: password,
        };

        // store object into array
        userList.push(userDetails);

        // clears user inputs in form
        clearInput();

        console.log(userList); // testing
        alert(
            "You have successfuly logged in!."
        );

    }
} // End of submitForm function

document
    .querySelector("button[type=submit]")
    .addEventListener("click", (event) => {
        event.preventDefault();
        submitForm();
    });
