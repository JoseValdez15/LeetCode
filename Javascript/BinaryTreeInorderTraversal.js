var inorderTraversal = function(root) {
    let node = root;
    const nodeList =[];
    
    while(node){
        
        if(!node.left){
            nodeList.push(node.val);
            node = node.right;
        }else{
            const pre = findPredecessor(node);
            if(pre.right === node){
                pre.right = null;
                nodeList.push(node.val);
                node = node.right;
            }else{
                pre.right = node;
                node = node.left;
            }
        }       
    }
    return nodeList;
};

function findPredecessor(root){
    let node = root.left;
    while(node.right && node.right !== root){
        node = node.right
    }
    return node;
}