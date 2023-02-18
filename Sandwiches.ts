function Customer(params , ...args){
    var array: string[] = [...Names , ...args]
    array.forEach(n =>{
        console.log(`${n} ordered`)
    })

}

var Names: string[] = ["Hammad" , "Ejaz","Tayyab"]
var anotherName:string = "Zia;"
var moreName: string = "Hassan"
Customer(Names)
Customer(Names , anotherName)
Customer(Names , anotherName , moreName)