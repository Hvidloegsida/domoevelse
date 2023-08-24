/*HER ÆNDRER JEG I MIN DOM (HTML)*/
/*HER TAGER JEG FAT IO MIN H3 FRA HTML*/
const articleh = document.querySelector("h3");
/*HER FORTÆLLER JEG DEN V IA TEXTCONTANT HVAD DEN SKAL ERSTATTE MIN H3 MED*/
articleh.textContent = "AHHHHHHHHHHHH";
console.log(articleh);
/*DONE*/
const h2 = document.querySelector("h2");
h2.textContent = "TISSEMYRER";
console.log(h2);

const titel = document.querySelector("h1");
titel.textContent = "HJÆLP MIG";
console.log(titel);

const pp = document.querySelector("p");
pp.textContent = "JEG KAN IKKE MERE";
console.log(pp);

const no = document.querySelector("#no");
no.innerHTML = "JEG VIL HJEM <b>TIL DIIIIIG</b>";
console.log(no);

const pic = document.querySelector("img");
pic.setAttribute("src", "billede.jpg");
pic.setAttribute("alt", "computer");
console.log(pic);

/* HER LAVER VI ET HELT NYT ELEMEMENT.*/
/*TAGER FAT I BODY (FRA HTML)*/
const bodyy = document.querySelector("body");
/*LAVER ELEMENT MED CREATEELEMENT, SOM JEG VÆLGER SKAL VÆRE EN H1*/
const overskrift = document.createElement("h1");
/*HER LAVER JEG ET ELEMENT MED CREATETEXTNODE, SOM JEG VÆLGER SKAL SKRIVE NOOO*/
const text = document.createTextNode("NOOOOOOO");
/*HER KOMIBERER JEG MIN OVERSKRIFT CONSTANT MED MIN TEXT CONSTANT, SÅ AT TEKSTEN KOMMER IND I OVERSKRIFTEN*/
overskrift.appendChild(text);
/* HER GØR JEG SÅ BRUG AF MIT BODY TAG IGEN, VED AT SMIDE DEN OVERSKRIFT JEG LAVEDE FØR VED BRUG AF MIN TEXT. SÅ VED JS AT MIN H1 SKAL VÆRE INDE I BODY*/
bodyy.appendChild(overskrift);
