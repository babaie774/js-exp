document.getElementById("div").addEventListener("click", () => {
    console.log("div clicked");
})
document.getElementById("button").addEventListener("click", (e) => {
    e.stopPropagation()
    e.preventDefault();
    console.log(e);
    console.log(e.defaultPrevented);
    console.log("button clicked");
})