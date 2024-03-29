//binary search algorithms

//nums[-1,0,3,5,9,12] target=9--> output:4

const binarySearch=(nums,target)=>{

	let start=0
	let end=nums.length-1
	while(start<=end){
		let mid=Math.floor(start+end)/2

		if(nums[mid]==target){
			return mid
		}
		if(nums[mid] > target){
			end=mid-1
		}
		else{
			end=mid+1
		}
	}
	return -1
}

console.log(binarySearch([-1,0,3,5,9,12],9))