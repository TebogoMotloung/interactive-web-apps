const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    code734: '3%',
    code234: '20%',
    code913: '12%',
    code415: '38%',
    code502: '42%',
}

const rent = {
    none: 0,
    smallRoom: 200,
    largeRoom: 300,
    smallApartment: 400,
    largeApartment: 800,
    smallHouse: 1200,
    largeHouse: 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax.code913) / 100 * 4000
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = startingAfterTax - expenses.transport - expenses.food - rent.largeApartment
console.log(balance.toFixed(2))