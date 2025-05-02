/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    nums.forEach((ele,idx) => {
        val = fn(val,ele);
        console.log(val)
    });
    return val;
};