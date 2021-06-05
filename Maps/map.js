const data = new Map()

data.set('average', 1.53)
data.set('lastResult', null)

const germany = {name: 'Germany', population: 82}

data.set(germany, 80)

for(const el of data){
    console.log(el)
}

data.set('average', 33)

console.log(data)
