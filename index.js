function inOrder(node){
    if(node.left){
        inOrder(node.left)
    }
    console.log(node.data)

    if(node.right){
        inOrder(node.right)
    }
}

function findOrAdd(rootNode, newNode){
    if(rootNode.data === newNode.data){
        return true
    }
        if(newNode.data > rootNode.data){
            if(rootNode.right){
                return findOrAdd(rootNode.right, newNode)
            }
            else { rootNode.right = newNode}
            
        }
        if(rootNode.data > newNode.data ){
            if(rootNode.left){
                return findOrAdd(rootNode.left, newNode)
            }
            else{
                rootNode.left = newNode
            }
        }
    
}

function max(node){
 if(node.right){
     return max(node.right)
 }
 else{
     return node
 }
    
}

function min(node){
    if(node.left){
        return min(node.left)
    }
    else{
        return node
    }
}