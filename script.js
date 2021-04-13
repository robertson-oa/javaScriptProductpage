let div = document.querySelector('div');
div.classList.add("navbar"); 
div.insertAdjacentHTML('afterbegin',`<a href="#">Home</a>
<a href="#">Sale</a>
<a href="#">Kids</a>
<a href="#">Boys</a>
<a href="#">GIRLS</a>
<a href="#">MORE SIZES</a>
<a href="#">TIES</a>
<a href="#">MEN</a>
<a href="#">WOMEN</a>
<a href="#">SALES</a>
<a><d id = "numberDisplay" > CART : </d> </a>
<a id ="cart" href="#">  0</a>

    `
);
products = [
    {
        title: "Four in one T-shirt",
        price: "$40.00",
        description: "A four in one colourful T-shirt available in Unisex",
        imgUrl: "images/2.jpg",
        id: "prod1"
    },
    {
        title: "Classic Sweer Jeans",
        price: "$50.00",
        description: "Black sweer jeans for men with four pockets",
        imgUrl: "images/1.jpg",
        id: "prod2"
    },
    {
        title: "Smart Watch",
        price: "$65.00",
        description: "A smart brown Yazol watch with leather wrist wear.",
        imgUrl: "images/3.jpg",
        id: "prod3"
    },
    {
        title: "Step out in style",
        price: "$75.00",
        description: "Black fashion men sneakers available in all sizes.",
        imgUrl: "images/4.jpg",
        id: "prod4"
    }
]
let bodyElement = document.body;
for (const item of products){

let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageELement = document.createElement('img');
let headingElemnt = document.createElement('h4');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');
let deletItem = document.createElement('a');
let priceProduct = document.createElement ('a');

cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageELement.className = "image";
headingElemnt.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";
headingElemnt.id = `heading${item.id}`;
paragraphElement.id = `para${item.id}`;
btnElement.setAttribute ("id",`Add${item.id}`);
deletItem.setAttribute ("id", `delete${item.id}`);
priceProduct.setAttribute ("id", "Price-product");
deletItem.className = "Delete-product"
imageELement.src=`${item.imgUrl}`;
cardElement.setAttribute('id', `card${item.id}`);
btnElement.setAttribute("href", "#");
imageELement.setAttribute("alt", "The product image");
deletItem.setAttribute("href", "#");

headingElemnt.innerText = `${item.title}`;
paragraphElement.innerText =`${item.description}`;
btnElement.innerText = "Add to Bag";
deletItem.innerText = "Delete product";
priceProduct.innerText = `${item.price}`;
bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageELement);
infoContainer.append(headingElemnt, paragraphElement,priceProduct,btnElement,deletItem);

let deleteButton = document.querySelector(`#delete${item.id}`);
let addButton = document.querySelector(`#Add${item.id}`);
let cart = document.querySelector('#cart');
cart.items = 0;
cart.items = [];
item.noItems = 0;
deleteButton.addEventListener('click',  ()=>{
    console.log(cart.items);
    if(findItem(item, cart) === null){
        alert("Item is not in the cart");
    }else{
        if(confirm("Are you sure you want to delete")){
            findItem(item, cart).noItems = 0;
            calculateTotal(cart)
        }
        
    }
});


addButton.addEventListener('click',  ()=>{
    if(findItem(item, cart) !== null){
        findItem(item, cart).noItems = Number(findItem(item, cart).noItems) + 1;
    }else{
        cart.items.push(item);
        findItem(item, cart).noItems + 1;
    }
    
    calculateTotal(cart)

});
}

function findItem(item, cart){
    for(const itemInCart of cart.items){
        if(item.title === itemInCart.title){
            return itemInCart;
        }
    }
    return null;
}
function calculateTotal(cart){
    let total = 0;
    for(item of cart.items){
        total += Number(item.noItems);
    }
    document.querySelector("#cart").innerText = total;
    return total;
}











