class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash (key){
        let total = 0;
        for (let i=0; i<key.length; i++){
            // console.log('key.charCodeAt(i) : ', key.charCodeAt(i));
            total += key.charCodeAt(i);
        }
        // console.log('total : ', total);

        let hashValue = total % this.size;

        console.log(`hashValue of ${key} : ${hashValue}`);

        return hashValue;
    }

    set (key, value){
        const index = this.hash(key);
        this.table[index] = value;
    }

    get (key){
        const index = this.hash(key);
        console.log(`${key} is : ${this.table[index]}`);
        
        return this.table[index];
    }

    remove (key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    print(){
        for (let i=0; i<this.table.length; i++){
            if (this.table[i]){

                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
}


const table = new HashTable(10);

// table.set('name', 'sajeer');
table.set('age', 23);
// table.set('place', 'thrissur');


table.get('place');
table.get('age');

// table.print();

