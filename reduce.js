const aList = [1, 2, 5, 9, 6, 25, 15, 14]

// Max Value
const biggest = aList.reduce((acc, val) => val > acc ? val : acc, 0)
console.log(`max value: ${biggest}`)

// Min Value
const smallest = aList.reduce((acc, val) => val < acc ? val : acc)
console.log(`max value: ${smallest}`)

// average
const average = aList.reduce((acc, val) => acc + val, 0) / aList.length
console.log(`Average: ${average}`)

// sum
const sumAll = aList.reduce((acc, val) => acc + val, 0)
console.log(`Sum: ${sumAll}`)
