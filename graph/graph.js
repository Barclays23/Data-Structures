
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    
    addVertex(vertex){
        if (!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
            console.log('vertex', vertex, 'added')
        }
    }
    
    addEdges(vertex1, vertex2){
        // this.adjacencyList[vertex1]
        // this.adjacencyList[vertex2]
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
        
        console.log('edges ', vertex1, '-', vertex2, 'connected')
    }
    
    printGraph(){
        for (let vertex in this.adjacencyList){
            console.log(vertex, ' --> ', [...this.adjacencyList[vertex]])
        }
    }
    
    removeEdge(vertex1, vertex2){
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            console.log("One or both vertices not found");
            return;
        }
        
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
        
        console.log('connection between', vertex1, '&', vertex2, 'is removed')
    }
    
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]){
            console.log(vertex, 'not in graph')
            return;
        }
        
        const neighbours = [...this.adjacencyList[vertex]];
        
        for (let neighbour of neighbours){
            this.removeEdge(vertex, neighbour)
        }
        
        delete this.adjacencyList[vertex]
        console.log('vertex', vertex, 'is deleted')
    }

    hasEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            console.log('one or both vertex is not in graph');
            return false; // one or both vertices don't exist
        }
        return this.adjacencyList[vertex1].has(vertex2);
    }

    countVertices(){
        const count = Object.keys(this.adjacencyList).length;
        return count;
    }

    countEdges(){
        const vertices = Object.keys(this.adjacencyList)
        console.log('all vertices', vertices);
        let count1 = 0
        vertices.forEach((vertex)=> count1 += this.adjacencyList[vertex].size)
        return count1
        
        // const vertices = Object.values(this.adjacencyList)
        // console.log('all vertices', vertices);
        // const count2 = vertices.reduce((sum, neighbour)=> sum + neighbour.size, 0)
        // return count2;
    }

    degreeOfVertex(vertex){
        if (!this.adjacencyList[vertex]){
            console.log(vertex, 'not in graph');
            return -1
        }

        return this.adjacencyList[vertex].size
    }

    neighboursOfVertex(vertex){
        if (!this.adjacencyList[vertex]){
            console.log(vertex, 'not in graph');
            return []
        }

        return [...this.adjacencyList[vertex]]
    }

    isConnectedGraph(){
        const vertices = Object.keys(this.adjacencyList);

        if (!vertices.length) return true;
        // In most coding interview problems and libraries, an empty graph is treated as connected, unless the problem statement says otherwise.

        const stack = []
        const result = []
        const visited = {}
        stack.push(vertices[0])

        while (stack.length){
            const vertex = stack.pop()

            if (!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex)

                const neighbours = [...this.adjacencyList[vertex]]                

                for (let neighbour of neighbours){
                    if (!visited[neighbour]){
                        stack.push(neighbour)
                    }
                }
            }
        }

        // check visited length and vertices length
        console.log(result.length, vertices.length);
        
        return result.length === vertices.length;
    }

    DFS(start){
        if (!this.adjacencyList[start]){
            console.log(start, 'is not in graph')
            return []
        }
        
        const result = []
        const stack = []
        const visited  = {}
        
        stack.push(start)
        
        while (stack.length){
            const vertex = stack.pop()
            
            if (!visited[vertex]){
                visited[vertex] = true
                result.push(vertex);
                
                const neighbours = [...this.adjacencyList[vertex]]
                
                for (let edge of neighbours){
                    if (!visited[edge]){
                        stack.push(edge)
                    }
                }
            }
        }
        
        return result;
    }
    
    BFS(start){
        if (!this.adjacencyList[start]){
            console.log(start, 'is not in graph')
            return []
        }
        
        const result = []
        const queue = []
        const visited = {}
        
        queue.push(start);
        
        while (queue.length){
            const vertex = queue.shift();
            
            if (!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex);
                
                const neighbours = this.adjacencyList[vertex];
                
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

// graph.printGraph()

console.log('------------------------------------- Add Vertex:')
graph.addVertex('A')
graph.addVertex('D')
graph.addVertex('X')
graph.addVertex('L')
graph.addVertex('J')

// graph.printGraph()

console.log('------------------------------------- Add Edges:')
graph.addEdges('A', 'L')
graph.addEdges('A', 'X')
graph.addEdges('D', 'X')
graph.addEdges('B', 'X')
graph.addEdges('L', 'B')
graph.addEdges('D', 'B')

console.log('------------------------------------- Print Graph:')
graph.printGraph()

console.log('------------------------------------- Count Vertices:')
console.log(graph.countVertices());

console.log('------------------------------------- Count Edges:')
console.log(graph.countEdges());

console.log('------------------------------------- Degree of Vertex:')
console.log('A ->', graph.degreeOfVertex('A'));
console.log('B ->', graph.degreeOfVertex('B'));
console.log('J ->', graph.degreeOfVertex('J'));
console.log('F ->', graph.degreeOfVertex('F'));

console.log('------------------------------------- Neighbours of a Vertex:')
console.log('B ->', graph.neighboursOfVertex('B'));
console.log('J ->', graph.neighboursOfVertex('J'));
console.log('A ->', graph.neighboursOfVertex('A'));

console.log('------------------------------------- DFS:')
console.log(graph.DFS('A'))

console.log('------------------------------------- BFS:')
console.log(graph.BFS('A'))

console.log('------------------------------------- Remove Edges:')
// graph.removeEdge('X', 'A')
graph.removeEdge('X', 'D')
// graph.removeEdge('A', 'L')
graph.printGraph()

console.log('------------------------------------- Remove Vertex:')
// graph.removeVertex('A')
graph.printGraph()

console.log('------------------------------------- Has Edge / Connection Vertex:')
console.log('has edge A-B ? :', graph.hasEdge('A', 'B'))
console.log('has edge A-L ? :', graph.hasEdge('A', 'L'))
console.log('has edge X-D ? :', graph.hasEdge('X', 'D'))

console.log('------------------------------------- isConnected Graph:')
console.log(graph.isConnectedGraph())