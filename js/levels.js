let level = document.querySelector("#id_level").textContent
let imgArr = []
let flippedCards = []
// const cards = document.querySelectorAll('.card');
let check = false
let couples = 0;
let paus = false ; 
let timer = null;
let count = 0;
let second = 0
let minute = 0




const init = ()=>{
    createArrayImg()
    eventListener()
    timeOfGame()
     startTimer()
    

// for (let index = 0; index < imgArr.length; index++) {
//     console.log(imgArr[index]);
    
    
// }

    
}
const eventListener = ()=>{
    for (let i = 0; i < imgArr.length; i++) {
        let curentBtn = document.querySelector(`#pic_${i}`)
        curentBtn.setAttribute("data-id_img",`url("${imgArr[i]}")`)
        curentBtn.style.backgroundImage = `url("${imgArr[i]}")`;
        curentBtn.style.backgroundSize = "130px 180px"
        curentBtn.addEventListener("click",()=>{
        flipCard(curentBtn)
    }) 
    }
}

const flipCard = (curentBtn)=>{
    if(check || paus)return;
    // console.log(curentBtn);
    flipCardToImg(curentBtn)

    if (!flippedCards.includes(curentBtn)) {
        // curentBtn.classList.add("flipped")
        flippedCards.push(curentBtn)
    }
    if (flippedCards.length === 2) {
        check = true
        checkMatch()


    }
}
const checkMatch = ()=>{
    let btn1 = flippedCards[0]
    let btn2 = flippedCards[1]
    flippedCards.splice(0,2)
    let timer = setTimeout(()=>{
        if (btn1.getAttribute("data-id_img") === btn2.getAttribute("data-id_img")) {
            check = false
            couples++
            updateCouples()
            return true
        }else{
            btn1.firstChild.className = ""
            btn2.firstChild.className = ""
        }
        check = false
    },2000)

return false
}




const flipCardToImg = (curentBtn)=>{
animaitionFlip(curentBtn)
}

const animaitionFlip = (curentBtn)=>{
    let img = curentBtn.firstChild
    if(img.className != "hidden"){
        img.className = "flip"
        let timer = setTimeout(()=>{
            img.className = "hidden"
        },1000)
    }
    
}

const createArrayImg = ()=>{
    for (let i = 1; i <= 9; i++) {
        imgArr[i-1] = `images/level ${level}/${i}.jpg`       
    }
    let arr = [...imgArr,...imgArr]
    imgArr = [...arr];
    shuffleArray(imgArr)
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

const updateCouples = ()=>{
    document.querySelector("#id_coples").textContent = `${couples}`
}
const stopped = (boolean)=>{
paus = boolean
if (paus) {
    breakTimer()
}else{
    startTimer()
}
}


const timeOfGame = ()=>{
    second = count % 60
    minute = Math.floor(count / 60)
let timerOfGame = document.querySelector("#id_timer")
// console.log(timerOfGame);
timerOfGame.innerHTML = `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}` 
}
const startTimer = ()=>{
    if (!timer) {
        timer = setInterval(()=>{
            count++
            timeOfGame()
        },1000)
    }
}
const breakTimer = ()=>{
clearInterval(timer)
timer = null
}




















init()