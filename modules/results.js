 import { $container_results } from "../varDOM.js";
 

 //Agregar el atributo id en el resultado
//MEJORAR LOGICA DE ATRIBUTOS
 export function printResult(name, img, id) {
    let newReslt = document.createElement("div");
    newReslt.classList.add("result");
    
    newReslt.innerHTML = `
      <span data-coin="${id}"><img src="${img}" alt="img_${name}" class="thumbnail"> <p>${name}</p></span>
      <button class="btn_save far  fa-heart" data-id="${id}" data-coin="${name}"></button>
      `;
    $container_results.appendChild(newReslt);
   
  }