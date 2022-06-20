//with using for of loop

let arr = [1,2,3,4,5,6,7]
let length = 0;
for(let i of arr){
    length++
}
console.log(length);

//complexity of these O(n) bcoz for i is incrementing by 1


//with using for loop

function LengthOfArray(arr1){
   let count = 0;
   for(let i=0; i<arr1.length; i++){
    count++
   }
   return count
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(LengthOfArray(arr1));

//complexity of these array is O(n) bcoz for incrementing index