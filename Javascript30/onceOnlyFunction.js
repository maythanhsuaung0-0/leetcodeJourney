// call the func first time only
// next times being called, the fun will not be called
// will return undefined only
var onceOnly = function(fn) {
  let callCount = 0
  let result = 0
  return (...args) => {
    if (callCount > 0) {
      return undefined;
    }
    else {
      callCount++;
      result = fn(...args)
      return result
    }
  }
}
var once = onceOnly((a,b,c)=>(a+b+c))
console.log(once(4,5,6))
console.log(once(5,6,7))


