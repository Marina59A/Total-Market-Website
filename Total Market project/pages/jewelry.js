fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(products => {
    const productListDiv = document.getElementById('product-list');

    products.forEach(product => {
        if (product.id>4&& product.id <=8) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('data-rating', product.rating.rate); 

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Rating: ${product.rating.rate}</p> 
                <div class "select">
            
                <button class="cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `;
            productListDiv.appendChild(productDiv);
        }
    });
})
.catch(error => console.error('Error fetching products:', error));

function toggleDropdown2() {
    var content = document.querySelector('.dropdown2-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function toggleCategoryDropdown() {
    var content = document.querySelector('.dropdown-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function toggleSortDropdown() {
    var dropdown = document.querySelector('.sort-dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function SortDropdown() {
    var dropdown = document.querySelector('.sort-dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function sortProducts(option) {
    document.querySelector('.sort-dropdown button').innerHTML = `Sort by: ${option}`;
    toggleSortDropdown();
    console.log('Sorting by:', option);
}

function setProductView(viewType) {
    var productContainer = document.querySelector('.products');
    var buttons = document.querySelectorAll('.view-icons button');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (viewType === 'grid') {
        productContainer.classList.remove('list-view');
        productContainer.classList.add('grid-view');
        document.querySelector('.view-icons button:nth-child(1)').classList.add('active');
    } else {
        productContainer.classList.remove('grid-view');
        productContainer.classList.add('list-view');
        document.querySelector('.view-icons button:nth-child(2)').classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    var sortDropdown = document.querySelector('.sort-dropdown-content');
    if (!document.querySelector('.sort-dropdown').contains(event.target)) {
        sortDropdown.style.display = 'none';
    }
});

function toggleDropdown3() {
    var content = document.querySelector('.dropdown3-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

function getProducts() {
    const products = Array.from(document.querySelectorAll('#product-list .product'));
    return products.map(product => {
        return {
            element: product,
            price: parseFloat(product.querySelector('p:nth-child(2)').textContent.replace('Price: $', '')),
            title: product.querySelector('p:nth-child(3)').textContent.replace('Category: ', '').trim(),
            rating: parseFloat(product.getAttribute('data-rating'))
        };
    });
}


function displaySortedProducts(sortedProducts) {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';
    sortedProducts.forEach(product => productListDiv.appendChild(product.element)); 
}


function sortDefault() {
    const products = getProducts();
    displaySortedProducts(products); 
}
function sortPriceHighToLow() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    displaySortedProducts(sortedProducts);
}
function sortPriceLowToHigh() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    displaySortedProducts(sortedProducts);
}


function sortTitleAscending() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => a.title.localeCompare(b.title));
    displaySortedProducts(sortedProducts);
}


function sortTitleDescending() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => b.title.localeCompare(a.title));
    displaySortedProducts(sortedProducts);
}

function sortRatingHighToLow() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => b.rating - a.rating);
    displaySortedProducts(sortedProducts);
}


function sortRatingLowToHigh() {
    const products = getProducts();
    const sortedProducts = products.sort((a, b) => a.rating - b.rating);
    displaySortedProducts(sortedProducts);
}


document.querySelectorAll('.sort-dropdown-content div').forEach((element, index) => {
    element.addEventListener('click', () => {
        switch (index) {
            case 0:
                sortDefault();
                break;
            case 1:
                sortPriceHighToLow();
                break;
            case 2:
                sortPriceLowToHigh();
                break;
            case 3:
                sortRatingHighToLow();
                break;
            case 4:
                sortRatingLowToHigh();
                break;
        }
    });
});
function filterByPrice() {
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
    
    const products = getProducts();
    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    displaySortedProducts(filteredProducts);
}
function clearFilters() {
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    sortDefault(); 
}
document.getElementById('apply').addEventListener('click', filterByPrice);
document.getElementById('clear').addEventListener('click', clearFilters);





///////////////
