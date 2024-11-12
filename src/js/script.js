document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nome = document.getElementById('user');
    const email = document.getElementById('emailPessoal');
    const telefone = document.getElementById('phone');
    const mensagem = document.getElementById('mensagemCariosa');

    function validarCampo(campo, validar) {
        campo.classList.remove('valido', 'invalido');
        campo.classList.add(validar ? 'valido' : 'invalido');
    }

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function validarTelefone(telefone) {
        const regexTelefone = /^\d{10,11}$/;
        const numeroSemMascara = telefone.replace(/\D/g, '');
        return regexTelefone.test(numeroSemMascara);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeValido = nome.value.trim() !== "";
        validarCampo(nome, nomeValido);

        const emailValido = validarEmail(email.value);
        validarCampo(email, emailValido);

        const telefoneValido = validarTelefone(telefone.value);
        validarCampo(telefone, telefoneValido);

        const mensagemValida = mensagem.value.trim() !== "";
        validarCampo(mensagem, mensagemValida);

    });
});