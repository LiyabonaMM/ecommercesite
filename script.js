// Array of products
const products = [
  {
    name: "REBIRTH",
    image: "https://i.postimg.cc/sXG84Vym/misunderstood.png",
    price: "R400"
  },

  {
    name: "LUCID T-SHIRT",
    image: "https://i.postimg.cc/qqP8KQFR/product2.png",
    price: "R300"
  },
  {
    name: "LUCID BENEFITS",
    image: "https://i.postimg.cc/fL4MctN8/product3.png",
    price: "R650"
  },
  {
    name: "LUCID HOODIE II",
    image: "https://i.postimg.cc/ZKskrDzw/cranium.png",
    price: "R600"
  },
  {
    name: "LUCID INSOMNIA",
    image: "https://i.postimg.cc/Y9yfDHdD/product5.png",
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
  // A container div for the product
  const productDiv = document.createElement("div");
  productDiv.className = "col-md-3";

  // A div for the product image
  const productImage = document.createElement("div");
  productImage.className = "product-image";

  // Creating  an img element and setting  its source and alt attributes
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;


  // Append the img element to the product image div
  productImage.appendChild(img);

  // Creating  a div for the product details


  const productDetails = document.createElement("div");
  productDetails.className = "product-details";


  // Creating  an h2 element for the product name and setting  its text content


  const productName = document.createElement("h2");
  productName.textContent = product.name;


  // Creating  a p element for the product price and set its text content
  const productPrice = document.createElement("p");
  productPrice.textContent = "Price: " + product.price;

  // Creating a button element for adding to cart


  const buyButton = document.createElement("button");
  buyButton.className = "buy-btn btn btn-primary";
  buyButton.textContent = "Add to Cart";

  // Appending  the product name, price, and button to the product details div


  productDetails.appendChild(productName);
  productDetails.appendChild(productPrice);
  productDetails.appendChild(buyButton);

  // Appending the product image and details divs to the product container div


  productDiv.appendChild(productImage);
  productDiv.appendChild(productDetails);

  
  // Return the created product element
  return productDiv;
}

// Getting  the container element to append the product elements


const productsContainer = document.querySelector("#products .row");

// Looping through the products array and create product elements


for (let i = 0; i < products.length; i++) {
  const productElement = createProductElement(products[i]);


  // Appending the product element to the products container
  productsContainer.appendChild(productElement);
}
