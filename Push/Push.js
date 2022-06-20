function insertAtLast(arr,ele){
    arr.push(ele)
    return arr
}
const arr = [1, 2, 3, 4]
console.log(insertAtLast(arr, 5));

//complexity of these O(1) bcoz only index increment by 1 at last