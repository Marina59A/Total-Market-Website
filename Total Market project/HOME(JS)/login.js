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

//Login Form
function LogInFunc(event) {
    try {
        event.preventDefault();

        var password = document.getElementById("inputPass").value;
        var email = document.getElementById("inputName").value;

        var canselPerviosEmailErrorMessege = document.getElementById("emailError");
        if (canselPerviosEmailErrorMessege) {
            canselPerviosEmailErrorMessege.remove();
        }

        var canselPerviosPasswordErrorMessege = document.getElementById("passwordError");
        if (canselPerviosPasswordErrorMessege) {
            canselPerviosPasswordErrorMessege.remove();
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.(com|net|org|edu)$/;
        if (email == "") {
            var errorSpanEmail = document.createElement("span");
            errorSpanEmail.id = "emailError";
            errorSpanEmail.style.color = "black";

            errorSpanEmail.textContent = "Email is required.";

            var emailDiv = document.getElementById("divInputName");
            emailDiv.appendChild(errorSpanEmail);
            throw new Error("Email is required");
        
        }else if (!emailRegex.test(email)) {
            
            var errorSpanEmail = document.createElement("span");
            errorSpanEmail.id = "emailError";
            errorSpanEmail.style.color = "black";

            errorSpanEmail.textContent = "Email is required.";

            var emailDiv = document.getElementById("divInputName");
            emailDiv.appendChild(errorSpanEmail);
            throw new Error("Invalid email format");
        }

        if (password.length < 8) {
            var passwordErrorSpan = document.createElement("span");
            passwordErrorSpan.id = "passwordError";
            passwordErrorSpan.style.color = "black";

            passwordErrorSpan.textContent = "Password must be at least 8 characters.";
            
            var passwordDiv = document.getElementById("divPassword");
            passwordDiv.appendChild(passwordErrorSpan);
            throw new Error("Password must be at least 8 characters.");
        }

        window.alert("Login successful!")
        window.location.href = "home.html";

    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("End of validation.");
    }
}

function ForgetFunc(){
window.location(prompt("Enter your Email"))
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