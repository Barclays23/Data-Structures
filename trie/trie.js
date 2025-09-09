class Node {
    constructor (){
        this.children = {}
        this.isEnd = false;
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }
    
    insert(word){
        let current = this.root;
        
        for (let char of word){
            if (!current.children[char]){
                current.children[char] = new Node()
            }
            current = current.children[char]
        }
        current.isEnd = true;
        console.log('inserted -', word)
    }
    
    search(word){
        let current = this.root;
        
        for (let char of word){
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        
        return current.isEnd;
    }
    
    prefixSearch(prefix){
        let current = this.root;
        
        for (let char of prefix){
            if (!current.children[char]) return false;
            current = current.children[char];
        }
        return true;
    }
    
    getWordsWithPrefix(prefix){
        let curr = this.root;
        
        for (let char of prefix){
            if (!curr.children[char]){
                return []
            }
            curr = curr.children[char];
        }
        
        const result = []
        
        function dfs(node, path){
            console.log('path :', path)
            if (node.isEnd) result.push(path)
            
            for (let char in node.children){
                dfs(node.children[char], path+char)
            }
        }
        
        dfs(curr, prefix);
        return result;
    }
    
    countWordsWithPrefix(prefix){
        let curr = this.root;
        
        for (let char of prefix){
            if (!curr.children[char]){
                return []
            }
            curr = curr.children[char];
        }
        
        let count = 0
        
        function dfs(node){
            if (node.isEnd) count ++;
            
            for (let char in node.children){
                dfs(node.children[char]);
            }
        }
        
        dfs(curr, prefix);
        return count;
    }
    
}


const trie = new Trie();

const words = ['apple', 'application', 'avatar', 
    'battle', 'bat', 'bag', 'bamboo', "car", "cat", 
    "cart", "carbon", "dog", 'carpenter'
]

console.log('-------------------------- Insert Word:')
words.forEach((word)=> trie.insert(word))

console.log('-------------------------- Serch Word:')
console.log('app','-', trie.search('app'))
console.log('apple','-', trie.search('apple'))
console.log('apply','-', trie.search('apply'))
console.log('avatar','-', trie.search('avatar'))
console.log('application','-', trie.search('application'))
console.log('applications','-', trie.search('applications'))

console.log('-------------------------- Serch Prefix:')
console.log('a','-', trie.prefixSearch('a'))
console.log('app','-', trie.prefixSearch('app'))
console.log('apple','-', trie.prefixSearch('apple'))
console.log('applicant','-', trie.prefixSearch('applicant'))
console.log('applications','-', trie.prefixSearch('applications'))
console.log('ba','-', trie.prefixSearch('ba'))
console.log('bamboo','-', trie.prefixSearch('bamboo'))
console.log('bamboos','-', trie.prefixSearch('bamboos'))

console.log('-------------------------- Get All Words starting with Prefix:')

console.log('car','-', trie.getWordsWithPrefix('car'))

console.log('-------------------------- Count Words starting with Prefix:')

console.log('car','-', trie.countWordsWithPrefix('car'))


