
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(val){
        const newNode = new Node(val);
        
        if (!this.root){
            this.root = newNode;
        } else {
            this.insertChild(this.root, newNode)
        }
        // console.log('inserted', val)
    }
    
    insertChild(root, newNode){
        if (newNode.val < root.val){
            if (!root.left) root.left = newNode;
            else this.insertChild(root.left, newNode)
        } else {
            if (!root.right) root.right = newNode;
            else this.insertChild(root.right, newNode)
        }
    }
    
    inOrder(root, result = []){
        if (root){
            this.inOrder(root.left, result)
            result.push(root.val)
            // console.log(root.val, 'is pushed to result')
            this.inOrder(root.right, result)
        }
        
        return result
    }
    
    preOrder(root, result = []){
        if (root){
            result.push(root.val)
            this.preOrder(root.left, result)
            this.preOrder(root.right, result)
        }
        
        return result;
    }
    
    postOrder(root, result = []){
        if (root){
            this.postOrder(root.left, result)
            this.postOrder(root.right, result)
            result.push(root.val)
        }
        return result;
    }
    
    levelOrder(root, result = []){
        if (root){
            const queue = []
            queue.push(root);
            
            while (queue.length){
                const node = queue.shift();   // take out from front
                result.push(node.val);
                
                if (node.left) queue.push(node.left)   // enqueue left
                if (node.right) queue.push(node.right) // enqueue right
            }
        }
        
        return result;
    }
    
    kthLargest(k){
        const arr = this.inOrder(this.root)
        return arr[arr.length-k]
    }
    
    findMinimumValue(root) {
        if (!root) return null;
        while (root.left) root = root.left;
        return root.val;
    }
    
    findMaximumValue(root) {
        if (!root) return null;
        while (root.right) root = root.right;
        return root.val;
    }
    
    countAllNodes(root) {
        if (!root) return 0;
        
        // adding 1 for every roots (every nodes)
        return 1 + this.countAllNodes(root.left) + this.countAllNodes(root.right);
    }
    
    countLeftNodes(root){
        if (!root) return 0
        
        let count = 0
        
        if (root.left) count += 1
        
        count += this.countLeftNodes(root.left);
        count += this.countLeftNodes(root.right);
        
        return count;
    }
    
    sumOfAllNodes(root){
        if (!root) return 0;
        
        return root.val + this.sumOfAllNodes(root.left) + this.sumOfAllNodes(root.right)
    }
    
    sumOfLeftNodes(root){
        if (!root) return 0;
        
        let sum = 0
        
        if (root.left) sum += root.left.val
        
        sum += this.sumOfLeftNodes(root.left)
        sum += this.sumOfLeftNodes(root.right)
        
        return sum;
    }
    
    sumOfRightNodes(root){
        if (!root) return 0;
        
        let sum = 0
        
        if (root.right) sum += root.right.val;
        
        sum += this.sumOfRightNodes(root.left)
        sum += this.sumOfRightNodes(root.right)
        
        return sum;
    }
    
    sumOfAllLeafNodes(root){
        if (!root) return 0;
        
        let sum = 0
        
        if (!root.left && !root.right) sum += root.val;
        
        sum += this.sumOfAllLeafNodes(root.left)
        sum += this.sumOfAllLeafNodes(root.right)
        
        return sum;
    }
    
    sumOfLeftLeaves(root){
        if (!root) return 0;
        
        let sum = 0
        
        if (root.left && !root.left.left && !root.left.right){
            sum += root.left.val;
        }
        
        sum += this.sumOfLeftLeaves(root.left)
        sum += this.sumOfLeftLeaves(root.right)
        
        return sum;
    }
    
    sumOfRightLeaves(root){
        if (!root) return 0;
        
        let sum = 0
        
        if (root.right && !root.right.left && !root.right.right){
            sum += root.right.val;
        }
        
        sum += this.sumOfRightLeaves(root.left)
        sum += this.sumOfRightLeaves(root.right)
        
        return sum;
    }
    
    areSameTree(root1, root2){
        if (!root1 && !root2) return true;     // both null → same
        
        if (!root1 || !root2) return false;    // one null → different
        
        if (root1.val !== root2.val) return false; // values differ
        
        return (
            this.areSameTree(root1.left, root2.left) &&
            this.areSameTree(root1.right, root2.right)
        )
    }
    
    isBalanced(root){
        return this.checkHeight(root) != -1
    }
    
    checkHeight(node){
        if (!node) return 0
        
        const leftHeight = this.checkHeight(node.left)
        if (leftHeight === -1) return -1
        
        const rightHeight = this.checkHeight(node.right)
        if (rightHeight === -1) return -1
        
        if (Math.abs(leftHeight - rightHeight) > 1) return -1
        
        return Math.max(leftHeight, rightHeight) +1;
    }
    
    search(root, val){
        if (!root) {
            return false;
        }
        
        if (val < root.val){
            return this.search(root.left, val)
        } else if (val > root.val){
            return this.search(root.right, val)
        } else {
            return true;
        }
    }
    
    removeNode(root, val){
        if (!root){
            console.log('tree is empty')
            return;
        }
        
        if (val < root.val){
            root.left = this.removeNode(root.left, val)
        }
        else if (val > root.val){
            root.right = this.removeNode(root.right, val)
        } 
        else {
            // case 1: no child
            if (!root.left && !root.right) return null;
            
            // case 1: one child
            if (!root.left) return root.right
            if (!root.right) return root.left
            
            // case 1: two children
            let minValue = this.findMinimumValue(root.right);
            root.val = minValue;
            root.right = this.removeNode(root.right, minValue)
        }
        
        return root;
    }
    
}


