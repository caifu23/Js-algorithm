
// 反转字符串
// 将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题
// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {character[]}  s
 */
var reverseString = function(s) {
    var tem;
   for(var i=0; i<(s.length-1)/2; i++) { //遍历数组一半长度
       tem = s[i];// 存储当前项
       s[i] = s[s.length-1 -i]; //对应倒数项 赋值给 当前项
       s[s.length-1 -i] = tem; 
   }
   return s;
};

// 查找字符串中出现最多的字符
/**
 * @param {character} str
 * @return {} 
 */
var maxStr = function(str) {
    let obj = {};
    for(let i=0; i<str.length; i++) {
        if(obj[str[i]]) {
            // 如果该字符已经存在，则计数加一
            obj[str[i]]++ ;
        }else {
            obj[str[i]] = 1;
        }
    }
    
    let e = 1;
    let i;
    for (let key in obj) {
        if(obj[key] > e) {
            e = obj[key];
            i = key;
        }
    }
    return i;
}