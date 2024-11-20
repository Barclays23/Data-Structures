class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash (key){
        let total = 0;
        for (let item of key){
            total += key.charCodeAt(item);
        }
        let hashValue = total % this.size;
        return hashValue;
    }

    set(key, value){
        const index = 
    }
}