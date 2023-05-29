// Array of products
const products = [
    {
      name: "LUCID HOODIE",
      image: "img/product1.png",
      price: "R600"
    },
    // Add more product objects here
    {
        name: "LUCID HOODIE",
        image: "img/product1.png",
        price: "R600"
      },
  ];
  
  // Function to create a product element
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.className = "col-md-3";
  
    const productHTML = `
      <div class="product">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <p>Price: ${product.price}</p>
          <button class="buy-btn btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
  
    productDiv.innerHTML = productHTML;
  
    return productDiv;
  }
  
  // Get the container element to append the product elements
  const productsContainer = document.querySelector("#products .row");
  
  // Loop through the products array and create product elements
  products.forEach(product => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });
  