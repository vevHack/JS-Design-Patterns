/**
 *
 * Created by Zen on 2015/8/26.
 */

//    implements mixin,cannot use instanceof:
var extend = function (sourse, destination) {
    for (var property in sourse) {
        destination[property] = sourse[property];
    }
    return destination;
};

//字面对象
var Obj = function (prop) {
    return {
        p: prop,
        sayHello: function () {
            console.log(this.p);
        }
    };
};
//prototype方式
var Obj2 = function (prop) {
    this.p = prop;
};
Obj2.prototype.sayHello = function () {
    console.log(this.p);
};
var foo = new Obj("hello");
var foo2 = new Obj2("hello");