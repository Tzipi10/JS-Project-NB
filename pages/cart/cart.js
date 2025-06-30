//עידכון השם ב-התחברות
const userNameCart=sessionStorage.getItem('firstName');
const inputNameCart=document.getElementById('user');
const bdiSum=document.querySelector('bdi');
if(userNameCart){
inputNameCart.innerHTML = `<a class="nav-link" href="#">${userNameCart} <i class="fa-solid fa-user"></i></a>`;
}

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
const allCart = document.querySelector('.cartTableSection');
const cartTable=document.getElementById('cartTable');
let totalSum = ()=> {
    let totalSum = 0;
        let myCart = JSON.parse(sessionStorage.getItem(`currentBag`));
        myCart.forEach(e => {
                totalSum += (e.amount * e.product.price);
        });
        return totalSum;
}
//אצלינו זה לא  codeUser אלא currentUser

{/* <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0"></table> */}

/////////////
function getTable() {
    return `
    <thead>
        <tr>
            <th class="product-remove">  &nbsp;</th>
            <th class="product-thumbnail"> &nbsp;</th>
            <th class="product-name">מוצר</th>
            <th class="product-price">מחיר</th>
            <th class="product-quantity">כמות</th>
            <th class="product-subtotal">סכום ביניים</th>
        </tr>
    </thead>
    <tbody>
    
    `
}
//  הקלאס של כפתור חזרה לאתרעידכון 
// const tbody = document.querySelector('tbody');
function showMyCart() {
    let myCart = JSON.parse(sessionStorage.getItem(`currentBag`));
    if (myCart === null || myCart.length===0) {
        allCart.innerHTML=`
        <div class="">
         <img id="imgEmpty" src="../../assets/nullCart.png" alt="" >
         <p class="wd-empty-page">
			סל הקניות שלך ריק כרגע.		</p>
         <p class="emty-text" ">לפני ההמשך לתשלום עליך להוסיף מוצרים לעגלת הקניות שלך. <br> תוכלו למצוא הרבה מוצרים מעניינים באתר שלנו.</p>
         <p class="wc-proceed-to-checkout">
		    <a class="checkoutButton" href="../gallery/gallery.html"> 
			  חזרה לאתר			</a>
	      </p>
		</div>
        `;
        //כשהסל ריק לא יראו את הדיב של סיכום ולתשלום
       let sumDiv= document.querySelector('.cartTotalsInner');
       sumDiv.style.display='none';

    //    let paymentDiv=document.getElementById('payment');
    //    paymentDiv.style.display='none'; 

    }
    else {
        cartTable.innerHTML = getTable();
        // הצגת המוצרים
        myCart.forEach(e => {
            // const amountInput = document.getElementById("quantity_66b22918a01da");
            let subTotal = e.product.price * e.amount;
            cartTable.innerHTML += `<tr class="woocommerce-cart-form__cart-item cart_item">
    
                <td class="product-remove">
                    <a href="#" class="remove" aria-label="Remove this item" data-product_id="1180" data-product_sku="20285-20288" onclick="deleteProduct(${e.product.id})">×</a></td>
    
                <td class="product-thumbnail">
                    <a href="../productShow/productShow.html?productCode=${e.product.id}"><img width="150px" src="${e.product.path}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" decoding="async" sizes="(max-width: 420px) 100vw, 420px"> </a></td>
    
                <td class="product-name" data-title="מוצר">
                    <a href="../productShow/productShow.html?productCode=${e.product.id}">${e.product.name}</a></td>
    
                <td class="product-price" data-title="מחיר">
                    <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">₪</span>${e.product.price}</bdi></span></td>
    
                <td class="product-quantity" data-title="כמות">
                    <div class="quantity">
                        <input type="button" value="-" class="minus" onclick="minusProduct(${e.product.id})">
                       
                            <input type="number" id="quantity_66b22918a01da" class="input-text qty text" step="1" min="0" max="" name="cart[fb21ac53180fda2c8e4e9bfd4477fe36][qty]" value="${e.amount}" title="Qty" placeholder="" inputmode="numeric">
                                <input type="button" value="+" class="plus" onclick="plusProduct(${e.product.id})">
                                </div> </td>
    
                            <td class="product-subtotal" data-title="סכום ביניים">
                                <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">₪</span>${subTotal}</bdi></span></td>
             </tr>`;
            bdiSum.innerHTML = '₪' + totalSum();
            // מחיקת מוצר

            // const deleteIcon= document.querySelector('.remove');

            deleteProduct = (prodId) => {
                let curBug = JSON.parse(sessionStorage.getItem('currentBag'));
                if (e.amount > 1) {
                    curBug[curBug.map(p => p.id).indexOf(prodId)].amount--;
                    sessionStorage.setItem(`currentBag`, JSON.stringify(curBug));
                    showMyCart();
                }
                else {
                    curBug.splice(curBug.map(p => p.id).indexOf(prodId), 1);
                    sessionStorage.setItem(`currentBag`, JSON.stringify(curBug) || []);
                    showMyCart();
                }
            }

            plusProduct = (prodId) => {
                let curBug = JSON.parse(sessionStorage.getItem('currentBag'));
                curBug[curBug.map(p => p.id).indexOf(prodId)].amount++;
                sessionStorage.setItem(`currentBag`, JSON.stringify(curBug));
                showMyCart();
            }

            minusProduct = (prodId) => {
                let curBug = JSON.parse(sessionStorage.getItem('currentBag'));
                let currentProduct=curBug[curBug.map(p => p.id).indexOf(prodId)];
                if (currentProduct.amount > 1) {
                    currentProduct.amount--;
                    sessionStorage.setItem(`currentBag`, JSON.stringify(curBug));
                    showMyCart();
                }
            }
        });
        //אחרי הforeach
        cartTable.innerHTML+=`
           </tbody>
        `;
    }
}

