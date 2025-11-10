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
function getFirstName(){
    document.getElementById('firstName').innerHTML = takeName()[0]
}
function getSecondName(name){
    document.getElementById('secondName').innerHTML = takeName()[0]
}
