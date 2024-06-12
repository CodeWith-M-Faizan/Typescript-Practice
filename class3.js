let n = 5;
n = 100;
n += 100;
n *= 100;
console.log(n);
n -= 100;
console.log(n);
{
    // COMPARISON OPERATORS
    let n1 = 60;
    let m = 100;
    console.log(n == m);
    let a = 100;
    let b = 200;
    console.log(a == b);
    let c = 100;
    let d = 100;
    console.log(c == d);
    //<= or >= operator
    let n2 = 100;
    console.log(n2 <= 200);
    //!= operator
    let num = 100;
    console.log(num != 10000);
    // && operator
    let stdname = "Faizan";
    let isslot = "Tuesday";
    let isallowed = stdname === 'Faizan' && isslot === 'Tuesday';
    //                true             &&           true
    console.log(isallowed);
    let StdName = "Asif";
    let IsSlot = "Tuesday";
    let IsAllowed = StdName === 'Faizan' && IsSlot === 'tuesday';
    //                           false  &&    true
    console.log(IsAllowed);
    // or operator
    let firstvalue = "123";
    let secondvalue = "456";
    let ia = firstvalue || secondvalue;
    console.log(ia);
    // not operator
    console.log(!100);
}
export {};
