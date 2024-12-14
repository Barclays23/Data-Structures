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
                return root.value;
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


    sumOfLeftLeaves(root, sum = 0){
        if (!root){
            return 0;
        } else {
            if (root.left){
                if (root.left.left == null && root.left.right == null){
                    sum += root.left.value;
                }
            }
            sum += this.sumOfLeftLeaves(root.left)
            sum += this.sumOfLeftLeaves(root.right)
        }
        return sum
    }

}


const bst = new BinarySearchTree();

console.log('is bst empty ? : ', bst.isEmpty());

bst.insert(10)
bst.insert(13)
bst.insert(18)
bst.insert(1)
bst.insert(5)
bst.insert(20)
bst.insert(15)
bst.insert(4)
bst.insert(6)
bst.insert(0)
bst.insert(12)

bst.search(bst.root, 13)
bst.search(bst.root, 10)
bst.search(bst.root, 20)
console.log('pre-order results :', bst.preOrder(bst.root))
console.log('in-order results :', bst.inOrder(bst.root))
console.log('post-order results :', bst.postOrder(bst.root))
console.log('level-order results :', bst.levelOrder(bst.root))
console.log('minimum value :', bst.minimumValue(bst.root))
console.log('maximum value :', bst.maximumValue(bst.root))
console.log('delete node :', bst.delete(bst.root, 15))
console.log('in-order results :', bst.inOrder(bst.root))

bst.search(bst.root, 15)

console.log('sum of left leaves :', bst.sumOfLeftLeaves(bst.root));







// ------------------------------------------ LEET CODE 938 - RANGE SUM OF BST;
console.log(`
------------------------------------------ LEET CODE 938 - RANGE SUM OF BST)`);






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


