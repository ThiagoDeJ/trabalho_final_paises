function login(){

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    const usuariovalido = 'admin';
    const senhavalida = '123';

    if (user === usuariovalido && pass === senhavalida){
        localStorage.setItem('auth', 'true');
        window.location.href = 'brasil.html';
    } else{
        document.getElementById('msgerror').style.display = 'block'
    }
}