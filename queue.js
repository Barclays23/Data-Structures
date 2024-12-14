// -------------------------------------------------------- QUEUE WITH ARRAY
console.log('---------------------------------------------- QUEUE WITH ARRAY');


class Queue1 {
    constructor(){
        this.items = [];
    }

    enqueue(element){;
        this.items.push(element);
        console.log('added ', element);
    }

    dequeue(){
        if (!this.items.length === 0){
            console.log('nothing to remove from array queue.');
        } else {
            const removedItem = this.items.shift();
            console.log('removed ', removedItem);
        }
    }

    peek(){
        if (this.items.length === 0){
            console.log('array queue is empty.');
        } else {
            console.log('peek item :', this.items[0]);
            return this.items[0];
        }
    }

    print(){
        if (!this.items.length){
            console.log('array queue is empty.');
        } else {
            console.log('queque values :', this.items);
            return this.items;
        }
    }

    reverse(){
        if (!this.items.length) {
            console.log('nothing to reverse');
        } else {
            // const reversedQueue = this.items.reverse(); // in-build method
            const reversedQueue = [];

            while(this.items.length){
                reversedQueue.push(this.items.pop());
            }
            console.log('reversedQueue : ', reversedQueue);
            this.items = reversedQueue;
            return this.items;
        }
    }

}



const arrayQueue = new Queue1;

arrayQueue.peek();
arrayQueue.enqueue(100);
arrayQueue.enqueue(200);
arrayQueue.enqueue(300);
arrayQueue.enqueue(600);
arrayQueue.enqueue(500);
arrayQueue.print();
arrayQueue.peek();
arrayQueue.enqueue(700);
arrayQueue.print();
arrayQueue.dequeue();
arrayQueue.print();
arrayQueue.peek();
arrayQueue.reverse();
arrayQueue.print();
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

        console.log('added ', this.rear.value);
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
            console.log('front element : ' + this.front.value);
            return this.front.value;
        }
    }

    print(){
        if (!this.front) {
            console.log('nothing to print in queue');
        } else {
            let values = [];
            let current = this.front;
            while(current){
                values.push(current.value);
                current = current.next;
            }

            console.log('queue values : ', values);
        }
    }

    reverse(){
        if (!this.front) {
            console.log('nothing to reverse');
        } else {
            this.rear = this.front;
            let current = this.front;
            let prev = null;
            let next = null;

            while (current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.front = prev;
            
            console.log('queue reversed');
        }
    }
}

const listQueue = new Queue2();

// listQueue.dequeue();
listQueue.print();
// listQueue.reverse();
listQueue.enqueue(11);
listQueue.enqueue(22);
listQueue.enqueue(33);
listQueue.enqueue(44);
listQueue.enqueue(55);
listQueue.print();

listQueue.peek();
listQueue.reverse();
listQueue.print();
listQueue.peek();