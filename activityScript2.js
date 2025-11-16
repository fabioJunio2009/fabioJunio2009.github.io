function calculateIMC(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    return Number(weight/height**2).toFixed(2)
    
    
}

function getIMC(){
    const imc = calculateIMC(); 
    const name = document.getElementById("name").value;
    const message = `Olá ${name}. O seu IMC é de ${imc}.`;
    document.getElementById("result").innerHTML = message
}