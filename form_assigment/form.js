function login() {
    let loginForm = document.getElementById("login");
    loginForm.addEventListener("click", function (e) {
        e.preventDefault();
        return false;
    });
    let username = document.getElementById("username");
    let usernameValue = username.value;
    let password = document.getElementById("password");
    let passwordValue = password.value;
    let emptyPassword = passwordValue;
    passwordValue = parseInt(password.value);
    if (usernameValue === "new_user" && passwordValue === 123456789) {
        username.style.borderColor = "green";
        let checkUsername = document.getElementById("username-check").style.visibility="visible";
        let checkPassword = document.getElementById("password-check").style.visibility="visible";
        password.style.borderColor = "green";
        let newParagraph = document.createElement("p");
        let newContent = document.createTextNode(`Successful login!`);
        newParagraph.appendChild(newContent);
        let message = document.getElementById("login");
        message.appendChild(newParagraph);
        newParagraph.classList.add("mt-3");
    } else if (usernameValue === "") {
        username.style.borderColor = "red";
        let checkUsername = document.getElementById("username-close").style.visibility="visible";
        let checkPassword = document.getElementById("password-close").style.visibility="visible";
        password.style.borderColor = "red";
        let newParagraph = document.createElement("p");
        let newContent = document.createTextNode("Please enter username!");
        newParagraph.appendChild(newContent);
        let message = document.getElementById("login");
        message.appendChild(newParagraph);
        newParagraph.classList.add("mt-3");
    } else if (usernameValue !== "new_user") {
        username.style.borderColor = "red";
        let checkUsername = document.getElementById("username-close").style.visibility="visible";
        let checkPassword = document.getElementById("password-close").style.visibility="visible";
        password.style.borderColor = "red";
        let newParagraph = document.createElement("p");
        let newContent = document.createTextNode("Please enter valid username!");
        newParagraph.appendChild(newContent);
        let message = document.getElementById("login");
        message.appendChild(newParagraph);
        newParagraph.classList.add("mt-3");
    } else if (usernameValue === "new_user" && emptyPassword === "") {
        username.style.borderColor = "green";
        let checkUsername = document.getElementById("username-check").style.visibility="visible";
        let checkPassword = document.getElementById("password-close").style.visibility="visible";
        password.style.borderColor = "red";
        let newParagraph = document.createElement("p");
        let newContent = document.createTextNode("Please enter password!");
        newParagraph.appendChild(newContent);
        let message = document.getElementById("login");
        message.appendChild(newParagraph);
        newParagraph.classList.add("mt-3");
    } else if (usernameValue === "new_user" && passwordValue !== 123456789) {
        username.style.borderColor = "green";
        let checkUsername = document.getElementById("username-check").style.visibility="visible";
        let checkPassword = document.getElementById("password-close").style.visibility="visible";
        password.style.borderColor = "red";
        let newParagraph = document.createElement("p");
        let newContent = document.createTextNode("Please enter valid password!");
        newParagraph.appendChild(newContent);
        let message = document.getElementById("login");
        message.appendChild(newParagraph);
        newParagraph.classList.add("mt-3");
    }
}