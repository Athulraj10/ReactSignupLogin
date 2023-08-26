// let arr=[1,4,2,5,7,5,6,4,4,2];
// let duplicateArray=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             duplicateArray.push(arr[j])
//         }
//     }
// }
// console.log(duplicateArray)

// let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
// let duplicateArray = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1;  j <= arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             duplicateArray.push(arr[j]);
//         }
//     }
// }

// console.log(duplicateArray.sort());

// let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
// let duplicateArray = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] ) {
//             duplicateArray.push(arr[i]);
//         }
//     }
// }

// console.log(duplicateArray);

// let arr = [1, 4, 2, 5, 7, 5, 6, 4, 4, 2];
// let duplicateCountMap = {};

// for (let i = 0; i < arr.length; i++) {
//     if (duplicateCountMap[arr[i]] === undefined) {
//         duplicateCountMap[arr[i]] = 1;
// 		// console.log(duplicateCountMap)
//     } else {
// 		console.log(arr[i])
//         duplicateCountMap[arr[i]]++;
//     }
// }

// console.log(duplicateCountMap);

// let nums = [3,2,4], target = 6

// var twoSum = function(nums, target) {
// 	for(let i =0;i<nums.length;i++){
// 		for(let j=i;j!=i,j<=nums.length;j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j]
//             }
//         }
//     }
// };
// console.log(twoSum(nums,target))

// const arraylist = [1, 2, 1, 3, 4,5, 3, 5];

// const toFindDuplicates = arraylist => arraylist.filter((item, index) => arraylist.indexOf(item) !== index)

// const duplicateElements = toFindDuplicates(arraylist);
// console.log(duplicateElements);

// var containsDuplicate = function(nums) {
//     let size=nums.length;
//     const uniqueSet = new Set(nums);
//     console.log(uniqueSet.size)
//     let duplicate = uniqueSet.length;
//     if (size == duplicate) {
//     }
// };
// let nums = [1,2,3,1]
// containsDuplicate(nums)
// var removeDuplicates = function(nums) {
//     let ans = 1;
//     for(let i = 1; i < nums.length; i++)
//         if (nums[i] != nums[i - 1]) {  
//             nums[ans] = nums[i]; 
//             ans++; 
//             }
//     return ans;
// };

var removeDuplicates = function(nums) {
    let duplicate = new Set(nums)
    let b=Array.from(duplicate)
    return b
};

let nums = [1,1,2]
console.log(removeDuplicates(nums))