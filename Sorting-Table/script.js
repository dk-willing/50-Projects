const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    instock: true,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 79.99,
    instock: true,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Gaming Monitor",
    price: 199.99,
    instock: false,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 49.99,
    instock: true,
    category: "Audio",
  },
  {
    id: 5,
    name: "Noise-Canceling Headphones",
    price: 129.99,
    instock: false,
    category: "Audio",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 34.99,
    instock: true,
    category: "Accessories",
  },
  {
    id: 7,
    name: "USB-C Hub",
    price: 45.99,
    instock: true,
    category: "Accessories",
  },
  {
    id: 8,
    name: "External Hard Drive",
    price: 89.99,
    instock: false,
    category: "Storage",
  },
  {
    id: 9,
    name: "Smartwatch",
    price: 199.99,
    instock: true,
    category: "Wearable",
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 39.99,
    instock: true,
    category: "Accessories",
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    price: 59.99,
    instock: false,
    category: "Audio",
  },
  {
    id: 12,
    name: "LED Desk Lamp",
    price: 29.99,
    instock: true,
    category: "Home",
  },
  {
    id: 13,
    name: "Ergonomic Chair",
    price: 149.99,
    instock: true,
    category: "Furniture",
  },
  {
    id: 14,
    name: "Smartphone Tripod",
    price: 19.99,
    instock: true,
    category: "Photography",
  },
  {
    id: 15,
    name: "Graphics Tablet",
    price: 89.99,
    instock: false,
    category: "Design",
  },
  {
    id: 16,
    name: "Microphone",
    price: 119.99,
    instock: true,
    category: "Audio",
  },
  {
    id: 17,
    name: "Wireless Router",
    price: 99.99,
    instock: true,
    category: "Networking",
  },
  {
    id: 18,
    name: "VR Headset",
    price: 299.99,
    instock: false,
    category: "Gaming",
  },
  {
    id: 19,
    name: "Smart Thermostat",
    price: 129.99,
    instock: true,
    category: "Home",
  },
  {
    id: 20,
    name: "Electric Kettle",
    price: 39.99,
    instock: true,
    category: "Kitchen",
  },
];

const createTable = (productData) => {
  const tableElement = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headers = Object.keys(productData[0]);
  tableHead.appendChild(createHeaderRow(headers));

  productData.forEach((rowData) => {
    tableBody.appendChild(createTableData(rowData));
  });

  tableElement.appendChild(tableHead);
  tableElement.appendChild(tableBody);

  return tableElement;
};

const sortData = (column, direction) => {
  const sortASCData = [
    ...products.sort((a, b) => (a[column] > b[column] ? 1 : -1)),
  ];
  const sortDESCData = [
    ...products.sort((a, b) => (a[column] < b[column] ? 1 : -1)),
  ];

  renderTables(direction === "ASC" ? sortASCData : sortDESCData);
};

const createTableData = (product) => {
  const tr = document.createElement("tr");
  Object.values(product).forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
};

const createHeaderRow = (columnNames) => {
  const tr = document.createElement("tr");

  columnNames.forEach((columnName) => {
    const th = document.createElement("th");
    const sortUp = document.createElement("span");
    const sortDown = document.createElement("span");

    sortUp.innerHTML = `<i class="ri-arrow-up-line"></i>`;
    sortDown.innerHTML = `<i class="ri-arrow-down-line"></i>`;

    th.innerText = columnName[0].toUpperCase() + columnName.slice(1);
    th.appendChild(sortUp);
    th.appendChild(sortDown);

    sortUp.onclick = () => {
      sortData(columnName, "ASC");
    };

    sortDown.onclick = () => {
      sortData(columnName, "DESC");
    };

    tr.appendChild(th);
  });

  return tr;
};

const renderTables = (productData) => {
  const sortableTable = document.querySelector("#sortable-table");
  sortableTable.innerHTML = "";

  sortableTable.appendChild(createTable(productData));
};

renderTables(products);
