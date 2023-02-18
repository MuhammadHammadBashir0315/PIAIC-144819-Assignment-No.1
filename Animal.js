var Names = ["Cat", "Dog", "Tiger"];
for (var i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}
Names.forEach(function (name) {
    console.log("A ".concat(name, " would make a great pet "));
});
