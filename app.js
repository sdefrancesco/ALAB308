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
console.log(newArr)



// part 3: transforming data
let headings = newArr[0]
let refactoredArray = []

for (let i = 1; i < newArr.length; i++) {
    const row = newArr[i];
    const obj = {};
  
    // loop through each column in the row and map it to the corresponding heading
    for (let j = 0; j < headings.length; j++) {
        // convert the heading to lowercase and assign the value from the row
        obj[headings[j]] = row[j];
    }
  
    refactoredArray.push(obj);
}

console.log(refactoredArray)