showMyCart();


const paymentBtn=document.querySelector('.wc-proceed-to-checkout');
// const payment = document.getElementById('payment');
// const paymentBtn = document.createElement('button')
// paymentBtn.classList.add('pinkBtn');
// paymentBtn.innerHTML = 'לתשלום';
// paymentBtn.id = "paymentBtn";``
// payment.appendChild(paymentBtn);

//פופאפ

document.getElementById('popup').style.display = 'none';

// לחיצה על תשלום
paymentBtn.onclick = () => {
        showPopup();
        // let totalSum = 0;
        // let myCart = JSON.parse(sessionStorage.getItem(`currentBag`));
        // myCart.forEach(e => {
        //         totalSum += (e.amount * e.product.price);
        // });

        const total = document.getElementById("total");
        total.innerHTML = `${totalSum()} ש"ח`;
        // debugger;
        // const userName = JSON.parse(sessionStorage.getItem("currentUser")).Name;
        const nameInput = document.getElementById('name');
        nameInput.value = userNameCart;
        nameInput.append(userNameCart);

        // const userEmail = JSON.parse(sessionStorage.getItem("currentUser")).Email;
        // const emailInput = document.getElementById('email');
        // emailInput.placeholder = userEmail ;
        // emailInput.append(userEmail );

}
// לחיצה על שליחה
const send = document.getElementById("send");
const sendOnclick = () => {
    // alert("נשלח!!! ");
        sessionStorage.setItem(`myCart`, JSON.stringify([]));
        sessionStorage.setItem(`currentBag`, JSON.stringify([]));

        cartTable.innerHTML = getTable();
        closePopup();
        window.location="../payment/payment.html";
}

// הצגת הפופאפ
const showPopup = () => {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
}

// סגירת הפופאפ
const closePopup = () => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
}
// כפתור לסגירת הפופאפ
const close = document.getElementById("close");
close.onclick = () => {
        closePopup();
}