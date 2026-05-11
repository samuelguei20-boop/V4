script.js COMPLET — BABY CASH COIN V4

const body = document.body;

const themeToggle =
document.getElementById("themeToggle");

const notifBtn =
document.getElementById("notifBtn");

const popup =
document.getElementById("popup");

const popupButtons =
document.querySelectorAll(".popup-btn");

const balanceValue =
document.getElementById("balanceValue");

const cfaValue =
document.getElementById("cfaValue");

const toggleBalance =
document.getElementById("toggleBalance");

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

const wheelFolder =
document.getElementById("wheelFolder");

const wheelPage =
document.getElementById("wheelPage");

const centerNav =
document.getElementById("centerNav");

/* PAGES */

const homePage =
document.getElementById("homePage");

const rewardPage =
document.querySelector(".reward-page");

const marketPage =
document.querySelector(".market-page");

const profilePage =
document.querySelector(".profile-page");

/* NAV */

const homeBtn =
document.getElementById("homeBtn");

const rewardBtn =
document.getElementById("rewardBtn");

const marketBtn =
document.getElementById("marketBtn");

const profileBtn =
document.getElementById("profileBtn");

/* CITATIONS */

const quotes = [

"Le futur appartient aux ambitieux",

"Chaque BCC compte",

"Gagne aujourd’hui, progresse demain",

"Votre avenir numérique commence ici",

"Reste actif, gagne plus",

"Construisez votre empire BCC",

"La persévérance paie toujours",

"Les opportunités récompensent les actifs",

"Votre progression ne fait que commencer",

"Le succès commence par une action",

"Transformez votre temps en récompense",

"Le numérique crée les nouvelles richesses",

"Chaque mission vous rapproche du sommet",

"Le travail intelligent rapporte toujours",

"Un petit gain aujourd’hui devient grand demain",

"Le monde évolue, évoluez avec BCC",

"Les actifs gagnent davantage",

"Votre téléphone devient votre portefeuille",

"Les récompenses arrivent aux courageux",

"Votre aventure BCC commence maintenant"

];

/* POPUP */

function showPopup(text){

popup.innerText = text;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},2200);

}

/* THEME */

themeToggle.addEventListener("change",()=>{

body.classList.toggle("light");

});

/* NOTIFICATION */

notifBtn.addEventListener("click",()=>{

showPopup("Aucune notification");

});

/* TOUS LES BOUTONS */

popupButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

navigator.vibrate?.(30);

showPopup("Service disponible bientôt");

});

});

/* BALANCE */

let hiddenBalance = false;

toggleBalance.addEventListener("click",()=>{

hiddenBalance = !hiddenBalance;

if(hiddenBalance){

balanceValue.innerText = "•••";

cfaValue.innerText = "••••";

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye-slash"></i>';

}else{

balanceValue.innerText = "0";

cfaValue.innerText = "≈ 0 CFA";

toggleBalance.innerHTML =
'<i class="fa-regular fa-eye"></i>';

}

});

/* NAVIGATION */

function hideAllPages(){

homePage.classList.add("hidden");

rewardPage.classList.add("hidden");

marketPage.classList.add("hidden");

profilePage.classList.add("hidden");

}

function removeActive(){

document.querySelectorAll(".nav-item")
.forEach(item=>{

item.classList.remove("active");

});

}

homeBtn.addEventListener("click",()=>{

hideAllPages();

homePage.classList.remove("hidden");

removeActive();

homeBtn.classList.add("active");

});

rewardBtn.addEventListener("click",()=>{

hideAllPages();

rewardPage.classList.remove("hidden");

removeActive();

rewardBtn.classList.add("active");

});

marketBtn.addEventListener("click",()=>{

hideAllPages();

marketPage.classList.remove("hidden");

removeActive();

marketBtn.classList.add("active");

});

profileBtn.addEventListener("click",()=>{

hideAllPages();

profilePage.classList.remove("hidden");

removeActive();

profileBtn.classList.add("active");

});

/* BCC CENTER BUTTON */

centerNav.addEventListener("click",()=>{

navigator.vibrate?.(50);

const randomQuote =

quotes[
Math.floor(
Math.random() * quotes.length
)
];

showPopup(randomQuote);

});

/* ROUE */

wheelFolder.addEventListener("click",()=>{

wheelPage.classList.toggle("hidden");

});

let rotating = false;

spinBtn.addEventListener("click",()=>{

if(rotating) return;

rotating = true;

navigator.vibrate?.([100,50,100]);

const randomDeg =

Math.floor(Math.random()*3600)+1800;

wheel.style.transform =
`rotate(${randomDeg}deg)`;

setTimeout(()=>{

rotating = false;

const rewards = [

"0 BCC",
"5 BCC",
"10 BCC",
"40 BCC",
"80 BCC",
"100 BCC"

];

const randomReward =

rewards[
Math.floor(
Math.random()*rewards.length
)
];

showPopup(
`🎉 Vous avez gagné ${randomReward}`
);

},5200);

});

/* EFFET SOLDE */

setInterval(()=>{

const pulse =
document.querySelector(".pulse-dot");

if(pulse){

pulse.style.transform =
"scale(1.3)";

setTimeout(()=>{

pulse.style.transform =
"scale(1)";

},500);

}

},1200);

/* ANIMATION FUTURE */

const futureTexts = [

"Bienvenue dans notre univers",

"Le futur du wallet ivoirien",

"Gagnez des récompenses BCC",

"Votre avenir numérique commence ici"

];

let futureIndex = 0;

setInterval(()=>{

futureIndex++;

if(futureIndex >= futureTexts.length){

futureIndex = 0;

}

},4000);

/* RESPONSIVE */

window.addEventListener("resize",()=>{

document.body.style.height =
window.innerHeight + "px";

});

/* START */

hideAllPages();

homePage.classList.remove("hidden");

homeBtn.classList.add("active");
