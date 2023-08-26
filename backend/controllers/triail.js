let arr=[1,4,2,5,7,5,6,4,4,2];
let duplicateArray=[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            duplicateArray.push(arr[j])
        }
    }    
}
console.log(duplicateArray)


let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
let duplicateArray = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1;  j <= arr.length; j++) {
        if (arr[i] === arr[j]) {
            duplicateArray.push(arr[j]);
        }
    }
}

console.log(duplicateArray.sort());


let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
let duplicateArray = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] ) {
            duplicateArray.push(arr[i]);
        }
    }
}

console.log(duplicateArray);



let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
let duplicateCountMap = {};


for (let i = 0; i < arr.length; i++) {
    if (duplicateCountMap[arr[i]] === undefined) {
        duplicateCountMap[arr[i]] = 1;
		// console.log(duplicateCountMap)
    } else {
		console.log(arr[i])
        duplicateCountMap[arr[i]]++;
    }
}

console.log(duplicateCountMap);



