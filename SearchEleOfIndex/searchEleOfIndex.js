function searchIndexOfEle(arr, ETBS){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === ETBS){
            return i
        }
        }
}
const arr = [10, 20, 30]
console.log(searchIndexOfEle(arr, 30));

//complexity of these O(n) bcoz here serching the index of element increment i++ one time for loop is going on