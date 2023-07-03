// const fs = require('fs');
// const fileBuffer = fs.readFileSync('../account.json','utf-8');
// const akun = JSON.parse(fileBuffer);

// const email = akun[0].email;
// const pass = akun[0].password;

const email = 'mervinwijaya@gmail.com';
const pass = 'mervinwijaya'
function verifAkun(emailInput,passInput){
  
    if(emailInput.value == email && passInput.value==pass)window.location.href="/baguker";
    else{alert("email atau password yang anda masukkan salah!")}
}

const formData = document.querySelector('.loginForm');
formData.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Form telah di klik")
    const emailInput = document.querySelector('.email');
    const passInput = document.querySelector('.pass');

    verifAkun(emailInput,passInput)
})
