let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
    alert(`${productName} telah ditambahkan ke keranjang.`);
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('totalPrice').textContent = `Total: Rp ${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
        return;
    }
    
    alert(`Terima kasih! Total belanja Anda adalah Rp ${total}.`);
    cart = [];
    total = 0;
    updateCart();
}

function login(event) {
    event.preventDefault(); // Mencegah reload halaman

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi login sederhana (ganti dengan logika yang lebih aman)
    if (username === "admin" && password === "password") {
        alert("Login berhasil!");
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert("Username atau password salah.");
    }
}
