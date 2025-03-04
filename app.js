const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


// split the string by the escape character \n
const refactorCsv = csv.split("\n")
// create new array
let newArr = []

// .split returns array so we can use forEach to get each line
refactorCsv.forEach((line) => {
    // split each line by comma, and add it to new array.
    newArr.push(line.split(","))
})
console.log("PART 2: \n\n", newArr)



// part 3: transforming data
let headings = newArr[0]
let refactoredArray = []

for (let i = 1; i < newArr.length; i++) {
    const row = newArr[i];
    const obj = {};
  
    // loop through each column in the row and map it to the corresponding heading
    for (let j = 0; j < headings.length; j++) {
        // convert the heading to lowercase and assign the value from the row
        obj[headings[j].toLowerCase()] = row[j];
    }
  
    refactoredArray.push(obj);
}

console.log("PART 3: \n\n", refactoredArray)



// part 4

// remove last element from refactored array
// console.log(refactoredArray)
refactoredArray.pop()
console.log("PART 4.1: \n\n", refactoredArray)

// add new object to end of array
let bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
refactoredArray.push(bilbo)
console.log("PART 4.2: \n\n", refactoredArray)


// add new object to beginning of array
let barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
let factoredArrayCopy = [barry, ...refactoredArray]

console.log("PART 4.3: \n\n", factoredArrayCopy)