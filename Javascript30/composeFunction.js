var compose = function(functions) {
  return function(x) {
    if (functions.length === 0) {
      return x
    }
    let result = x
    for (var i = functions.length-1; i >= 0; i--) {
      result = functions[i](result)
    }
    return result
  }
}
var fn = compose([x=>x+1,x=>x*x])
console.log(fn(4))

