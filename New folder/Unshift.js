function insertAtStart(arr, ele){
    arr.unshift(ele)
    return arr
}
let arr = [1, 2, 3, 4, 5]
console.log(insertAtStart(arr, 0));

//complexity of these O(n) bcoz index shifting by 1 and add first in array element