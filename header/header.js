// const user = document.getElementById("user");
// if (sessionStorage.getItem("currentUser") != null) {
//     const stringifyuserDetail = sessionStorage.getItem("currentUser");
//     const userDetail1 = JSON.parse(stringifyuserDetail);

//     user.innerHTML =
//         `<a class="nav-link" href="#">${userDetail1.Name} <i class="fa-solid fa-user"></i></a>`;

// }
// console.log(sessionStorage.getItem("currentUser"));
// // localStorage.setItem("productsArrayINCart","[]");


// const boxs = document.getElementById("box");
// user.onclick = (event) => {
//     boxs.innerHTML = ` 
// <form id="enter-login">
// <i  id="times"  class="fas fa-times"></i>
// <div class="mb-3">
// <label for="exampleInputEmail1" class="form-label">INSERT YOUR EMAIL </label>
// <input  type="email"  id="exampleInputEmail1" placeholder="@" required>
// </div>
// <button  id="new-user"type="button" class="btn btn-light btn-lg">NEW USER?</button>
// <button id="submit" type="submit" class="btn btn-light btn-lg">FOR SUBMIT</button>
// <img src="../../assets/logo.png" width="200px">
// </form>`;
//     const times = document.getElementById("times");
//     //לחיצה על החץ 
//     times.onclick = (event) => {
//         boxs.innerHTML = "";
//     }


//     const box = {
//         enterLogin: document.getElementById("enter-login"),
//         exampleInputEmail1: document.getElementById("exampleInputEmail1"),
//         newUser: document.getElementById("new-user")
//     }
//     box.enterLogin.onsubmit = (event) => {
//         event.preventDefault();
//         if (localStorage.getItem(box.exampleInputEmail1.value) === null) {
//             alert("ניכר שאתה משתמש חדש במערכת, הכנס כמשתמש חדש");
//             box.newUser.click();
//         }
//         else {
//             sessionStorage.setItem("currentUser", localStorage.getItem(box.exampleInputEmail1.value));
//             boxs.innerHTML = "";
//             const username = sessionStorage.getItem("currentUser");
//             const userparse = JSON.parse(username);
//             user.innerHTML =
//                 `<a class="nav-link" href="#">${userparse.Name} <i class="fa-solid fa-user"></i></a>`;
//             location.reload();
//         }
//     }

//     //:כשלוחצים על ניו יוזר
//     box.newUser.onclick = (event) => {

//         box.enterLogin.innerHTML = ` <i  id="arrow-right"  class="fas fa-arrow-right"></i>

//     <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">INSERT YOUR EMAIL </label>
//      <input  type="email"  id="exampleInputEmail1" placeholder="@" required>
//     </div>
//      <div class="mb-3">
//       <label for="exampleInputName1" class="form-label">INSERT YOUR NAME</label>
//       <input type="text"   id="exampleInputName1" placeholder="your name" required>
//      </div>
//      <div class="mb-3">
//       <input type="checkbox"  id="exampleCheck1"  >
//       <label  for="exampleCheck1">Check me out
//       <i class="far fa-grin-beam"></i>
//       </label>
//       </div>
//     <button id="submit" type="submit" class="btn btn-light btn-lg">FOR SUBMIT</button>
//     <img src="../../assests/ללין-שחור.png" width="200px">`;
// ///תקינות לקלט שם משתמש
// const name=document.getElementById("exampleInputName1");

// name.onkeydown = function(event) {
//     if( !isKeyValid1(event.key)) {
//         event.preventDefault();
//     }
//   }

// const isKeyValid1 = function(key) {
//     return key >= 'a' && key <= 'z' 
//         || (key >= 'A' && key <= 'Z')||(key >= 'א' && key <= 'ת')
//         || key === ' '
//   }


//         box.enterLogin.style.height = "450px";
//         const arrowright = document.getElementById("arrow-right");
//         //לחיצה על החץ 
//         arrowright.onclick = (event) => {
//             user.click();

//         }
//         // //זכור אותי
//         const check = document.getElementById("exampleCheck1");
//         let flag = 0;
//         check.onclick = (event) => {
//             if (flag === 0)
//                 flag = 1;
//             else
//                 flag = 0;
//         }
//         box.enterLogin.onsubmit = (event) => {
//             const userData = {
//                 Email: document.getElementById("exampleInputEmail1").value,
//                 Name: document.getElementById("exampleInputName1").value
//             }




//             if (localStorage.getItem(userData.Email) != null) {
//                 alert("אתה כבר מוכר במערכת, הכנס כמשתמש מוכר");
//                 user.click();
//             }
//             else {
//                 event.preventDefault();

//                 if (flag === 1) {
//                     console.log("click");
//                     localStorage.setItem(userData.Email, JSON.stringify(userData));
//                 }
//                 else {
//                     console.log("oooo");
//                 }
//                 sessionStorage.setItem("currentUser", JSON.stringify(userData));
//                 boxs.innerHTML = "";
//                 location.reload();
//             }

//         }
//     }
// }
 

const openList = document.getElementById("openList");
const list = document.getElementById("list");
list.onclick = () => {
    openList.style.display = "flex";
}
openList.onclick = () => {
    if(openList.style.display==="flex")
         openList.style.display = "none";
}
