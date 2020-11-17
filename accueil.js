let demo = document.getElementById("demo");
demo.addEventListener("click", displayNames);

function displayNames() {
  demo.innerHTML = "THOMAS SORY CLAIRE MICKAEL ALPHA BRIAN";
}

let redirectToGame = document.getElementById("linkToGame")
redirectToGame.addEventListener("click", redirectToGamePage)

function redirectToGamePage (e) {
    document.location.href="jeu.html";
}