import { $container_results } from "../varDOM.js";
import { printResult, printError } from "./results.js";
import { loader } from "./loader.js";
const getData = async (url)=>{
    let data = await fetch(url)
    let res = await data.json()
  return res
}


export function searchCoin(query){
    
    getData(`https://api.coingecko.com/api/v3/search?query=${query}`)
     .then((res)=>{
         if(res.coins.length > 0){
            $container_results.innerHTML = ``
                 printResult(res.coins)
             
         }else{
             $container_results.innerHTML = `No hay resultados`
         }
            
     } 
    ).catch((error)=>{
        $container_results.innerHTML = ``
     printError("Could no get coins")
    })
 }