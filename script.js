// ======================
// ÉTOILES
// ======================

const stars = document.getElementById("stars");

for(let i=0;i<200;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}

// ======================
// MACHINE A ECRIRE
// ======================

const text="J'ai quelque chose d'important à te montrer ❤️";

const typing=document.getElementById("typing");

let i=0;

function write(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(write,70);

    }

}

write();

// ======================
// BOUTON
// ======================

document.getElementById("openBtn").onclick=function(){

document.querySelector(".hero").innerHTML=`

<h1 class="storyTitle">
Notre Histoire ❤️
</h1>

<p class="storyText">
Tout a commencé le jour où je t'ai rencontrée...
</p>

<div class="envelope" id="envelope">

💌

</div>

<p class="clickText">

Clique sur l'enveloppe

</p>

`;

document.getElementById("envelope").onclick=openLetter;

}

// ======================
// LETTRE
// ======================

function openLetter(){

document.querySelector(".hero").innerHTML=`

<div class="letter">

<h2>Pour toi ❤️</h2>

<p>

Depuis que tu fais partie de ma vie,

chaque journée est plus belle.

Merci d'exister.

❤️

</p>

<button id="continue">

Continuer 🌹

</button>

</div>

`;

}
document.getElementById("continue").onclick = function(){

    document.querySelector(".hero").innerHTML = `

    <h1 class="storyTitle">
        Tu veux voir la suite ? ❤️
    </h1>

    <p class="storyText">
        J'ai encore une petite surprise pour toi...
    </p>

    <button id="flowers">
        Voir les roses 🌹
    </button>

    `;

};
