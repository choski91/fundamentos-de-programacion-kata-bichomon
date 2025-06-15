//ejercicio 1
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//ejercicio 2
document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "green";

//ejercicio 3
console.log(document.querySelector('link[rel="canonical"]').href);

//ejercicio 4

let url = document.querySelector('link[rel="canonical"]').href;

let dominio = url.slice(8, 21);

console.log(dominio); 

//ejercicio 5

let todasLasImg = document.querySelectorAll(".img-fixed.img-sprite");

for( let i = 0; i < todasLasImg.length; i++) {
  
    console.log(todasLasImg[i]);
}

//ejercicio 6

let allImg = document.querySelectorAll(".img-fixed.img-sprite");

for( let i = 0; i < allImg.length; i++) {
  
   allImg[i].srcset= "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
