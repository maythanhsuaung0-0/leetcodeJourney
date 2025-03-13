// two sum
// every input has exactly one pair of indices i and j that satisfy the condition.
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
//         let desirePair = {}
//         for(let i = 0; i < nums.length; i++) {
//             // val: key
//             desirePair[nums[i]] = i

//         }
//         for(let i = 0; i<nums.length;i++){
//             let diff = target - nums[i]
//             if(diff in desirePair && desirePair[diff]!==i){
//                 return [i,desirePair[diff]]
//             }
//         }
//         return desirePair
//     }

//     twoSUm2 (nums,target){
//         let m = new Map()
//         for(let i = 0 ; i < nums.length ; i ++){
//             let expected =target  - nums[i]
//             if(m.has(expected)){
//                 return [m.get(expected), i]
//             }
//             m.set(nums[i],i)
//         }
//     }

// }
// var s = new Solution()
// console.log(s.twoSum([5,5],10))
// // console.log(s.twoSUm2([4,6,5],10))
