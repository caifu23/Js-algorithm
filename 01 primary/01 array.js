
// 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
/*  输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4] */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 法一：
    var rotate = function(nums, k) {
        var len = nums.length;
    
        var newArr = new Array(len);
        for(var i=0; i<len; i++) {
            
            // var j = (i+k-len) >= 0 ? (i+k-len) : (i+k);
            var j = (i+k) % len ;
            newArr[j] = nums[i];
        }
    
        for(var z=0; z<len; z++) {
            nums[z] = newArr[z];
        }

        return nums;
    };

//  法二；(比法一耗时)
    function rotateOne(nums, k) {
        for(let i=0; i<k; i++) {
            let tmp = nums.pop();
            nums.unshift(tmp);
        }
        return nums;
    }



// 两数之和
// 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
/* 给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1] */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0; i< nums.length; i++) {
        for(var j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]; 
            }
        }
    }
};



// 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
/* 输入: [0,1,0,3,12]
输出: [1,3,12,0,0] */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //  计数0的个数
    var countZero = 0;
    for(var i =0; i< (nums.length - countZero); i++) {
        // 如果当前项为0
        if(nums[i] === 0) {
            // 0的个数加一
            countZero++;
            // 删除当前0
            nums.splice(i, 1);
            // 索引减一，确保删除后的当前项也遍历到
            i--;
            // 并在末尾加0
            nums.push(0);
        }
    }

    return nums;
};


// 数组去零
/**
 * @param {number[]} nums
 * @return {number[]} 
 */
// 法一：原数组上删除
var removeZero = function(nums) {
    for(let i=0; i< nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
}

// 法二：用es6
var rmZero = function(nums) {
    nums = nums.filter(function(ele) {
        return ele !== 0;
    });
    return nums;
}

