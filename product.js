const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let product = products[productId];
        if (product) {
            document.getElementById("product-details").innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}" width="150">
                <p>Price: ${product.price}</p>
            `;
        } else {
            document.getElementById("product-details").innerHTML = `<p>Product not found.</p>`;
        }
    })
    .catch(error => console.error("Error loading product details:", error));
