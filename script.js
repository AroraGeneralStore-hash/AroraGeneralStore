// Load product data
fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let container = document.getElementById("product-container");
        let searchBox = document.getElementById("searchBox");

        function displayProducts(filter = "") {
            container.innerHTML = ""; // Clear existing products
            products.forEach(product => {
                if (product.name.toLowerCase().includes(filter.toLowerCase())) {
                    let productCard = document.createElement("div");
                    productCard.classList.add("product-card");

                    productCard.innerHTML = `
                        <img src="${product.img}" alt="${product.name}" width="150">
                        <h3>${product.name}</h3>
                        <p>Price: ${product.price}</p>
                    `;

                    container.appendChild(productCard);
                }
            });
        }

        // Show all products initially
        displayProducts();

        // Filter products when typing in search box
        searchBox.addEventListener("input", () => {
            displayProducts(searchBox.value);
        });
    })
    .catch(error => console.error("Error loading products:", error));
