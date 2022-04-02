const serverData = () => {
    const Data = {
        name: "alireza",
        family: "babaei"
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("promise");
            resolve(Data)
        }, 500)

        setTimeout(() => {
            console.log("promise");
            reject("rejected");
        }, 1000)
    })
}

const data = async () => {
    return await serverData().then((res) => {
        return res
    }).catch((cat) => {
        console.error(cat);
    })
}

console.log(data());
console.log("free");