class User {
    constructor(_name,_email,_password){
        this.name = _name
        this.email = _email
        this.password = _password
        this.grid = new Grid()

    }
}
class Grid {
    constructor() {
        this.level1 = new Laval();
        this.level2 = new Laval();
        this.level3 = new Laval();
        this.level4 = new Laval();
    }
}
class Laval{
    constructor(){
        this.timer = 0
        this.moves = 0
    }
}
