const leoName = 'Leo '
const leoSurname = 'Musvaire    '
const leoBalance = -9394

const sarahName = 'Sarah  '
const sarahSurname = 'Kleinhans'
const sarahBalance = -4582.2

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat( Math.abs(leoBalance) + Math.abs(sarahBalance))
const o = owed
const ow = Number(o.toFixed(2)).toLocaleString()
const leo = `${leoName + leoSurname} (Owed: R ${Math.abs(leoBalance)})`
const sarah = `${sarahName + sarahSurname} (Owed: R ${ Math.abs(sarahBalance)})`
const total = "Total amount owed: "
const result = leo +'\n' + sarah + '\n'+ divider + '\n' + total + "R " + ow + '\n' + divider

console.log(result)