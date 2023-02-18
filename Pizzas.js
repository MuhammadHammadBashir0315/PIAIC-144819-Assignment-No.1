var pizzas = ["chicken", "peproni", "fajita"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
});
