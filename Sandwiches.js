var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function Customer(params) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var array = __spreadArray(__spreadArray([], Names, true), args, true);
    array.forEach(function (n) {
        console.log("".concat(n, " ordered"));
    });
}
var Names = ["Hammad", "Ejaz", "Tayyab"];
var anotherName = "Zia;";
var moreName = "Hassan";
Customer(Names);
Customer(Names, anotherName);
Customer(Names, anotherName, moreName);
