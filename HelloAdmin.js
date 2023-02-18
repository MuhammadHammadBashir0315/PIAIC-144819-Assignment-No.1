var Names = ["Ejaz", "Hammad", "Tayyab", "Admin", "Hassan"];
Names.forEach(function (name) {
    if (name == "Admin") {
        console.log("Hello Admin would you to see a status report ");
    }
    else {
        console.log("Hi ".concat(name, " thank you for logging in again "));
    }
});
