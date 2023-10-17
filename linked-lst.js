class Node{
	constructor(data){
		this.data=data
		this.next=null
	}
}
class LinkedList{
	constructor(){
		this.head=null;
	}

	addFirst(data){
		const newNode=new Node(data)
		newNode.next = this.head
		this.head= newNode

	}
	addLast(data){
		const newNode = new Node(data)
		if(!this.head){
			this.head=newNode
			return
		}
		let current=this.head
		while(current.next){
			current=current.next

		}
		current.next=newNode
	}
	size(){
		let current=this.head
		let count=0
		while(current.next){
			count++
			current=current.next

		}
		return count
		

	}
	addAt(index,data){
		if(index<0 || index > this.size()){
			console.error("invalid index")
		}
		const newNode=new Node(data)
		if(index == 0){
			newNode.next=this.head
			this.head=newNode
		}
		let current=this.head
		for(let i=0;i<index-1;i++){
			current=current.next
		}
		newNode.next=current.next
	}
	removeTop(){
		if(!this.head){
			return
		}
		this.head=this.head.next
	}
	removeLast(){
		let current=this.head
		while(current.next.next){
			current=current.next
		}
		current.next=newNode
	}
	removeAt(index){
		if(index<0 || index > this.size()){
			console.error("invalid index")
		}
		const newNode=new Node(data)
		if(index == 0){
			this.head=this.head.next
		}
		let current=this.head
		for(let i=0;i<index-1;i++){
			current=current.next
		}
		if(current.next){
			current.next=current.next.next
		}
		
	}
	print(){
		let current=this.head
		while(current){
			console.log(current.data)
			current=current.next
		}
	}
}

const linkedlist=new LinkedList()
linkedlist.addFirst(5)
linkedlist.addFirst(3)
linkedlist.addFirst(8)
linkedlist.print()
console.log(linkedlist.size())
linkedlist.removeTop()


//Palindrome  Linkedlist

var isPalindrome=function(head){
	let string1=string2=""
	let node=head
	while(node!=null){
		string1=`${string1}${node.val}`
		string2=`${node.val}${string2}`
		node=node.next
	}
	return string1==string2
}


//REmove nth node of linkedlist

var removeNthFromEnd=function(head,n){
	let slow=head
	let fast=head
	for(let i=0;i<n;i++){
		fast=fast.next
	}
	if(!fast){
		return head.next
	}
	while(fast.next){
		fast=fast.next
		slow=slow.next
	}
	slow.next=slow.next.next

	return head
}

//add two numbers
var addTwoNumbers=function(l1,l2) {
	var dummy=new ListNode(0)
	var current=dummy
	var carry=0

	while(l1!=null || l2!=null || carry >0){
		var val1=l1?l1.val:0;
		var val2=l2?l2.val:0

		var sum=val1+val2
		carry=Math.floor(sum/10)
		sum%=10

		current.next=new ListNode(sum)
		current=current.next

		if(l1) l1=l1.next
		if(l2) l2=l2.next
	}
return dummy.next
}