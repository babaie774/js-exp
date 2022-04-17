function greeting(kind) {
    return function (name) {
        console.log(`${kind} ${name}`);
    }
}

const helllo = greeting("hello");

helllo("alireza")

const bye = greeting("bye");

bye("ramin")