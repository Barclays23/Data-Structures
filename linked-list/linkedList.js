
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
    
    prepend(val){
        const newNode = new Node(val);
        
        if (!this.head) this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    
    append(val){
        const newNode = new Node(val);
        
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    print(){
        if (!this.head) console.log('list is empty')
        else {
            let temp = this.head;
            let listItems = ''
            
            while (temp){
                listItems += temp.val + '  '
                temp = temp.next;
            }
            return listItems;
        }
    }
    
    reverse(){
        if (!this.head) console.log('list is empty to reverse');
        else {
            let current = this.head;
            let next = null;
            let prev = null;
            
            while (current){
                next = current.next;
                current.next = prev;
                
                prev = current;
                current = next
            }
            this.head = prev;
        }
    }
    
    length(){
        if (!this.head) return 0
        
        let current = this.head;
        let size = 0
        
        while (current){
            size ++
            current = current.next
        }
        return size;
    }
    
    middle(){
        if (!this.head) console.log('list is empty');
        else {
            let current = this.head;
            let one = current;
            let two = current;
            
            while (two && two.next){
                one = one.next;
                two = two.next.next;
            }
            return one.val;
        }
    }
    
    search(val){
        let current = this.head;
        
        while (current){
            if (current.val === val) return true;
            current = current.next;
        }
        return false;
    }
    
    findIndex(val){
        if (!this.head) return -1;
        
        let current = this.head;
        let i = 0;
        
        while (current){
            if (current.val === val) return i;
            
            current = current.next;
            i++
        }
        
        return -1;
    }
    
    insertAt(val, index){
        const newNode = new Node(val);
        
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            
            for (let i=0; i< index-1; i++){
                if (!current){
                    console.log('index is out of list size')
                    return;
                }
                current = current.next
            }
            
            let next = current.next;
            current.next = newNode;
            newNode.next = next;
        }
    }
    
    removeLast(){
        if (!this.head){
            console.log('list is empty to remove')
            return;
        }
        
        if (!this.head.next){
            this.head = null;
            return;
        }
        
        let current = this.head;
        
        while (current.next.next){
            current = current.next;
        }
        
        current.next = null
        console.log('last node removed from list')
    }
    
    removeFirst(){
        if (!this.head){
            console.log('list is empty to remove')
            return;
        }
        
        this.head = this.head.next;
    }
    
    removeFromIndex(index){
        if (!this.head){
            console.log('list is empty to remove')
            return;
        }
        
        if (index < 0){
            console.log('invalid index provided')
            return;
        }
        
        if (index === 0){
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        for (let i=0; i<index-1; i++){
            if (!current.next){
                console.log('index out of bound');
                return;
            }
            current = current.next;
        }
        
        if (!current.next){
            console.log('index out of bound');
            return;
        }
        
        current.next = current?.next?.next || null;
    }
    
    deleteValue(val){
        if (this.head.val === val){
            this.head = this.head.next
            return;
        }
        
        let current = this.head;
        
        while (current && current.next){
            if (current.next.val === val){
                current.next = current.next.next;
            }
            current = current.next;
        }
    }
    
    deleteAllEvens(){
        while (this.head && this.head.val % 2 === 0){
            this.head = this.head.next;
        }
        
        if (!this.head){
            console.log('list empty')
            return;
        }
        
        let current = this.head;
        
        while (current && current.next){
            if (current.next.val % 2 === 0){
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    
    deleteFirstOdd(){
        if (this.head && this.head.val % 2 === 1){
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        
        while (current && current.next){
            if (current.next.val % 2 === 1){
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
    }
    
    removeDuplicates(){
        if (!this.head){
            console.log('list is empty')
            return;
        }
        
        let current = this.head;
        const map = {}
        
        while (current && current.next){
            map[current.val] = true;
            
            if (map[current.next.val]){
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    
    findSmallest(){
        if (!this.head){
            console.log('no elements in LL')
            return;
        }
        
        let current = this.head;
        let smallest = current.val;
        
        while (current){
            smallest = Math.min(current.val, smallest)
            current = current.next;
        }
        
        return smallest;
    }
    
    isPallindrome(){
        if (!this.head){
            console.log('list is empty')
            return;
        }
        
        let current = this.head;
        const arr = []
        while (current && current.val){
            arr.push(current.val)
            current = current.next;
        }
        
        let left = 0
        let right = arr.length-1
        
        while (left < right){
            if (arr[left] != arr[right]) return false;
            left ++
            right --
        }
        return true;
    }
    
}

const LL = new LinkedList()

const arr = [5, 7, 2, 78, 12, 43, 12, 2, 65, 7, 90, 12]

console.log('---------------- APPEND LIST');
arr.forEach((item)=> LL.append(item))

// console.log(JSON.stringify(LL, null, 2))

console.log(LL.print())

console.log('---------------- REVERSE LIST');
LL.reverse()
console.log(LL.print())

console.log('---------------- SIZE OF LIST');
console.log(LL.length())

console.log('---------------- FIND MIDDLE OF LIST')
console.log(LL.middle())

console.log('---------------- SEARCH FROM LIST');
console.log('Find  43:', LL.search(43))
console.log('Find  34:', LL.search(34))

console.log('---------------- PREPEND LIST');
LL.prepend(10)
console.log(LL.print())

console.log('---------------- INSERT AT A POSITION OR INDEX');
LL.insertAt(0, 2)
console.log(LL.print())

console.log('---------------- REMOVE LAST');
LL.removeLast()
console.log(LL.print())

console.log('---------------- REMOVE FIRST');
LL.removeFirst()
console.log(LL.print())

console.log('---------------- REMOVE 12 FROM LIST');
LL.deleteValue(12)

console.log('---------------- REMOVE 200 FROM LIST');
LL.deleteValue(200)

console.log('---------------- REMOVE FROM INDEX');
LL.removeFromIndex(6)
console.log(LL.print())

console.log('---------------- REMOVE ALL EVENS');
LL.deleteAllEvens()

console.log('---------------- FIND SMALLEST');
console.log('smallest:', LL.findSmallest())

console.log('---------------- REMOVE DUPLICATES');
LL.removeDuplicates()
console.log(LL.print())

console.log('---------------- IS PALLINDROME');
console.log('isPallindrome :', LL.isPallindrome())

