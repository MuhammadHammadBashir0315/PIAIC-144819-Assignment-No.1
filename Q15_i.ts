const guestList: string[] = ["Ejaz","Tayyab","Zia","Hassan"]

guestList.forEach(guest =>
    {
        console.log(`Hi ${guest} you are invited`)
    })
const missing = guestList.pop();
console.log(guestList)
console.log(missing)
const addMember: string = "Zain" 
guestList.push(addMember)
guestList.forEach(guest =>
    {
        console.log(`Hi ${guest} you are invited`)
    })
