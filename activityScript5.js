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


function verifyCamps() {
    const camposObrigatorios = document.querySelectorAll('.obrigatorio');
    let campoVazio = false;

    camposObrigatorios.forEach(valor => {

        // Caso seja um RADIO
        if (valor.type === "radio") {

            const radiosDoGrupo = document.getElementsByName(valor.name);
            let algumMarcado = false;

            // Converte NodeList para Array
            Array.from(radiosDoGrupo).forEach(radio => {
                if (radio.checked) {
                    algumMarcado = true;
                }
            });

            if (!algumMarcado) {
                campoVazio = true;
            }
        }

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

    const invalid = verifyCamps();

    if (invalid) {
        alert('Há campos inválidos/faltando');
    } else {
        alert('Pré-Matrícula concluída');
    }
}


const enviar = document.getElementById("send");
enviar.addEventListener("click", ifValid);
