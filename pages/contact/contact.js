//עידכון השם ב-התחברות
const userNameContact=sessionStorage.getItem('firstName');
const inputNameContact=document.getElementById('user');
if(userNameContact){
inputNameContact.innerHTML = `<a class="nav-link" href="#">${userNameContact} <i class="fa-solid fa-user"></i></a>`;
}