const BST = new BinarySearchTree();

const arr = [5, 7, 2, 2, 78, 12, 43, 23, 8, 65, 7, 90, 12]
arr.forEach((item)=> BST.insert(item))

console.log('---------------- In Order :')
console.log(BST.inOrder(BST.root))

console.log('---------------- Pre Order :')
console.log(BST.preOrder(BST.root))

console.log('---------------- Post Order :')
console.log(BST.postOrder(BST.root))


console.log('---------------- Level Order :')
console.log(BST.levelOrder(BST.root))

console.log('---------------- k-th largest value :')
console.log(BST.kthLargest(3))

console.log('---------------- Count All Nodes :')
console.log(BST.countAllNodes(BST.root))

console.log('---------------- Count Left Nodes :')
console.log(BST.countLeftNodes(BST.root))

console.log('---------------- Sum of All Nodes :')
console.log(BST.sumOfAllNodes(BST.root))

console.log('---------------- Sum of Left Nodes :')
console.log(BST.sumOfLeftNodes(BST.root))

console.log('---------------- Sum of Right Nodes :')
console.log(BST.sumOfRightNodes(BST.root))

console.log('---------------- Sum of All Leaf Nodes :')
console.log(BST.sumOfAllLeafNodes(BST.root))

console.log('---------------- Sum of Left Leaf Nodes :')
console.log(BST.sumOfLeftLeaves(BST.root))

console.log('---------------- Sum of Right Leaf Nodes :')
console.log(BST.sumOfRightLeaves(BST.root))

console.log('---------------- Is Balanced Tree :')
console.log(BST.isBalanced(BST.root))

console.log('---------------- Search Value 22 :')
console.log(BST.search(BST.root, 23))




// ------------------------------------------ LEET CODE 938 - RANGE SUM OF BST;
console.log(`
------------------------------------------ LEET CODE 938 - RANGE SUM OF BST)`);
var rangeSumBST = function(root, low, high) {
    let sum = 0

    if (!root){
        return 0;

    } else {
        if (root.val >= low && root.val <= high){  // .val instead of .value in leetcode
            sum += root.val;  // .val instead of .value in leetcode
        }

        sum += rangeSumBST(root.left, low, high)
        sum += rangeSumBST(root.right, low, high)
    }

    return sum;
};

console.log('rangeSumBST : ', rangeSumBST(BST.root, 7, 15));




// ------------------------------------------ LEET CODE 404 - SUM OF LEFT LEAVES;
console.log(`
------------------------------------------ LEET CODE 404 - SUM OF LEFT LEAVES)`);
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    if (!root){
        return 0;
    } else {
        if (root.left){
            if (!root.left.left && !root.left.right){
                sum += root.left.val // .val instead of .value in leet code
            }
        }
    }

    sum += sumOfLeftLeaves(root.left)
    sum += sumOfLeftLeaves(root.right)
    
    return sum;
};

console.log('sumOfLeftLeaves : ', sumOfLeftLeaves(BST.root));




// ------------------------------------------ LEET CODE 230 - K TH SMALLEST ELEMENT IN A BST;
console.log(`
------------------------------------------ LEET CODE 230 - K TH SMALLEST ELEMENT IN A BST)`);
var kthSmallest = function(root, k) {
    const result = []

    let inOrder = function (root){
        if (root){
            inOrder(root.left)
            result.push(root.val)  // val instead of value in leet code
            inOrder(root.right)
        }
    }

    inOrder(root)

    // console.log(result)
    return result[k-1]
};


console.log('kthSmallest : ', kthSmallest(BST.root, 3));