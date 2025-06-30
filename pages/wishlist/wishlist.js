function loadWishlist() {
  //עידכון השם ב-התחברות
  const userNameGallery = sessionStorage.getItem("firstName");
  const inputNameGallery = document.getElementById("user");

  if (userNameGallery) {
    inputNameGallery.innerHTML = `<a class="nav-link" href="#">${userNameGallery} <i class="fa-solid fa-user"></i></a>`;
  }

  const wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
  const products = JSON.parse(localStorage.getItem("allProducts")) || [];

  const container = document.getElementById("wishlist-container");
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = `
        <div id="empty-wishlist" class="empty-message">
        <img src="../../assets/empty-heart2.png" alt="אין מועדפים" style="width:150px; height:auto;">
        <h3>רשימת המשאלות שלך ריקה</h3>
        <p>כשתאהב מוצרים, הם יופיעו כאן</p>
        <a href="../gallery/gallery.html" class="btn btn-primary">מעבר לגלריה</a>
    </div>
        `;
    return;
  }
  wishlist.forEach((id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      container.innerHTML += `<div id="divpr" data-id="${product.id}"  class="product col-lg-2 col-md-4 col-sm-6 col-xs-12">
                 <a href="../productShow/productShow.html?productCode=${product.id}"><img id="prodImg" src="${product.path}"/></a>
                 <p   id="nameP"    >${product.name} </p>
                 <div id="bottomicons">
                    <p   id="price"   ><i class="fas fa-shekel-sign" ></i> ${product.price} </p>
                    <a name="cartIcon" class='cartIcon' id=${product.id} onclick="addToCart(${product.id})">
                        <i class="${product.id} fas fa-cart-arrow-down "></i>
                    </a>
                    <i class="fas fa-trash remove-icon" title="הסר מהרשימה" onclick="removeFromWishlist(${product.id})"></i>
                  </div>
            </div>`;
    }
  });
}

function removeFromWishlist(id) {
  let wishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];

  // הסרה מהמועדפים ושמירה מחודשת
  wishlist = wishlist.filter((prodId) => prodId.toString() !== id.toString());
  sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
  // הסרה מה־DOM
  const item = document.querySelector(`.product[data-id="${id}"]`);
  if (item) {
    item.remove();
  }
  loadWishlist();
}

