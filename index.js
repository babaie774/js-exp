const x = 20;

(function logger(x) {
    console.log(x);
    setTimeout(() => {
        logger();
    }, 1000)
}(10))