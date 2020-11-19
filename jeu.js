let start = document.getElementById("start");
let tabCountries = Array(
  "Italie",
  "Russie",
  "France",
  "Luxembourg",
  "Espagne",
  "Portugal",
  "Royaume-Uni",
  "Irlande",
  "Suisse",
  "Belgique",
  "Roumanie",
  "Moldavie",
  "Norvège",
  "Suède",
  "Finlande",
  "Ukraine",
  "Allemagne",
  "Pays-bas",
  "Danemark",
  "Islande",
  "Estonie",
  "Biélorussie",
  "Bosnie",
  "Letonnie",
  "Bulgarie",
  "Lituanie",
  "Macédoine",
  "Turquie",
  "Grèce",
  "Slovaquie",
  "Chypre",
  "Hongrie",
  "Pologne",
  "Albanie",
  "Autriche",
  "Tchéquie",
  "Croatie",
  "Slovénie",
  "Serbie",
  "Monténégro",
  "Kosovo",
  "Moldavie",
  "Arménie",
  "Géorgie",
  "Azerbaidjan"
);

let divBtnAndCountry = document.getElementById("divBtnAndCountry");
let h3 = document.getElementsByTagName("h3")[0]

let h1 = document.getElementsByTagName('h1')[0]
console.log(h1);
h1 = h1.innerHTML = "À toi de jouer, "+ localStorage.getItem('pseudo') +" !" ;//h1 = merci d'avoir joué !
console.log(h1)


let startingMinutes = 1.5; //definir le timer
let time = startingMinutes * 60; //le commencement du timer
let countdownTime = document.getElementById("timer"); //prend l'element timer

function countdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds; 

  start.style.display = "none";
  countdownTime.style.display = "block";
  countdownTime.innerHTML = `${minutes} : ${seconds}`;
  
  if(time < 0) {
    countdownTime.innerHTML = "0 : 00";
    window.location.href = "findejeu.html";
  } else {
    time--;
   setTimeout(countdown, 1000);
  }
}

// function countdown () {
// let compteur = 180;
                 
// timer = setInterval(function(){ //pour unité de temps
//    if(compteur>0) // si on a pas encore atteint la fin
//    {
//        --compteur; // décrémente le compteur
//        let Crono = document.getElementById("Crono"); // récupère l'id
//        let old_contenu = Crono.firstChild; // stock l'ancien contenu
//        Crono.removeChild(old_contenu); // supprime le contenu
//        let texte = document.createTextNode(compteur); // crée le texte
//        Crono.appendChild(texte); // l'affiche
//    }
//    else // sinon brise la boucle
//    {
//        window.location.href("findejeu");
//    }
// }, 1000);
// }



let check = true;
let randCountry;

let russie = document.getElementById("Russie");
let france = document.getElementById("France");
let italie = document.getElementById("Italie");
let luxembourg = document.getElementById("Luxembourg");
let espagne = document.getElementById("Espagne");
let portugal = document.getElementById("Portugal");
let royaumeuni = document.getElementById("Royaume-Uni");
let irlande = document.getElementById("Irlande");
let suisse = document.getElementById("Suisse");
let belgique = document.getElementById("Belgique");
let roumanie = document.getElementById("Roumanie");
let moldavie = document.getElementById("Moldavie");
let norvege = document.getElementById("Norvège");
let suede = document.getElementById("Suède");
let finlande = document.getElementById("Finlande");
let ukraine = document.getElementById("Ukraine");
let allemagne = document.getElementById("Allemagne");
let paysbas = document.getElementById("Pays-bas");
let danemark = document.getElementById("Danemark");
let islande = document.getElementById("Islande");
let estonie = document.getElementById("Estonie");
let bielorussie = document.getElementById("Biélorussie");
let bosnie = document.getElementById("Bosnie");
let letonnie = document.getElementById("Letonnie");
let bulgarie = document.getElementById("Bulgarie");
let lituanie = document.getElementById("Lituanie");
let macedoine = document.getElementById("Macédoine");
let turquie = document.getElementById("Turquie");
let grece = document.getElementById("Grèce");
let slovaquie = document.getElementById("Slovaquie");
let chypre = document.getElementById("Chypre");
let hongrie = document.getElementById("Hongrie");
let pologne = document.getElementById("Pologne");
let albanie = document.getElementById("Albanie");
let autriche = document.getElementById("Autriche");
let tchequie = document.getElementById("Tchéquie");
let slovenie = document.getElementById("Slovénie");
let croatie = document.getElementById("Croatie");
let serbie = document.getElementById("Serbie");
let montenegro = document.getElementById("Monténégro");
let kosovo = document.getElementById("Kosovo");
let armenie = document.getElementById("Arménie");
let georgie = document.getElementById("Géorgie");
let azerbaidjan = document.getElementById("Azerbaidjan");

