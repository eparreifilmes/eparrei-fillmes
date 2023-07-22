const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');

form.addEventListener("submit", (event => {
    event.preventDefault();

    if(nome.value === ''){
    alert('Informe seu nome!');
    return;
}

if(inputEmail.value === '' || !isEmailValid(inputEmail.value)){
    alert('Informe seu email! ');
    alert('EX: fulano@dominio.com');
    return;
}

if(assunto.value === ''){
    alert('Informe sobre qual assunto deseja tratar');
}

if(mensagem.value === ''){
    alert('Escreva sua mensagem para proseguir com o contato');
}

form.submit();
}));

const isEmailValid = (email) => {
    
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    )

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}
