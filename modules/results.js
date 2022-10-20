 import { $container_results} from "../varDOM.js";
import { loader } from "./loader.js";
 

 //Agregar el atributo id en el resultado
//MEJORAR LOGICA DE ATRIBUTOS
//Agregar anchor para ir al apartado de esa moneda
//cambiar formato de resultado para que sea un achor
 export function printResult(data) {


data.forEach(coin => {
       
        let newReslt = document.createElement("div");
        newReslt.classList.add("result");
          
          newReslt.innerHTML = `
            <a href="../coin.html?coin=${coin.id}"><span data-coin="${coin.id}">
            <img src="${coin.image != undefined ? coin.image : coin.thumb}" class="thumbnail"> <p>${coin.name}</p></span></a>
            <button class="btn_save far  fa-heart" data-id="${coin.id}"></button>
            `;
        $container_results.appendChild(newReslt);
      });
  

    
   
  }


  export function printError(error){
    $container_results.innerHTML = ``
      let containerError = document.createElement("div")
      let iconExclamation = document.createElement("i")
      let errorMsg = document.createElement("p")
      let btn_reload = document.createElement("button")
      containerError.classList.add("error_alert")
      iconExclamation.classList.add("fas" , "fa-exclamation-triangle")
      btn_reload.classList.add("btn_reload")
      $container_results.appendChild(containerError)
      containerError.appendChild(iconExclamation)
      containerError.appendChild(errorMsg)
      containerError.appendChild(btn_reload)
      btn_reload.textContent = `Recargar`
      errorMsg.textContent += `${error}`
      btn_reload.addEventListener("click", ()=> window.location.reload())


  }