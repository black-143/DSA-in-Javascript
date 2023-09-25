function mergeSort(arr){ //0(n)

	if(arr.length<=1) return arr

	let mid=Math.floor(arr.length/2)
	let left=mergeSort(arr.slice(0,mid))
	let right=mergeSort(arr.slice(mid))

	return merge(left,right)
}

function merge(left,right){
	let sortedArr = []

	while(left.length && right.length){
		if(left[0] < right[0]){
			sortedArr.push(left.shift())
		}else{
			sortedArr.push(right.shift())
		}
	}
	return [...sortedArr,...left,...right]
}

//Time complexity:0(nlogn)
//Space complexity:0(n)
console.log(mergeSort([8,3,5,4,6,7,8,2]))

//Overlap intervals
var mergee=function(intervals){
	const startIndex=0
	const endIndex=1
	intervals.sort((a,b)=>a[startIndex]-b[startIndex])

	const mergedIntervals=[]
	let mergeStart = intervals[0][startIndex]
	let mergeEnd=intervals[0][endIndex]

	for(let i=1;i<intervals.length;i++){
		const subsequentInterval=intervals[i]

		if(subsequentInterval[startIndex]<=mergeEnd){
			mergeEnd=Math.max(mergeEnd,subsequentInterval[endIndex])

		}else{
			mergedIntervals.push([mergeStart,mergeEnd])
			mergeStart=subsequentInterval[startIndex]
			mergeEnd=subsequentInterval[endIndex]
		}
	}
	mergedIntervals.push([mergeStart,mergeEnd])
	return mergedIntervals

}