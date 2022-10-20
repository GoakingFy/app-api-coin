import {
  $container_results,
  $btn_all,
  $btn_usdt,
  $btn_filter,
  $btn_filterSave,
  $inp_search
} from "./varDOM.js";

  import {
    saveCoin,
    getSavedCoins
  } from "./modules/save.js";

import { printResult,printError } from "./modules/results.js";
import {searchCoin} from "./modules/search.js"
import {loader} from "./modules/loader.js";

let urlAll = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`




const getData = async (url)=>{
    fetch(url)
    .then((res)=>{
      if(res.status != 200){
        printError(res.status)
      }else{
        res.json()
       .then(response =>{
          if(response){
            console.log(response)
            printResult(response)
          }
        })
      }
    }).catch((error)=>{
      printError(" Ha ocurrido un error, espere un tiempo y recargue la pagina")
    })
}


document.addEventListener("DOMContentLoaded" , getData(urlAll));



$inp_search.addEventListener("keyup" , ()=>{
    $container_results.innerHTML = ``;
    let query = $inp_search.value
    loader()
    if(query != ""){
      searchCoin(query)
    }else{
      $container_results.innerHTML = ``
      getData(urlAll)
    }
    
    
    

})




