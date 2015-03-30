//// [primitiveMembers.ts]
var x = 5;
var r = /yo/;
r.source;

x.toBAZ();
x.toString();

var n = 0;
var N: Number;

n = N;  // should not work, as 'number' has a different brand
N = n; // should work

var o: Object = {}
var f: Function = (x: string) => x.length;
var r2: RegExp = /./g;
var n2: Number = 34;
var s: String = "yo";
var b: Boolean = true;

var n3 = 5 || {};


class baz { public bar(): void { }; }
class foo extends baz { public bar(){ return undefined}; }



 



//// [primitiveMembers.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var x = 5;
var r = /yo/;
r.source;
x.toBAZ();
x.toString();
var n = 0;
var N;
n = N; // should not work, as 'number' has a different brand
N = n; // should work
var o = {};
var f = function (x) { return x.length; };
var r2 = /./g;
var n2 = 34;
var s = "yo";
var b = true;
var n3 = 5 || {};
var baz = (function () {
    function baz() {
    }
    baz.prototype.bar = function () { };
    return baz;
})();
var foo = (function (_super) {
    __extends(foo, _super);
    function foo() {
        _super.apply(this, arguments);
    }
    foo.prototype.bar = function () { return undefined; };
    return foo;
})(baz);
