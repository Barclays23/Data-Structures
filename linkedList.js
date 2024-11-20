class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }



    prepend(value){
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.next = null;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }


    append(value){
        const node = new Node(value);
        if (!this.head){
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null){
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size ++;
    }


    insertAt(value, index){
        const newNode = new Node(value);

        if (index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let curr = this.head;

        for (let i=0; i< index-1; i++){
            if (curr === null){
                console.log('index is larger than the list');
                return;
            }
            curr = curr.next;
        }

        let next = curr.next;
        newNode.next = next;
        curr.next = newNode;
    }


    removeFrom(index){
        if (index < 0 || index > this.size){
            return;
        } else if (index === 0){
            let temp = this.head;
            this.head = temp.next;
        } else {
            let currNode = this.head;
            
            for (let i=0; i< index-1; i++) {
                currNode = currNode.next;
            }
            let removeNode = currNode.next;
            let nextNode = removeNode.next;
            currNode.next = nextNode;
        }
        this.size --;
    }


    removeFirst(){
        if (!this.head){
            console.log('list is empty to remove from first');
        } else {
            let temp = this.head;
            let next = temp.next;
            this.head = next;
            console.log('removed '+ temp.value +' from first');
        }
    }


    removeLast(){
        if (!this.head){
            console.log('list is empty to remove form last');
            return;
        } else {
            let curr = this.head;

            if (!curr.next){
                this.head = null;
                console.log('removed head as it is the last element');
            } else {
                while (curr.next.next){
                    curr = curr.next;
                }
                console.log('removed ' + curr.next.value + 'from last');
                curr.next = null;
            }
        }
    }

    removeValue(value){
        if (!this.head){
            console.log('empty list, no value to remove.');
            return;
        } else if (this.head.value === value) {  // if the value is in the head (in 0 th pos)
            this.head = this.head.next;
            this.size --;
        } else {
            let temp = this.head;
            while (temp.next && temp.next.value != value){
                temp = temp.next;
            } // while loop exit either find the value or find no such value (null)
            if (temp.next != null){
                let removeNode = temp.next;
                temp.next = removeNode.next;
                this.size --;
            } else{
                console.log('no such value found in the list.');
                return null;
            }
        }
    }


    search(value){
        if (!this.head) {
            console.log('empty list. cannot search.');
            return -1;
        }
        let i=0;
        let temp = this.head;
        while (temp != null) {
            if (temp.value === value){
                console.log(i);
                return i;
            }
            temp = temp.next;
            i++;
        }
        console.log('value not found in the list.');
        return -1;  // while the loop ends and no such value found.
    }

    
    reverse(){
        if(!this.head){
            console.log('list empty for reverse.');
        } else {
            let curr = this.head;
            let prev = null;
            let next = null;

            while (curr) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;  // change the head to the prev (to start from prev)
        }
    }


    findMiddle(){
        if (!this.head){
            console.log('list is empty');
            return null;
        } else {
            let one = this.head;
            let two = this.head;

            while (two && two.next){
                one = one.next;
                two = two.next.next;
            }
            console.log('middle is :', one.value);
        }
    }



    print(){
        let temp = this.head;
        let listValues = '';
        
        if (temp == null){
            console.log('list is empty');
            return;
        } else {
            while (temp != null) {
                // console.log(temp.value);
                listValues += `${temp.value}  `;
                temp = temp.next;
            }
        }
        console.log('list values are :', listValues);
    }
    
}


console.log('--------------------------------');
console.log('PREPEND LIST 1');
const list1 = new LinkedList;
list1.prepend(25);
list1.prepend(41);
list1.prepend(98);
list1.prepend(54);
list1.prepend(12);
list1.prepend(90);
list1.print();
console.log('--------------------------------');


console.log('APPEND LIST 2');
const list2 = new LinkedList;
list2.append(11);
list2.append(22);
list2.append(33);
list2.append(44);
list2.append(55);
list2.print();
console.log('--------------------------------');


console.log('INSERT AT A POSITION OR INDEX IN LIST 2');
list2.insertAt(77, 3);
list2.print();
console.log('--------------------------------');



console.log('REMOVE INDEX VALUE FROM LIST 2');
list2.removeFrom(2);
list2.print();
console.log('--------------------------------');


console.log('AGAIN APPEND TO LIST 1');
list1.append(100);
list1.append(200);
list1.append(300);
list1.append(400);
list1.print();
console.log('--------------------------------');



console.log('REMOVE 200 FROM LIST 1');
list1.removeValue(200);
list1.print();
console.log('--------------------------------');



console.log('SEARCH FROM LIST 2');
list1.search(41);
console.log('--------------------------------');





console.log('REVERSE LIST 1');
list1.reverse();
list1.print();
console.log('--------------------------------');





console.log('FIND MIDDLE OF LIST 2')
list1.findMiddle();
list1.print();
console.log('--------------------------------');