document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCountElement = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const cartItemsElement = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Add to Cart Button Event
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.dataset.name;
            const productPrice = parseInt(button.dataset.price);

            cart.push({ name: productName, price: productPrice });
            updateCart();
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Update Cart
    function updateCart() {
        cartItemsElement.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;

            // Create a red cross symbol (×) for removing items
            const removeIcon = document.createElement("span");
            removeIcon.textContent = "×";
            removeIcon.classList.add("remove-icon");
            removeIcon.title = "Remove item";
            removeIcon.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });

            li.appendChild(removeIcon);
            cartItemsElement.appendChild(li);
            total += item.price;
        });

        totalPriceElement.textContent = `Total: ₹${total}`;
        cartCountElement.textContent = cart.length;
    }

    // Show Cart Modal
    document.getElementById("cart-link").addEventListener("click", (event) => {
        event.preventDefault();
        cartModal.style.display = "block";
    });

    // Close Cart Modal
    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Close Modal on Outside Click
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });

    // Checkout Button Event
    document.getElementById("checkout-btn").addEventListener("click", () => {
        alert("Thank you for your purchase!");
        cart.length = 0;
        updateCart();
        cartModal.style.display = "none";
    });
});
