let Names: string[] = ["Ejaz" , "Hammad" , "Tayyab","Admin" , "Hassan"]
Names.forEach(name => {
    if(name == "Admin"){
        console.log("Hello Admin would you to see a status report ")
    }else{
        console.log(`Hi ${name} thank you for logging in again `)
    }
})
