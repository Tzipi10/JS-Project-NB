//עידכון השם ב-התחברות
const userNameGallery=sessionStorage.getItem('firstName');
const inputNameGallery=document.getElementById('user');

if(userNameGallery){
inputNameGallery.innerHTML = `<a class="nav-link" href="#">${userNameGallery} <i class="fa-solid fa-user"></i></a>`;
}
