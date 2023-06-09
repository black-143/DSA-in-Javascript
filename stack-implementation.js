// DS and ALGO IN JS:
// [2,5,3,1,6,9]

class Stack{
	constructor(){
		this.stack=[]
	}
	push(element){
		this.stack.push(element)
	}
	pop(){
	if(this.stack.isEmpty()){
	return "stack empty"
	}
	else{
	this.stack.pop();
	}
	}
	isEmpty(){
	return this.stack.length == 0
	}
	peek(){
		if(this.isEmpty()){
			return "stack is empty"
		}
		return this.stack[this.stack.length-1]
	}
	size(){
		return this.stack.length
	}
	printStack(){

	}
}

const stack = new Stack();
stack.push(10);
stack.push(20)
stack.push(4)
stack.push(59)

console.log(stack.peek())

console.log(stack.size())

console.log(stack.isEmpty())

//given input string reverse order of words

//input :"the sky is blue" -------- Output :"blue is sky the" 

//the sky is blue =>[the,sky,is,blue]
//[]=>[the,sky,is,blue]=>blue is sky the

const reverseWords = function(s){
	const splits=s.split(" ");
	const stack=[]

	for(let i of splits){
		stack.push(i)
	}
	let finals=""
	while(stack.length){
		const current = stack.pop()

		if(current){
			finals+=" " +current
		}
	}
	return finals.trim();
}

console.log(reverseWords("The sky is blue"))

//2.given string contains character '(',')''
//valid parenthesis ()==true,()[]{} ==true (]==false

const validParenthesis=function(s){
	const stack=[]

	for(let i=0;i<s.length;i++){
		const char =s[i]
		if(char === "(" || char=="{" || char=="["){
			stack.push(char)
		}
		else if(char ==")" || char=="]" || char=="}"){
			if(isEmpty(stack)){
				return false
			}

			const top=stack.pop()
			if((char==")" && top !="(") || (char=="]" && top!="]") || (char=="}" && top!="{")){
				return false
			}
		}
	}
	return isEmpty(stack)
}

function isEmpty(stack){
	return stack.length===0
}

const s="[]()"
console.log(validParenthesis(s))