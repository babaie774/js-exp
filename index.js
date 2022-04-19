class person {
    constructor(name) {
        this.name = name
    }
    logger() {
        console.log(`${this.name} logged`);
    }
}

class human extends person {
    // constructor(name,family) {
    //     super(name)
    //     // this.family = family;
    // }
}


const alireza = new person('alireza');
const hasan = new human("hasan","askari");

alireza.logger();
hasan.logger("hasan");
// console.log(hasan.family);

