class Node {
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor(){
        this.root = new Node ()
    }

    insert(word){
        let curr = this.root

        for (let char of word){
            if (!curr.children[char]){
                curr.children[char] = new Node()
            }

            curr = curr.children[char]
        }
        curr.isEnd = true;
        console.log('inserted:', word);
        
    }



    search(word){
        let curr = this.root;

        for (let char of word){
            if (!curr.children[char]){
                return false;
            }
            curr = curr.children[char]
        }
        return curr.isEnd
    }


    startsWith(prefix){
        let curr = this.root;

        for (let char of prefix){
            if (!curr.children[char]){
                return false;
            }
            curr = curr.children[char]
        }
        return true;
    }


}

const trie = new Trie()



const word1 = 'welcome';
const word2 = 'wel';
const word3 = 'sajeer';

trie.insert(word1)


console.log('search for welcome : ', trie.search('welcome'));
console.log('search for wel : ', trie.search('wel'));

console.log('starts with wel :', trie.startsWith('wel'))
console.log('starts with well :', trie.startsWith('well'))

