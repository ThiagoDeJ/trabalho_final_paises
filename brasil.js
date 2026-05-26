if(localStorage.getItem('auth') !== 'true'){
    window.location.href = 'index.html';
}

function logout(){
    localStorage.removeItem('auth');
    window.location.href = 'index.html';
}
