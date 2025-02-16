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