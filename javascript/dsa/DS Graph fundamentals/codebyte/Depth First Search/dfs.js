class Node { // to know their value and also store their edges list
    constructor(value){
        this.value = value;
        this.edgesList = [];
    
    }
    connect(node){
        this.edgesList.push(node) //push node to edges list
        node.edgesList.push(this) // undirectional graph where both node are connected to eachother
    }
    getAdjacentNodes(){
        return this.edgesList

    }
    isConnected(node){
        return !! this.edgesList.find(edge => edge.value === node.value) //to map all the edges to their value
        //and to use indexOf to look for the node value
    }
};
class Graph {
    constructor(nodes){ //spread operator, take in all the nodes that will be parse in when initialized
        this.nodes = [...nodes]
    }
    addToGraph(node){ //incase we wanna add to the graph after initialization
        this.node.push(node)
    }
    depthFirstTraversal(start, end, visited){
        // keep traversing deeply
        //until you hit a leaf node
        // or you are at the end node (u found the node)

        if (!visited){ //if someone call on visted/parse it on the console, automatically set it to new Set
            visited = new Set()
        }

        

        

            if (start.value === end.value) {
                console.log("Found it")
                return
            }
            console.log("visiting node" , start.value)


            visited.add(start) // when we visit a node its gonna add to the start list
            for (const adjacency of start.edgesList) {
                if(!visited.has(adjacency)) {
                    this.depthFirstTraversal(adjacency, end, visited)
                    

                }
            }
            
        
        
    }
}
const DFW = new Node("DFW")
const JFK = new Node("JFK")
const LAX = new Node("LAX")
const HNL = new Node("HNL")
const SAN = new Node("SAN")
const EWR = new Node("EWR")
const BOS = new Node("BOS")
const MIA = new Node("MIA")
const MCO = new Node("MCO")
const PBI = new Node("PBI")
const HKG = new Node("HKG")


const graph = new Graph([DFW, JFK, LAX, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]); // a constructor takes in an array of nodes

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
SAN.connect(HKG)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MCO.connect(PBI)
MIA.connect(PBI)

console.log(graph.depthFirstTraversal(DFW, PBI)) 


// Interview Question
/* Given a DAG, return the topological ordering.*/
// check notebook for the diagram

/*class Node {  
    constructor(value){
        this.value = value
        this.edgesList = []
    }
    connect(node){
        this.edgesList.push(node)
    }
    isConnected(node){
        return !! this.edgesList.find(edge => edge.value === node.value)// in the edge, find where two nodes are linked.
    }
    getAdjacentNodes(){
        return this.edgesList
    }

    
}
class Giraph{
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node){
        this.node.push(node)
    }
    topologicalSort(){ //ways we can enter the graph
        const visited = new Set()
        // we want topological, to manage the visited node, keep track bcos we dont wanna traverse any graph needlessly
        const topOrdering = []
        for(const node of this.nodes){
            this.depthFirstTraversal(node, visited)
        }
        console.log(topOrdering.reverse())
    }

    depthFirstTraversal(start, visited, topOrdering){
         //if someone call on visted/parse it on the console, automatically set it
        //const visited = new Set()
        if(visited.has(start)) return
        visited.add(start)
        console.log("visiting node", start.value)
        for(const adjacency of start.edgesList){
            
            this.depthFirstTraversal(adjacency, visited, topOrdering)

        }  
        topOrdering.push(start.value)                                                    
    }
}
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

const giraph = new Giraph([a, b, c, d, e, f])

a.connect(b)
a.connect(c)
b.connect(d)
d.connect(f)
e.connect(c)
e.connect(f)

console.log(giraph.depthFirstTraversal(a))*/



