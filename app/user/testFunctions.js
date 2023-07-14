const obj = {
    name: "Erik",
    age: 102,
    hair : 'blond'
}

const myArray = [24, 2, 345, 24, 2];

// filter return value bigger than 24
let filterArray = myArray.filter(l => {
    return l > 24
})
console.log(filterArray)

// map add 10 to each of them
let mapArray = myArray.map(l => {
    return l + 10;
})
console.log(mapArray)

// map + filter
let mapFilterArray = myArray.map(l => l + 10).filter(f => f > 12)
console.log(mapFilterArray)

// reduce 
const newArray = [34, 24, 124, 4];

const answer = myArray.reduce(
    (acc, val) =>
    {
        return acc + val
    }, 100);

console.log(answer)