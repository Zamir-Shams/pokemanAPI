
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
