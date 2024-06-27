let ism = prompt("ismingizni kiritin");

let body = document.querySelector("body");

let p = document.createElement("p");

p.textContent = ism;

body.appendChild(p);

body.style = "text-align: center; color: white; background-color: blue;"
p.style = "font-size: 32px;"