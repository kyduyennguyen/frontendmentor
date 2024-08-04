# Frontend Mentor - Recipe page solution

Thanks for watching my code. This is the coding challenge of Frontend Mentor[Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm), it help me improve my coding skills by building realistic projects.
To do this challenge, you need a basic understanding of HTML and CSS.

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

### Screenshot

This is the screenshots for Desktop and Mobile.
![](./figma%20and%20screenshots/Screenshot%20of%20Desktop.png)
![](./figma%20and%20screenshots/Screenshot%20of%20iPhone%2013.png)

### Links

- Solution Site URL: [My Solution](https://github.com/kyduyennguyen/frontendmentor/tree/main/recipe-page-main)
- Live Site URL: [[Recipe Page Main](https://kyduyennguyen.github.io/frontendmentor/recipe-page-main/index.html)]
- Figma Design Source: ![Figma](./figma%20and%20screenshots/Recipe%20Page.pdf)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

In this challenge, I know 'How to customize for a number of list'.
And the way I can do it you can see below:

```css
#list-steps {
	margin: auto;
	padding: 0 10px;
	line-height: 30px;
	list-style: none;
	counter-reset: step;
}

#list-steps li {
	font-weight: normal;
}

#list-steps li::before {
	content: counter(step) ". ";
	counter-increment: step;
	color: hsl(14, 45%, 36%);
	font-weight: 600;
	padding-right: 15px;
}
```

### Continued development

In the future, I will create 'Switch button' for moving other recipes. And I can add more recipes (maybe the recipes from me ^^) and This is will become my recipes page.

### Useful resources

- [How to customize the numbers of an ordered list using CSS ?](https://www.geeksforgeeks.org/how-to-customize-the-numbers-of-an-ordered-list-using-css/) - This helped me for customize the numbers of an ordered list I used for 'Instructions' part. I'd recommend it to anyone still find the way to customize list.

## Author

- Website - [Angelly Nguyen](https://github.com/kyduyennguyen)
- Frontend Mentor - [@kyduyennguyen](https://www.frontendmentor.io/profile/kyduyennguyen)
- Linkedin - [Duyen Nguyen](https://www.linkedin.com/in/duyen-dk-nguyen/)
