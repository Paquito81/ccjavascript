// let arr =[1, 4, 9, 16]
// let newArray = arr.map((element) => {
//     console.log(element)
//     return 'chorizo';
// })

// console.log(newArray)

/**
 * Turn each element in an array of dollars into cents
 * without using the map method
//  *
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */


let dollars = [1, 5, 10, 3]

//create new 'cents' array
let cents = [];

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100);
}

console.log(cents)

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => {
//     return element * 100
// })

// console.log(cents)

// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => 'dog')

// console.log(newArray)

//Create a new empty array called 'goodGrades'

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     //add the current element onto 'goodGrades'
//     //the current element is not equal to 
//     if (grades[i] !=='FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades);

/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+, 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL') 
// console.log(goodGrades)

// let arr =[20, 30, 40, 50, 100]

//[20, 30, 40, 50, 100]
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
// })

//[20, 30, 40]
// let newArr = arr.filter(element => {
//     return element < 50
// })

// let newArr = arr.filter(element => element < 50)
// console.log(newArr)

//Frist element of array:
// console.log(arr[0])

// //Last element of array:
// console.log(arr[arr.length - 1])

// //Add element onto end of array
// arr.push(200)

// arr.filter(() => {})

// console.log(arr);

