var memorise = function(fn) {
  let cache = {}
  return function(...args) {
    let key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    }
    let result = fn(...args)
    // ... is imp here caz we need the inputs of fn to be individuals
    cache[key] = result
    return result
  }
}
var callCount = 0
var sum = (a,b)=>{
callCount++;
return a+b}
var memorisedSum = memorise(sum)
console.log(memorisedSum(3,4))
console.log(memorisedSum(3,5))
console.log(memorisedSum(3,4))
console.log(callCount)
