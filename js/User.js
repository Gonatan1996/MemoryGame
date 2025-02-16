class User {
    constructor(_name, _email, _password) {
        this.name = _name
        this.email = _email
        this.password = _password
        this.grid = new Grid()
        this.level = 1
    }
}
class Grid {
    constructor() {
        this.level1 = new Level();
        this.level2 = new Level();
        this.level3 = new Level();
        this.level4 = new Level();
    }
}
class Level {
    constructor() {
        this.timer = 0
        this.moves = 0
    }
}
