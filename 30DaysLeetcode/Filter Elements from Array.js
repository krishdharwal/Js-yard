/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let temp = [];
    arr.forEach((ele,idx) => {
        if(fn(ele,idx)) temp.push(ele);
    })
    return temp;
}; 