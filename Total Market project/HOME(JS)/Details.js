const productId = new URLSearchParams(window.location.search).get('id');

fetch('../JSON/products.json') 
  .then(response => response.json())
  .then(data => {
    const product = data.find(item => item.id == productId);

    if (product) {
      displayProductDetails(product);
    } else {
      document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
    }
  })
  .catch(error => console.error('Error fetching product data:', error));

function displayProductDetails(product) {
  const container = document.querySelector('.item');
  container.innerHTML = `
    <div class="img">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="details-item">
      <h1 class="product-name">${product.title}</h1>
      <div class="price">
        <p><span>${product.price} </span>EGP</p>
      </div>
    <h5>Availablity : <span>In stock</span></h5>
      <h5>Category : <span>${product.category}</span></h5>
      <h4>Description:</h4>
      <p>${product.description}</p>
      <button id="add-product">Add To Cart</button>
    </div>
  `;
}