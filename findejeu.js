let h1 = document.getElementsByTagName('h1')[0]
console.log(h1);
h1 = h1.innerHTML = localStorage.getItem('pseudo') +", merci d'avoir joué !";//h1 = merci d'avoir joué !
console.log(h1)

let linkToGame = document.getElementById("linkToGame")
linkToGame.addEventListener("click", redirectToGamePage)//ecoute du lien du jeu

function redirectToGamePage (e) { //fonction de redirection
    window.location.href="jeu.html";//redirection vers la page jeu
}

let linkToMenu = document.getElementById("linkToMenu")
linkToMenu.addEventListener("click", redirectToMenuPage)

function redirectToMenuPage (e) {
    window.location.href="accueil.html";
}