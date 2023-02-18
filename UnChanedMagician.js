var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var megicians = ["Hammad", "Ejaz", "Tayyab", "Junaid"];
var copyOfArr = __spreadArray([], megicians, true);
function show_megicians(params) {
    var new_array = [];
    megicians.forEach(function (megician) {
        // console.log("The Great",megician)
        new_array.push("Great ".concat(megician));
    });
    return new_array;
}
var saperateArray = __spreadArray([], show_megicians(copyOfArr), true);
console.log(saperateArray);
console.log(megicians);
