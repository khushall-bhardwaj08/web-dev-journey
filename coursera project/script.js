let cart = [];

// =====================
// DOM ELEMENTS
// =====================

const cartIcon = document.querySelector(".cart-icon");
const cartPanel = document.querySelector(".cart-panel");
const closeCart = document.querySelector(".close-cart");
const overlay = document.querySelector(".overlay");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const total = document.getElementById("total");

const buttons = document.querySelectorAll(".add-cart");

// =====================
// OPEN & CLOSE CART
// =====================

cartIcon.addEventListener("click", () => {
    cartPanel.classList.add("active");
    overlay.classList.add("active");
});

closeCart.addEventListener("click", closeShoppingCart);
overlay.addEventListener("click", closeShoppingCart);

function closeShoppingCart() {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
}

// =====================
// ADD PRODUCT
// =====================

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".card");

        const name = card.querySelector("h3").innerText;

        const price = Number(
            card.querySelector(".price").innerText.replace("$", "")
        );

        const image = card.querySelector("img").src;

        const existing = cart.find(item => item.name === name);

        if (existing) {

            existing.quantity++;

        } else {

            cart.push({
                name,
                price,
                image,
                quantity: 1
            });

        }

        updateCart();

    });

});

// =====================
// UPDATE CART
// =====================

function updateCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    }

    cart.forEach((item,index)=>{

        totalPrice += item.price * item.quantity;

        count += item.quantity;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
        
            <img src="${item.image}" width="80">

            <div class="item-info">

                <h4>${item.name}</h4>

                <p>$${item.price}</p>

                <p>Quantity : ${item.quantity}</p>

            </div>

            <button class="remove-btn" data-index="${index}">
                Remove
            </button>

        `;

        cartItems.appendChild(div);

    });

    cartCount.innerText = count;

    total.innerText = "$" + totalPrice;

    removeItems();

}

// =====================
// REMOVE PRODUCT
// =====================

function removeItems(){

    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            const index = button.dataset.index;

            cart.splice(index,1);

            updateCart();

        });

    });

}