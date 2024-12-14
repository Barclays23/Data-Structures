class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    prepend(data){
        const newNode = new Node(data);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size ++;
    }


    append(data){
        const newNode = new Node(data);

        if (!this.tail){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size ++;
    }


    deleteFirst(){
        if(!this.head){
            console.log('head not found to delete first');
            return;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size --;
    }


    deleteLast(){
        if(!this.tail){
            console.log('tail not found to delete last');
            return;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size --;
    }


    deleteValue(value){
        if (!this.head){
            console.log('list is empty, cannot delete value');
            return;
        }

        let currNode = this.head;

        while (currNode){
            if (currNode.data === value){

                if (currNode === this.head){
                    this.head = currNode.next;
                    if (this.head){ // if any nodes remains after deletion
                        this.head.prev = null;
                    }

                } else if (currNode === this.tail){
                    this.tail = currNode.prev;
                    if (this.tail){
                        this.tail.next = null;
                    }

                } else {
                    if (currNode.prev){
                        currNode.prev.next = currNode.next;
                    }
                    if (currNode.next){
                        currNode.next.prev = currNode.prev;
                    }
                }

                this.size --;
                return;
            }

            currNode = currNode.next;
        }
    }


    print(){
        let values = '';

        if (!this.head){
            console.log('list is empty');
            return;
        } else {
            let temp = this.head;

            while (temp){
                values += `${temp.data} `;
                temp = temp.next;
            }
        }

        console.log('values are :', values);
    }


    printReverse(){
        let values = '';

        if (!this.head){
            console.log('head is not found. cannot print reverse.');
            return;

        } else {
            let temp = this.tail;
            
            while (temp){
                values += `${temp.data} `;
                temp = temp.prev;
            }
        }

        console.log('values are :', values);
    }

}



const list1 = new LinkedList();

list1.append(14);
list1.append(24);
list1.append(34);
list1.append(44);

list1.print();
list1.printReverse();