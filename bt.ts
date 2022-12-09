let arr1 = [0, 2, 3, 5, 7, 8, 9, 10];
let arr2 = [];
for (let i: number = 0; i < 10; i++) {
   if(arr1.indexOf(i) === -1){
       arr2.push(i)
   }
}
console.log(arr2)

