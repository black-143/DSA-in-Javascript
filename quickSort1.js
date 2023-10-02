function sortArray(arr){
	return quickSort(arr)
}
function pivot(arr,start=0,end=arr.length-1){

	function swap(array,i,j){
		let temp=array[i]
		array[i]=array[j]
		array[j]=temp

	}
	let pivot=arr[0]
	let swapIndex=start

	for(let i=start+1,i<arr.length;i++){
		if(arr[i]<pivot){
			swap(arr,swapIndex,i)
			swapIndex++
		}
	}
	swap(arr,start,swapIndex)
	
}
function quickSort(arr,start=0,end=arr.length-1){
	if(start<end){
	const pivotIndex=pivot(arr,start,end)
	quickSort(arr,start,pivotIndex-1)
	quickSort(arr,pivotIndex+1,end)
	}
	return arr
}