let megicians: string[] =["Hammad","Ejaz","Tayyab","Junaid"]
let copyOfArr: string[] = [...megicians]
function show_megicians(params){
    var new_array:string[] = []
    megicians.forEach(megician =>{
        // console.log("The Great",megician)
        new_array.push(`Great ${megician}`)
        
    })
    return new_array

    
} 
var saperateArray: string[] = [...show_megicians(copyOfArr)]

console.log(saperateArray)
console.log(megicians)