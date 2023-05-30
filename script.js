// Array of products
const products = [
    {
      name: "REBIRTH",
      image: "https://i.postimg.cc/sXG84Vym/misunderstood.png",
      price: "R400"
    },
    // Add more product objects here
    {
        name: "LUCID T-SHIRT",
        image: "img/product2.png",
        price: "R300"
      },
      {
        name: "LUCID BENEFITS",
        image: "img/product3.png",
        price: "R650"
      },
      {
        name: "LUCID HOODIE II",
        image: "https://i.postimg.cc/ZKskrDzw/cranium.png",
        price: "R600"
      },
      {
        name: "LUCID INSOMNIA ",
        image: "img/product5.png",
        price: "R400"
      },
      {
        name: "LUCID PANTS",
        image: "https://i.postimg.cc/yYNLB13N/prdouc.png",
        price: "R900"
      },
      {
        name: "LUCID SKULL",
        image: "https://i.postimg.cc/nh3kP6hD/fav.png",
        price: "R700"
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
  