class Stack{
    constructor(){
        this.items = {}
        this.count = 0
    }
    push(element){
        this.items[this.count] = element
        this.count +=1
        return this.count-1
    }
    pop(){
        if(this.isEmpty()) return undefined
        let deleteItems = this.items[this.count-1]
        delete this.items[this.count-1]
        this.count -=1
        return deleteItems
    }
    peek(){
        return this.items[this.count-1]
    }
    isEmpty(){
        return this.count == 0
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        if(this.isEmpty()){
			return	'';
		}
		let	objString =	`${this.items[0]}`;
		for	(let i = 1;	i <	this.count;	i++)	{	//	{2}
			objString =	`${objString},${this.items[i]}`;	//	{3}
		}
        return	objString;
    }
}

function	decimalToBinary(decNumber)	{
    const	remStack	=	new	Stack();
    let	number	=	decNumber;
    let	rem;
    let	binaryString	=	'';
    while	(number	>	0)	{	//	{1}
            rem	=	Math.floor(number	%	2);	//	{2}
            remStack.push(rem);	//	{3}
            number	=	Math.floor(number	/	2);	//	{4}
    }
    while	(!remStack.isEmpty())	{	//	{5}
            binaryString	+=	remStack.pop().toString();
    }
    return	binaryString;
}

function	baseConverter(decNumber,	base)	{
    const	remStack	=	new	Stack();
    const	digits	=	'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';	//	{6}	
    let	number	=	decNumber;
    let	rem;
    let	baseString	=	'';
    if	(!(base	>=	2	&&	base	<=	36))	{
            return	'';
    }
    while	(number	>	0)	{
            rem	=	Math.floor(number	%	base);
            remStack.push(rem);
            number	=	Math.floor(number	/	base);
    }
    while	(!remStack.isEmpty())	{
            baseString	+=	digits[remStack.pop()];	//	{7}
    }
    return	baseString;
}


const stack = new Stack()


stack.push(100)