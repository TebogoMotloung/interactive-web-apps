// script.js



const oneRoot= document.querySelector('[data-key="order1"]')
const oneBiscuits= document.querySelector('[data-biscuits="10"]');
const oneDonuts =document.querySelector('[data-donuts="13"]');
const onePancakes= document.querySelector('[data-pancakes="0"]');
const oneStatus= document.querySelector('[data-delivered="false"]');


const twoRoot = document.querySelector('[data-key="order2"]');
const twoBiscuits= document.querySelector('[data-biscuit="5"]');
const twoDonuts =document.querySelector('[data-donuts="0"]');
const twoPancakes= document.querySelector('[data-pancakes="2"]');
const twoStatus= document.querySelector('[data-delivered="false"]');

const threeRoot = document.querySelector('[data-key="order3"]');
const threeBiscuits= document.querySelector('[data-biscuits="12"]');
const threeDonuts =document.querySelector('[data-donuts="11"]');
const threePancakes= document.querySelector('[data-pancakes="15"]')
const threeStatus= document.querySelector('[data-delivered="true"]');





// oneBiscuits && twoBiscuits && threeBiscuits === 
console.log(oneBiscuits.innerText)

// oneDonuts = 1-root.donuts,
// onePancakes = 1-root.pancakes,
// oneStatus= 1-root.status ? Delivered : Pending

// twoBiscuits= 2-root.biscuits,
// twoDonuts = 2-root.donuts,
// twoPancakes = 2-root.pancakes,
// twoStatus = 2-root.status ? Delivered : Pending

// threeBiscuits= 3-root.biscuits,
// threeDonuts = 3-root.donuts,
// threePancakes = 3-root.pancakes,
// threeStatus = 3-root.status ? Delivered : Pending