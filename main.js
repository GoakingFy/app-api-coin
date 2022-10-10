
import {$container_results,$btn_all,$btn_usdt,$btn_filter} from './varDOM.js';
 


 const getAllCoin = async (type,page,maxResults)=>{
         let data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${type}&order=market_cap_desc&per_page=${maxResults}&page=${page}&sparkline=false1`)
        let res = await data.json()
        
        res.forEach(results => {
            
            printResult(results.symbol,results.image)
        });
        const $btn_save = document.querySelectorAll(".btn_save")
        saveCoin($btn_save)
 }
 
 document.addEventListener("DOMContentLoades" , getAllCoin("usd" , "1", "100"))

 $btn_filter.forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        for (let i = 0; i < $btn_filter.length; i++) {
            if($btn_filter[i].classList.contains("selected")){
                $btn_filter[i].classList.remove("selected")
            }
            btn.classList.add("selected")  
           
        }
        if($btn_all.classList.contains("selected")){
            $container_results.innerHTML = ""
            getAllCoin("usd" , "1", "100")
         }else if($btn_usdt.classList.contains("selected")){
            $container_results.innerHTML = ""
            getAllCoin("eur" , "1", "20")
            
         }  else if($btn_usdt.classList.contains("selected")){
            $container_results.innerHTML = ""
            getAllCoin("usd" , "1", "20")
         }
        
    })
    
})
 
 

 function printResult(name,img){
    
    let newReslt = document.createElement('div')
    newReslt.classList.add("result")
    newReslt.innerHTML = `
    <span><img src="${img}" alt="img_${name}" class="thumbnail"> ${name}</span>
    <button class="btn_save far fa-heart" data-coin="${name}"></button>
    `
    $container_results.appendChild(newReslt)
    

 
}



//Mejorar función
   
    // function saveCoin(btns){
    //    //window.localStorage.clear()
        
    //     let savedCoins = []

    //     if(window.localStorage.getItem("savedCoins")){
            
    //         let getsavedCoins =  JSON.parse(window.localStorage.getItem("savedCoins"))
            
    //         for (let i = 0; i < getsavedCoins.length; i++) {
    //             savedCoins.push(getsavedCoins[i]) 
    //         }

    //         for (let z = 0; z < btns.length; z++) {
    //             console.log( )
    //             if(savedCoins.includes(btns[z].getAttribute("data-coin"))){
    //                 btns[z].classList.add("save")
                    
    //             }   
    //         }
    //     }


    //     for (let i = 0; i < btns.length; i++) {
    //         let data_coin = btns[i].getAttribute("data-coin")
           
    //         btns[i].addEventListener("click" ,()=>{
    //             if(!btns[i].classList.contains("save")){
    //                 btns[i].classList.add("save")
    //                 savedCoins.push(data_coin)
    //                 console.log(savedCoins)
    //                 window.localStorage.setItem("savedCoins" , JSON.stringify(savedCoins))
    //             }
    //         })
            
    //     }
         
         
    // }
   
    



    
        
    
   


 


 

