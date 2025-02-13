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
    updateBackgroundSize();
    timeOfGame()
    startTimer(1000)
    userName()
}
const eventListener = () => {
    for (let i = 0; i < imgArr.length; i++) {
        let curentBtn = document.querySelector(`#pic_${i}`)
        curentBtn.setAttribute("data-id_img", `url("${imgArr[i]}")`)
        curentBtn.style.backgroundImage = `url("${imgArr[i]}")`;
        curentBtn.style.backgroundSize = "130px 178px"
        curentBtn.addEventListener("click", () => {
            flipCard(curentBtn)
        })
    }
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
const sound = (path)=>{
    const audio = new Audio(path)
    audio.play()
}
const stopped = (boolean) => {
    paus = boolean
    if (paus) {
        breakTimer()
    } else {
        startTimer(0)
    }
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
    updateLevelInUsers(level)
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