async function loadProduct() {

    // Get the product ID from the URL
    // Example:
    // product.html?id=classic-gold-chain

    const params =
        new URLSearchParams(window.location.search);

    const productId =
        params.get("id");


    if (!productId) {

        document.getElementById("product-name")
            .textContent = "Product not found";

        return;
    }


    try {

        const response =
            await fetch("data/products.json");

        const data =
            await response.json();


        const product =
            data.products.find(
                item => item.id === productId
            );


        if (!product) {

            document.getElementById("product-name")
                .textContent = "Product not found";

            return;
        }


        // -----------------------------
        // Fill the page
        // -----------------------------

        document.title =
            `${product.name} — MRTALLMAN`;


        document.getElementById("product-name")
            .textContent = product.name;


        document.getElementById("product-category")
            .textContent = product.category;


        document.getElementById("product-purity")
            .textContent = product.purity;


        document.getElementById("product-weight")
            .textContent = product.weight;


        document.getElementById("product-length")
            .textContent = product.length;


        document.getElementById("product-price")
            .textContent = product.price;


        const image =
            document.getElementById("product-image");


        image.src =
            product.image;

        image.alt =
            product.name;


        // -----------------------------
        // WhatsApp message
        // -----------------------------

        const message =
            `Hello MRTALLMAN, I am interested in the ${product.name}.`;


        const whatsappNumber =
            "YOUR_WHATSAPP_NUMBER";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        document.getElementById("product-whatsapp")
            .href = whatsappURL;


    } catch (error) {

        console.error(
            "Could not load product:",
            error
        );

    }

}


loadProduct();