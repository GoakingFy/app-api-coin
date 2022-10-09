
import {$container_results} from './varDOM.js';
 

 const getAllCoin = async (type,page,maxResults)=>{
         let data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${type}&order=market_cap_desc&per_page=${maxResults}&page=${page}&sparkline=false1`)
        let res = await data.json()
        res.forEach(results => {
            printResult(results.symbol,results.image)
        });
         
 }
 getAllCoin("usd" , "1", "100")

 function printResult(name,img){
    
    let newReslt = document.createElement('div')
    newReslt.classList.add("result")
    newReslt.innerHTML = `
    <span><img src="${img}" alt="img_${name}" class="thumbnail"> ${name}</span>
    <button class="btn_addLove far fa-heart "></button>
    `
    $container_results.appendChild(newReslt)
    
 }


 

