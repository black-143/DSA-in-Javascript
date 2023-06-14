//Array declaration


let person={
	name:"Pravallika",
	age:21
}

let arr=new Array()
let arr=['apple','banana','cherry',person]
console.log(arr[3].name)
console.log(arr[0])
console.log(arr.length)

//Arrays-Add and remove elements

let arr=['apple','banana','cherry']
arr.push('orange')
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)

//add to top of array

arr.unshift("orange")
console.log(arr)

//remove  top of array
arr.shift()
console.log(arr)

//Looping in array
arr=['apple','banana','cherry']
for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}
let i=0
while(i<arr.length){
	console.log(arr[i])
	i++
}

//inbuilt Loop Methods
const numbers=[1,2,3,4,5]
const newNums = numbers.map((number,index)=>{
	return number+5
})
console.log(newNums)

const newNum=numbers.filter((item,index)=.{
	return item > 3
})
console.log(newNum)

const newNumm=numbers.reduce((acc,item)=>{
	return acc+item
},0) //0 by default
console.log(newNumm)

const res = numbers.some((item,index)=>{
	return item > 3 //return true or false
})
console.log(res)

const fin=numbers.find((item,index)=>{
	return item > 3
})

//spread and rest operators:

const nums=[1,2,3]
const nums1=[4,5,6,7]
const finalNums={...nums,...nums1}
console.log(finalNums)

//Array methods

const nums=[1,2,3,4,5]
const newArr = nums.contact(nums1)
console.log(newArr)

//slice
const number=[1,2,3,4,5]
const newA=number.slice(0,1) //particular index element in prints
console.log(newA)

const newArr=number.splice(1,2,"orange")
//remove 2 elements from array and in that place it adds orange
console.log(newArr)

const nums=[1,2,3,4,5]
console.log(nums.fill(7))

//findIndex function
console.log(nums.findIndex((item)=>item===2))

const flat=[1,[1,2,[9,8]],[4,5,6]]
const flatterned=flat.flat()()
console.log(flatterned)
console.log(flatterned.reverse())

const unsorted=[5,4,3,1,8,9,12]
console.log(unsorted.sort())

//second largest number in array

const arr=[32,35,1,14,21,20]

//brute force
function secondLargest(arr){
	const uniqueArr = Array.from(new Set(arr))
	uniqueArr.sort((a,b)=>{
		return b-a
	})
	if (uniqueArr.length >=2) {
		return uniqueArr[1]
	}else{
		return -1
	}
	console.log(uniqueArr)
}
secondLargest([12,14,1,10,34,1])

//Efficient solution

function secondLargestElement(arr){
	let largest =Number.NEGATIVE_INFINITY
	let secondLargest =Number.NEGATIVE_INFINITY

	for(let i=0;i<arr.length;i++){
		if(arr[i] >largest){
			largest=arr[i]
			secondLargest=largest
		}else if(arr[i] !=largest && arr[i] > secondLargest){
			secondLargest=arr[i]
		}
	}
	return secondLargest
}
console.log(secondLargestElement[12,44,1,2,3,4,5])

//Roate array by k
//nums=[1,2,3,4,5,6,7] k=3 output:[5,6,7,1,2,3,4]

function rotateArray(nums,k){
	let size=nums.length
	if(size >k){
		k=k%size
	}
	const rotated=nums.splice(size-k,size)
	nums.unshift(...rotated)

	return nums
}
console.log(rotateArray([1,2,3,4,5,6,7],3))

//optimized sol

function rotateArrayOptimized(nums,k){
	let size=nums.length

	if(size >k){
		k=k%size
	}
	reverse(nums,0,nums.length-1)
	reverse(nums,0,k-1)
	reverse(nums,k,nums.length-1)
	return nums

}

function reverse(nums,left,right){
	whie(left < right){
		const temp= nums[left]
		nums[left++]=nums[right]
		nums[right--]=temp
	}
}

console.log(rotateArrayOptimized([1,2,3,4,5,6,7],3))

//remove duplicates

function removeDuplicates(nums){
	for(let i=0;i,nums.length;i++){
		if(nums[i]==nums[i+1]){
			nums.splice(i+1,1)
			i--
		}
	}
	return nums.length
}
console.log(removeDuplicates([1,1,2,2,3,4,5]))