class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    print (){
        let listValues = '';
        let curr = this.head;

        if (!curr) {
            console.log('list is empty.');
            return null;
        } else {
            while (curr) {
                // console.log(curr.value);
                listValues += `${curr.value}  `;
                curr = curr.next;
            }
        }
        console.log('list values are :', listValues);
    }

    prepend(value){
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }

    append(value){
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }


    // insert(value){}

    removeFromFront(){
        if (!this.head){
            console.log('no nods available to remove.');
            return null;
        } else {
            let removeNode = this.head;
            this.head = removeNode.next;
            this.size --;
            console.log('removed value from front :', removeNode.value);
            return removeNode.value;
        }
    }

    removeFromEnd(){}

    
}

let list3 = new LinkedList();
list3.print();



list3.prepend(2);
list3.print();
// list3.removeFromFront();