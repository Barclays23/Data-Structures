class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return !this.root;
    }

    insert(value){
        const newNode = new Node(value);

        if (!this.root){
            this.root = newNode;
        } else {
            this.insertChild(this.root, newNode)
        }
    }

    insertChild(root, newNode){
        if (newNode.value < root.value){
            if (!root.left){
                root.left = newNode;
            } else {
                this.insertChild(root.left, newNode)
            }
        } else {
            if (!root.right){
                root.right = newNode;
            } else {
                this.insertChild(root.right, newNode)
            }
        }
    }

    search(root, value){
        if (!root){
            console.log(value, ' not found');
            return false;
        } else {
            if (value === root.value){
                console.log(value, ' is found');
                return true
            } else if (value < root.value){
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root, elements = []){
        if (root){
            elements.push(root.value)
            this.preOrder(root.left, elements)
            this.preOrder(root.right, elements)
        }
        
        return elements;
    }

    inOrder(root, elements = []){
        if (root){
            this.inOrder(root.left, elements)
            elements.push(root.value)
            this.inOrder(root.right, elements)
        }
        return elements;
    }

    postOrder(root, elements = []){
        if (root){
            this.postOrder(root.left, elements)
            this.postOrder(root.right, elements)
            elements.push(root.value)
        }
        return elements
    }

    levelOrder(root, queue = [], elements = []){
        if (root){
            queue.push(root)

            while (queue.length){
                let removed = queue.shift()
                elements.push(removed.value)

                if (removed.left) queue.push(removed.left)
                if (removed.right) queue.push(removed.right)
            }
        }
        return elements;
    }

    minimumValue(root){ 
        if (root){
            if (!root.left){
                return root.value;
            } else {
                return this.minimumValue(root.left)
            }
        }
    }

    maximumValue(root){
        if (root){
            if (!root.right){
                return root.value
            } else {
                return this.maximumValue(root.right)
            }
        }
    }

    delete(root, value){
        if (!root) return root;
        else if (value < root.value) root.left = this.delete(root.left, value) // Go left
        else if (value > root.value) root.right = this.delete(root.right, value) // Go right
        else {// delete node is found
            
            // case 1: no child
            if (!root.left && !root.right){
                return null; // replace with null;

            // case 2: one child node
            } else if (!root.left){
                return root.right; // Replace with right child

            } else if (!root.right){
                return root.left; // Replace with left child

            // case 3: two child nodes
            } else {
                let max = this.maximumValue(root.left); // Find maximum value in the left subtree
                console.log('max :', max);
                
                root.value = max; // Replace the current node's value with the maximum value from the left subtree
                root.left = this.delete(root.left, max); // recursively delete the maximum node from the left subtree
            }
            
        }
        return root;
    }

    isBalanced(root){
        const result = this.checkHeight(root)
        console.log('result :', result)
        console.log('isBalanced :', result !== -1 ? 'balanced' : 'not balanced')
        
        return result !== -1
    }

    checkHeight(node) {
        if (node === null) return 0; // Base case: empty subtree has height 0

        const leftHeight = this.checkHeight(node.left); // Get left subtree height
        if (leftHeight === -1) return -1; // If left subtree is unbalanced, return -1

        const rightHeight = this.checkHeight(node.right); // Get right subtree height
        if (rightHeight === -1) return -1; // If right subtree is unbalanced, return -1

        // If the difference between left and right heights is greater than 1, return -1 (unbalanced)
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    sumOfLeftLeaves(root){
        let sum = 0

        if (!root){
            return 0;
        } else {
            if (root.left){
                if (!root.left.left && !root.left.right){
                    sum += root.left.value
                }
            }
            sum += this.sumOfLeftLeaves(root.left)
            sum += this.sumOfLeftLeaves(root.right)
    
            return sum
        }
    }

    sumOfRightLeaves(root){
        let sum = 0

        if (!root){
            return 0;
        } else {
            if (root.right){
                if (!root.right.left && !root.right.right){
                    sum += root.right.value
                }
            }
            sum += this.sumOfRightLeaves(root.left)
            sum += this.sumOfRightLeaves(root.right)
    
            return sum
        }
    }

    sumOfAllLeaves(root){
        let sum = 0

        if (!root){
            return 0;
        } else {
            if (root.left){
                if (!root.left.left && !root.left.right) sum += root.left.value
            }
            if (root.right){
                if (!root.right.left && !root.right.right) sum += root.right.value
            }

            sum += this.sumOfAllLeaves(root.left)
            sum += this.sumOfAllLeaves(root.right)
    
            return sum
        }
    }

}


const bst = new BinarySearchTree();

console.log('is bst empty ? : ', bst.isEmpty());

const numbers = [10, 13, 18, 1, 5, 20, 15, 4, 6, 0, 12];

for (let i=0; i<numbers.length; i++){
    bst.insert(numbers[i])
}

bst.search(bst.root, 13)
bst.search(bst.root, 10)
bst.search(bst.root, 20)

console.log('pre-order results :', bst.preOrder(bst.root))
console.log('in-order results :', bst.inOrder(bst.root))
console.log('post-order results :', bst.postOrder(bst.root))
console.log('level-order results :', bst.levelOrder(bst.root))

console.log('minimum value :', bst.minimumValue(bst.root))
console.log('maximum value :', bst.maximumValue(bst.root))


console.log('sum of left leaves :', bst.sumOfLeftLeaves(bst.root));
console.log('sum of right leaves :', bst.sumOfRightLeaves(bst.root));
console.log('sum of all leaves :', bst.sumOfAllLeaves(bst.root));

bst.isBalanced(bst.root)

// console.log('delete node :', bst.delete(bst.root, 15))
bst.delete(bst.root, 18)

bst.search(bst.root, 18)





// ------------------------------------------ LEET CODE 938 - RANGE SUM OF BST;
console.log(`
------------------------------------------ LEET CODE 938 - RANGE SUM OF BST)`);
var rangeSumBST = function(root, low, high) {
    let sum = 0

    if (!root){
        return 0;

    } else {
        if (root.value >= low && root.value <= high){  // .val instead of .value in leetcode
            sum += root.value;  // .val instead of .value in leetcode
        }

        sum += rangeSumBST(root.left, low, high)
        sum += rangeSumBST(root.right, low, high)
    }

    return sum;
};

console.log('rangeSumBST : ', rangeSumBST(bst.root, 7, 15));




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
                sum += root.left.value // .val instead of .value in leet code
            }
        }
    }

    sum += sumOfLeftLeaves(root.left)
    sum += sumOfLeftLeaves(root.right)
    
    return sum;
};

console.log('sumOfLeftLeaves : ', sumOfLeftLeaves(bst.root));




// ------------------------------------------ LEET CODE 230 - K TH SMALLEST ELEMENT IN A BST;
console.log(`
------------------------------------------ LEET CODE 230 - K TH SMALLEST ELEMENT IN A BST)`);
var kthSmallest = function(root, k) {
    const result = []

    let inOrder = function (root){
        if (root){
            inOrder(root.left)
            result.push(root.value)  // val instead of value in leet code
            inOrder(root.right)
        }
    }

    inOrder(root)

    // console.log(result)
    return result[k-1]
};


console.log('kthSmallest : ', kthSmallest(bst.root, 3));