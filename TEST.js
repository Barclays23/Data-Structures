class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        const node = new Node(value);

        if (!this.top){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        console.log('pushed ', this.top.value);        
    }

    pop(){
        if (!this.top){
            console.log('stack is empty to pop');
        } else {
            console.log('removed '+ this.top.value + ' from stack');
            this.top = this.top.next;
        }
    }

    peek(){
        if (!this.top){
            console.log('no peek available');
        } else {
            console.log('peek item :', this.top.value);
        }
    }

    print(){
        if (!this.top){
            console.log('stack is empty to show');
        } else {
            let values = ' ';
            let temp = this.top;

            while (temp){
                values += temp.value + ' ';
                temp = temp.next;
            }
            console.log('stack values :', values);   
        }
    }

    reverse(){
        if (!this.top){
            console.log('empty to reverse');
        } else {
            let current = this.top; 
            let prev = null;
            let next = null;
            
            while (current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.top = prev;
            console.log('stack reversed. (Peek value after reverse : ', this.top.value,')');
        }
    }
}



const stack = new Stack();
stack.peek();
// stack.pop();
stack.push(11)
stack.push(14)
stack.push(17)
// stack.pop();

stack.print();
stack.peek();
stack.reverse();
stack.print();