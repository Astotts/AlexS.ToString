const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//-----------------------Card Text Shuffles-------------------------------------------

let interval = [null,null,null,null];
let cards = document.querySelectorAll("div.card");
let elements = document.querySelectorAll("a.cardHeader");

function magic(event, header)
{
  let iteration = 0;
  
  clearInterval(interval[header]);
  
  interval[header] = setInterval(() => {
    elements[header].innerText = elements[header].innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return elements[header].dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration[header] >= elements[header].dataset.value.length){ 
      clearInterval(interval[header]);
    }
    
    iteration += 1 / 5;
  }, 30);
}

for(let index = 0; index < 3; index++){
  cards[index].onmouseover = event => {
    magic(event,index);
  }
}

//-------------------------------On Load Shuffles---------------------------------------

//let onLoadElements = document.querySelectorAll("div.card");
//onLoadElements += document.querySelector("header");


//Need to get onLoadElements 
//dataset.value
//dataset.value.length
//target.innerText

/*window.onload = () => {
  //for(let header = 0; header < 4; header++){
    let header = 0;
    let iteration = 0;
  
    clearInterval(interval[header]);
    
    interval[header] = setInterval(() => {
      console.log(onLoadElements[header]);
      onLoadElements[header].target.innerText = onLoadElements[header].target.innerText.split("").map((letter, index) => {
          if(index < iteration) {
            return onLoadElements[header].target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration[header] >= onLoadElements[header].target.dataset.value.length){ 
        clearInterval(interval[header]);
      }
      
      iteration += 1 / 5;
    }, 30);
  //}
};*/

  