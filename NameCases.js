var Name = "Hammad";
var Name2 = "hammad";
var upperCase = Name.toUpperCase();
var lowercase = Name.toLowerCase();
function titleCase(Name2) {
    var splitedName = Name2.toLowerCase().split(' ');
    for (var i = 0; i < splitedName.length; i++) {
        splitedName[i] = splitedName[i].charAt(0).toUpperCase() + splitedName[i].slice(1);
    }
    console.log(splitedName.join(' '));
}
console.log(upperCase);
console.log(lowercase);
titleCase(Name2);
