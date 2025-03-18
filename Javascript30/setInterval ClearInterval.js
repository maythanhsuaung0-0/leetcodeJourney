// want a function to cancel the setInterval after given t second
// want the function to be called without any delay first, then will repeatedly called after every delay second until it is cancelled
var cancellable = function(fn,args,t){
  // call the fn initially so that it is called without any delay first
  fn(...args)
  // setinterval function to call the fn after every delayed t second 
  const myinterval = setInterval(()=>{fn(...args)},t)
  //function to cancel the fn after t sec
  const cancelFn = function(){
    clearTimeout(myinterval)
  }
  return cancelFn
}


