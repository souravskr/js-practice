const aList = [1, 2, 5, 9, 6, 25, 15, 14]
const s = "It was a  dark and stormy night";

// sorting the array 
const sortedAsc = aList.sort((a, b) => a-b)
console.log(sortedAsc) 
const sortedDesc = aList.sort((a, b) => b-a)
console.log(sortedDesc)

// Sentence to Array Sorted
const sortedSAsc = s.split(' ').filter(word => word.length).sort((a, b) => a.length - b.length)
console.log(sortedSAsc)
const sortedSDesc = sortedSAsc.sort((a, b) => b.length - a.length)
console.log(sortedSDesc)