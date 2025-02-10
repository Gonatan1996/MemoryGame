
let users = JSON.parse(localStorage.getItem("Users")) || null
let sortGridsMoves1 = [];
let sortGridsMoves2 = [];
let sortGridsMoves3 = [];
let sortGridsMoves4 = [];
const grids = [...users]
const list = () => {
    sortLocal()
    displayList()

}
const sortLocal = ()=>{
    sortLocal1()
    sortLocal2()
    sortLocal3()
    sortLocal4()
    console.log(sortGridsMoves1);
    console.log(sortGridsMoves2);
    console.log(sortGridsMoves3);
    console.log(sortGridsMoves4);
    
}

const sortLocal1 = () => {
    if (users != null) {
        sortGridsMoves1 = grids.sort((a, b) => {
            if (a.grid.level1.moves != b.grid.level1.moves) {
                return a.grid.level1.moves - b.grid.level1.moves
            }
            return Number(a.grid.level1.timer) - Number(b.grid.level1.timer)
        });
        if (sortGridsMoves1.length > 5) {
            sortGridsMoves1.slice(0, 5)
        }
    }
}
const sortLocal2 = () => {
    if (users != null) {
        sortGridsMoves2 = grids.sort((a, b) => {
            if (a.grid.level2.moves != b.grid.level2.moves) {
                return a.grid.level2.moves - b.grid.level2.moves
            }
            return Number(a.grid.level2.timer) - Number(b.grid.level2.timer)
        });
        if (sortGridsMoves2.length > 5) {
            sortGridsMoves2.slice(0, 5)
        }
    }
}
const sortLocal3 = () => {
    if (users != null) {
        sortGridsMoves3 = grids.sort((a, b) => {
            if (a.grid.level3.moves != b.grid.level3.moves) {
                return a.grid.level3.moves - b.grid.level3.moves
            }
            return Number(a.grid.level3.timer) - Number(b.grid.level3.timer)
        });
        if (sortGridsMoves3.length > 5) {
            sortGridsMoves3.slice(0, 5)
        }
    }
}
const sortLocal4 = () => {
    if (users != null) {
        sortGridsMoves4 = grids.sort((a, b) => {
            if (a.grid.level4.moves != b.grid.level4.moves) {
                return a.grid.level4.moves - b.grid.level4.moves
            }
            return Number(a.grid.level4.timer) - Number(b.grid.level4.timer)
        });
        if (sortGridsMoves4.length > 5) {
            sortGridsMoves4.slice(0, 5)
        }
    }
}
const winner = (user) => {
    if (user != null) {
        const name = user.name
        const moves = user.grid.level1.moves
        const timer = user.grid.level1.timer
        return ` ${name},  moves: ${moves} timer: ${timer}`
    }
}

const displayList = () => {
    for (let i = 0; i < sortGridsMoves1.length; i++) {
        document.querySelector(`#li1_${i+1}`).textContent = winner(sortGridsMoves1[i]) || ""
    }
    for (let i = 0; i < sortGridsMoves2.length; i++) {
        document.querySelector(`#li2_${i+1}`).textContent = winner(sortGridsMoves2[i]) || ""
    }
    for (let i = 0; i < sortGridsMoves3.length; i++) {
        document.querySelector(`#li3_${i+1}`).textContent = winner(sortGridsMoves3[i]) || ""
    }
    for (let i = 0; i < sortGridsMoves4.length; i++) {
        document.querySelector(`#li4_${i+1}`).textContent = winner(sortGridsMoves4[i]) || ""
    }
    
}





list()