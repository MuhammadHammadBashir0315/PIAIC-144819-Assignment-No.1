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
// console.log("sorry friends, I dont have bigger table so that i can invite only two people")
// const popped1 = guestList.pop()
// console.log(`sorry ${popped1} i can notinvite you `)
// const popped2 = guestList.pop()
// console.log(`sorry ${popped2} i can notinvite you `)
// const popped3 = guestList.pop()
// console.log(`sorry ${popped3} i can notinvite you `)
while (guestList.length > 2) {
    var popedElamant = guestList.pop();
    console.log("sorry ".concat(popedElamant, " i can not invite you to dinner"));
}
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, " you are still invited"));
});
guestList.pop();
guestList.pop();
console.log(guestList);
