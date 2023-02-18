let pizzas:string[] = ["chicken","peproni","fajita"]
for(var i =0; i < pizzas.length; i++){
    console.log(pizzas[i])
}
pizzas.forEach(pizza =>{
    console.log(`I like ${pizza} pizza`)
})