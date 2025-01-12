const favItemsContainer = document.getElementById("fav-items");

    function displayFavItems() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  favItemsContainer.innerHTML = ""; // Clear the container

  fav.forEach(function(item, index) {
    const itemRow = document.createElement("div");
    itemRow.style.border = "1px solid #ddd";
    itemRow.style.marginBottom = "10px";
    itemRow.style.padding = "10px";

    itemRow.innerHTML =
      '<img src="' + item.image + '" alt="' + item.title + '" width="50" style="vertical-align: middle; margin-right: 10px;" />' +
      '<h3 style="display: inline-block; margin: 0; font-size: 18px;">' + item.title + '</h3>' +
      '<p style="margin: 5px 0;">' + item.price + '</p>' + 
      '<button onclick="removeFromFav(' + index + ')" style="padding: 5px 10px; background: #3397ef; color: white; border:none; border-radius: 5px; cursor: pointer;">Remove</button>';

    favItemsContainer.appendChild(itemRow);
  });
}

    function removeFromFav(index) {
      const fav = JSON.parse(localStorage.getItem("fav")) || [];
      fav.splice(index, 1); // إزالة المنتج من المصفوفة
      localStorage.setItem("fav", JSON.stringify(fav)); // تحديث localStorage
      displayFavItems(); // تحديث العرض
    }

    // Initialize
    displayFavItems();