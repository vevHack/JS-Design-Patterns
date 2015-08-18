/**
 * Created by Zen on 2015/8/18.
 */
/**
 继承
 */
var Castle = function () {
};
Castle.prototype.build = function () {
    console.log("Castle Build");
};
var Jack = function () {
};
Jack.prototype.build = Castle.prototype.build;
Jack.prototype.A = function () {
    console.log('A');
};
var jack = new Jack();
jack.build();

//简单的拷贝的实现
function clone(sourse, destination) {
    for (var attr in sourse.prototype) {
        destination.prototype[attr] = sourse.prototype[attr];
    }
}

var Castle2 = function () {
};
Castle2.prototype.build = function () {
    console.log('C2 build');
};
var Jack2 = function(){};
clone(Castle2,Jack2);
var jack2 = new Jack2();
jack2.build();