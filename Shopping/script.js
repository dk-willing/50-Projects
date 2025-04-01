class ShoppingList {
  constructor(
    shoppingItems,
    addItemBtn,
    listItemInput,
    storageKey = "shoppingList"
  ) {
    this.storageKey = storageKey;
    this.shoppingItemsList = document.querySelector(shoppingItems);
    this.addItemBtn = document.querySelector(addItemBtn);
    this.newItemInput = document.querySelector(listItemInput);

    this.items = JSON.parse(localStorage.getItem(storageKey)) || ["apple"];

    this.initialise();
  }

  initialise() {
    this.addItemBtn.addEventListener("click", () => {
      const value = this.newItemInput.value;
      if (value.trim() === "") {
        alert("Please add an item");
        return;
      }
      this.addNewItem(value);
      this.renderItems();
      this.storeItems();
      this.newItemInput.value = "";
    });
  }

  renderItems() {
    this.shoppingItemsList.innerHTML = "";

    if (this.items.length === 0) {
      const itemElement = document.createElement("li");
      itemElement.appendChild(document.createTextNode("No item"));
      this.shoppingItemsList.appendChild(itemElement);
      return;
    }

    this.items.forEach((item, index) => {
      const itemList = document.createElement("li");
      itemList.textContent = item;
      const removeItem = document.createElement("span");
      removeItem.classList.add("remove-item");
      removeItem.textContent = "Remove";
      removeItem.onclick = () => {
        this.removeItemAt(index);
        this.renderItems();
        this.storeItems();
      };

      itemList.appendChild(removeItem);
      this.shoppingItemsList.appendChild(itemList);
    });
  }

  addNewItem(newItem) {
    this.items.push(newItem);
  }

  removeItemAt(indexToRemove) {
    this.items = this.items.filter((item, index) => indexToRemove != index);
  }

  storeItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }
}

const shoppingList = new ShoppingList(
  "#shoppingListItems",
  "#addItemBtn",
  "#list-input"
);

shoppingList.renderItems();
