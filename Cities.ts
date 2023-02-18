let city: string = "Hassan Abdal , Pakiatan";



function describe_city(city,country:string = "Pakiatan"){
    var splited = city.split(' , ')
   
    if(splited[1] == country){
         console.log(`${splited[0]} is in ${country}`)
    }else{
        console.log(`${splited[0]} is not in ${country}`)
    }
    
}
describe_city(city)
describe_city("Taxila , Pakiatan")
describe_city("Makkah , SaudiArabia")