function quickSort(arr){
	if(arr.length <=1 ){
		return arr
	}

	const pivot=arr[0]
	const left=[]
	const right=[]

	for(let i=1;i<arr.length;i++){
		if(arr[i]<pivot){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}
	return [...quickSort(left),pivot,...quickSort(right)]
}

//Time complexity -0(n logn)
//space complexity-0(logn )
console.log(quickSort([5,2,9,3,6,1,8,7]))