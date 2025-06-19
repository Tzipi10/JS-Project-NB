// עידכון השם ב-התחברות
const userNameAccessories = sessionStorage.getItem('firstName');
const inputNameAccessories = document.getElementById('user');
if (userNameAccessories) {
    inputNameAccessories.innerHTML = `<a class="nav-link" href="#">${userNameAccessories} <i class="fa-solid fa-user"></i></a>`;
}

const allProducts = document.getElementById('allProducts');
const searchForm = document.querySelector('#Search');
const sortSelect = document.querySelector('#sortSelect');
const cartcheckArray = document.querySelectorAll('.fa-cart-arrow-down');
// const imgCategorry=document.getElementById('imgCategorry');
// מסנן את המוצרים לפי הקטגוריה שנבחרה
const paramsString = location.search;
const searchParams = new URLSearchParams(paramsString);
const typeCategory = searchParams.get("productCategory");

const store = {
    products: [],
};

const displayConfig = {
    searchBy: '',
    sortBy: '',
};

$.ajax({
    url: '../../data/products.json',
    success: (data) => {
        console.log("הצליח לקרוא מג'ייסון")
        const { products } = data;
        store.products = products;
        setProducts();

        // מיון לפי
        const fields = [{ key: "id", value: "קוד" }, { key: "price", value: "מחיר" }, { key: "name", value: "שם" }]
        fields.forEach((field) => {
            console.log(field);
            const option = document.createElement('option');
            option.innerHTML = field.value;
            option.value = field.key;
            sortSelect.append(option);
        });
    }
});
// הצגת המוצרים
const setProducts = () => {
    console.log(store.products);
    // לפי קטגוריה
    const filteredCategory = filterCategory(store.products, typeCategory);
    // סינון לפי שם
    const filteredProducts = filterProducts(filteredCategory, displayConfig.searchBy);
    // מיון לפי
    const sortedProducts = sortProducts(filteredProducts, displayConfig.sortBy);
    allProducts.innerHTML = '';
    console.log(sortedProducts);
    sortedProducts.forEach((product) => {
        console.log(product);
        const { id, name, price, category, descrepition } = product;
        sessionStorage.setItem(`sortBy`, displayConfig.sortBy);
        const div = document.createElement('div');
        // console.log(`${name} ${price} ${category} ${descrepition}  ,../gallery/gallery.html?productCode=${product.id}"`);
        // div.innerHTML = `<a href="../gallery/gallery.html?productCode=${product.id}"">${name} ${price} ${category} ${descrepition}</a>`;
        console.log(div.innerHTML);
        div.innerHTML +=
            `<div id="divpr" class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                 <a href="../productShow/productShow.html?productCode=${product.id}"><img id="prodImg" src="${product.path}"/></a>
                 <p   id="name"    >${product.name} </p>
                 <div id="bottomicons">
                    <p   id="price"   ><i class="fas fa-shekel-sign" ></i> ${product.price} </p>
                    <a name="cartIcon" class='cartIcon' id=${product.id} onclick="addToCart(${product.id})"><i class="${product.id} fas fa-cart-arrow-down "></i></a>
                    <i  far fa-heart "   title="I love it's :)"  ></i>
                 </div>
            </div>`;
        sortSelect.style.display = "flex";
        searchForm.style.display = "flex";
        if (typeCategory != "accessories") {
            imgCategorry.style.display = "none";
            toTopBtn.style.display ="inline";                            //עידכון
        }
        allProducts.append(div);
        console.log(allProducts);
        console.log("הפפננדתתתתי");
    });
}

// כפתור הוספה לסל
// פונקצייה בשביל בדיקה האם המוצר כבר קיים בעגלה
const addToCart = (productId) => {
    // debugger
    console.log("נלחצתיייייייייי");
    const product = store.products.find(p => p.id == productId);
    const bag = currentBag();
    const producrFromBag = bag.find((p) => p.id === product.id);
    // const cartIcon=e.
    const cartIcon = document.getElementById(`${productId}`);
    // const cartIcon = document.getElementById(`#${productId}`);
    cartIcon.classList = "fas fa-thumbs-up";
    cartIcon.innerHTML = "  נוסף לסל";
    cartIcon.style.color="#333";                     /*חדש חדש חדש */
    cartIcon.style.textDecoration="none";
    
    // cartIcon.style.fontFamily= system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    // cartIcon.style.fontFamily='Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    //if (typeCategory != "accessories") { ...רק בגלריה -אחרי לחיצה לבחירת מוצר הכפתור יהפוך ללא מאופשר כי אין ענין לבחור תמונה פעמיים}
    // cartIcon.disabled = true

    if (producrFromBag) {
        producrFromBag.amount++;
    }
    else {
        const currentProduct = {
            id: product.id,
            product,
            amount: 1
        };
        bag.push(currentProduct);
    }
    // אני יכולה אחר כך לעשות פעולות על המערך של העגלה כי הוא נמצא בסיישן סטורג', לדוג' מעבר לתשלום
    sessionStorage.setItem('currentBag', JSON.stringify(bag));
    console.log(JSON.stringify(bag), " -גייסון  מוצרים בעגלה");
    // console.log(sessionStorage.setItem('currentBag'), " מוצרים בעגלה");
};
// חיפוש
const filterProducts = (products, searchText) => {
    return products.filter(product => product.name.includes(searchText));
}

const filterCategory = (products, typeCategory) => {
    return products.filter(product => product.category.includes(typeCategory));
}

searchForm.onkeydown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        console.log(searchForm.SearchInput.value);
        const searchText = searchForm.SearchInput.value;
        displayConfig.searchBy = searchText;
        // לראות מה עם השם והסיסמה
        sessionStorage.setItem(`searchBy`, displayConfig.serchBy);
        setProducts();
    }
}

// מיון לפיsss
sortSelect.onchange = (event) => {
    const sortBy = event.target.value;
    displayConfig.sortBy = sortBy;
    setProducts();
}

const sortProducts = (products, sortBy) => {
    if (sortBy === '') {
        return products;
    }
    const sortedProducts = [...products];
    sortedProducts.sort((second, first) => {
        if (typeof second[sortBy] === 'number') {
            return second[sortBy] - first[sortBy];
        }
        if (typeof second[sortBy] === 'string') {
            return second[sortBy].localeCompare(first[sortBy]);
        }
    }
    );
    return sortedProducts;
}

// הוספה לסל
//פונקצייה בשביל בדיקה האם העגלה ריקה
const currentBag = () => {
    const bag = sessionStorage.getItem('currentBag');
    if (!bag) {
        return [];
    }
    return JSON.parse(bag);
}

const header2 = document.getElementById('header2');
const h2 = document.querySelector('h2');
const categoryHeb = document.getElementById(typeCategory);
if (categoryHeb) {
    if (typeCategory !="accessories") {
        h2.innerHTML = categoryHeb.innerHTML;
        header2.classList.add(`${typeCategory}`);
    }                                                                           // עדכון
}



