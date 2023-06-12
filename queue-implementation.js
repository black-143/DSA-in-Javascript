//Queue in JS:

class Queue{
	constructor(){
	this.items=[]

	}
	enqueue(element){
	this.items.push(element)
	}
	dequeue(){
	if(this.isEmpty()){
	return "Underflow"
	}

	return this.items.shift()//Removes first element in array
	}
	isEmpty(){
		return this.items.length  === 0
	}
	front(){
		if(this.isEmpty()){
			return "No elements in the Queue"
		}
		return this.items[0]
	}
	size(){
		return this.items.length
	}
	printQueue(){
		let queueString =""
		for(let i=0;i<this.items.length;i++){
			queueString +=this.queue[i] +" "
		}
		console.log("Queue" +queueString)
	}
}

const myQueue= new Queue()
myQueue.enqueue(5)

myQueue.enqueue(96)

myQueue.enqueue(79)

myQueue.enqueue(899)
myQueue.dequeue()

console.log(myQueue.size())
console.log(myQueue.printQueue())