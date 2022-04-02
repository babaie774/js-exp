import axios from "axios";

const getData = async () => {
    const { data } = await axios("https://api.coindesk.com/v1/bpi/currentprice.json");
    return data
}

getData().then((res) => {
    console.log(res);
});
console.log("ok");

