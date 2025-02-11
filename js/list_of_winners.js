let users = JSON.parse(localStorage.getItem("Users")) || null
let sortGridsMoves1 = [...users] || [];
let sortGridsMoves2 = [...users] || [];
let sortGridsMoves3 = [...users] || [];
let sortGridsMoves4 = [...users] || [];
let currentLevel = JSON.parse(localStorage.getItem("currentUser"))


const list = () => {
    sortLocal()
    displayList()

}
const sortLocal = () => {
    sortLocal1()
    sortLocal2()
    sortLocal3()
    sortLocal4()

}

const sortLocal1 = () => {
    if (users != null) {

        sortGridsMoves1.sort((a, b) => {
            if (a.grid.level1.moves != b.grid.level1.moves) {
                if (b.grid.level1.moves == 0 && a.grid.level1.moves != 0) {
                    return b.grid.level1.moves - a.grid.level1.moves
                }
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
        sortGridsMoves2.sort((a, b) => {
            if (a.grid.level2.moves != b.grid.level2.moves) {
                if (b.grid.level2.moves == 0 && a.grid.level2.moves != 0) {
                    return b.grid.level2.moves - a.grid.level2.moves
                }
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
        sortGridsMoves3.sort((a, b) => {
            if (a.grid.level3.moves != b.grid.level3.moves) {
                if (b.grid.level3.moves == 0 && a.grid.level3.moves != 0) {
                    return b.grid.level3.moves - a.grid.level3.moves
                }
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
        sortGridsMoves4.sort((a, b) => {
            if (a.grid.level4.moves != b.grid.level4.moves) {
                if (b.grid.level4.moves == 0 && a.grid.level4.moves != 0) {
                    return b.grid.level4.moves - a.grid.level4.moves
                }
                return a.grid.level4.moves - b.grid.level4.moves
            }
            return Number(a.grid.level4.timer) - Number(b.grid.level4.timer)
        });
        if (sortGridsMoves4.length > 5) {
            sortGridsMoves4.slice(0, 5)
        }
    }
}
const winner = (user, level) => {
    if (user == null) return
    let name = user.name;
    let moves;
    let timer;

    switch (level) {
        case 1:
            if (user.grid.level1.moves == 0) {
                return
            }
            moves = user.grid.level1.moves
            timer = user.grid.level1.timer
            return ` ${name},  moves: ${moves} timer: ${timer}`
        case 2:
            if (user.grid.level2.moves == 0) {
                return
            }
            moves = user.grid.level2.moves
            timer = user.grid.level2.timer
            return ` ${name},  moves: ${moves} timer: ${timer}`
        case 3:
            if (user.grid.level3.moves == 0) {
                return
            }
            moves = user.grid.level3.moves
            timer = user.grid.level3.timer
            return ` ${name},  moves: ${moves} timer: ${timer}`
        case 4:
            if (user.grid.level4.moves == 0) {
                return
            }
            moves = user.grid.level4.moves
            timer = user.grid.level4.timer
            return ` ${name},  moves: ${moves} timer: ${timer}`
    }
}


const displayList = () => {
    const lists = [sortGridsMoves1, sortGridsMoves2, sortGridsMoves3, sortGridsMoves4];

    lists.forEach((list, index) => {
        list.forEach((item, i) => {
            const liElement = document.querySelector(`#li${index + 1}_${i + 1}`);
            liElement.textContent = winner(item, index + 1) || "";
        });
    });
};


const back = () => {
    if (users == null) {
        window.location.href = "../index.html"
    }
    switch (currentLevel.level) {
        case 1:
            window.location.href = "../level1.html"
            break;
        case 2:
            window.location.href = "../level2.html"
            break;
            case 3:
                window.location.href = "../level3.html"
                break;
        case 4:
            window.location.href = "../level4.html"
            break;
            default:
                window.location.href = "../index.html"
                break;
                

    }
}

list()


