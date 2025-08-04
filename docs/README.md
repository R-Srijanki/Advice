# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
- Copy the advice to the clipboard (additional feature)
- Get a loading spinner while advice is fetched (additional feature)

### Screenshot

![Screenshot of page](/advice-generator-app-main/images/Screenshot%202025-08-04%20172713.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS for styling
- Flexbox
- Mobile-first workflow
- Advice Slip API 
- JavaScript (ES6+)


### What I learned

- Implementing clipboard copy feature using navigator.clipboard.writeText()
- In HTML learnt how to make element at bottom center in between border
- practiced to add/embed new font into html
- Handling API errors and disabling the button temporarily to prevent spam


```js
function copyclip(){
    if(advices.innerHTML){
        navigator.clipboard.writeText(advices.innerText).then(() => {
        copied.classList.remove("hidden");
        setTimeout(() => copied.classList.add("hidden"), 2000);
    });

    }
}
```

### Continued development

In future projects, I want to:
- Implement toast notifications using Tailwind and AlpineJS
- Add a refresh animation for better UX


### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/using-vite) - for all the class utilities
- [Advice Slip API](https://api.adviceslip.com/) - the API used


## Author

- Website - [R-Srijanki](https://www.your-site.com)
- Frontend Mentor - [@R-Srijanki](https://www.frontendmentor.io/profile/R-Srijanki)

