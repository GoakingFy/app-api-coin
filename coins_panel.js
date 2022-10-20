import { printError} from "./modules/results.js";

let coin = new URLSearchParams(window.location.search).get("coin")
let $container_result = document.querySelector(".container_results")
let url = `https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&sparkline=true`

const getData = async (url)=>{
    fetch(url)
    .then((res)=>{
      if(res.status != 200){
        printError(`Ha ocurrido un error ${res.status}`)
        
      }else{
        res.json()
       .then(response =>{
          if(response){
           console.log(response)
            printInfoCoin(response)
          }
        })
      }
    }).catch((error)=>{
      printError(" Ha ocurrido un error, espere un tiempo y recargue la pagina")
    })
}


function printInfoCoin (coin){
 
    $container_result.innerHTML = `
    <header class="container_info_coin">
        <span class="rank"> Rank ${coin.coingecko_rank}</span>
        <div><img class="img_coin" src="${coin.image.small}">
        <h1 class="name_coin">${coin.name} (${coin.symbol})</h1></div>
        <p clas="current_price">$${coin.market_data.current_price.usd}</p>
    </header>
    
    <a href="index.html">Back</a>
    `
 };
   


getData(url)
