let name = "nasirdin123 asdasd";
let name2 = "askar1235";

function compareLength(name, name2, num){
    if(name.length > name2.length){
        let raznitsa = name.length-name2.length
    
        console.log(name + "is Bigger than " + name2 + " by " + raznitsa)
        console.log(raznitsa * num)
    } else {
        console.log(name2 + "Is bigger than " + name )
        console.log(raznitsa * num)
    }
}

compareLength(name,name2, 5);