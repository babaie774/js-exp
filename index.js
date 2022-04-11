// proxy:
// const user = {
//     name: "alireza"
// }

// const userProxy = new Proxy(user, {
//     get(target, pop) {
//         return pop in target ? `my name is ${target[pop]}` : null; ;
//     },
// })

// console.log(userProxy.name);
// console.log(userProxy.family);


//for:
// const number =[1, 2, 3, 4, 5, 6];

// for (var i = 0; i < number.length ; i++ ) {
//     console.log(i);
// }

// Array(5).fill(0).map((item) => {
//     console.log(item);
// })


//switch
const operator = "+";
const num1 = 1;
const num2 = 3;

switch (operator) {
    case ("+"):
        console.log(num1 + num2);
        break;
    case ("-"):
        console.log(num1 - num2);
        break;
    case ("*"):
        console.log(num1 * num2);
        break;
    case ("/"):
        console.log(num1 / num2);
        break;
}