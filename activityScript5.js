// ====== LIMITE DE CHECKBOX ======
const checkboxes = document.querySelectorAll(".checkbox");
const maxMarcados = 3;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {

        const marcados = document.querySelectorAll(".checkbox:checked").length;

        if (marcados > maxMarcados) {
            checkbox.checked = false;
            alert(`Você só pode selecionar até ${maxMarcados} atividades`);
        }
    });
});

function verifyEmail(){
    const contentEmail = document.querySelector('#email').value
    
    if(!(contentEmail.includes('@')) || !(contentEmail.includes('.'))){
         alert('Email inválido, coloque no padrã0 estabelecido')
    }
    else{
        return true
    }
}

function verifyCamps() {
    const camposObrigatorios = document.querySelectorAll('.obrigatorio');

    let campoVazio = false;

    camposObrigatorios.forEach(valor => {


        if (valor.type === "radio") {

            const radiosDoGrupo = document.getElementsByName(valor.name);
            let algumMarcado = false;


            Array.from(radiosDoGrupo).forEach(radio => {
                if (radio.checked) {
                    algumMarcado = true;
                }
            });

            if (!algumMarcado) {
                campoVazio = true;
            }
        }

        // Qualquer outro input/select obrigatório
        else {
            if (valor.value.trim() === "") {
                campoVazio = true;
            }
        }
    });

    return campoVazio;
}



function ifValid(event) {

    event.preventDefault();

    verifyEmail()

    const invalid = verifyCamps();

    if (invalid) {
        alert('Há campos inválidos/faltando');
    } else {
        alert('Pré-Matrícula concluída');
    }
}


const enviar = document.getElementById("send");
enviar.addEventListener("click", ifValid);



const enviar = document.getElementById("send");
enviar.addEventListener("click", ifValid);
