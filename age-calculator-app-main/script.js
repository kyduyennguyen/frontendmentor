'use strict';
// Declare Variables and Arrays
let day = '';
let month = '';
let year = '';
let birthDay, birthMonth, birthYear;

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const daysOfMonths = [];

// Updating and Checking Input of Day
const updateDay = function () {
  day = Number(document.getElementById('input-day').value);
  let labelDay = document.getElementById('label-day');
  let inputDay = document.getElementById('input-day');
  let errorDay = document.getElementById('error-day');

  if (day == '') {
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    inputDay.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorDay.textContent = 'This field is required';
    errorDay.style.display = 'block';
  } else if (isNaN(day) || 0 > day || day > 31) {
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    inputDay.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorDay.textContent = 'Must be a valid day';
    errorDay.style.display = 'block';
  } else {
    labelDay.style.color = 'hsl(0, 0%, 86%)';
    inputDay.style.border = 'border: 1px solid hsl(0, 0%, 86%)';
    errorDay.style.display = 'none';
  }
};

// Updating and Checking Input of Month
const updateMonth = function () {
  month = Number(document.getElementById('input-month').value);
  let labelMonth = document.getElementById('label-month');
  let inputMonth = document.getElementById('input-month');
  let errorMonth = document.getElementById('error-month');

  if (month == '') {
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    inputMonth.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorMonth.textContent = 'This field is required';
    errorMonth.style.display = 'block';
  } else if (isNaN(month) || 0 > month || month > 12) {
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    inputMonth.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorMonth.textContent = 'Must be a valid month';
    errorMonth.style.display = 'block';
  } else {
    labelMonth.style.color = 'hsl(0, 0%, 86%)';
    inputMonth.style.border = 'border: 1px solid hsl(0, 0%, 86%)';
    errorMonth.style.display = 'none';
  }
};

// Updating and Checking Input of Year
const updateYear = function () {
  year = Number(document.getElementById('input-year').value);
  let labelYear = document.getElementById('label-year');
  let inputYear = document.getElementById('input-year');
  let errorYear = document.getElementById('error-year');

  if (year == '') {
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    inputYear.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorYear.textContent = 'This field is required';
    errorYear.style.display = 'block';
  } else if (
    isNaN(year) ||
    new Date().getFullYear < year ||
    String(year).length != 4
  ) {
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    inputYear.style.border = 'border: 1px solid hsl(0, 100%, 67%)';
    errorYear.textContent = 'Must be in the past';
    errorYear.style.display = 'block';
  } else {
    labelYear.style.color = 'hsl(0, 0%, 86%)';
    inputYear.style.border = 'border: 1px solid hsl(0, 0%, 86%)';
    errorYear.style.display = 'none';
  }
};

// Checking Leap Year or NOT
const leapChecker = function (year) {
  if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
};

// Display Result Contents of Date
const displayResults = function (bdays, bmonths, byears) {
  document.getElementById('result-years').textContent = byears;
  document.getElementById('result-months').textContent = bmonths;
  document.getElementById('result-days').textContent = bdays;
};

// Calculating Age with Years - Months - Days
const calculateAge = function () {
  day = Number(document.getElementById('input-day').value);
  month = Number(document.getElementById('input-month').value);
  year = Number(document.getElementById('input-year').value);
  let today = new Date();

  console.log(`${day}-${month}-${year}`);
  let inputDate = new Date(year, month, day);
  let birthDetails = {
    day: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  // Declare variables for current DATE (it means today)
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  // Cheking current year is leap year???
  leapChecker(currentYear);

  // Checking invalid date
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.day > currentDay &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert('Not born yet!!!');
    displayResults('- -', '- -', '- -');
    return;
  }

  // calculating Years
  birthYear = currentYear - birthDetails.year;
  console.log(birthYear);

  // calculating Months
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + (currentMonth - birthDetails.month);
  }

  // calculating Days
  if (currentDay >= birthDetails.day) {
    birthDay = currentDay - birthDetails.day;
  } else {
    let days = months[currentMonth - 1];
    birthDay = days + currentDay - birthDetails.day;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  // View an age in years, months and days
  displayResults(birthDay, birthMonth, birthYear);
};
