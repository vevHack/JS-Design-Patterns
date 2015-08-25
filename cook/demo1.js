/**
 * Created by Zen on 2015/8/18.
 */
var sentence = 'This is one sentence. This is a sentence with a list of items:' +
    'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start + 1);
var listStr = sentence.substring(start + 1, end);
var fruits = listStr.split(',');
//去掉两边的空格
fruits.forEach(function (ele, index, array) {
    array[index] = ele.trim();
});

//或者采用正则表达式的方式
// var fruits = listStr.split(/\s*,\s*/);
console.log(fruits);