//write a program to find index with the binary search

function binarySearch(arr, target){
    let start =0;
    let end = arr.length;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if (arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
             start = mid+1
        }else{
            end = mid-1
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(binarySearch(arr, 4));

//complexity is O(logN) bcoz here to search the index 
// comparison with linear serach complexity of binary search is best complexity is O(logN) and for linear search complexity is O(n)