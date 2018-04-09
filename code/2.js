// console.log(process.argv.slice(2));
function nodeToArr(node){
    var arr = [];
    node.val && arr.push(node.val);
    if(node.next){
        arr = arr.concat(nodeToArr(node.next))
    }
    return arr;
}

console.log(nodeToArr({val:2,next:{val:4,next:null}}))
