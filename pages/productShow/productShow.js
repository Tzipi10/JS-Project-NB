const searchParams = new URLSearchParams(location.search);
const productCode = parseInt(searchParams.get("productCode"));

const container = document.getElementById("container");

// console.log(productCode, ":קוד");
// debugger

const store = {
  products: [],
};

$.ajax({
  url: "../../data/products.json",
  success: (data) => {
    const { products } = data;
    store.products = products;
    const currentProduct = data.products.find((pr) => pr.id === productCode);
    if (!currentProduct) {
      location.href = "./";
    }
    let categoryHref =
      currentProduct.category === "accessories"
        ? "../accessories/accessories.html?productCategory=accessories"
        : `../gallery/gallery.html?productCategory=${currentProduct.category}`;

    container.innerHTML = `<div id="cardProd">
<div><img id="imgShow" /></div>
</div>

<div id="detail">
<h1></h1>

<p id="price" data-fontsize="23"><span class="woocommerce-Price-amount amount">
        <bdi><span class="woocommerce-Price-currencySymbol">₪</span></bdi></span></p>

<p id="descrepition" data-fontsize="18"></p>

<div id="addToCart">
    <div id="addButton">
        <button onclick="addToCart(${productCode})">הוספה לסל</button>
    </div>
    <div class="product-quantity" data-title="כמות">
        <div class="quantity">
            <input type="button" value="-" class="minus" onclick="minusProduct(${productCode})">
            <input type="number" id="quantity_66b22918a01da" class="input-text qty text" step="1" min="0"
                max="" name="cart[fb21ac53180fda2c8e4e9bfd4477fe36][qty]" value="1" title="Qty"
                placeholder="" inputmode="numeric">
            <input type="button" value="+" class="plus" onclick="plusProduct(${productCode})">
        </div>
    </div>
</div>
    <div id="category">
        <p>קטגוריה: <span><a href="${categoryHref}"id="categoryA">${currentProduct.category}</a></span></p>
    </div>
</div>`;
    // console.log("המוצר הנוכחי");
    // console.log(currentProduct);
    document.getElementById("imgShow").src = currentProduct.path;
    document.querySelector("h1").innerHTML = currentProduct.name;
    document.querySelector("bdi").innerHTML += currentProduct.price;
    document.getElementById("descrepition").innerHTML =
      currentProduct.descrepition;
    // document.getElementById("quantity_66b22918a01da").value = 1; //amount  לקבל את הכמות של המוצר מהעגלה. אם אין אז 1
    document.getElementById("categoryA").innerHTML = currentProduct.category;
  },
});

const addToCart = (productId) => {
  // debugger
  // console.log("נלחצתיייייייייי");
  const product = store.products.find((p) => p.id == productId);
  const bag = currentBag();
  const producrFromBag = bag.find((p) => p.id === product.id);

  if (producrFromBag) {
    producrFromBag.amount += parseInt(quantity_66b22918a01da.value);
  } else {
    const currentProduct = {
      id: product.id,
      product,
      amount: parseInt(quantity_66b22918a01da.value),
    };
    bag.push(currentProduct);
  }
  // אני יכולה אחר כך לעשות פעולות על המערך של העגלה כי הוא נמצא בסיישן סטורג', לדוג' מעבר לתשלום
  sessionStorage.setItem("currentBag", JSON.stringify(bag));
  // console.log(JSON.stringify(bag), " -גייסון  מוצרים בעגלה");
  // console.log(sessionStorage.setItem('currentBag'), " מוצרים בעגלה");
  window.location = "../cart/cart.html";
};

// הוספה לסל
//פונקצייה בשביל בדיקה האם העגלה ריקה
const currentBag = () => {
  const bag = sessionStorage.getItem("currentBag");
  if (!bag) {
    return [];
  }
  return JSON.parse(bag);
};

const plusProduct = (prodId) => {
  let curBug = JSON.parse(sessionStorage.getItem("currentBag"));
  curBug[curBug.map((p) => p.id).indexOf(prodId)].amount++;
  sessionStorage.setItem(`currentBag`, JSON.stringify(curBug));
  document.getElementById("quantity_66b22918a01da").value +=1;
};

const minusProduct = (prodId) => {
  let curBug = JSON.parse(sessionStorage.getItem("currentBag"));
  let currentProduct = curBug[curBug.map((p) => p.id).indexOf(prodId)];
  if (currentProduct.amount > 1) {
    currentProduct.amount--;
    sessionStorage.setItem(`currentBag`, JSON.stringify(curBug));
  }
};
