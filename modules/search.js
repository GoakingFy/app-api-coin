import { $container_results } from "../varDOM.js";
import { printResult } from "./results.js";

const getData = async (url)=>{
    let data = await fetch(url)
    let res = await data.json()
  return res
}

//Agregar animación de espera y crear flujo de erroes
export function searchCoin(idCoin){
    
    getData(`https://api.coingecko.com/api/v3/search?query=${idCoin}`)
     .then((res)=>{
        
         if(res.coins.length > 0){
             res.coins.forEach((resultCoins)=>{
           
                 printResult(resultCoins.symbol,resultCoins.thumb,resultCoins.id)
              })
         }else{
             $container_results.innerHTML = `No hay resultados`
         }
            
     } 
    ).catch((error)=>{
     console.error(`Could no get coins ${error}` )
    })
 }