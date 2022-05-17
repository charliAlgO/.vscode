//Nodes list and edges list

const nodes = ["A", "B","C","D","E"];
const edges = [ //we have a connection between A & B, A & D, D & E
    ["A", "B"],
    ["A", "D"],
    ["B", "C"],
    ["C", "D"],
    ["C", "E"],
    ["D", "E"]
];
//findAdjacentNodes - COMMON QUESTION
const findAdjacentNodes = function(node){
    //loop tru edges array, 
    //is my node in the connection
    //if yes, push the other node in pair into the adjacentNode array
    var adjacentNode;
    const adjacentNodes = [];
    //for(let i= 0; i < edges.length; i++){
        for ( let edge of edges){   // edge is a pair e.g "A" & "B" first element in the array
        const nodeIdx = edge.indexOf(node)
        if (nodeIdx > -1){ //if its found, u get a 0 or a 1
            adjacentNode = nodeIdx === 0 ? edge[1] : edge[0]; //ternary operator
            adjacentNodes.push(adjacentNode);

        }
    }
    return adjacentNodes
}
console.log(findAdjacentNodes("A"));

// To see if two nodes are connected
const isConnected = function (node1, node2){
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1 //if this returns true then the function some will return true
    })
}
console.log(isConnected("C","A"));

//Adjancy Matrix
//it helps visualizes the graph unlike the vertices/node and edges list
//where its kinda hard to see the graph in the code

// A 2-D array filled out with 1's and 0's where each array represents a node and each index in the subarray, represents a potential
//potential connection to another node
//the value at adjacentMatrix[node1][node2] indicates where thete is a connectin between node1 and node2

//it is made up of 1's and zeros, if the second index of the subarray is 1 then thereis a connection between A & B 
//the time complexity to find adjacent nodes - O(v) where v is the number of vertices
//time complexity to check if two nodes are connected - O(1) is cheaper, 
//thats because you know already where that node is modelled
//space complexity - O(V^2) where v is number of vertices, you would always have to add subarrays and index
// to indicate the connections to other vertices that makes the square bcos it grows in hight and width
//so its a good pattern/representation if there are alot of elements, if there are not much, then it is not
/* when you have questions around graphs, you may wanna ask the interviewer what do i expect the data to look like so you know what representation you model
in code*/



const vertices = ["A", "B", "C", "D", "E"];

const vertexIdxs = {
    A : 0,
    B : 1,
    C : 2,
    D : 3,
    E : 4,
};


const adjacencyMatrix = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0]
];
let adjancentNodes = [];
const findAdjacentNode = (node) => {
    for ( let i = 0; i < vertices.length; i++) {
       let adjacencesIdx = vertexIdxs[node];
        if(adjacencyMatrix[adjacencesIdx][i] === 1){
            adjancentNodes.push(vertices[i]);
        }
    }
    return adjancentNodes;
}
console.log(findAdjacentNode("B"));

//isConnected
const isConncted = (node1, node2) =>{
    const nodeIdx1 = vertexIdxs[node1]
    const nodeIdx2 = vertexIdxs[node2]
    return !!adjacencyMatrix[nodeIdx1][nodeIdx2] //to check adjacencyMatrix @  first sub array, then check if its connected with the other. 
    // !! will convert 1 to true and 0 to false

}
console.log(isConncted("D", "A"));

/*Adjancency List*/
// is the third implementation
// the space complexity is quite decent, it stores vertices like every other implementation
//for every node store a list of what node its connected to
//Time complexity to find adjacent nodes - O(1)
//Time complexity to check if two nodes are connected -O(logv) if each adjacent role is sorted8
const verties = ["a","b","c","d","e"];
const adjacency_List = [
    ["b", "d"],
    ["a", "c"],
    ["b", "d", "e"],
    ["a", "c", "e"],
    ["c", "d"]
]
class Bode { // to know their value and also store their edges list
    constructor(value){
        this.value = value;
        this.edgesList = [];
    
    }
    connect(node){
        this.edgesList.push(node) //push node to edges list
        node.edgesList.push(this) // undirectional graph where both node are connected to eachother
    }
    getAdjacentNodes(){
        return this.edgesList.map(edge => edge.value)

    }
    isConnected(node){
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1 //to map all the edges to their value
        //and to use indexOf to look for the node value
    }
};
class Gyraph {
    constructor(nodes){ // take in all the nodes that will be parse in when initialized
        this.nodes = [...nodes]
    }
    addToGraph(node){ //incase we wanna add to the graph after initialization
        this.node.push(node)
    }
}
const nodeA = new Bode("A");
const nodeB = new Bode("B");
const nodeC = new Bode("C");
const nodeD = new Bode("D");
const nodeE = new Bode("E");

const geraph = new Gyraph([nodeA, nodeB, nodeC, nodeD, nodeE]); // a constructor takes in an array of nodes

nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)

for(let node of geraph.nodes){
    console.log(`Node ${node.value}`); //show the nodes
    for (let connectedNode of node.edgesList){ // for each node we are gonna print out its edges
        console.log(`Node ${node.value} is connected to ${connectedNode.value}`)// each node and what it is connected to
    }
}
console.log(nodeA.getAdjacentNodes());
console.log(nodeC.isConnected(nodeB));

// Breadth first search

