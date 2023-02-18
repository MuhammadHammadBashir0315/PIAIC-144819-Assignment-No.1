function CarInfo(manufecturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var carObj = {};
    carObj["manufecturer"] = manufecturer,
        carObj["model"] = model,
        carObj["optional"] = args,
        carObj["color"] = args;
    console.log(carObj);
}
var manufecturer = "Ejaz";
var model = 2021;
var name_value = { "Suzuki": "black" };
CarInfo(manufecturer, model, name_value);
