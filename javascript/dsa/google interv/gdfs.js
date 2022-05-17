//Google Interview Question
/*You are tasked with splitting the 7th grade class into two teams for a soccer game. Givn a list of students and 
their "enemies" aka the kids they cant be on the same team as determine whether it is possible to split the class 
in two in such a way that no child is on the same team as any of their enemies if possible return the two teams.*/

//we use bipartite, check the notebook for more details

class Node{
    constructor(value){
        this.value = value
        this.edgesList = []
        this.color = null
    }
    connect(node){
        this.edgesList.push(node)
        node.edgesList.push(this)
    }
    isConnected(node){
        return !! this.edgeslist.find(edge => edgesList.value === node.value)
    }
    
}
class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node){
        this.nodes.push(node)
        node.edgesList.push(this)
    }
    isBipartite(){
        const visited = new Set() //we want to save it, if we have seen the node before
        for(const node of this.nodes){ // loop over the nodes
            if(!visited.has(node)){ //if the node is not in the set call on the recursive function
                if(this.assignLegalColoring(node, visited)){
                    console.log("graph is Bipartite")
                    const redTeam = this.nodes.filter(node => node.color === "red")
                    const blueTeam = this.nodes.filter(node => node.color === "blue")
                    console.log(redTeam.map( e=> e.value))
                    console.log(blueTeam.map( e => e.value))
                } else{
                    console.log("graph is not Bipartite")
                }
            }
        }
    }
    assignLegalColoring(start, visited){ // here we only wanna add the color to the adjancy if we havent seen it yet
        //diff. btw this and a regular dfs
       // if(visited.has(start)) return

        console.log(`visiting node ${start.value}`)
        visited.add(start) // otherwise add it
        if(!start.color){
            start.color = "blue"
        }

        for(const adjacency of start.edgesList){
            if(!visited.has(adjacency)){
                adjacency.color = start.color === 'red' ? 'blue' : 'red' // if the startnode color is red,
                // then adjacency would be blue else return red
                console.log(`assigned color ${adjacency.color} to ${adjacency.value}`)
                if(!this.assignLegalColoring(adjacency, visited)){
                return false
                } // call assignlegalcoloring to the adjancy, 
            }else{
                if(start.color === adjacency.color){
                    return false
                }
            }

        }
        return true
    }

    /*depthFirstTraversal(start, visited){
        if(visited.has(start)) return
        visited.add(start)
        console.log("visiting node", start.value)

        for(const adjacency of start.edgesList){
            this.depthFirstTraversal(adjacency, visited)
        }
    }*/

}
const David = new Node("David")
const Lucy = new Node("Lucy")
const Emily = new Node("Emily")
const Jose = new Node("Jose")
const Paul = new Node("Paul")
const Chris = new Node("Chris")
const Jack = new Node("Jack")
const Brian = new Node("Brian")



const graph = new Graph ([David, Lucy, Emily, Jose, Paul, Chris, Brian, Jack])

David.connect(Lucy)
David.connect(Jose)
David.connect(Chris)
Lucy.connect(Brian)
Lucy.connect(Emily)
Jose.connect(Paul)
Paul.connect(Chris)
Chris.connect(Brian)
Brian.connect(Jack)
Jack.connect(Emily)
//Jose.connect(Chris)

graph.isBipartite()