
let btn = document.querySelector("button");
let phrase = document.querySelector(".phrase");
let auteur = document.querySelector(".auteur");

let quotee
 let url="https://type.fit/api/quotes";
    async function getQuote(){
      try {
         let quot = await fetch(url);
     quotee = await quot.json();
     randomQuote();
      } catch (error) {
         document.querySelector("#quote").innerHTML="<h1> Pas de connexion </h1>";
      }
   }
    getQuote(url).catch((error)=>{
      console.log(error.message);
    });

    function randomQuote(){
      let num = Math.floor(Math.random() * quotee.length);
     let texte=quotee[num];
    console.log(texte);
    phrase.innerText=texte.text;
    if (texte.author==null){
      auteur.innerText="Inconnu";
    }else{
      auteur.innerText=texte.author;
    }
    
    }
    btn.addEventListener("click",randomQuote);