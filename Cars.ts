function CarInfo( manufecturer, model ,...args){
    var carObj = {}
    carObj["manufecturer"] = manufecturer,
    carObj["model"] = model,
    carObj["optional"] = args,
    carObj["color"] = args

    console.log(carObj)
}
var manufecturer: string = "Ejaz";
var model: (string | Number) = 2021;
var name_value = {"Suzuki" : "black"}
CarInfo(manufecturer , model , name_value)