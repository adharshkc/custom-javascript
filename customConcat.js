const arr = [1,2,3,5];
const str = 'abc';
const ar = ['c', 'd', 'e']
const fun = ()=>{}
const obj = {}

console.log(arr.concat(str, fun, obj, ar))


Array.prototype.myConcat = function(){
    const result = []
    for(const elem of this){
        result.push(elem)
    }
    for(const arg of arguments){
        if(Array.isArray(arg)){
            for(const elem of arg){
                result.push(elem)
            }
        }else{
            result.push(arg)
        }
    }
    return result
}


console.log(arr.myConcat(str, fun, obj, ar))