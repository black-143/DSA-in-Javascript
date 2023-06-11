
//Palindrome number
//x=121 output:true
//x=10 output:false

const isPalindrome=function(x){
	return x<0 ? false : x===  + x.toString().split("").reverse().join("")

}

console.log(isPalindrome(121))

//2nd fibnocci number
//f(n-1)+f(n-2)

const fibnocciNumber=function(n){
	const arr=[0,1]

	for(let i=2;i<=n;i++){
		arr.push(arr[i-1]+arr[i-2])

	}
	console.log(arr)
}
console.log(fibnocciNumber(3))

//valid anagrams or not
//s="abc" s2="cba"

const checkAnagrams=function(s1,s2){
	s1=s1.split("").sort().join("")
	s2=s2.split("").sort().join("")
	if(s1===s2){
		return true
	}
	else{
		return false
	}
}
console.log(checkAnagrams("rat","car"))

//4
const isAnagram=function(s,t){
	if(s.length !== t.length) return false

	let obj1={}
	let obj2={}
	for(let i=0;i<s.length;i++){
		obj1[s[i]] = (obj1[s[i]] || 0) + 1
		obj1[t[i]]= (obj1[s[i]] || 0) + 1


	}
	for(const key in obj1){
		if(obj1[key] !== obj2[key]) return false
	}
return true
}

console.log(isAnagram("anagram","nagaram"))

//5 Two sum
//nums[2,7,11,15] target =9 output:[0,1]

const twoSum = function(nums,target){
	var obj={}
	for(let i=0;i < nums.length;i++){
		var n=nums[i]
		if(obj[target-n] >=0){
			return [obj[target-n],i]

		}
		else {
			return obj[n]=i
		}
	}

}
console.log(twoSum([1,2,3,4,5],7))

//Best time to buy and sell stocks
//prices [7,1,5,3,6,4]--ouput
//brute force approach
function maxProfit(prices){
	let globalProfit=0

	for(let i=0;i<prices.length-1;i++){
		for(let j=i+1;j<prices.length;j++){
			const currentProfit = prices[j]-prices[i]
			if(currentProfit > globalProfit) globalProfit=currentProfit
		}
	}
	return globalProfit
}

console.log(maxProfit([7,6,4,3,1]))

//efficient solution
const maxProfit1=function(pricess){
	let minstockPurchasePrice=pricess[0]
	let profit = 0
	for(let i=0;i<pricess.length;i++){
		if(pricess[i< minstockPurchasePrice]){
			minstockPurchasePrice=pricess[i]
		}
		let currentProfit = pricess[i]-minstockPurchasePrice
		profit =Math.max(profit,pricess[i]-minstockPurchasePrice)

	}
	return profit
}
	
console.log(maxProfit1[7,6,4,3,1])