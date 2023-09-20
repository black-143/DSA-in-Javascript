class Node{
	constructor(data){
		this.data=data
		this.next=null
	}
}
class QueueLinkedList(){
	constructor(){
		this.tail=null
		this.size=0
		this.head=null
	}
	enqueue(data){
		const newNode=new Node(data)

		if(this.head==null){
			this.head=newNode
			this.tail=newNode
		}else{
			this.tail.next=newNode
			this.tail=newNode
		}
		this.tail=newNode
		this.size++

	}
	dequeue(){
		if(this.isEmpty()){
			return null
		}
		const deletedItem = this.head.data
		this.head=this.head.next
		this.size--
		return deletedItem
	}
	front(){
		return this.isEmpty()?null:this.head.data
	}
	back(){
		return this.isEmpty() ? null:this.tail.data
	}
	isEmpty(){
		return this.size == 0;
	}

}
const queue1=new QueueLinkedList()
queue1.enqueue(5)
console.log(queue1)