
let users = JSON.parse(localStorage.getItem("Users")) || []
let form = document.querySelector("#my_Form");
let data;
let currentUser;

const init = () => {
    document.querySelector("#btn_back").addEventListener("click", () => {
        window.location.href = "./index.html";
    })
    formConversion()

}
const formConversion = () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        data = Object.fromEntries(formData.entries())

        if (checkEmail(data.email) && checkPass(data.password, data.password_again)) {
            let user = new User(data.name, data.email, data.password)
            users.push(user)
            changeLocalUsers()
            changeLocalCurrentUser(user)
            window.location.href = "../level1.html"
        }
    })
}
const checkEmail = (email) => {
    let bool = true
    let arr = getLocal()
    if (arr.length > 0) {
        bool = !arr.some(user => user.email === email);
    }
    if (!bool) {
        document.querySelector("#p_email").className = ""
    } else {
        document.querySelector("#p_email").className = "hidden"
    }
    return bool
}
const checkPass = (pass, passAgain) => {
    let bool = pass === passAgain
    if (!bool) {
        document.querySelector("#p_pass").className = ""
    } else {
        document.querySelector("#p_pass").className = "hidden"
    }
    return bool
}
const checkLocal = () => {
    return getLocal()
}
const getLocal = () => JSON.parse(localStorage.getItem("Users")) || [];
const changeLocalUsers = () => localStorage.setItem("Users", JSON.stringify(users))
const changeLocalCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user))
}

init()