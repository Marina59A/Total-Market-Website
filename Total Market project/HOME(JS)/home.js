// BIG SLIDER FUNCTIONALITY
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

setInterval(() => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
}, 3500);

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  updateSlider();
});

// THE LOOPING REQUEST FOR EVERY PRODUCT
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card, index) => {
      if (data[index]) {
        card.querySelector("img").src = data[index].image;
        card.querySelector("h3").textContent = data[index].title;
        card.querySelector("p").textContent = data[index].price + " USD";
        card.querySelector(".buy-btn").addEventListener("click", () => {
          addToCart(data[index]);
        });
      }
    });
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.error("Error fetching product data:", xhr.status);
  }
};

xhr.send();

// THE FAVORITE BUTTON FUNCTIONALITY
const favCounter = document.getElementById("counter");
const favButtons = document.querySelectorAll(".fav-btn");

// Load favorite items from localStorage
let favItems = JSON.parse(localStorage.getItem("fav")) || [];
favCounter.textContent = favItems.length; // Update counter on load

favButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const product = {
      image: productCard.querySelector("img").src,
      title: productCard.querySelector("h3").textContent,
      price: productCard.querySelector("p").textContent,
    };

    // Toggle favorite state
    if (btn.classList.contains("active")) {
      removeFromFav(product.title); // Remove product
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Reset to default
      btn.style.color = "";
    } else {
      addToFav(product); // Add product
      btn.classList.add("active");
      btn.style.backgroundColor = "black"; // Set to black
      btn.style.color = "#3397ef"; // Set text color to blue
    }
  });
});

// Add product to favorites
function addToFav(product) {
  favItems.push(product);
  localStorage.setItem("fav", JSON.stringify(favItems)); // Save to localStorage
  updateFavCounter(); // Update counter
}

// Remove product from favorites
function removeFromFav(title) {
  favItems = favItems.filter((item) => item.title !== title);
  localStorage.setItem("fav", JSON.stringify(favItems)); // Update localStorage
  updateFavCounter(); // Update counter
}

// Update favorite counter
function updateFavCounter() {
  favCounter.textContent = favItems.length;
}
