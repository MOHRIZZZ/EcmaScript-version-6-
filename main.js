//variables as of now
//global scope var and let are same
var hey1 = "hellos";
console.log(hey1);
let a = "hello2";
console.log(a);

//funtions
function testvar(){
    var a =30;
    if(true){
        var a =50;
        console.log(a);
    }
  //also 50 as var is global and pain in the ass
    console.log(a);
}
//call the funtion
testvar();
//why the fuck both a times is 50 

//soln
function testlet(){
    let a = 30;
    if(true){
        let a =50;
        console.log(a);
    }//see problem is solv block scope 
    console.log(a);
}
testlet();

//for loop but as var so 
for(var i=0;i<10;i++){
    console.log(i);
}
console.log(i);

//for loop i as let 
for(let i=0;i<10;i++){
    console.log(i);
}
//gives error as blocked scope
//console.log(i);

//constant 
const colors =[];
colors.push('red');
colors.push('blue');
colors.push('pink');
colors.push('black');

//now if i do colors 
//so problem
colors='green';

console.log(colors);
