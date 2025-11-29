const radios = document.querySelectorAll('input[name="theme"]');
const body = document.body;


window.addEventListener("DOMContentLoaded", () => {
    body.classList.add("theme-1");
});

//mouse or click

radios.forEach(r => {
   r.addEventListener("change", () => {
       body.classList.remove("theme-1","theme-2","theme-3");
       if(r.id === "theme1") body.classList.add("theme-1");
       if(r.id === "theme2") body.classList.add("theme-2");
       if(r.id === "theme3") body.classList.add("theme-3");
   });
});

//keyboard

const theme = ["theme-1","theme-2","theme-3"];
let index = 0;

document.addEventListener("keypress", (e) => {
   if(e.key.toLowerCase() === "t"){
    index = (index + 1) % theme.length;
    body.classList.remove(...theme);
    body.classList.add(theme[index]);
    document.querySelector(`#theme${index + 1}`).checked = true;
   }
});

const display = document.querySelector("#inputDisplay");
const btns = document.querySelectorAll(".Allkeys button");

function updateInDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteInDisplay(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        display.value = "Error"
    }
};