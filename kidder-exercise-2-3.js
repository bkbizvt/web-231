/*
============================================
; Title:  Exercise2-3.js
; Author: Brennan Kidder
; Date:   6June2020
; Description: Creating functions
;===========================================
*/
const header = require('./kidder-header.js'); //header application code (Title:header.js, Author:Professor Krasso)

console.log(header.display("Brennan", "Kidder", "Week 2, Exercise 2.3")); /*header application code  (Title:  header.js; Author: Professor Krasso;
  ;Date:6June2020; Modified By:Brennan Kidder)*/

function myName (){return myName.brennan} //Function that will return a defined propety

myName.brennan = "Brennan Kidder" //Propety definition for a function

console.log ("Hello " + myName() + "!") //Defining the output to console


