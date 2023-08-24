const articleh = document.querySelector("h3");
articleh.textContent = "AHHHHHHHHHHHH";
console.log(articleh);
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

const bodyy = document.querySelector("body");
const overskrift = document.createElement("h1");
const text = document.createTextNode("NOOOOOOO");
overskrift.appendChild(text);
bodyy.appendChild(overskrift);
