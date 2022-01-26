const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

const container = document.querySelector(".container");
console.log(container);

const myProductsName = products.name;
const MyProductsPrice = products.price;
const IsMyProductsSoldOut = products.soldOut ? "" : "";

let html = "";



for (let i = 0; i < products.length; i++) {

    let showPrice = "no money";
    if (products[i].price) {
        showPrice = products[i].price;
    }
    let colour = "green";

    if(products[i].soldOut === false) {
        colour = "red";
    }

    html += `<div class = "product">
        <h2 style=" color: ${colour}">${products[i].name}</h2>
            <p>price: ${showPrice}</p>
            </div>`;

    console.log(html);
}

container.innerHTML = html;
