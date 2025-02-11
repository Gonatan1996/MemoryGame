let form_log = document.querySelector("#my_Form");
let data_log;
let currentUser;


const init_log = () => {
    formConversion_log()
}


document.querySelector("#btn_back").addEventListener("click", () => {
    window.location.href = "./index.html";

})


const formConversion_log = () => {
    form_log.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(form_log)
        data_log = Object.fromEntries(formData.entries())
        if (checkUser(data_log)) {
            switch (currentUser.level) {
                case 1:
                    window.location.href = "../level1.html"
                    break;
                case 2:
                    window.location.href = "../level2.html"
                    break;
                case 3:
                    window.location.href = "../level3.html"
                    break;
                case 4:
                    window.location.href = "../level4.html"
                    break;
            }
        } else {
            document.querySelector(".user_not_found").classList.remove("hidden")
        }
    })
}

const checkUser = (data_log) => {
    let bool = false
    if (checkLocal() != null) {
        let usOut = getLocal()
        usOut.forEach(element => {
            if (checkEmail_log(element.email, data_log.email) && checkPass_log(element.password, data_log.password)) {
                currentUser = element
                bool = true
            }
        });
    }
    return bool
}


const checkEmail_log = (email, data_email) => {
    return email === data_email
}
const checkPass_log = (pass, data_pass) => {
    return pass === data_pass
}
const getLocal = () => {
    let usOut = JSON.parse(localStorage.getItem("Users"))
    return usOut
}
const checkLocal = () => {
    return getLocal()
}




init_log()