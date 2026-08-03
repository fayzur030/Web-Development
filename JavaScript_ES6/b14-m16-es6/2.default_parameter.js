function greet(name = "Guest"){
    return "Hello, " + name ;
}


console.log(greet("Utsho"));
console.log(greet());
console.log(greet("Akash"));


function makeCoffee(suger = 1){
    return "Coffee is prepared " + "with " + suger + " spoon suger"
}

console.log(makeCoffee(2));
console.log(makeCoffee(5));
console.log(makeCoffee());