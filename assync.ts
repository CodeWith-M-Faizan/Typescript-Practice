// //  arrow function
// let sum (num1:number,num2:number,num3:number)=>{
//       console.log(num1+num2+num3);
//     };

// // call back function
// function makeBreakfast(fn:() => void) {
//           console.log("making breakfast");
//        fn() 
// }
// function eatbreakfast() {
//     console.log("eat your breakfast");
     
// }
// makeBreakfast(eatbreakfast)

// // synchronous programming
// console.log("second");
// for (let i = 0; i<100;i++){
//     console.log("first");
//     }
// console.log("third");

// // asynchronous programming
// console.log("first");
// setTimeout(() => {
//     console.log("second");
    
// }, 2000000);

// console.log("third");

// promise
let party = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let mood="naughty"
        if (mood==="fresh") {
            resolve("Chalo");
        }
        else{
            reject("phir kabhi")
        }
    }, 1000);
})
party.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
    
})