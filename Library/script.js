class Cart {
  constructor() {
    this.items = [];
  }

  addItem(book) {
    this.items.push(book);
  }

  removeItem(bookId) {
    this.items = this.items.filter(item => item.id !== bookId);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}

const books = [
  { id: 1, title: "Harry Potter och de vises sten", author: "J.K. Rowling", image: "https://images.rabensjogren.se/5a0529f9-53d1-407c-840b-627aa75a01d6", },
  { id: 2, title: "Harry Potter och Hemligheternas kammare", author: "J.K. Rowling", image: "https://image.bokus.com/images/9789129723960_383x_harry-potter-och-hemligheternas-kammare", },
  { id: 3, title: "Harry Potter och fången från Azkaban", author: "J.K. Rowling", image: "https://bilder.akademibokhandeln.se/images_akb/9789129723953_383/harry-potter-och-fangen-fran-azkaban", },
  { id: 4, title: "Harry Potter och den flammande bägaren", author: "J.K. Rowling", image: "https://images.rabensjogren.se/9ebede52-6fb3-43c4-b3eb-ce6349f847db?m=max&f=jpg&h=960&w=960&q=70&auto=format", },
  { id: 5, title: "Harry Potter och Fenixorden", author: "J.K. Rowling", image: "https://image.bokus.com/images/9789129723922_200x_harry-potter-och-fenixorden", },
  { id: 6, title: "Harry Potter och Halvblodsprinsen", author: "J.K. Rowling", image: "https://bilder.akademibokhandeln.se/images_akb/9789129723908_383/harry-potter-och-halvblodsprinsen", },
  { id: 7, title: "Harry Potter och Dödsrelikerna", author: "J.K. Rowling", image: "https://bilder.akademibokhandeln.se/images_akb/9789129723939_383/harry-potter-och-dodsrelikerna", },
  { id: 8, title: "Sagan om Ringen: Härskarringen", author: "J.R.R. Tolkien", image: "https://book-info.studentapan.live/image/9789113010984-bildvaerlden-i-sagan-om-ringen-haerskarringen.jpg", },
  { id: 9, title: "Sagan om Ringen: Sagan om de två tornen", author: "J.R.R. Tolkien", image: "https://book-info.studentapan.live/image/9789172633421-sagan-om-de-tvaa-tornen.jpg", },
  { id: 10, title: "Sagan om Ringen: Konungens återkomst", author: "J.R.R. Tolkien", image: "https://static1biblioteket.stockholm.se/cover/tc/415086", }
];

let cartItems = [];

function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";
  books.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <img src="${book.image}" alt="${book.title}" style="width: 100px;">
      <button onclick="addToCart(${book.id})">Låna</button>`;
    bookList.appendChild(bookItem);
  });
}

function addToCart(bookId) {
  const book = books.find(book => book.id === bookId);
  if (!cartItems.some(item => item.id === bookId)) {
    cartItems.push(book);
    updateCart(); 
    console.log("Book already in cart:", book);
  }
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cartItems.forEach(book => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${book.title} - ${book.author}</p>`;
    cartList.appendChild(cartItem);
  });
}

function clearCart() {
  cartItems = [];
  console.log("Varukorgen har tömts.");
  updateCart(); 
}

function goToInformation() {
  if (cartItems.length === 0) {
    alert("Du måste välja åtminstone en bok för att gå vidare.");
    return; 
  }
  
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems)); 
  window.location.href = 'information.html'; 
}


window.addEventListener("load", () => {
  displayBooks();
});


window.addEventListener("load", () => {
  if (window.location.pathname !== '/information.html') {
    const savedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    if (savedCartItems) {
      cartItems = savedCartItems;
      updateCart(); 
    }
  }
});
