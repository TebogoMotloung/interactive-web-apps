// script.js


// look for ORDER in document
let order1 = document.querySelector('[data-key="order1"]');

// look for CLASS in order1
let biscuits1class = order1.querySelector(".biscuits");
let biscuits1count = biscuits1class.querySelector(".count");
biscuits1count.textContent = order1.getAttribute("data-biscuits");

let donut1class = order1.querySelector(".donuts");
let donut1count = donut1class.querySelector(".count");
donut1count.textContent = order1.getAttribute("data-donuts");

let pancakes1class = order1.querySelector(".pancakes");
let pancakes1count = pancakes1class.querySelector(".count");
pancakes1count.textContent = order1.getAttribute("data-pancakes");

let status1class = order1.querySelector(".status");
let status1line = status1class.querySelector("dd");
status1line.textContent =
  order1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";


// ORDER 2

let order2 = document.querySelector('[data-key="order2"]');

let biscuits2class = order2.querySelector(".biscuits");
let biscuits2count = biscuits2class.querySelector(".count");
biscuits2count.textContent = order2.getAttribute("data-biscuits");

let donut2class = order2.querySelector(".donuts");
let donut2count = donut2class.querySelector(".count");
donut2count.textContent = order2.getAttribute("data-donuts");

let pancakes2class = order2.querySelector(".pancakes");
let pancakes2count = pancakes2class.querySelector(".count");
pancakes2count.textContent = order2.getAttribute("data-pancakes");

let status2class = order2.querySelector(".status");
let status2line = status2class.querySelector("dd");
status2line.textContent =
  order2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

// ORDER 3

let order3 = document.querySelector('[data-key="order3"]');

let biscuits3class = order3.querySelector(".biscuits");
let biscuits3count = biscuits3class.querySelector(".count");
biscuits3count.textContent = order3.getAttribute("data-biscuits");

let donut3class = order3.querySelector(".donuts");
let donut3count = donut3class.querySelector(".count");
donut3count.textContent = order3.getAttribute("data-donuts");

let pancakes3class = order3.querySelector(".pancakes");
let pancakes3count = pancakes3class.querySelector(".count");
pancakes3count.textContent = order3.getAttribute("data-pancakes");

let status3class = order3.querySelector(".status");
let status3line = status3class.querySelector("dd");
status3line.textContent =
  order3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";