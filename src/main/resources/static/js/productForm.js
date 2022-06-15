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
const productList = [];

// function clears user inputs in form
function clearInput() {
    document.querySelector("#nameOfCollection").value = "";
    document.querySelector("#categoryField").value = "";
    document.querySelector("#listPrice").value = "";
    document.querySelector("#inputGroupFile02").value = "";
    document.querySelector("#description").value = "";
}

// function handle form submission
function submitForm() {
    // store input values into variables
    const name = document.querySelector("#nameOfCollection").value;
    const category = document.querySelector("#categoryField").value;
    const listPrice = document.querySelector("#listPrice").value;
    const image = document.querySelector("#inputGroupFile02").value;
    const description = document.querySelector("#description").value;

    // create object to store values
    const productDetails = {
        name: name,
        category: category,
        listPrice: listPrice,
        image: image,
        description: description,
    };

    // store object into array
    productList.push(productDetails);

    // clears user inputs in form
    clearInput();

    // reset category field to grey
    document.getElementById("categoryField").style.color = "grey";

    console.log(productList); // testing
    alert(
        "Thank you for your submission. Your NFT has been successfuly uploaded."
    );
} // End of submitForm function

document
    .querySelector("button[type=submit]")
    .addEventListener("submit", (event) => {
        event.preventDefault();
    });

document
    .querySelector("button[type=submit]") 
    .addEventListener("click", (event) => {
        
        if (document.querySelector("form").checkValidity()) {
            submitForm();
        }
        
    });




