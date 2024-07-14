let bntNext = document.querySelector(".next")//1º
let bntBack = document.querySelector(".back")//2º

let container = document.querySelector(".conteiner")//3º
let list = document.querySelector(".conteiner .list")//4º
let thumb = document.querySelector(".conteiner .thumb")//5º


bntNext.onclick = () => moveItemsOnClick ("next")//7º
bntBack.onclick = () => moveItemsOnClick ("back")//8º


function moveItemsOnClick (type){                           //6º
   let listItems = document.querySelectorAll(".list .list-item") //11º
    let thumbItems = document.querySelectorAll(".thumb .thumb-itens")//12º


   if (type === "next"){                                    //9º

        list.appendChild(listItems[0]) //13º
        thumb.appendChild(thumbItems[0])//14º
       container.classList.add("next")//17º

    }else{                                                  //10º                    
      list.prepend(listItems[listItems.length - 1]) // 15º
        thumb.prepend(thumbItems[listItems.length - 1])//16º
        container.classList.add("back")//18º
    }

    setTimeout(() => {                      //19º => isso é um temporizador
       
        container.classList.remove("next") //20º  após 3 segundos remove as classes
        container.classList.remove("back")//21º



    }, 3000); // o tempo do temporizador

}