class Nodes{
	constructor(data){
		this.data=data
		this.next=null
	}
}

class LinkedList{

	constructor(){
		this.head=null
		this.size=0
	}
	//insert at head
	insertAtHead(data){
		const newNode=new Nodes(data)
		newNode.next=this.head
		this.head=newNode
		this.size++
	}
	
	//insert at index
	insertAt(index,data){
		if(index<0 || index >this.size){
			return "Invalid index"
		}
		if(index==0){
			this.insertAtHead(data)
			return
		}
		let newNode=new Nodes(data)
		let temp=this.head
		for(let i=0;i<index-1;i++){
			temp=temp.next
		}
		newNode.next=temp.next
		temp.next=newNode

		this.size++

	}
	//Print

	print(){
		let temp=this.head
		let res=""
		while(temp){
			res+=`${temp.data}->`
			temp=temp.next
		}
		return res
	}
	//remove at head

	removeAtHead(){
		if(this.isEmpty()){
			return "List is already empty"
		}
		this.head=this.head=next
	}
	//remove at any index
	//search  item

	searchElement(data){
		let current=this.head
		let index = 0

		while(current){
			if(current.data==data){
				return index
			}
			index++
			current=current.next
		}
		return -1
	}
	//remove element

	removeElement(data){
		if(this.isEmpty()){
			return "List is already isEmpty"
		}
		let current = this.head
		previous=null

		while(current){
			if(current.data==data){
				if(prev==null){
					this.head = current.next
				}else{
					prev.next = current.next
				}
				return current.data
			}
			prev=current
			current=prev.next
		}
		return -1
	}
	//middle fo LinkedList
	middleLinkedList(data){
		slow=this.head
		fast=this.head
		while(fast && fast.next){
			fast=fast.next.next
			slow=slow.next

		}
		return slow
	}
	//detectcycle
	detectCycle(data){
		slow=this.head
		fast=this.head
		while(fast && fast.next){
			fast=fast.next.next
			slow=slow.next
		}
		if(slow==fast){
			return true
		}
		else{
			return false
		}
	}

	//reverse
	reverseLinkedList(data){
		prev=null
		cur=this.head
		while(cur){
			newNode=cur.next
			cur.next=prev
			prev=cur
			cur=newNode
		}
		return prev
	}

	isEmpty(){
		return this.size ===0;
	}
}

let list=new LinkedList();
list.insertAtHead(45)
list.insertAtHead(43)
list.insertAtHead(50)
list.insertAt(2,46)
list.insertAt(1,12)
list.removeAtHead()
list.removeElement(46)
list.searchElement(12)
console.log(list)
console.log(list.print())