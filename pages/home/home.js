//עידכון השם ב-התחברות
const userNameHome = sessionStorage.getItem('firstName');
const inputNameHome = document.getElementById('user');
if (userNameHome) {
    inputNameHome.innerHTML = `<a class="nav-link" href="#">${userNameHome} <i class="fa-solid fa-user"></i></a>`;
}
// debugger
const searchInput = document.getElementById('Search');
// container  ,enterשניות לאחר טעינת העמוד יוכנס ל-?
// המכיל את כל מה שיש בריבוע הכניסה
const enter = document.getElementById('enter');
const body = document.querySelector('body');
setTimeout(() => {
    if(!(sessionStorage.getItem('firstName'))){
    const container = document.createElement('div');
    container.classList.add('containerLogin');

    //רקע אפור שקוף
    const opacity = document.createElement('div');
    opacity.classList.add('opacity');
    container.append(opacity);

    const login = document.createElement('div');
    login.classList.add('login');
    container.append(login);

    const title = document.createElement('h4');
    title.classList.add('loginTitle');
    title.innerHTML = '...איזה מזל שאת פה';
    login.append(title);

    const inputName = document.createElement('input');
    inputName.type = ('text');
    inputName.placeholder = ('שם');
    inputName.id = "nameEnter";
    login.append(inputName);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    login.append(buttons);
    const buttonMom = document.createElement('button');
    buttonMom.classList.add('wc-proceed-to-checkout');
    buttonMom.classList.add('checkoutButton');
    buttonMom.innerHTML = '<< NB אמא לנסיך';
    buttons.append(buttonMom);
    // buttonMom.onclick=()=>{
    //     console.log("bfbx,h");
    //     window.location="../gallery/gallery.html";
    // };

    // עידכוןןן
    const buttonPhotograper = document.createElement('button');
    buttonPhotograper.classList.add('wc-proceed-to-checkout');
    buttonPhotograper.classList.add('checkoutButton');
    buttonPhotograper.innerHTML = '<< צלמת מתעדכנת';
    buttons.append(buttonPhotograper);

    const imgLogo = document.createElement('img');
    imgLogo.src = "../../assets/logo.png";
    imgLogo.style.width = "50%";
    login.append(imgLogo);

    // let users = JSON.parse(localStorage.getItem('users')) || [];
    // let index = JSON.parse(localStorage.getItem('index'));

    buttonMom.onclick = () => {
        // debugger
        const name = document.getElementById("nameEnter");
        if ((name.value)) {
            // const email = document.getElementById('mail');
            // const pass = document.getElementById("password");
            // let exist = true;
            // let object = { "name": name.value, "passWord": pass.value, "email": email.value, "basket": [] };
            // for (let i = 0; i < users.length; i++) {
            //     if (object.name === users[i].name && object.passWord === users[i].passWord && object.email === users[i].email) {
            //         exist = false;
            //         alert('שם משתמש קיים במערכת')
            //     }
            // }
            // if (exist) {
            //     users.push(object);
            //     localStorage.setItem('users', JSON.stringify(users));
            //     alert('הרישום התבצע בהצלחה');
            //     container.remove();
            const userName = document.getElementById("user");
            userName.innerHTML = `<a class="nav-link" href="#">${name.value} <i class="fa-solid fa-user"></i></a>`;
            sessionStorage.setItem('firstName', name.value);
            window.location = "../gallery/gallery.html";
        }
        else {
            name.placeholder = "שדה חובה!!!!";
            name.style.width = "100%";
            name.style.backgroundColor = "#F09AA2";
        }
    }
    buttonPhotograper.onclick = () => {
        const name = document.getElementById("nameEnter");
        if ((name.value)) {
            //     const email = document.getElementById('mail');
            //     const pass = document.getElementById("password");
            //     let object = { "name": name.value, "passWord": pass.value, "email": email.value, "basket": [] };
            //     let index;
            //     let exist = true;
            //     for (let i = 0; i < users.length; i++) {
            //         if (object.name === users[i].name && object.passWord === users[i].passWord && object.email === users[i].email) {
            //             index = i;
            //             localStorage.setItem('index', JSON.stringify(index));
            //             exist = false;
            //             container.remove();
            //         }
            //     }
            //     if (exist) {
            //         alert('אחד הנתונים שהוקשו שגוי');
            //     }
            const userName = document.getElementById("user");
            userName.innerHTML = `<a class="nav-link" href="#">${name.value} <i class="fa-solid fa-user"></i></a>`;
            sessionStorage.setItem('firstName', name.value);
            window.location = "../accessories/accessories.html?productCategory=accessories";
        }
        else {
            name.placeholder = "שדה חובה!!!!";
            name.style.width = "100%";
            name.style.backgroundColor = "#F09AA2";
        }
    }
    // ?מוסתר-האם באמת להסתיר
    // body.classList.remove();

    opacity.onclick = () => {
        container.remove();
    }
    enter.append(container);
    
}
}, 1500)