let names = "";
let array = ["aaa","bbb","ccc","ddd"];
let index = 0;

while(array[index])
{
   names += array[index] + " ";
    index++;
}
console.log(names);

const test3 = () => console.log("Hello World");
test3();

const addTwo = (n1 = 0,n2 = 0) => n1 + n2;
const sum = addTwo(1,2);
console.log(sum);