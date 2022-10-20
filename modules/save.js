import {printResult} from './results.js';

//Mejorar función
// Cambiar la logica de la función para obtener el data del resultado
//Agreagar función para quitar el guardado

export  function saveCoin(btns) {
    //window.localStorage.clear()
  
    let savedCoins = [];
  
    if (window.localStorage.getItem("savedCoins")) {
      let getsavedCoins = JSON.parse(window.localStorage.getItem("savedCoins"));
  
      for (let i = 0; i < getsavedCoins.length; i++) {
        savedCoins.push(getsavedCoins[i]);
      }
  
      for (let z = 0; z < btns.length; z++) {
     
        if (savedCoins.includes(btns[z].getAttribute("data-id"))) {
          btns[z].classList.add("save" , "fa-solid");
        }
      }
    }
  
    for (let i = 0; i < btns.length; i++) {
      let data_coin = btns[i].getAttribute("data-id");
  
      btns[i].addEventListener("click", () => {
       
        if (!btns[i].classList.contains("save")) {
          btns[i].classList.add("save" , "fa-solid");
          savedCoins.push(data_coin);
          console.log(savedCoins);
          window.localStorage.setItem("savedCoins", JSON.stringify(savedCoins));
        }else{
         
          btns[i].classList.remove("save" , "fa-solid");
          let prueba = JSON.parse(window.localStorage.getItem("savedCoins"))
          let pos = prueba.indexOf(data_coin)
          console.log(prueba)
          prueba.splice(pos, pos + 1)
          savedCoins = prueba
          console.log(savedCoins)          
        }
      });
    }
  }


 export const getSavedCoins = async (nameCoin) => {
    let data = await fetch(`https://api.coingecko.com/api/v3/coins/${nameCoin}`);
    let res = await data.json();
    console.log(res);
  
    printResult(res.symbol, res.image.small, res.id);
  };