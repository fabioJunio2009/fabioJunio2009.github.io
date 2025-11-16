function calculateIMC(){
    // aqui pego os valores nos elementos com esses id abaixos
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    // se a altura for menor ou igual a zero, incluindo um espaço vazio, ou o peso for menor ou igual a 0
    // também incluindo um espaço vazio, retornará falso 
    const imc = (height <= 0 || weight <= 0) ? false : Number(weight/height**2).toFixed(2)  
    return imc  
}

function getIMC(){
    //pegando os dados
    const imc = calculateIMC()
    const name = document.getElementById("name").value
    const Verifyname = (name === '' || Number(name) < 0) ? false : name
    
    //validação das informações obtidas 
    if(imc === false || Verifyname === false ){
        document.getElementById("result").innerHTML = 'Um ou mais campos está/estão inválido(s)'
    }
    else{
        const message = `Olá, ${Verifyname}. O seu IMC é de ${imc}`
         document.getElementById("result").innerHTML = message
    }
}
