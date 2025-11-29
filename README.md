# Calculator-app
HTML-CSS-  Vanilla JavaScript
# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshots/Screenshot%202025-11-29%20at%2018-25-09%20Frontend%20Mentor%20Calculator%20app.png)
![](./screenshots/Screenshot%202025-11-29%20at%2018-25-18%20Frontend%20Mentor%20Calculator%20app.png)
![](./screenshots/Screenshot%202025-11-29%20at%2018-25-27%20Frontend%20Mentor%20Calculator%20app.png)

![](./screenshots/Screenshot%202025-11-29%20at%2018-26-19%20Frontend%20Mentor%20Calculator%20app.png)
![](./screenshots/Screenshot%202025-11-29%20at%2018-26-27%20Frontend%20Mentor%20Calculator%20app.png)
![](./screenshots/Screenshot%202025-11-29%20at%2018-26-36%20Frontend%20Mentor%20Calculator%20app.png)

### Links

- Live Site URL:(https://calculator-app-jet-rho.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned


```html
<header>
    <h3>calc</h3>
    <div class="theme">
      <h6>THEME</h6>
      <div class="toggle">
        <div class="togglenum">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div class="toggleradio">
          <input type="radio" name="theme" id="theme1" checked>
          <input type="radio" name="theme" id="theme2">
          <input type="radio" name="theme" id="theme3">
        </div>
      </div>
    </div>
  </header>
  
```
```css
:root {
  /* Theme 01 */
  /* background */
  --Navy-850-main-background: hsl(222, 26%, 31%);
  --Navy-900-toggle-background-keypad-background: hsl(223, 31%, 20%);
  --Navy-950-screen-background: hsl(224, 36%, 15%);
  /* keys */
  --Navy-700-key-background: hsl(225, 21%, 49%);
  --Navy-800-key-shadow: hsl(224, 28%, 35%);

  --Red-600-key-background-toggle: rgb(208, 63, 47);
  --Red-800-key-shadow: hsl(6, 70%, 34%);

  --Gray-200-key-background: hsl(0, 0%, 90%);
  --Gray-orange-400-key-shadow: hsl(28, 16%, 65%);
  /* text */

  --Navy-750: hsl(221, 14%, 31%);
  --White: rgb(255, 255, 255);

  /* hover */
  --ht1:rgba(243, 92, 76, 0.8);
  --ht11:rgba(130, 150, 212, 0.8);
  --ht111:rgba(255, 255, 255, 0.8);

  /* Thame 02 */
  /* background */
  --Gray-200-main-background: hsl(0, 0%, 90%);
  --Gray-300-toggle-background-keypad-background: hsl(0, 5%, 81%);
  --Gray-100-screen-background: hsl(0, 0%, 93%);
  /* keys */
  --Bue-500-key-background: hsl(185, 42%, 37%);
  --Blue-600-key-shadow: hsl(185, 58%, 25%);

  --Orange-700-key-background-toggle: hsl(25, 98%, 40%);
  --Orange-800-key-shadow: hsl(25, 99%, 27%);

  --Grey-200-key-background: hsl(0, 0%, 90%);
  --Grey-orange-450-key-shadow: hsl(35, 11%, 61%);
  /* text */
  --Gray-900: hsl(60, 10%, 19%);
  --White-text: hsl(0, 100%, 100%);
  /* hover */
  --ht2:rgba(243, 92, 76, 0.8);
  --ht12:rgb(55, 127, 134, 0.8);
  --ht112:rgba(255, 255, 255, 0.8);

  /* Thame 03 */
  /* background */
  --Purple-950-main-background: hsl(268, 75%, 9%);
  --Purple-900-toggle-background-keypad-background-screen-background: hsl(
    268,
    71%,
    12%
  );
  /* keys */
  --Purple-800-key-background: hsl(281, 89%, 26%);
  --Purple-400-key-shadow: hsl(285, 91%, 52%);

  --Cyan-500-key-background-toggle: hsl(176, 100%, 44%);
  --Cyan-400-key-shadow: hsl(177, 92%, 70%);

  --Purple-850-key-background: hsl(268, 47%, 21%);
  --Purple-750-key-shadow: hsl(290, 70%, 36%);
  /* text */
  --Yellow-300: hsl(52, 100%, 62%);
  --Blue-950: hsl(198, 20%, 13%);
  --White-text: hsl(0, 100%, 100%);

  /* hover */
  --ht3:hsl(176, 93%, 60%);
  --ht13:hsl(268, 46%, 41%);
  --ht113:hsl(268, 52%, 53%);

  --font-w: 700;
}

/* THEME 1 */
.theme-1 {
  --main-bg: var(--Navy-850-main-background);
  --keypad-bg: var(--Navy-900-toggle-background-keypad-background);
  --screen-bg: var(--Navy-950-screen-background);

  --key-bg: var(--Gray-200-key-background);
  --key-shadow: var(--Gray-orange-400-key-shadow);

  --del-bg: var(--Navy-700-key-background);
  --del-shadow: var(--Navy-800-key-shadow);

  --equal-bg: var(--Red-600-key-background-toggle);
  --equal-shadow: var(--Red-800-key-shadow);

  --text: var(--White);

  --hovereq:var(--ht1);
  --hovdelres:var(--ht11);
  --hovbtn:var(--ht111);

}

/* THEME 2 */
.theme-2 {
  --main-bg: var(--Gray-200-main-background);
  --keypad-bg: var(--Gray-300-toggle-background-keypad-background);
  --screen-bg: var(--Gray-100-screen-background);

  --key-bg: var(--Grey-200-key-background);
  --key-shadow: var(--Grey-orange-450-key-shadow);

  --del-bg: var(--Bue-500-key-background);
  --del-shadow: var(--Blue-600-key-shadow);

  --equal-bg: var(--Orange-700-key-background-toggle);
  --equal-shadow: var(--Orange-800-key-shadow);

  --text: var(--Gray-900);

  --hovereq:var(--ht2);
  --hovdelres:var(--ht12);
  --hovbtn:var(--ht112);
}

/* THEME 3 */
.theme-3 {
  --main-bg: var(--Purple-950-main-background);
  --keypad-bg: var(
    --Purple-900-toggle-background-keypad-background-screen-background
  );
  --screen-bg: var(
    --Purple-900-toggle-background-keypad-background-screen-background
  );

  --key-bg: var(--Purple-850-key-background);
  --key-shadow: var(--Purple-750-key-shadow);

  --del-bg: var(--Purple-800-key-background);
  --del-shadow: var(--Purple-400-key-shadow);

  --equal-bg: var(--Cyan-500-key-background-toggle);
  --equal-shadow: var(--Cyan-400-key-shadow);

  --text: var(--Yellow-300);

  --hovereq:var(--ht3);
  --hovdelres:var(--ht13);
  --hovbtn:var(--ht113);
}
```
```js
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
```

## Author
- Frontend Mentor - [@911Sunag](https://www.frontendmentor.io/profile/911Sunag);