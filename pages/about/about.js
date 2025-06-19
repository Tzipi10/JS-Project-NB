//עידכון השם ב-התחברות
const userName=sessionStorage.getItem('firstName');
const inputName=document.getElementById('user');
if(userName){
inputName.innerHTML = `<a class="nav-link" href="#">${userName} <i class="fa-solid fa-user"></i></a>`;
}
