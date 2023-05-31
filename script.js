let header = document.querySelector("h1");
let header2 = document.querySelector("h2");
let paragraph = document.querySelector("p");
let Count = document.querySelector(".count");
let image = document.querySelector("img");
let wand = document.querySelector(".wand");
let wand2 = document.querySelector(".wand2");
let light = document.querySelector(".light");
let time = document.querySelector(".time");
let cloak = document.querySelector(".cloak");
let rewind = document.querySelector(".rewind");
let rewind2 = document.querySelector(".rewind2");
let invisibility = document.querySelector(".invisibility");
let invisibility2 = document.querySelector(".invisibility2");
let title2 = document.querySelector(".title2");

setTimeout(() => {
    Count.innerHTML = "Spell Book";
}, 1700);

light.onmouseover = function() {
    light.innerHTML = "Flashlight Spell";
};

time.onmouseover = function() {
    time.innerHTML = "Rewind Spell";
};

cloak.onmouseover = function() {
    cloak.innerHTML = "Cloak Spell";
};

Count.style.color = "blue";

wand.onclick = function() {
    wand.style.display = "none";
    wand2.style.display = "block";
};

wand2.onclick = function() {
    wand2.style.display = "none";
    wand.style.display = "block";
};

rewind.ondblclick = function() {
    rewind.style.display = "none";
    rewind2.style.display = "block";
};

rewind2.ondblclick = function() {
    rewind2.style.display = "none";
    rewind.style.display = "block";
};

invisibility.onmouseover = function() {
    invisibility.style.display = "none";
    invisibility2.style.display = "block";
};

title2.ondblclick = function() {
    invisibility2.style.display = "none";
    invisibility.style.display = "block";
};

title2.style.animation = "title2 10s infinite";