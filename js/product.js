const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};



let html = "";

const container = document.querySelector(".container");

let seePrice = "Unavailable";

if(product.price) {
    seePrice = product.price;
}

let textDeco = "none";

if (product.onSale) {
    textDeco = "underline";
}

container.innerHTML = `
<div class = "product">
<h2 style = "text-decoration: ${textDeco}">Name: ${product.name}<h2>
<h3>Price: ${seePrice}<h3>
</div>`;


console.log(html);