document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();

    let inputUsuario = document.querySelector('input[type="email"]');
    let inputSenha = document.querySelector('input[type = "password"]');

    if (inputSenha.value.length < 8 || !inputUsuario.value.includes("@gmail.com")) {
        alert("Email de usuário ou senha não atendem aos requisitos mínimos.");

        inputUsuario.value = '';

        inputSenha.type = "password";
        document.getElementById('togglePassword').className = "bx bx-hide";
    }
    window.location.replace("../html/lojinha.html");

});

document.getElementById('togglePassword').addEventListener('click', function() {
    let inputSenha = document.getElementById('password');

    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        this.className = "bx bx-show";
    } else {
        inputSenha.type = "password";
        this.className = "bx bx-hide";
    }
});
