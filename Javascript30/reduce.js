// write a reduce function without using built in reduce function {

var reduce = function(nums, fn, init) {
  var val = init
  for (var i = 0; i < nums.length; i++) {
    val = fn(val, nums[i])
  }
  return val
}
