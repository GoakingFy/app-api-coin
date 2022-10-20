let coin = new URLSearchParams(window.location.search).get("coin")
let panel = document.querySelector(".board")


const getDataCoin = async(coin)=>{
    let data = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&sparkline=true`)
    let res = await data.json()
    console.log(res)
    printInfoCoin(res)
}

function printInfoCoin (res){
    panel.innerHTML = `
    <img class="img_coin" src="${res.image.small}">
    <h1 class="name_coin">${res.name}</h1>
    <a href="index.html">Back</a>
    `
}

getDataCoin(coin)
