/*
const pokemonBtn = document.getElementById("btn");



pokemonBtn.addEventListener("click", () => {
   const pokemonInputEl = document.getElementById("pokemon-name");
   const pokemonInput = pokemonInputEl.value.toLowerCase();
 

   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
      .then((response) => {
         if (!response.ok) {
            throw new Error("Network failed to fetch data");
         }
         return response.json();
         
      })
      .then((data) => {
    
         let pokemonSprites = data.sprites.front_default;
         let pokemonMove = data.moves[0].move.name;
         let pokemonType = data.types[0].type.name;
         let pokemonImg = document.getElementById("pokemon-img");
         let pokemonMoveEl = document.getElementById("pokemonMove");
         let pokemonTypeEl = document.getElementById("pokemonType");

           pokemonImg.src = pokemonSprites;
           pokemonImg.style.display = "block";
     
           pokemonMoveEl.innerText = "I can move: " + pokemonMove;
           pokemonMoveEl.style.display = "block";
  
           pokemonTypeEl.innerText = "My family is: " + pokemonType;
           pokemonTypeEl.style.display = "block";

           
         console.log(data)
       
      })
      .catch((error) => {
         console.log(`${error} : network failed`);
      });
      
});
*/



/*

fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((resolve) => {
         if(!resolve.ok){
            throw new Error("Network failed to fetch data")
         }
         return resolve;
      })
      .then((data) => {
         console.log(data)
         const okStatus = data.ok;
         const statusState = data.status;
         const statusTextApi = data.statusText;
         const statusType = data.type;
         console.log(okStatus, statusState, statusTextApi,statusType)
      })
      .catch((error) => {
         console.log(error + " Try again please")
      })
*/


/*
fetch("d54f941a4342a27bd615df5d1bbab5e9")
      .then((resolve) => {
         if(!resolve.ok){
            throw new Error("something went wrong")
         }
         return resolve.json()
      })
      .then((data) => {
         console.log(data)
      })
      .catch((error) => {
         console.log(error + " Please try again later")
      })
*/

/*
const currentBalance = document.getElementById("current-balance");
const depositAmount = document.getElementById("deposited-amount");
const currentAmount = document.getElementById("current-amount");
let textInput = document.getElementById("txt");
const enterBtn = document.getElementById("enterBtn");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const moneyEnter = document.getElementById("moneyEnter");
const warningMessage = document.getElementById("warningMsg");

let myPin = 100;
let  currentValVar = 500;


enterBtn.addEventListener("click", () => {
   
   let textValue = textInput.value;
   
   
   if(textValue == myPin && textValue != ""){
      depositBtn.style.display = "block";
      withdrawBtn.style.display = "block";
      moneyEnter.style.display = "block";
      enterBtn.disabled = true;
      textInput.placeholder = "Enter Your deposit / withdraw amount"
      currentBalance.innerText =`Your current balance is: ${currentValVar}`; 
      warningMessage.style.display = "none"
   }else{
      warningMessage.style.display = "block"
      warningMessage.innerText = "Invalid PIN, Please try again"
   }
   textInput.value = "";
   
})


depositBtn.addEventListener("click", () => {
   let textValue = textInput.value;
   
   if(isNaN(textValue) || textValue.trim() == ""){
      warningMessage.style.display = "block"
      warningMessage.innerText = "Invalid amount, please enter a valid number"
      
   }else{
      console.log("number")
      warningMessage.style.display = "none"
      let depositAmount = parseFloat(textValue);
      currentValVar += depositAmount;
      currentBalance.innerText = `Your current balance is: ${currentValVar}`;
      
   }
   textInput.value = "";
})


withdrawBtn.addEventListener("click", () => {
   let textValue = textInput.value;
   if(isNaN(textValue) || textValue.trim() == ""){
      warningMessage.style.display = "block"
      warningMessage.innerText = "Invalid amount, please enter a valid number"
   }else{
      let depositAmount = parseFloat(textValue);
      currentValVar -= depositAmount;
      currentBalance.innerText = `Your current balance is: ${currentValVar}`;
      warningMessage.style.display = "none"
   }
   textInput.value = "";
})

moneyEnter.addEventListener("click", () => {
   location.reload()
})
*/

const textInput = document.querySelector("#text-input");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => {
   let dataDiv = document.querySelector(".data");
   dataDiv.innerHTML = `
                        <div class="data">
                           <div class="data-list">
                              <div class="data-holder-container">
                                 <span class="tick-mark" id="tick-mark">&#10003;</span>
                                 <p class="data-holder">i am new todo</p>
                              </div>
                           <span class="close-btn" id="close-btn">&#xD7;</span>
                           </div>
                        </div>
   `
})
/*
   <div class="data">
      <div class="data-list">
         <div class="data-holder-container">
            <span class="tick-mark" id="tick-mark">&#10003;</span>
            <p class="data-holder">i am new todo</p>
         </div>
         <span class="close-btn" id="close-btn">&#xD7;</span>
      </div>
   </div>
*/ 








const dataListDiv = document.querySelector(".data-holder-container");
const dataList = document.querySelector(".data-list");

dataListDiv.addEventListener("click", () => {
   let tickMark = document.getElementById("tick-mark");
   let dataHolder = document.querySelector(".data-holder");
   let containerColor = document.querySelector(".data-holder-container");
   tickMark.classList.toggle("show-me");
   dataHolder.classList.toggle("add-line");
   containerColor.classList.toggle("add-color");
   
})


const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
   dataList.style.display = "none"
})