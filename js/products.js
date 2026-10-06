async function loadFeaturedProducts() {

    const container =
        document.getElementById("featured-products");

    if (!container) return;


    try {

        const response =
            await fetch("data/products.json");

        const data =
            await response.json();


        const products =
            data.products.slice(0, 3);


        products.forEach(product => {

            const card =
                document.createElement("a");

            card.href =
                `product.html?id=${product.id}`;

            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-info">

                    <div class="product-name">
                        ${product.name}
                    </div>

                    <div class="product-meta">
                        ${product.purity} ·
                        ${product.category}
                    </div>

                </div>

            `;


            container.appendChild(card);

        });


    } catch (error) {

        console.error(
            "Could not load products:",
            error
        );

    }

}


loadFeaturedProducts();