let france = document.getElementById("france");
let italie = document.getElementById("italie");
let russie = document.getElementById("russie");
console.log(italie);
console.log(france);

france.addEventListener('mouseover', displayRed)
function displayRed (e) {
    france.style.color = "red"
    console.log('cest le mouseover')
}

// france.addEventListener('click', rightOrWrong)
// function rightOrWrong () {
    
// }

let button = document.getElementById("commencer");
// button.addEventListener('click', getRandomCountry)
let tabCountries = ["italie", "russie", "france", "luxembourg", "espagne", "portugal", "royaume-uni", "irlande", "suisse", "belgique", "roumanie","moldavie", "norvège", "suède", "finlande", "ukraine", "allemagne", "pays-bas", "danemark", "Islande", "Estonie", "Biélorussie", "Bosnie-Herzégovine", "Letonnie", "Bulgarie", "Lituanie", "Macédoine du Nord", "Turquie", "Grèce", "Slovaquie", "Chypre", "Hongrie", "Pologne", "Albanie", "Autriche", "République Tchèque", "Croatie", "Slovénie", "serbie", "Monténégro", "Kosovo", "Moldavie", "Arménie", "Géorgie", "Azerbaïdjan"]

localStorage.setItem("pays", tabCountries);
loc
for (let index = 0; index <= tabCountries.length; index++) {
	console.log(math.random(index));
}

// On renvoie un nombre aléatoire entre une valeur min (incluse) 
// et une valeur max (exclue)
// function getRandomCountry(min, max) {
    
    
// //   }

//   window.onload = getRandomCountry (min, max) { 
//       return Math.random() * (tabCountries.length - tabCountries[0]) + tabCountries[0];
    
// };
let randCountries = tabCountries[Math.floor(Math.random() * tabCountries.length)];
tabCountries[].toString();

