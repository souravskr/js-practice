const s = "It was a  dark and stormy night";
const sToArr = s.split(' ').filter(word => word.length)
console.log(sToArr)

let aList = [1, 2, 5, 9, 6, 25, 15, 14, undefined]
// remove the undefined
aList = aList.filter( num => num) 

// Even Numbers
const evens = aList.filter(num => !(num % 2))
console.log(evens)

// Odd Numbers
const odds = aList.filter(num => num % 2)
console.log(odds)