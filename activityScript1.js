function takeName(){
    var name = document.getElementById("completeName").value
    var separatedName = []
    const findSpace = name.indexOf(" ")
    if(findSpace == -1){
        separatedName.push(name)
    }
    else{
        var firstName = name.slice(0, findSpace)
        var secondName = name.slice((findSpace + 1))
        separatedName.push(firstName, secondName)
    }
    return separatedName
}   
function showNames(){
    const names = takeName()
    document.getElementById('firstName').innerHTML = names[0]
    document.getElementById('secondName').innerHTML = names[1]
}
