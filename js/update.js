const updateCouples = () => {
    document.querySelector("#id_coples").textContent = `${couples}`
}
const updateWrongs = () => {
    document.querySelector("#id_wrongs").textContent = `${wrongs}`
}
const updateLevelInUsers = (level) => {
    let users = JSON.parse(localStorage.getItem("Users"))
    users.forEach((item) => {
        if (user.email === item.email) {
            item.level = (Number(level) + 1)
            user.level = (Number(level) + 1)
        }
    })

    localStorage.setItem("currentUser", JSON.stringify(user))
    localStorage.setItem("Users", JSON.stringify(users))
}
const checkGridLoss = (users_level) => {
    if (Number(users_level.moves) == 0) {
        updateGrid(users_level)
        localStorage.setItem("currentUser", JSON.stringify(user))
        updateGridInUsers()
    }
    else if (Number(users_level.moves) > couples + wrongs) {
        updateGrid(users_level)
        localStorage.setItem("currentUser", JSON.stringify(user))
        updateGridInUsers()
    } else if (Number(users_level.moves) == couples + wrongs && count < timerOfNum(users_level)) {

        updateGrid(users_level)
        localStorage.setItem("currentUser", JSON.stringify(user))
        updateGridInUsers()
    }

}
const updateGridInUsers = () => {
    let users = JSON.parse(localStorage.getItem("Users"))
    users.forEach((item) => {
        if (user.email === item.email) {
            item.grid.level1 = user.grid.level1
            item.grid.level2 = user.grid.level2
            item.grid.level3 = user.grid.level3
            item.grid.level4 = user.grid.level4
        }
    })
    localStorage.setItem("Users", JSON.stringify(users))
}
const updateGrid = (users_level) => {
    users_level.timer = stringTimer()
    users_level.moves = couples + wrongs
}
const updateGridOfCurrentUser = (level) => {
    switch (level) {
        case "1":
            checkGridLoss(user.grid.level1)
            break;
        case "2":
            checkGridLoss(user.grid.level2)
            break;
        case "3":
            checkGridLoss(user.grid.level3)
            break;
        case "4":
            checkGridLoss(user.grid.level4)
            break;
    }
    displayGrid()
}
const displayGrid = () => {
    document.querySelector("#id_moves").textContent = couples + wrongs
    document.querySelector("#id_time").textContent = stringTimer()
}
const updateBackgroundSize = () => {
    if (window.innerWidth < 500) {
        for (let i = 0; i < imgArr.length; i++) {
            let curentBtn = document.querySelector(`#pic_${i}`)
            curentBtn.style.backgroundSize = "65px 90px"
        }
    }
    else if (window.innerWidth < 700) {
        for (let i = 0; i < imgArr.length; i++) {
            let curentBtn = document.querySelector(`#pic_${i}`)
            curentBtn.style.backgroundSize = "80px 100px"
        }
    }
    else if (window.innerWidth < 900) {
        for (let i = 0; i < imgArr.length; i++) {
            let curentBtn = document.querySelector(`#pic_${i}`)
            curentBtn.style.backgroundSize = "90px 125px"
        }
    }
    else {

        for (let i = 0; i < imgArr.length; i++) {
            let curentBtn = document.querySelector(`#pic_${i}`)
            curentBtn.style.backgroundSize = "130px 178px"
        }
        
    }
}
window.addEventListener("resize", updateBackgroundSize);
