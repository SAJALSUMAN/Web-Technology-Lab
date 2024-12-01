document.addEventListener("DOMContentLoaded", () => {
    const cart = []; // Array to store cart items
    const cartCountElement = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.querySelector(".close");
    const cartItemsElement = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = parseInt(button.getAttribute("data-price"));

            // Add the selected product to the cart array
            cart.push({ name: productName, price: productPrice });
            updateCartDisplay();
            updateCartCount();

            // Notify the user
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Update the cart count in the header
    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    // Update the cart modal display
    function updateCartDisplay() {
        cartItemsElement.innerHTML = ""; // Clear the previous list
        let total = 0;

        // Populate the cart items in the modal
        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItemsElement.appendChild(li);
            total += item.price; // Calculate total price
        });

        totalPriceElement.textContent = `Total: ₹${total}`;
    }

    // Show the cart modal
    document.getElementById("cart-link").addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        cartModal.style.display = "block"; // Show the modal
    });

    // Close the cart modal
    closeModal.addEventListener("click", () => {
        cartModal.style.display = "none"; // Hide the modal
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });
});
