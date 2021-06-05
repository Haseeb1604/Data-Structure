class Queue {
    constructor(){
        this.top=0
        this.bottom =0
        this.storage = {}
    }
    enqueue(val){
        this.storage[this.top] = val
        this.top++
    }
    isEmpty(){
        return this.size()===0
    }
    dequeue(){
        if(this.size()>0){
            let removeEl = this.storage[this.bottom]
            delete this.storage[this.bottom]
            this.bottom++ 
            return removeEl
        }
    }
    peek(){
        return this.storage[this.bottom]
    }
    size(){
        return this.top-this.bottom
    }
    
}

const queue = new Queue()
queue.enqueue(20)
queue.enqueue(10)
