var guestList = ["Ejaz", "Tayyab", "Zia", "Hassan"];
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, " you are invited"));
});
console.log(" guests we found the bigger dinner table  ");
guestList.unshift("junaid");
guestList.splice(2, 0, "Khurram");
guestList.push("qureshi");
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, " you are invited"));
});
