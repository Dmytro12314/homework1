document.addEventListener("DOMContentLoaded", function() {
  const inputPrice = document.getElementById("price");
  const outputDiv = document.getElementById("output");

  inputPrice.addEventListener("focus", function() {
    inputPrice.style.borderColor = "green";
  });

  inputPrice.addEventListener("blur", function() {
    inputPrice.style.borderColor = "";

    const price = parseFloat(inputPrice.value);

    if (price <= 0) {
      inputPrice.classList.add("error");
      outputDiv.textContent = "Please enter correct price.";
    } else {
      inputPrice.classList.remove("error");
      createOutputItem(price);
    }
  });

  inputPrice.addEventListener("input", function() {
    inputPrice.classList.remove("error");
    outputDiv.textContent = "";
  });

  function createOutputItem(price) {
    const outputItem = document.createElement("div");
    outputItem.classList.add("output-item");

    outputItem.innerHTML = `
      <span>Текущая цена: ${price}</span>
      <span class="clear-button">X</span>
    `;

    outputDiv.appendChild(outputItem);

    outputItem.querySelector(".clear-button").addEventListener("click", function() {
      outputDiv.removeChild(outputItem);
      inputPrice.value = "";
    });
  }
});

