// -------------------------------------------------------- STACK WITH ARRAY
console.log('---------------------------------------------- STACK WITH ARRAY');

class Stack1 {
    constructor(){
        this.items = [];
    }

    push (element){
        console.log(`pushed ${element} to the stack.`);
        this.items.push(element);
    }

    pop (){
        if (this.items.length === 0){
            console.log('Cannot remove: array stack is empty.');
        } else {
            console.log(`removed ${this.items[this.items.length-1]} from stack.`);
            return this.items.pop();
        }
    }

    peek (){
        if (this.items.length === 0){
            console.log('No Peek : array stack empty.');
        } else {
            console.log('peek element is :', this.items[this.items.length-1]);
            return this.items[this.items.length-1];
        }
    }

    size (){
        console.log('array stack size :', this.items.length);
        return this.items.length;
    }

    print (){
        if (!this.items.length){
            console.log('stack is empty to print');
        } else {
            console.log('stack is : ', this.items);
        }
    }

    reverse (){
        if (!this.items.length){
            console.log('nothing to reverse. stack empty');

        } else {
            let reversedStack = [];
            let size = this.items.length;

            for (let i=0; i< size; i++){
                reversedStack.push(this.items.pop());
            }
            console.log('reversedStack : ', reversedStack);
            
            return reversedStack;
        }
    }
}

const arrayStack = new Stack1();

arrayStack.push(12);
arrayStack.push(22);
arrayStack.push(33);
arrayStack.peek();
arrayStack.push(90);
arrayStack.peek();
arrayStack.pop();
arrayStack.peek();
arrayStack.push(100);
arrayStack.peek();

arrayStack.print();
arrayStack.reverse();



// -------------------------------------------------------- STACK WITH LINKED LIST
console.log('---------------------------------------------- STACK WITH LINKED LIST');


class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack2 {
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push (value){
        const node = new Node(value);

        if (!this.top){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        console.log(this.top.value + ' is added to the list stack.');
        this.size ++;
    }

    pop (){
        if (!this.top){
            console.log('cannot remove from linkedList stack: Stack is empty.');
        } else {
            console.log(this.top.value + ' is removed from the list stack.');
            this.top = this.top.next;
        }
        this.size --;
    }

    peek (){
        if (!this.top){
            console.log('Stack is empty.');
        } else {
            console.log(`peak element of list stack : ${this.top.value}`);
            return this.top.value;
        }
    }

    print (){
        if (!this.top){
            console.log('stack empty to print');
        } else {
            let current = this.top;
            let values = '';

            while (current){
                values += current.value + ' ';
                current = current.next;
            }

            console.log(values);
        }
    }

    reverse (){
        if (!this.top){
            console.log('nothing to reverse. stack list is empty');
        } else {
            let current = this.top;
            let next = null;
            let prev = null;

            while (current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.top = prev;
            console.log('STACK REVERSED.');            
        }
    }
}


const ListStack = new Stack2();

ListStack.peek();
ListStack.push(88);
ListStack.peek;
ListStack.pop();
ListStack.peek();

ListStack.push(77);
ListStack.push(99);
ListStack.peek();

ListStack.push(66);
ListStack.push(55);
ListStack.peek();

ListStack.pop();
ListStack.peek();

ListStack.push(11);
ListStack.peek();
ListStack.pop();
ListStack.print();
ListStack.peek();
ListStack.reverse();
ListStack.print();
ListStack.peek();