let form_log = document.querySelector("#my_Form");
let data_log;


const init_log = ()=>{
formConversion_log()
}


document.querySelector("#btn_back").addEventListener("click",()=>{
    window.location.href = "./index.html";

})


const formConversion_log = ()=>{
    form_log.addEventListener("submit",(event)=>{
        event.preventDefault()
        const formData = new FormData(form_log)
        data_log = Object.fromEntries(formData.entries())
        if (checkUser(data_log)) {
            alert(5156189561891)
            window.location.href = "../level1.html"
         }
    })
}

const checkUser = (data_log)=>{
    let bool = false
    if (checkLocal() != null) {
        let usOut = getLocal()
        usOut.forEach(element => {
            if (checkEmail_log(element.email,data_log.email) && checkPass_log(element.password,data_log.password)) {
            bool = true
        }
    });
    }

    return bool
}


const checkEmail_log = (email,data_email)=>{
return email === data_email
}
const checkPass_log = (pass,data_pass)=>{
return pass === data_pass
}
const getLocal = ()=>{
    let usOut = JSON.parse(localStorage.getItem("Users"))
    return usOut
}
const checkLocal = ()=>{
    return getLocal()
}




init_log()