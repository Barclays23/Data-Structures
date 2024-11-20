class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (!this.items.length === 0){
            console.log('stack empty');
            
        } else {
            this.items.pop();
        }
    }

    peek(){
        if (!this.items.length === 0){
            console.log('stack empty');
        } else {
            let peekElement = this.items[this.items.length-1];
            return peekElement;
        }
    }

    removeMiddle(){
        if (!this.items.length === 0){
            console.log('stack empty');
        } else {
            let middle = Math.floor(this.items.length/2);
            
            for (let i=0; i<middle; i++){
                stack.pop();
            }
        }
    }

    print(){
        if (!this.items.length){
            console.log('stack empty to print');
        } else {
            console.log('stack values :', this.items);
        }
    }

    reverse(){
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

const stack = new Stack();

stack.push(11)
stack.push(22)
stack.push(33)
stack.push(44)
stack.push(55)
stack.push(66)

// console.log('middle element :' + stack.removeMiddle());
stack.print();
stack.reverse();