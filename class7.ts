// function square(){    
//     console.log(x* x);
//}
// console.log("before")
// square();
// console.log("after")

 

//  function square(num:number){    
//     console.log(num * num);
// }
// square(4); // 4 is argument
//  square(5);
//  square(10);


// function areaofcircle(r:number){
//      //  A=pie*r^2 
//      const pie=3.142
//      console.log(pie*r*r)  
// }
// areaofcircle(2);
// areaofcircle(4);
// areaofcircle(6);
// areaofcircle(8);
// areaofcircle(10);

function cook(dish:string){
    console.log("making " + dish + ' ....')
    console.log("dish " + "is ready")
    return dish + "khalo"
}
let cookedfood=cook("anda");
console.log(cookedfood)
