const btnRandom = document.getElementById('btn-random');  

let myArray = ['Alexandre','Beyram','Fabrice','Guillaume','Jérome', 'Lydie','Loïc.G','Loïc.V','Maxime','Mélina','Nicolas','Quentin','Rémy','Samir','Samra','Thomas'];   

btnRandom.addEventListener('click', () => {
  RandArray(myArray) 
  });  

function RandArray(array){
let rand = Math.random()*array.length | 0;
console.log(Math.floor(array));
let rValue = array[rand];     
console.log(rValue);     
btnRandom.innerHTML = rValue;
setTimeout(reinitialiserBouton, 3000);

};

function reinitialiserBouton(){
  document.getElementById("btn-random").innerHTML= "Random apprenant";
}

function desactiverBouton() {

  
  btnRandom.disabled = true; // Désactive le bouton
  
  setTimeout(function() {
    btnRandom.disabled = false; // Réactive le bouton après 3 secondes
  }, 3000); // 3000 millisecondes = 3 secondes
};
