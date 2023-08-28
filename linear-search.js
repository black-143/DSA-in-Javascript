//Searching Algorithms

//Linear Search in Javascript
//Write a function to search "target" in nums,if 
//target exists return it else -1

//nums=[4,5,6,7,0,1,2],target=0 -->output:4

const linearSearch=(nums,target)=>{
	for(let i=0;i<nums.length;i++){
	if(nums[i]==target){
		return i
	}
	}
	return -1

}
console.log(linearSearch([4,5,6,7,0,1,2],0))

//global linear search


const globallinearSearch=(nums,target)=>{

	const result=[]
	for(let i=0;i<nums.length;i++){
	if(nums[i]==target){
		result.push(i)
	}
	}
	if(result.length==0) return -1
	return result;

}
console.log(globallinearSearch([4,5,6,7,0,1,2,0,0],0))