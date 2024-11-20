// -------------------------------------------------------- QUEUE WITH ARRAY
console.log('---------------------------------------------- QUEUE WITH ARRAY');


class Queue1 {
    constructor(){
        this.items = [];
    }

    enqueue(element){;
        this.items.push(element);
        console.log(element + ' is added to the array queue.');
    }

    dequeue(){
        if (!this.items.length === 0){
            console.log('nothing to remove from array queue.');
        } else {
            const removedItem = this.items.shift();
            console.log(removedItem + ' is removed from the array queue.');
        }
    }

    peek(){
        if (this.items.length === 0){
            console.log('array queue is empty.');
        } else {
            console.log('peek item in array queue :', this.items[0]);
            return this.items[0];
        }
    }
}




const arrayQueue = new Queue1;

arrayQueue.peek();
arrayQueue.enqueue(23);
arrayQueue.enqueue(27);
arrayQueue.peek();
arrayQueue.enqueue(3);
arrayQueue.dequeue();
arrayQueue.peek();
arrayQueue.enqueue(88);
arrayQueue.peek();
arrayQueue.dequeue();
arrayQueue.peek();




// -------------------------------------------------------- QUEUE WITH LINKED LIST
console.log('---------------------------------------------- QUEUE WITH LINKED LIST');

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue2{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){
        const node = new Node(value);

        if (!this.front){
            this.front = this.rear = node;

        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size ++;
    }

    dequeue(){
        if (!this.front){
            console.log('nothing to remove from list queue.');
        } else {
            console.log(this.front.value + ' is removed from list queue.');
            this.front = this.front.next;
        }
        this.size --;

        if (this.size === 0){
            this.rear = null;
        }
    }

    peek(){
        if (!this.front){
            console.log('list queue is empty.');
        } else {
            console.log('front element in list queue : ' + this.front.value);
            return this.front.value;
        }
    }
}

const listQueue = new Queue2();

listQueue.peek();
listQueue.enqueue(111);
listQueue.peek();
listQueue.enqueue(222);
listQueue.enqueue(333);
listQueue.peek();
listQueue.dequeue();
listQueue.enqueue(777);
listQueue.enqueue(999);
listQueue.dequeue();
listQueue.peek();
listQueue.enqueue(0);
listQueue.peek();
listQueue.enqueue(444);
listQueue.dequeue();
listQueue.peek();