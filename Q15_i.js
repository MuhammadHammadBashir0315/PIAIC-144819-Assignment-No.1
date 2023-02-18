var guestList = ["Ejaz", "Tayyab", "Zia", "Hassan"];
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, " you are invited"));
});
var missing = guestList.pop();
console.log(guestList);
console.log(missing);
var addMember = "Zain";
guestList.push(addMember);
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, " you are invited"));
});
