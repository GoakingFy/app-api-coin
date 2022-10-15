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

import { printResult } from "./modules/results.js";
import {searchCoin} from "./modules/search.js"

loader()



const getAllCoin = async (type, page, maxResults) => {
  let data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${type}&order=market_cap_desc&per_page=${maxResults}&page=${page}&sparkline=false1`
  );
  let res = await data.json();
  $container_results.innerHTML = ``
  //console.log(res)
  res.forEach((results) => {
    printResult(results.symbol, results.image, results.id);
     
});
  const $btn_save = document.querySelectorAll(".btn_save");
  const $result = document.querySelectorAll(".result > span")
  
  saveCoin($btn_save);
 

  //Prueba de acceso a monedas. CAMBIAR

  $result.forEach((result)=>{
    result.addEventListener("click" , ()=>{
      console.log("hola")
        let coin = result.getAttribute("data-coin")
        window.location.assign(`coin.html?coin=${coin}`)
    })
  })
 
};


function loader(){
  $container_results.innerHTML = ""
  $container_results.innerHTML = `
  <div class="container_loader">
  <div class="waveform">
  <div class="waveform__bar"></div>
  <div class="waveform__bar"></div>
  <div class="waveform__bar"></div>
  <div class="waveform__bar"></div>
</div>
</div>
  ` 
}


document.addEventListener("DOMContentLoaded", getAllCoin("usd", "1", "100"));

$btn_filter.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < $btn_filter.length; i++) {
      if ($btn_filter[i].classList.contains("selected")) {
        $btn_filter[i].classList.remove("selected");
      }
      btn.classList.add("selected");
    }
    if ($btn_all.classList.contains("selected")) {
      $container_results.innerHTML = "";
      getAllCoin("usd", "1", "100");
      
    } else if ($btn_usdt.classList.contains("selected")) {
      $container_results.innerHTML = "";
      getAllCoin("eur", "1", "20");
    } else if ($btn_usdt.classList.contains("selected")) {
      $container_results.innerHTML = "";
      getAllCoin("usd", "1", "20");
    } else if ($btn_filterSave.classList.contains("selected")) {
      $container_results.innerHTML = "";
      let getSaved = JSON.parse(window.localStorage.getItem("savedCoins"));
      if (getSaved) {
        getSaved.forEach((coinsName) => {
          getSavedCoins(coinsName);
        });
      }
    }
  });
});


$inp_search.addEventListener("keyup" , ()=>{
 
  loader()
  
    let valueSearch = $inp_search.value
    
    if(valueSearch != ""){
      
        $container_results.innerHTML = ""
    searchCoin(valueSearch)
    }else{
      
        $container_results.innerHTML = ""
        getAllCoin("usd", "1", "100");
    }
    
})




//Arreglar nombre de los simbolos largos