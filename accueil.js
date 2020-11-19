let demo = document.getElementById("demo");
demo.addEventListener("click", displayNames);//ecoute de demo

function displayNames() { //fonction de d'affichage
  demo.innerHTML = "THOMAS SORY CLAIRE MICKAEL ALPHA BRIAN"; //faire apparaitre le texte
}

let linkToGame = document.getElementById("linkToGame")
linkToGame.addEventListener("click", redirectToGamePage)//ecoute du lien du jeu

function redirectToGamePage (e) { //fonction de redirection
    window.location.href="jeu.html";//redirection vers la page jeu
}

let pseudo = document.getElementById("pseudo")
valid.addEventListener("click", recupinputvalue)//ecoute de valide

function recupinputvalue (e) {//fonction du pseudo
  let inputValue = pseudo.value //valeur = pseudo

if (inputValue) {
  console.log(inputValue) //on met le inputvalue dans la console
  localStorage.setItem('pseudo',inputValue) //on met le pseudo dans le local storage
  alert('Votre pseudo a bien été enregistré.') //alerte qui dis que le pseudo a été enregistrer
} else {
  console.log('je suis dans le else')
  alert('Veuillez inscrire votre prénom ou pseudo.') //alerte qui dis que le pseudo a été enregistrer

}
}
