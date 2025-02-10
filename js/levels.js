let level = document.querySelector("#id_level").textContent
let imgArr = []
let flippedCards = []
let flipped = []
let check = false
let couples = 0;
let wrongs = 0;
let paus = false;
let timer = null;
let count = 0;
let second = 0
let minute = 0
let user = JSON.parse(localStorage.getItem("currentUser"));



const init = () => {
    createArrayImg()
    eventListener()
    timeOfGame()
    startTimer(1000)
    userName()
}
const eventListener = () => {
    for (let i = 0; i < imgArr.length; i++) {
        let curentBtn = document.querySelector(`#pic_${i}`)
        curentBtn.setAttribute("data-id_img", `url("${imgArr[i]}")`)
        curentBtn.style.backgroundImage = `url("${imgArr[i]}")`;
        curentBtn.style.backgroundSize = "130px 180px"
        curentBtn.addEventListener("click", () => {
            flipCard(curentBtn)
        })
    }
}

const flipCard = (curentBtn) => {
    if (check || paus) return;

    flipCardToImg(curentBtn)

    if (!flippedCards.includes(curentBtn)) {
        flippedCards.push(curentBtn)
    }
    if (flippedCards.length === 2) {
        check = true
        checkMatch()
    }
}
const checkMatch = () => {
    let btn1 = flippedCards[0]
    let btn2 = flippedCards[1]
    flippedCards.splice(0, 2)
    setTimeout(() => {
        if (btn1.getAttribute("data-id_img") === btn2.getAttribute("data-id_img")) {
            flipped.push(btn1, btn2)
            couples++
            updateCouples()
            if (flipped.length == 18) {
                endLevel(0)
            }
            check = false
            return true
        } else {
            wrongs++
            updateWromgs()
            btn1.firstChild.className = ""
            btn2.firstChild.className = ""
        }
        check = false
    }, 1000)

    return false
}
const userName = () => {
    if (checkCurrentUserLocal()) {
        let user = JSON.parse(localStorage.getItem("currentUser"))
        document.querySelector("#id_user_name").textContent = user.name
    }
}
const checkCurrentUserLocal = () => {
    return localStorage.getItem("currentUser") ? true : false
}

const flipCardToImg = (curentBtn) => {
    animaitionFlip(curentBtn)
}

const animaitionFlip = (curentBtn) => {
    let img = curentBtn.firstChild
    if (img.className != "hidden") {
        img.className = "flip"
        let timer = setTimeout(() => {
            img.className = "hidden"
        }, 500)
    }

}

const createArrayImg = () => {
    for (let i = 1; i <= 9; i++) {
        imgArr[i - 1] = `images/level ${level}/${i}.jpg`
    }
    let arr = [...imgArr, ...imgArr]
    imgArr = [...arr];
    shuffleArray(imgArr)
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const updateCouples = () => {
    document.querySelector("#id_coples").textContent = `${couples}`
}
const updateWromgs = () => {
    document.querySelector("#id_wrongs").textContent = `${wrongs}`
}





const stopped = (boolean) => {
    paus = boolean
    if (paus) {
        breakTimer()
    } else {
        startTimer(0)
    }
}


const timeOfGame = () => {
    second = count % 60
    minute = Math.floor(count / 60)
    endGameOfTime()
    let timerOfGame = document.querySelector("#id_timer")
    timerOfGame.innerHTML = stringTimer()
}
const stringTimer = () => {
    return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`
}
const startTimer = (time) => {
    setTimeout(() => {
        if (!timer) {
            timer = setInterval(() => {
                count++
                timeOfGame()
            }, 1000)
        }
    }, time);

}
const breakTimer = () => {
    clearInterval(timer)
    timer = null
}
const endLevel = (loss) => {
    breakTimer()
    if (loss != 0) {
        document.querySelector(".loss").classList.remove("hidden")
        document.querySelectorAll(".container").forEach(container => {
            container.classList.add("hidden");
        });
        return;
    }
    updateGridOfCurrentUser(level)

    document.querySelectorAll(".container").forEach(container => {
        container.classList.add("hidden");
    });
    document.querySelector(".win").classList.remove("hidden")
}
const startAgain = (level) => {
    window.location.href = `level${level}.html`
}
const nextStage = (level) => {
    window.location.href = `level${level}.html`
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
const updateGrid = (users_level) => {
    users_level.timer = stringTimer()
    users_level.moves = couples + wrongs
}
const displayGrid = () => {
    document.querySelector("#id_moves").textContent = couples + wrongs
    document.querySelector("#id_time").textContent = stringTimer()
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

const timerOfNum = (users_level) => {
    let timeString = users_level.timer;
    const [minutes, seconds] = timeString.split(":").map(Number);
    return (minutes * 60) + seconds;
}
const endGameOfTime = () => {
    switch (level) {
        case "1":
            if (count == 150) endLevel(level)
            break;
        case "2":
            if (minute == 2) endLevel(level)
            break;
        case "3":
            if (count == 90) endLevel(level)
            break;
        case "4":
            if (minute == 1) endLevel(level)
            break;


    }
}


















init()