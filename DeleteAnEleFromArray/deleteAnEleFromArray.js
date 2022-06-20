function deleteAnEleFromArray(arr, ETBD){
    for (let i = 0; i < arr.length; i++) {  //O(n) 
        if(arr[i] === ETBD){
            arr.splice(i, 1)  //O(n)
        }
    }
    return arr
}
const arr = [10, 20, 30, 40]
console.log(deleteAnEleFromArray(arr, 40));


//complexity of these O(n^2) bcoz there is nesting term in nesting n*n i.e. n^2 so that why here complexity is O(n^2)


function search(arr1, ETBS){
    for (let i = 0; i < arr1.length; i++) {
       if(arr1[i] === ETBS){
        return i
       }
    }
}

function remove(arr1, ele){
        const index = search(arr1, ele)
        arr1.splice(index, 1)
        return arr1
}

const arr1 = [10, 20, 30, 40]
console.log(remove(arr1, 40));

//complexity of these above code is O(n) bcoz there is no nesting in that separeate function write and passed only function there