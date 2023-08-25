// let arr=[1,4,2,5,7,5,6,4,4,2];
// let duplicateArray=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             duplicateArray.push(arr[j])
//         }
//     }
//  return    
// }
// console.log(duplicateArray)
function foo() {
	let b = 1;
	function inner() {
        console.log('b'+b)
		return b;
	}
	return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
