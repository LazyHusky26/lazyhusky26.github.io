cart = [];

const products = [
    {
        id: 1,
        name: "Laptop", 
        price: 1000, 
        desc: "High performance laptop" 
    },
    {
        id: 2,
        name: "Smartphone", 
        price: 500, 
        desc: "Latest model smartphone"
    },
    {
        id: 3, 
        name: "Tablet", 
        price: 300, 
        desc: "Portable tablet with stylus" 
    },
]

const Home = () => {
    let str = `
    <div class='Product-container'>
    <h1>Product List</h1>
    ${products.map(product =>
        `<div class="App-Row"y>
        <div id="item">${product.name} - <span style="color:green">$${product.price}</span>
        <p>${product.desc}</p>
        <button onclick="#">Add to Cart</button>
        </div>`)}
    </div>`
    root.innerHTML = str;
}