class Mode { // to know their value and also store their edges list
    constructor(value){
        this.value = value;
        this.edgesList = [];
    
    }
    connect(node){
        this.edgesList.push(node) //push node to edges list
        node.edgesList.push(this) // undirectional graph where both node are connected to eachother
    }
    getAdjacentNodes(){
        return this.edgesList.map(edge => edge.value)

    }
    isConnected(node){
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1 //to map all the edges to their value
        //and to use indexOf to look for the node value
    }
};
class GIraphe {
    constructor(nodes){ //spread operator, take in all the nodes that will be parse in when initialized
        this.nodes = [...nodes]
    }
    addToGraph(node){ //incase we wanna add to the graph after initialization
        this.node.push(node)
    }
    breadthFirstTraversal(start, end){
        const queue = [start]
        const visitedNodes = new Set()
        visitedNodes.add(start)

        while (queue.length > 0) {
            // pull node queue (to visit)
            // add its adjacencies to the queue
            const node = queue.shift()
            if (node.value === end.value) {
                console.log("Found it")
                return
            }
            for (const adjacency of node.edgesList) {
                if(!visitedNodes.has(adjacency)) {
                    queue.push(adjacency)
                    visitedNodes.add(adjacency)

                }
            }
            console.log(node.value)
        }
        
    }
}
const DFW = new Mode("DFW")
const JFK = new Mode("JFK")
const LAX = new Mode("LAX")
const HNL = new Mode("HNL")
const SAN = new Mode("SAN")
const EWR = new Mode("EWR")
const BOS = new Mode("BOS")
const MIA = new Mode("MIA")
const MCO = new Mode("MCO")
const PBI = new Mode("PBI")


const giraph = new GIraphe([DFW, JFK, LAX, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI]); // a constructor takes in an array of nodes

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
JFK.connect(MIA)
JFK.connect(BOS)
MIA.connect(MCO)
MCO.connect(PBI)
MIA.connect(PBI)

giraph.breadthFirstTraversal(DFW, MIA)



//for(let node of graph.nodes){
    //console.log(`Node ${node.value}`); //show the nodes
    //for (let connectedNode of node.edgesList){ // for each node we are gonna print out its edges
        //console.log(`Node ${node.value} is connected to ${connectedNode.value}`)// each node and what it is connected to
    //}
//}
console.log(MIA.getAdjacentNodes());
console.log(DFW.isConnected(JFK)); 

//its impotant to take the Time and space complexity Big O

/*Interview problem : Given a graph of users and their connections, find the smallest distance between two users
...
check note for the diagram, interview problrm 1

hint: 1) We use BFS traversal 
      2) we have to remember i am traversing this node at the moment, 
       - How did i get here?
       - Where did i come from?
       - How do i get to where i am going to */



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
            return this.edgesList.find(edge => edge.value)
    
        }
        isConnected(node){
            return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1 //to map all the edges to their value
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
        reconstructPath(visitedNodes, startNodes, endNode){
            let currNode = endNode // to keep track of where we are

            const shortestPath = [] // we want the node in the order in which we traverse
            while (currNode !== null){
                shortestPath.push(currNode)
                //how do we trace back the parentNode of each adjacentNode
                currNode = visitedNodes[currNode.value] //coming backwards, we take tge visitedNode @ curnode value
            }
            //console.log(shortestPath)
            return shortestPath.reverse()
        }
        breadthFirstTraversal(start, end){
            const queue = [start] // to show where we going to
            const visitedNodes = {} //  we use object so we can remember the path from which they came fromm 
            visitedNodes[start.value] = null
    
            while (queue.length > 0) {
                // pull node in queue (to visit)
                // add its adjacencies to the queue
                // also track where the nodes we are adding coming from
                const node = queue.shift()
                if (node.value === end.value) {
                    console.log("Found it")
                    return this.reconstructPath(visitedNodes, start, end);
                }
                for (const adjacency of node.edgesList) {
                    if(!visitedNodes.hasOwnProperty(adjacency.value)) {
                        visitedNodes[adjacency.value] = node //set its value to the node that added it
                        // all hannah adjancies will have Hannah as its reference
                        queue.push(adjacency)
                        //visitedNodes.push(adjacency)
    
                    }
                }
                console.log(node.value)
            }
            
        }
    }
    const Hannah = new Node("Hannah")
    const Mary = new Node("Mary")
    const Max = new Node("Max")
    const Mel = new Node("Mel")
    const Liz = new Node("Liz")
    const Nis = new Node("Nis")
    const Dan = new Node("Dan")
    const Chris = new Node("Chris")
    const Yair = new Node("Yair")
    const Nicollete = new Node("Nicollete")
    const Mabel = new Node("Mabel")

    const graph = new Graph([Hannah, Mary, Max, Mel, Liz, Nis, Dan, Chris, Yair, Nicollete, Mabel]); // a constructor takes in an array of nodes

Hannah.connect(Mary)
Hannah.connect(Max)
Hannah.connect(Mel)
Hannah.connect(Liz)
Hannah.connect(Nis)
Mel.connect(Max)
Nis.connect(Dan)
Nis.connect(Chris)
Nis.connect(Yair)
Chris.connect(Yair)
Chris.connect(Nicollete)
Yair.connect(Mabel)
Yair.connect(Liz)
Mabel.connect(Liz)


console.log(Nicollete.getAdjacentNodes());
console.log(Nicollete.isConnected(Nis)); 

console.log(graph.breadthFirstTraversal(Hannah, Mary))


/* Depth First saerch Traversal */




//for(let node of graph.nodes){
    //console.log(`Node ${node.value}`); //show the nodes
    //for (let connectedNode of node.edgesList){ // for each node we are gonna print out its edges
        //console.log(`Node ${node.value} is connected to ${connectedNode.value}`)// each node and what it is connected to
    //}
//}
console.log(MIA.getAdjacentNodes());
console.log(DFW.isConnected(JFK)); 
