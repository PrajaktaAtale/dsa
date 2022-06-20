function insertAtFirst(arr, ele){
    arr.unshift(ele)
    return arr
}
const arr = [1, 2, 3, 4, 5]
console.log(insertAtFirst(arr, 0));

//complexity of these O(n) bcoz here shifting index by 1 and insert element at start/first