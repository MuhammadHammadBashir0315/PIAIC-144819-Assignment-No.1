let Names: string[] = ["Cat","Dog","Tiger"]
for(var i = 0 ; i<Names.length; i ++){
    console.log(Names[i])
}
Names.forEach(name =>{
    console.log(`A ${name} would make a great pet `)
})