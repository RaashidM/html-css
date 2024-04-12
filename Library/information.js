window.addEventListener("load", () => {
  
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cartItems.forEach(book => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<p>${book.title} - ${book.author}</p>`;
    cartList.appendChild(cartItem);
  });
});


function submitForm() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;

 
  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = `
    <p>Namn: ${firstName} ${lastName}</p>
    <p>Adress: ${address}</p>
    <p>Mobilnummer: ${phoneNumber}</p>
    <p>Email: ${email}</p>
    <div id="cart-list"></div>
    <button onclick="confirmLoan()">Bekräfta</button>`;
}




function confirmLoan() {
  
  alert("Lånet är bekräftat!");
  cartItems = [];
  sessionStorage.removeItem('cartItems');
  window.location.href = 'index.html';
}





