'use strict';
// DOM Documents
const num_1 = document.getElementById('rating-1');
const num_2 = document.getElementById('rating-2');
const num_3 = document.getElementById('rating-3');
const num_4 = document.getElementById('rating-4');
const num_5 = document.getElementById('rating-5');
const btnSubmit = document.getElementById('btn-submit');
const ratingBox = document.getElementById('rating-box');
const thankBox = document.getElementById('thank-box');
const numSelected = document.getElementById('number-selected');
let num_selected = '';

// Get rating number when click rating buttons
num_1.addEventListener('click', () => {
  num_selected = num_1.textContent;
  numSelected.innerHTML = num_selected;
});
num_2.addEventListener('click', () => {
  num_selected = num_2.textContent;
  numSelected.innerHTML = num_selected;
});
num_3.addEventListener('click', () => {
  num_selected = num_3.textContent;
  numSelected.innerHTML = num_selected;
});
num_4.addEventListener('click', () => {
  num_selected = num_4.textContent;
  numSelected.innerHTML = num_selected;
});
num_5.addEventListener('click', () => {
  num_selected = num_5.textContent;
  numSelected.innerHTML = num_selected;
});

// Add action for rating box and thank box when click submit button
btnSubmit.addEventListener('click', () => {
  ratingBox.style.display = 'none';
  thankBox.style.display = 'block';
});
