class SetDS extends Set{
    constructor(...element){
        super(element)
    }
    union(set2){
        const newSet = new SetDS(...[...this.values(),...set2.values()])
        return newSet
    }
    
    intersection(otherSet){
        // const intersectionset = new	Set([...this].filter(x	=>	otherSet.has(x)))	
		const intersectionSet	=	new	Set()
		const values = new Array(...this)
		for	(let i = 0;	i <	values.length;	i++){
			if(otherSet.has(values[i])){	
				intersectionSet.add(values[i])
			}	
		}	
        return	intersectionSet
    }
    
    difference(set2){
        const newSet = new	Set([...this].filter(x	=> !set2.has(x)))
        // const newSet = new SetDS()
        // this.forEach(value=>{
        //     if(!set2.has(value)){
        //         newSet.add(value)
        //     }
        // })
        return newSet
    }
    
    isSubsetOf(set2){
        if(this.size>set2.size){
            return false
        }
        const arr = new Array(...this)
        for(let i=0; i<arr.length; i++){
            if(!set2.has(arr[i])){
                return false
            }
        }
        return true
    }
}

const set1 = new SetDS(2,3,5)
const set2 = new SetDS(2,3,6,5)
console.log("set")
console.log(set1)
console.log("set2")
console.log(set2)
console.log(set1.isSubsetOf(set2))
