var reverseList = function(head) {

    let currentNode = head;
    let previousNode = null;
    
    while(currentNode !== null ) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    
    return previousNode;
    
};