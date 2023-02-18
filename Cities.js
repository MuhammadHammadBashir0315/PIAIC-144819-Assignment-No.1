var city = "Hassan Abdal , Pakiatan";
function describe_city(city, country) {
    if (country === void 0) { country = "Pakiatan"; }
    var splited = city.split(' , ');
    // console.log(splited)
    // console.log(splited[1])
    if (splited[1] == country) {
        console.log("".concat(splited[0], " is in ").concat(country));
    }
    else {
        console.log("".concat(splited[0], " is not in ").concat(country));
    }
}
describe_city(city);
describe_city("Taxila , Pakiatan");
describe_city("Makkah , SaudiArabia");
