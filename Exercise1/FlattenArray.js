function flattenDeep(arr1) {
    
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
 }
var arr1 = [5, [22], [[14]], [[4]],[5,6]];

(function(){
    console.log(flattenDeep(arr1));
}());