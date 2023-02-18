const guestList: string[] = ["Ejaz","Tayyab","Zia","Hassan"]

guestList.forEach(guest =>
    {
        console.log(`Hi ${guest} you are invited`)
    })
console.log(" guests we found the bigger dinner table  ")
guestList.unshift("junaid")
guestList.splice(2,0, "Khurram")
guestList.push("qureshi")

guestList.forEach(guest =>
    {
        console.log(`Hi ${guest} you are invited`)
    })
