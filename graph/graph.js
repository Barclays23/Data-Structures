class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex (vertex){
        if (!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge (vertex1, vertex2){
        if (!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)  // undirected graph (so adding edges to both direction)
    }

    print(){
        console.log('graph : ', this.adjacencyList);
    }

    display(){
        if (this.adjacencyList){
            for (let vertex in this.adjacencyList){
                console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
            }
        }
    }

    hasEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1]){
            return this.adjacencyList[vertex1].has(vertex2)
        }
    }

    removeEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1]){
            if (this.adjacencyList[vertex2]){
                this.adjacencyList[vertex1].delete(vertex2)
                this.adjacencyList[vertex2].delete(vertex1) // For undirected or bidirectional graph
                console.log('deleted the connections between ', vertex1, '&', vertex2);
            } else {
                console.log('vertex', vertex2, ' is not available to remove.');
            }
        } else {
            console.log('vertex', vertex1, ' is not available to remove.');
        }
    }

    removeVertex(vertex){
        if (!this.adjacencyList[vertex]){
            console.log('vertex', vertex, 'not available to delete');
            return
        } else {
            for (let vertices of this.adjacencyList[vertex]){
                this.removeEdge(vertex, vertices)
            }

            delete this.adjacencyList[vertex]; // Remove the vertex from the adjacency list
            console.log('vertex', vertex, 'and its adjacent edges are removed');
        }
    }


    dfs(start){
        if (!this.adjacencyList[start]) {
            console.log("Start vertex " + start + " does not exist.");
            return [];
        }
        
        let stack = []
        let visited  = {}
        let result = []; // To store the traversal order

        stack.push(start)

        while (stack.length){
            let vertex = stack.pop()
            
            if (!visited[vertex]){
                visited[vertex] = true
                result.push(vertex); // Store in the result array

                let neighbours = this.adjacencyList[vertex]

                for (let edge of neighbours){
                    if (!visited[edge]){
                        stack.push(edge)
                    }
                }
            }
        }

        return result;
    }


    bfs(start){
        if (!this.adjacencyList[start]) {
            console.log("Start vertex " + start + " does not exist.");
            return [];
        }

        let queue = []
        let visited = {}
        let result = []

        queue.push(start)

        while (queue.length){
            let vertex = queue.shift()

            if (!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex)

                let neighbours = this.adjacencyList[vertex]

                for (let edge of neighbours){
                    if (!visited[edge]){
                        queue.push(edge)
                    }
                }
            }
        }

        return result;
    }

}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.print()

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('E', 'F')
graph.addEdge('D', 'B')
graph.addEdge('E', 'C')



graph.print()
graph.display()

console.log('has edge "B" exist in "A" :', graph.hasEdge('A', 'B'))
console.log('has edge "C" exist in "A" :', graph.hasEdge('A', 'C'))


// graph.removeEdge('A', 'C')

graph.removeVertex('A')
graph.display()


console.log('DFS : ', graph.dfs('C'))
console.log('DFS : ', graph.dfs('B'))
console.log('BFS : ', graph.bfs('A'))

