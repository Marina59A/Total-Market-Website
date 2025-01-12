//Get header from home page by Ajax
document.addEventListener("DOMContentLoaded", function () {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'home.html', true);
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = httpRequest.response;
            console.log(tempDiv.innerHTML);
            var loginHeader = tempDiv.querySelector('.header');
            console.log(loginHeader);
            if (loginHeader) {
                showHeader(loginHeader);
            } else {
                console.error("Header not found in the fetched content.");
            }
        }

    }
    httpRequest.send();
})

function showHeader(data) {
    var headerDiv = document.createElement("div");
    headerDiv.appendChild(data.cloneNode(true));
    document.body.prepend(headerDiv);
}

//SignUp Form
function SignUpFunc(event) {
    try {
        event.preventDefault();
        var firstName = document.getElementById("divInputFName").value;
        var lastName = document.getElementById("divInputLName").value;
        // var confirmPassword = document.getElementById("divConfirmPassword").value;
        var password = document.getElementById("divPassword").value;
        var email = document.getElementById("divInputEmail").value;

        var previousFirstNameErrorMessage = document.getElementById("firstNameError");
        if (previousFirstNameErrorMessage) {1
            previousFirstNameErrorMessage.remove();
        }
        var previousLastNameErrorMessage = document.getElementById("lastNameError");
        if (previousLastNameErrorMessage) {
            previousLastNameErrorMessage.remove();
        }
        var previousEmailErrorMessage = document.getElementById("emailError");
        if (previousEmailErrorMessage) {
            previousEmailErrorMessage.remove();
        }

        var previousPasswordErrorMessage = document.getElementById("passwordError");
        if (previousPasswordErrorMessage) {
            previousPasswordErrorMessage.remove();
        }

        if (firstName === "") {
            displayErrorMessage("divInputFName", "firstNameError", "Name is required.");
            throw new Error("Name is required");
        } 
        if (lastName === "") {
            displayErrorMessage("divInputLName", "lastNameError", "Name is required.");
            throw new Error("Name is required");
        } 
        
        const emailRegex1 = /^[a-zA-Z0-9._%+-]+@gmail\.(com|net|org|edu)$/;
        if (email === "") {
            displayErrorMessage("divInputEmail", "emailError", "Email is required.");
            throw new Error("Email is required");
        }else if (!emailRegex1.test(email)) {
            displayErrorMessage("divInputEmail", "emailError", "Invalid email format.");
            throw new Error("Invalid email format");
        }

        if (password.length < 8) {
            displayErrorMessage("divPassword", "passwordError", "Password must be at least 8 characters.");
            throw new Error("Password must be at least 8 characters.");
        }

        window.alert("Login successful!");
        window.location.href = "home.html";

    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("End of validation.");
    }
}

function displayErrorMessage(divId, errorId, errorMessage) {
    var errorSpan = document.createElement("span");
    errorSpan.id = errorId;
    errorSpan.style.color = "black";
    errorSpan.textContent = errorMessage;
    var parentDiv = document.getElementById(divId);
    parentDiv.appendChild(errorSpan);
}


//Get footer from home page by Ajax
document.addEventListener("DOMContentLoaded", function () {
    var httpRequest2 = new XMLHttpRequest();
    httpRequest2.open('GET', 'home.html', true);
    httpRequest2.onreadystatechange = function () {
        if (httpRequest2.readyState == 4 && httpRequest2.status == 200) {
            var tempDiv2 = document.createElement('div');
            tempDiv2.innerHTML = httpRequest2.response;
            console.log(tempDiv2.innerHTML);
            var loginFooter = tempDiv2.querySelector('.footer');
            console.log(loginFooter);
            if (loginFooter) {
                showHeader2(loginFooter);
            } else {
                console.error("Header not found in the fetched content.");
            }
        }

    }
    httpRequest2.send();
})

function showHeader2(data) {
    var footerDiv = document.createElement("div");
    footerDiv.appendChild(data.cloneNode(true));
    document.body.appendChild(footerDiv);
}

