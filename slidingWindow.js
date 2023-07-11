//TC: o(n*k)=>O(n2)
nums=[1,3,-1,-3,5,3,6,7]
k=3

const maxSlidingWindowNative=functions(nums,k){
	const res=[]
	const n=nums.length

	for(let i=0;i<=n-k;i++){
		let max=nums[i]
		for(j=1;j<k;j++){
		if(nums[i+j]>max){
			max=nums[j+i]
		}
		}
		res.push(max)
	}	
	return res
}
console.log(maxSlidingWindowNative(nums,k))

//Optimization

res=[]
deque=[]
for(let i=0;i<=n;i++){
	if(deque.length>0 && deque[0]<=i-1){
		deque.shift()
	}
	while(nums[deque[deque.length-1]] < nums[i]){
		deque.pop()
	}
	deque.push(i)
	if(i>=k-1){
		res.push(nums[deque[0]])
	}
}
console.log(res)