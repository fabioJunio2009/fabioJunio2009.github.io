// ====== LIMITE DE CHECKBOX ======
const checkboxes = document.querySelectorAll(".checkbox");
const maxMarcados = 3;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const marcados = document.querySelectorAll(".checkbox:checked").length;

        if (marcados > maxMarcados) {
            checkbox.checked = false;
            alert(`Você só pode selecionar até ${maxMarcados} atividades.`);
        }
    });
});


// ====== VERIFICAÇÃO DE E-MAIL ======
function verifyEmail() {
    const email = document.querySelector("#email").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido, coloque no padrão estabelecido.");
        return false;
    }
    return true;
}


// ====== VERIFICAÇÃO DOS CAMPOS OBRIGATÓRIOS ======
function verifyCamps() {
    const camposObrigatorios = document.querySelectorAll(".obrigatorio");
    let campoVazio = false;

    camposObrigatorios.forEach(campo => {

        // --- Caso seja um grupo de rádio ---
        if (campo.type === "radio") {
            const radiosDoGrupo = document.getElementsByName(campo.name);
            const algumMarcado = Array.from(radiosDoGrupo).some(r => r.checked);

            if (!algumMarcado) campoVazio = true;
        }

        // --- Inputs e selects obrigatórios ---
        else {
            if (!campo.value || campo.value.trim() === "") {
                campoVazio = true;
            }
        }
    });

    return campoVazio;
}


// ====== FUNÇÃO QUE VALIDA TUDO ANTES DO ENVIO ======
function ifValid(event) {
    event.preventDefault();

    const emailValido = verifyEmail();
    const camposInvalidos = verifyCamps();

    if (!emailValido || camposInvalidos) {
        alert("Há campos inválidos/faltando!");
    } 
    else {
        alert("Pré-Matrícula concluída!");
    }
}


// ====== EVENTO DO BOTÃO ENVIAR ======
const enviar = document.getElementById("send");
enviar.addEventListener("click", ifValid);




const enviar = document.getElementById("send");
enviar.addEventListener("click", ifValid);