italie.addEventListener("click", isAnswerRight)
russie.addEventListener("click", isAnswerRight)
france.addEventListener("click", isAnswerRight)
luxembourg.addEventListener("click", isAnswerRight)
espagne.addEventListener("click", isAnswerRight)
portugal.addEventListener("click", isAnswerRight)
royaumeuni.addEventListener("click", isAnswerRight)
irlande.addEventListener("click", isAnswerRight)
suisse.addEventListener("click", isAnswerRight)
belgique.addEventListener("click", isAnswerRight)
roumanie.addEventListener("click", isAnswerRight)
moldavie.addEventListener("click", isAnswerRight)
norvege.addEventListener("click", isAnswerRight)
suede.addEventListener("click", isAnswerRight)
finlande.addEventListener("click", isAnswerRight)
ukraine.addEventListener("click", isAnswerRight)
allemagne.addEventListener("click", isAnswerRight)
paysbas.addEventListener("click", isAnswerRight)
danemark.addEventListener("click", isAnswerRight)
islande.addEventListener("click", isAnswerRight)
estonie.addEventListener("click", isAnswerRight)
bielorussie.addEventListener("click", isAnswerRight)
bosnie.addEventListener("click", isAnswerRight)
letonnie.addEventListener("click", isAnswerRight)
bulgarie.addEventListener("click", isAnswerRight)
lituanie.addEventListener("click", isAnswerRight)
macedoine.addEventListener("click", isAnswerRight)
turquie.addEventListener("click", isAnswerRight)
grece.addEventListener("click", isAnswerRight)
slovaquie.addEventListener("click", isAnswerRight)
chypre.addEventListener("click", isAnswerRight)
hongrie.addEventListener("click", isAnswerRight)
pologne.addEventListener("click", isAnswerRight)
albanie.addEventListener("click", isAnswerRight)
autriche.addEventListener("click", isAnswerRight)
tchequie.addEventListener("click", isAnswerRight)
slovenie.addEventListener("click", isAnswerRight)
croatie.addEventListener("click", isAnswerRight)
serbie.addEventListener("click", isAnswerRight)
montenegro.addEventListener("click", isAnswerRight)
kosovo.addEventListener("click", isAnswerRight)
armenie.addEventListener("click", isAnswerRight)
georgie.addEventListener("click", isAnswerRight)
azerbaidjan.addEventListener("click", isAnswerRight)

let score = 0;

let purpleModeBtn = document.getElementById("purpleModeBtn");
purpleModeBtn.addEventListener("click", changeTopurpleMode);

function changeTopurpleMode() {
console.log("Je suis dans le tout début de la fonction changeTopurpleMode")
let pbody = document.getElementById("pbody");
console.log("je suis le body" + pbody)
pbody.classList.toggle("pBody");
let titre = document.getElementById("titre");
console.log("je suis le titre" + titre)
titre.classList.toggle("ph1");
}

let divRightOrWrongAnswer = document.getElementById("rightOrWrongAnswer")
//window.addEventListener("click", isAnswerRight)

function isAnswerRight (event) {
    event.preventDefault();
    console.log('je suis dans la fonction isAnswerRight')
    let idOfClickedElemt = event.srcElement.id;
    console.log(idOfClickedElemt)
    if (idOfClickedElemt == randCountry) {
      score=score+5;
      console.log(score);
      console.log('réponse correcte, le score est égal à : '+score)
      localStorage.setItem('score', score)
      let p = document.createElement("p")
      p.setAttribute('class', 'rightRep')
      p.textContent= "Pays trouvé!"
      divRightOrWrongAnswer.appendChild(p)
      displayRandomCountry();    

      return true;
      
    } else {
      console.log('réponse fausse, donc on rentre dans le else')
      let p2 = document.createElement("p")
      p2.setAttribute('class', 'wrongRep')
      p2.textContent= "Faux! Cherche encore !"
      divRightOrWrongAnswer.appendChild(p2)
      return false;
    }
    
  }
  start.addEventListener('click', displayRandomCountry);

  function displayRandomCountry(e) {
    if (check) {
      randCountry = tabCountries[Math.floor(Math.random() * tabCountries.length)];
      console.log("le pays aléatoire est : " + randCountry);

      h3 = document.createElement("h3");
      h3.textContent = "Placez le pays suivant sur la carte : " + randCountry;
      divBtnAndCountry.appendChild(h3);
      check = false;
    } else {
      h3.remove();
      check = true;
      displayRandomCountry();
      }
      return randCountry;
      return check;
  }