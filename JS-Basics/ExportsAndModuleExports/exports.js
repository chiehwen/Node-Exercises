let a = { name: 1 };
let b = a;

console.log(a);
console.log(b);

b.name = 2;
console.log(a);
console.log(b);

// let b = { name: 3 };
console.log(a);
console.log(b);