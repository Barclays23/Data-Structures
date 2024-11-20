let name = 'brototype';

// REVERSE STRING USING LOOP ----------------------------------------------------------
function reverseStr1(str){
    let reversed = '';
    for (let i=str.length-1; i>= 0; i--){
        reversed += str[i];
    }
    console.log('REVERSE STRING USING LOOP :' , reversed);
}
reverseStr1(name);



// REVERSE STRING USING IN-BUILD METHOD------------------------------------------------
function reverseStr2(str){
    let reversed = str.split('').reverse().join('');
    console.log('REVERSE STRING USING IN BUILD METHOD :', reversed);
}
reverseStr2(name);



// REVERSE STRING USING LINKED LIST----------------------------------------------------
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    reverse(){
        if (!this.head){
            console.log('list is empty to reverse');
            return;

        } else {
            let curr = this.head;
            let prev = null;
            let next = null;

            while (curr){
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
    }

    print(){
        let reversed = '';

        if (!this.head){
            console.log('list is empty to print');
        } else {
            let temp = this.head;

            while (temp){
                reversed += temp.value;
                temp = temp.next;
            }
            console.log('REVERSE STRING USING LINKED LIST :', reversed);
            return reversed;
        }
    }
}

const list = new LinkedList();
for (let letter of name){
    list.add(letter);
}

list.reverse();
list.print();



// REVERSE STRING USING RECURSION------------------------------------------------------
function reverseRecursion(str){
    if (str.length <= 1){
        return str;
    }

    return reverseRecursion(str.slice(1)) + str[0];
}

let reversedRecursion = reverseRecursion(name);
console.log('REVERSE STRING USING RECURSION :', reversedRecursion);


