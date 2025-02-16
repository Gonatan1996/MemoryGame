const flipCard = (curentBtn) => {
    if (check || paus) return;

    flipCardToImg(curentBtn)

    if (!flippedCards.includes(curentBtn)) {
        if (!flipped.includes(curentBtn)) {
            flippedCards.push(curentBtn)
        }
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
            sound("sounds/couples.mp3")
            flipped.push(btn1, btn2)
            couples++
            updateCouples()
            if (flipped.length == 18) {
                endLevel(0)
            }
            check = false
            return true
        } else {
            sound("sounds/wrong.mp3")
            wrongs++
            updateWrongs()
            btn1.firstChild.className = ""
            btn2.firstChild.className = ""
        }
        check = false
    }, 1000)

    return false
}
const flipCardToImg = (curentBtn) => {
    animaitionFlip(curentBtn)
}
const animaitionFlip = (curentBtn) => {
    let img = curentBtn.firstChild
    if (img.className != "hidden") {
        sound("sounds/flip_card.mp3")
        img.className = "flip"
        let timer = setTimeout(() => {
            img.className = "hidden"
        }, 500)
    }
}