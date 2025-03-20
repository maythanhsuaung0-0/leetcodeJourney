var timeLimitPromise=function(fn,t) {
 return async function(...args){
    // given func is an async func
    // we want to call that func only if it is called within the time limit, if not, we want that to
    // return "Time Limit exceed"
   // make new promise for returning the msg and cancelling the function 
    const cancelFunction = new Promise(
    (res,rej)=> setTimeout(()=>{rej("Time Limit Exceeded")},t)
    )
    return Promise.race([cancelFunction,fn(...args)]
  }
}
