const arr = [1, 2,4, 5,6]


const result = arr.filter((num)=>{
    return num >3
})

console.log(result)

Array.prototype.myFilter = function(callback, thisArg){
    if(typeof callback !=='function'){
        throw new Error("only functions are valid")
    }
    const result = [];
    for(let i =0;i<this.length;i++){
        if(this[i]){
            if(callback.call(thisArg, this[i],i, this)){
                result.push(this[i])
            }
        }
    }
    return result;
}

const result2 = arr.myFilter((num)=>{
    return num>=3
})

console.log(result2)