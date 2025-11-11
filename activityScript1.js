function takeName(){
    var name = document.getElementById("completeName").value
    var separatedName = []
    var firstName = ''
    var secondName = ''
    const findSpace = name.indexOf(" ")
    if(findSpace == -1){
        separatedName.push(name)
        return separatedName
    }
    else{
        for(let i = 0; i < name.length; i++){
            if(i < findSpace){
                firstName += name[i]; 
            }
            else if (i > findSpace){
                secondName += name[i]
            }
        }
        separatedName.push(firstName)
        separatedName.push(secondName)
        return separatedName
    }
}   
function showNames(){
    const names = takeName()
    document.getElementById('firstName').innerHTML = names[0]
    document.getElementById('secondName').innerHTML = names[1]
}
