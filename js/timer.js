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