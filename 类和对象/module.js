/**
 * Created by Zen on 2015/8/18.
 */
var Westeros;
(function (Westeros) {
    (function (Structures) {
        //第一个类
        var Castle = (function () {
            function Castle(name) {
                this.name = name;
            }

            Castle.prototype.Build = function () {
                console.log('build' + this.name);
            };
            return Castle;
        })();
        //第二个类
        var Wall = (function () {
            function Wall() {
                console.log('Wall Constructed');
            }

            return Wall;
        })();
        Structures.Castle = Castle;
        Structures.Wall = Castle;
    })(Westeros.Structures || (Westeros.Structures = {}));
    var Structures = Westeros.Structures;
})(Westeros || (Westeros = {}));