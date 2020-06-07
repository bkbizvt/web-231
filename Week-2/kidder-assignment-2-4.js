/*
============================================
; Title:  Assignment 2.4.js
; Author: Brennan Kidder
; Date:   6June2020
; Description: Creating functions
;===========================================
*/
//header application code (Title:header.js, Author:Professor Krasso)
const header = require('../kidder-header.js');

//header application code output  (Title:  header.js; Author: Professor Krasso; Date:6June2020; Modified By:Brennan Kidder)
console.log(header.display("Brennan", "Kidder", "Week 2"));


  //function that will execute a string that is my first and last name for output.
  function fullName (firstName, lastName) {
    var firstName = "Brennan ";
    var lastName = "Kidder";
    return firstName + lastName}

  //global variables used in the dateWriter function
  var d=new Date();
  var da=d.getDate();
  var m=d.getMonth()
  var mo=m+1;
  var ye=d.getFullYear();

  //function that can use global variables to execute a date value for output.
  function dateWriter (year, month, day) {
    return year + "/" + month + "/" + day}

  //global variables used in the formatNumber function
  var temp= 61.87
  var a=1

  //function for formatting temperature numerical value to a certain number of decimal positions
  function formatNumber (number, numOfFixedPositions) {
    return number.toFixed(numOfFixedPositions)}


  //function displaying the use of the parseInt function to display my age in a numerical output from a string input
  function convertToInt (myAge, age) {
    var age = "26 years old";
    var myAge=parseInt (age, 10);
    return myAge;}

  // function displaying the use of the parseFloat function to display a dollar amount in a numerical output from a string input
  function convertToFloat (savings) {
    var total = "1059 dollars";
    var savings=parseFloat(total);
    return savings}

  //outputs formatted to mimic starter code output
  console.log("Hello my name is " + fullName() + ".")
  console.log ("Today's date is " + dateWriter(ye,mo,da) + " and the temperature is " + formatNumber(temp,a))
  console.log ("I am " + convertToInt() + " years old and my savings account goal is " + convertToFloat() + " dollars.")


