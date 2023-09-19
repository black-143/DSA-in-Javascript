//Bubble sort
//nums=[29,10,14,37,14]--
//comparing adjacent element and do the swapping process
//TC:O(n)-Best
//Worst TC:O(N**2)

const bubbleSort=(nums)=>{
	const n=nums.length
	for(let i=0;i<n;i++){
		for(let j=0;j<n-i-1;j++){
			if(nums[j]>nums[j+1]){
				[nums[j],nums[j+1]]=[nums[j+1],nums[j]]
			}
		}
	}
	return nums
}
console.log(bubbleSort([29,10,14,37,14]))

//2.Selection Sort
//nums=[29,10,14,37,14]
//TC:O(n**2)
//SC:O(1)

const selectionSort=(nums)=>{
	const n1=nums.length
	for(let i=0;i<n;i++){
		let minIndex=i
		for(let j=i+1;j<n;j++){
			if(nums[j]<nums[minIndex]){
				minIndex=j
			}
		}
		if(minIndex!=i){
			[nums[i],nums[minIndex]]=[nums[minIndex],nums[i]]
		}
	}
	return nums
}
console.log(selectionSort([29,10,14,37,14]))

//3.InsertionSort
//Best TC:O(N)
//Worst TC:O(n**2)
//SC:O(1)

function insertionSort(arr){
	const n=arr.length
	for(let i=1;i<n;i++){
		const key = arr[i]
		let j=i-1
		while(j>=0 && arr[j] > key){
			arr[j+1]=arr[j]
			j--
		}
		arr[j+1]=key
	}
	return arr;
}
console.log(insertionSort([29,10,14,37,14,33,8,11]))

//Sort method in JS

const fruits=["dragon","apple","date","cherry","banana"]
console.log(fruits.sort())

const nums=[10,5,18,1,27]
console.log(nums.sort())

//Custom function for Sort
const compareFunction=(a,b)=>{
	//1. a<0 then a comes first
	//2.a-b=0 then nothing happen
	//3.>0 then b comes first

	return b-a

}

//Kth largest element in array
nums=[3,2,1,5,6,4]
k=2

//sort asc order
nums.sort((a,b)=>a-b)
return nums[nums.length-k]