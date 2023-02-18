
//Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.

const places: string[] = ["Maakkah Madina" ,"Hassan Abdal", "Islamabad" ,"Faisal Masjid","Air University", "Lahore","Badshahi Masjid "]

// Print your array in its original order.

console.log(places , "First orignal")

// Print your array in alphabetical order without modifying the actual list.
const sortedPlaces = [...places].sort()
console.log(sortedPlaces , "sorted copy");
console.log(places, "second orignal");
const reversePlaces = [...places].reverse();

console.log(reversePlaces, "reversed copy");
console.log(places, "third orignal");
const secondReverse = [...reversePlaces].reverse();
console.log(places.sort(), "sorted orinal")

