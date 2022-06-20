// Pair that array [1,2,3,4]

function pair(arr){
    for(let i=0;i<arr.length-1; i++){
     for(let j=i+1; j<arr.length; j++){
        console.log("("+arr[i]+','+arr[j]+")");
        }
     }
}

const arr = [1, 2, 3, 4]
console.log(pair(arr));

//Complexity is these i think O(n^2) bcoz for nesting looping

//Work for that finding complexity of that