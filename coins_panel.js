let coin = new URLSearchParams(window.location.search).get("coin")



const getDataCoin = async(coin)=>{
    let data = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&sparkline=true`)
    let res = await data.json()
    console.log(res)
}

getDataCoin(coin)
