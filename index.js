const person = {
    name: "alireza",
    family: "babaie",
    get fullName() {
        return `${name} ${family}`
    },
    set fullName(value) {
        if (value) {
            [this.name, this.family] = value.splice('');
        } else {
            console.log("fullname sould have vlaue");
        }
    }
}

person.fullName = 'alireza babaei';


