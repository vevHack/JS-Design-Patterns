/**
 * Created by Zen on 2015/8/18.
 */

//对象的创建的两种方式
var Castle = function (name) {
    this.name = name;
};
Castle.prototype.build = function () {
    console.log(this.name);
};
//1：new
var instance1 = new Castle('Jack');
instance1.build();
//2:Object.create()
var instance2 = Object.create(Castle.prototype, {
    name: {
        value: 'Zen',
        writable: false
    }
});
instance2.build();
instance2.name = 'Jane';
instance2.build();