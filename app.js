// HARD CHALLENGES


// 1. Show Rating

// function showRating(num) {
//     let ratings = ""

//     for (i=0; i < Math.floor(num); i++)
//     {
//         if (i === Math.floor(num) - 1)        {
//             ratings += "*"
//         }
//         else {
//             ratings += "* "
//         }
//     }

//     if(!Number.isInteger(num) && num > 1){
//         ratings += " ."
//     }
//     else {
//         ratings += "."
//     }

//     return ratings
// }

// console.log(showRating(0.5));


// 2. Sorting Array of Numbers

// function sortArray (arr) {
//     return arr.sort((a, b) => a - b)
// }

// console.log(sortArray([1,0,-4,10,44,10]));


// 3. Sorting Array of Objects

// function sortArray(arr) {
//     return arr.sort((a, b) => a.price - b.price)
// }

// console.log(
//   sortArray([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 }
//   ])
// );


// 4. Get Posts by User ID in API

// async function getPosts (userId) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const response1 = await response.json()

//     const result = response1.filter(element => element.userId === userId)

//     console.log(result)
// }

// getPosts(4);


// 5. Get First 6 Incomplete To-Do's From API

    // async function getFirstSixToDos() {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   const response1 = await response.json();

    //   const toDos = response1.filter((element) => !element.completed).slice(0,6);

    //   console.log(toDos);
    // }

    // getFirstSixToDos();