const divinput = document.querySelector(".div-input")
const input = document.querySelector("#input")
const button1 = document.querySelector("#button1")
 const content = document.querySelector(".content")
 const footer = document.querySelector("#work")
 const alertt = document.querySelector("#alert")


 var sayaç = 0 ;
 button1.addEventListener("click" , todo);


 function todo() {
     if(input.value != " "){

    sayaç++;
     

     var text = document.createElement("p");
     text.innerText =  input.value;
     var done = document.createElement("div")
     done.classList.add("done")
     done.innerText = "DONE"
     var deletet = document.createElement("div")
     deletet.classList.add("delete")
     deletet.innerText = "X"
     content.appendChild(text);
     text.appendChild(deletet)
     text.appendChild(done)
     input.value = " " ;

     done.addEventListener("click" ,draw);
     function draw(){
         text.classList.toggle("drew");
        }

     deletet.addEventListener("click" , clear);
     function clear(){
         sayaç--;
         footer.innerHTML = `Work Pending : ${sayaç}`
         content.removeChild(text);
         
         
         
     }
    
     
     footer.innerHTML =  `Work Pending : ${sayaç}`
     

     
    }

   
     
    
    
    }
    