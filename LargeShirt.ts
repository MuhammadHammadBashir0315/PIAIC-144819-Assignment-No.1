let size1: string = "Small";
let size2: string = "Meduim";
let size3: string = "Large";

function make_shirt(size1: string , size2:string , size3:string){
    
    if(size1 || size2 || size3){
        console.log("I loke typescript")
    }else{
        console.log("size not available")
    }
}
make_shirt(size1,size2,size3)