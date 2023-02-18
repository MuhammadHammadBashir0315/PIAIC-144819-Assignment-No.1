//Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Maakkah Madina", "Hassan Abdal", "Islamabad", "Faisal Masjid", "Air University", "Lahore", "Badshahi Masjid "];
// Print your array in its original order.
console.log(places, "First orignal");
// Print your array in alphabetical order without modifying the actual list.
var sortedPlaces = __spreadArray([], places, true).sort();
console.log(sortedPlaces, "sorted copy");
console.log(places, "second orignal");
var reversePlaces = __spreadArray([], places, true).reverse();
console.log(reversePlaces, "reversed copy");
console.log(places, "third orignal");
var secondReverse = __spreadArray([], reversePlaces, true).reverse();
console.log(places.sort(), "sorted orinal");
console.log(places.reverse(), "came back to orignal order");
