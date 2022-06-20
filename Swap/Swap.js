function swap(arr){
    for(let i=0; i<arr.length; i=i+2){    
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr
}
const arr = [1, 2, 3, 4]
console.log(swap(arr));



let arr1 = [1, 2, 3, 4]
for(let i=0; i<arr1.length; i=i+2){
    let temp = arr1[i]
    arr1[i] = arr1[i+1]
    arr1[i+1] = temp
}
console.log(arr1);

//complexity of these O(n) bcoz there are shifting element at one place to other