// Exemple de fonction JavaScript pour ajouter des produits dynamiquement

const productsSection = document.getElementById('products');

const products = [
    { name: 'Manteau 1', price: 100, image: '02-m.jpg' },
    { name: 'Manteau 2', price: 90, image: 'ahlame.jpg' },
    { name: 'Manteau 3', price: 180, image: 'download.jpg' }
];

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Prix: ${product.price} €</p>
        <button>Ajouter au panier</button>
    `;
    productsSection.appendChild(productDiv);
});

