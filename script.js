function takeFirstName(name){
    var firstName = ''
    const findSpace = name.indexOf(" ")
    if(findSpace == -1){
        firstName = name
    }
    else{
        for(let i = 0; i < name.length; i++){
            if(name[i] != name[findSpace]){
                firstName += name[i]; 
            }
            else{
                break;
            }
        }
    }
    return document.getElementById("firstName").innerHTML(firstName)
}
