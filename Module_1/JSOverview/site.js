function showPassword(){
    if(document.getElementById('pw').type == 'password'){
        document.getElementById('pw').type = 'text';
        document.getElementById('btnPW').innerText = 'Hide Password'
    }else{
        document.getElementById('pw').type = 'password';
        document.getElementById('btnPW').innerText = 'Show Password'
    }
}