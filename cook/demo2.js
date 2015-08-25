/**
 * Created by Zen on 2015/8/18.
 */
//检查存在且不为空的字符串

if (typeof unknownVariable === 'string' && unknownVariable.length > 0) {

}
//修改为
if (((typeof unknownVariable != 'undefined' && unknownVariable) &&
    unknownVariable.length() > 0) &&
    typeof unknownVariable.valueOf() == 'string') {
}
var searchString = "Now is the time, this is the tame";
var re = /t\w{2}e/g;
var replacement = searchString.replace(re, "place");
console.log(replacement); // Now is the place, this is the place

var re = new RegExp('t\\w{2}e',"g");
var replacement = searchString.replace(re,"place");
console.log(p);

