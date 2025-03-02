//Problem 1 - understanding the synchronus Execution

// console.log('Task1')
// console.log('Task2')
// console.log('Task3')
// console.log('Task4')

// output:
//Task1
//Task2
//Task3
//Task4


// Problem 2 

// console.log('Task1')
// console.log('Task2')
// for(let i=0;i<100000;i++){
//     if(i==0){
//         console.log('Loop Started')
//     }
//     if(i==100000){
//         console.log('Loop Ended')
//     }
// }
// console.log('Task4')

//output:
//Task1
//Task2
//Loop Started
// Loop Started -> takes time and block the task4 

//Problem 3
// Single Threaded meaans Runs one code at a time ,
//Completes one task at a time

//It consumes time like
// TAsk 1 takes -> 20sec
// Task 2 takes -> 10sec
// the complete time it takes is 30se

//And the Solution is Asynchronous Property in Js code

//Problem4

/*
In synchronus behavior
Task1 - 10sec
Task2 - 7sec
Task1 - 5sec
Task1 - 3sec

Total time - 25sec

In asynchronus behavior
Task1 - 10sec
Task2 - 7sec
Task1 - 5sec
Task1 - 3sec

Total time - 10sec


Problem 5
This is Sychronus Behaviour-

Imagine you are at a restaurant where the waiter takes an order from one table,
goes to the kitchen, waits for the food to be prepared, serves it,
and then moves on to the next table. This process is strictly sequential—only 
one table is served at a time.

And It Takes Time Bacause One is done at one time not many task done.

*/

