const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


// split the string by the escape character \n
const refactorCsv = csv.split("\n")
// create new array
let newArr = []
// .split returns array so we can use forEach to get each line
refactorCsv.forEach((line) => {
    // create a new array for each line
    let arr = []
    // push line to array
    arr.push(line)
    // push array to main array
    newArr.push(arr)
})

console.log(newArr)
