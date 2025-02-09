let imgArr = []
let flippedCards = []
const cards = document.querySelectorAll('.card');
let check = false


const init = ()=>{
    createArrayImg()
    eventListener()

for (let index = 0; index < imgArr.length; index++) {
    console.log(imgArr[index]);
    
    
}

    
}
const eventListener = ()=>{
    for (let i = 0; i < 18; i++) {
        let curentBtn = document.querySelector(`#pic_${i}`)
        curentBtn.style.backgroundImage = `url("${imgArr[i]}")`;
        curentBtn.style.backgroundSize = "130px 180px"
        curentBtn.addEventListener("click",()=>{
        flipCard(curentBtn)
    }) 
}
}

const flipCard = (curentBtn)=>{
    if(check)return;
    console.log(curentBtn);
    
    flipCardToImg(curentBtn)
    if (!flippedCards.includes(curentBtn)) {
        curentBtn.classList.add("flipped")
        flippedCards.push(curentBtn)
    }
    if (flippedCards.length === 2) {
        checkMatch()
    }
}


const flipCardToImg = (curentBtn)=>{
animaitionFlip(curentBtn)
}

const animaitionFlip = (curentBtn)=>{
    let img = curentBtn.firstChild
    if(img.className != "hidden"){
        img.className = "flip"
        let timer = setTimeout(()=>{
            img.className = ""
            img.className = "hidden"
        },1000)
    }
    
}

const createArrayImg = ()=>{
    for (let i = 1; i <= 9; i++) {
        imgArr[i-1] = `images/level 1/${i}.jpg`       
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






















init()