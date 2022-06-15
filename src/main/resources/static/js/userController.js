// Create class userController
class userController {

    constructor() {
        this._allUsers = [];
    }

    // TEST ONLY - no data to input to array
    addUser(arr) {

        // will edit methods once we have created our API in Java - store info in database
        
        arr.forEach(item => {

            const userItem = {
                email: item.email,
                password: item.password
            }

            this._allUsers.push(userItem);

        });
        
    } // end of addUser

    // TEST ONLY - no html page to display
    displayUser() {
        
        // console.log(this._allUsers);

        let tableInfo = `
            <table border=1>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
        `

        this._allUsers.forEach((item, index) => {

            let userIndex = "item" + index; // item0, item1, item2, ...

            tableInfo += `
                <tr>
                    <td>${item.email}</td>
                    <td>${item.password}</td>
                </tr>
            `

        });

        tableInfo += "</table>";

        document.querySelector("#userList").innerHTML = tableInfo;

    } // end of displayUser method

} // end of userController class