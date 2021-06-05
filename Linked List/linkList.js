class Node{
    constructor(element, next=undefined){
        this.element = element
        this.next = next
    }
}
class LinkedList {
		constructor(){	
			this.size	= 0;
			this.head = undefined;
        }
        // returns list total size
        length(){
            return this.size
        }
        // return first element of list
        getFirst(){
            return this.head
        }

        // returns last element of list
        getLast(){
            let current = this.head.next; // i used this.head.next to lower the loop iteration
            while(current && current.next){
                current = current.next 
            }
            return current;
        }

        // Return node of required index
        getAt(index){
            if(index>=this.size || index<0 || index==null){
                return undefined
            }
            // return value at first index
            if(index==0){
                return this.getFirst()
            }
            // return value present at last index
            if(index==this.size-1){
                return this.getLast()
            }
            let counter=1
            let current = this.head.next
            while(counter<index-1){
                current = current.next
                counter++
            }
            return current
        }

        // Return index of element
        indexOf(element){
            let	current	= this.head;
            for	(let i = 0;	i <	this.size	&&	current	!=	null; i++)	{
                    if(element === current.element){
                            return	i;
                    }
                    current	= current.next;	
            }
            return	-1;
        }

        // insert node at First Position
        unshift(element){
            this.head = new Node(element, this.head)
            this.size++
        }

        // Remove First node in List 
        shift(){
            if(!this.head){
                return
            }
            let current = this.head
            this.head = current.next
            this.size--
            return current
        }

        // insert at last Position
        push(element){
            if(this.head == null){
               return this.unshift(element)
            }
            // Grab the last element using a function we declear already
            const last = this.getLast()
            //	and	assign new node with element at last.next	            
            last.next = new Node(element)
            this.size++;
        }

        // remove last node 
        pop(){
            if(!this.head){return}
            if(this.size === 1){return this.shift()}

            const last = this.getLast()
            let current = this.head
            while(current.next !== last){
                current = current.next
            }
            current.next = null
            this.size--
            return last
        }

        // Set value at specific location
        set(index, value){
            const node = this.getAt(index)
            if(node!==undefined){
                node.element = value
                return true
            }
            return false
        }

        // Remove node at specific location
        removeAt(index){
            if(index>=this.size || index<0 || index==null){
                return undefined
            }
            //removing first node item
            if(index===0){
              return this.shift()
            }
            // remove node at index user want
            const prevNode =  this.getAt(index-1)
            const targetNode = this.getAt(index) 
            prevNode.next = targetNode.next
            this.size--
            return targetNode // return node that is removed
        }

        // Remove element
        removeElement(element)	{
            const	index =	this.indexOf(element);
            return	this.removeAt(index);
        }

        // Convert List to string
        toString(){
            if(this.head ==	null){
                return	'';
            }
            let	objString =	`${this.head.element}`;	
            let	current	= this.head.next;
            for	(let i = 1;	i <	this.size	&&	current	!=	null;	i++){
                objString	=	`${objString}${current.element}`;
                current	=	current.next;
            }
            return	objString;	//	{5}
        }

        //  Remove all the data in list
        clear(){
            this.head = null
            this.size = 0
        }
        
        // print list data
        values(){
            let current = this.head
            while(current){
                console.log(current.element);
                current = current.next
            }
        }
}

const toLinkList=str=>{
    const newList = new LinkedList
    console.log(newList)
    str.split("").forEach(element => {
        newList.push(element)
    });
    return newList
}

const list = new LinkedList()
list.push(5);	
list.unshift(10);
list.push(15);
console.log(list)
