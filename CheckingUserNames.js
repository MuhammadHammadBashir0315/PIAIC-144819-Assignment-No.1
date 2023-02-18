var current_users = ["Hammad", "Ejaz", "Tayyab", "Zia", "Atiq"];
var new_users = ["junaid", "Danyal", "Hamza", "Zia", "Atiq"];
for (var i = 0; i <= current_users.length; i++) {
    // for(var j=i; j<=new_users.length; i++){
    //     if (current_users[i] == new_users[i]){}
    // }
    if (current_users[i] == new_users[i]) {
        console.log("You need to enter new name");
    }
    else {
        console.log("User name is available ");
    }
}
