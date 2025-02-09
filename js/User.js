class User {
    constructor(_name,_email,_password){
        this.name = _name
        this.email = _email
        this.password = _password
        this.grig = 0
    }
}



// let users = []
// let form = document.querySelector("#my_Form");
// let data;

// const init = ()=>{
// formConversion()
    
// }


// const formConversion = ()=>{
//     form.addEventListener("submit",(event)=>{
//         event.preventDefault()
//         const formData = new FormData(form)
//         data = Object.fromEntries(formData.entries())
//         if (checkEmail(data.email) && checkPass(data.password,data.password_again)) {
//              users.push(new User(data.name,data.email,data.password))
//              changeLocal()
//             window.location.href = "../level1.html"
//          }
//         // console.log(data);
//     })
// }

// const checkEmail =(email)=>{
//     let bool = true
//     if (checkLocal() != null) {          
//         let arr = getLocal()
//         arr.forEach(element => {
//             if (element.email == email) {   
//                  bool = false
//             }
//         });
//     }
//     if (!bool) {
//         document.querySelector("#p_email").className = ""
//     }else{
//         document.querySelector("#p_email").className = "hidden"
//     }
//     return bool
// }
// const checkPass = (pass,passAgain)=>{
//     let bool = pass === passAgain
//     if (!bool) {
//         document.querySelector("#p_pass").className = ""
//     }else{
//         document.querySelector("#p_pass").className = "hidden"
//     }
//     return bool 
// }
// const getLocal = ()=>{
//     let usOut = JSON.parse(localStorage.getItem("Users"))
//     return usOut
// }
// const checkLocal = ()=>{
//     return getLocal()
// }


// const changeLocal = ()=>{
//     let usIn = JSON.stringify(users)
//     localStorage.setItem("Users",usIn)
   
// }




// init()