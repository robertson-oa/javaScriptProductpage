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
<a class ="cart" href="#">0</a>`

)



let bodyElement = document.body;
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
btnElement.setAttribute ("id","Add1");
deletItem.setAttribute ("id", "Delete-product");
priceProduct.setAttribute ("id", "Price-product");


imageELement.src="images/2.jpg";
cardElement.setAttribute('id', 'card1')
btnElement.setAttribute("href", "#");
imageELement.setAttribute("alt", "The product image");
deletItem.setAttribute("href", "#");



headingElemnt.innerText = "Four in one T-shirt";
paragraphElement.innerText ="A four in one colourful T-shirt available in Unisex";
btnElement.innerText = "Add to Bag";
deletItem.innerText = "Delete product";
priceProduct.innerText = "$40.00"

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);


imageContainer.appendChild(imageELement);
infoContainer.append(headingElemnt, paragraphElement,priceProduct,btnElement,deletItem);


let deleteButton = document.querySelector('#Delete-product');
let Add1Button = document.querySelector('#Add1');
let product = document.querySelector('#card1')
deleteButton.addEventListener('click',  ()=>{
    if(confirm("Are you sure you want to delete")){
        product.style.display = 'none';
    }
})

let cart = document.querySelector('.cart');
Add1Button.addEventListener('click',  ()=>{
    cart.textContent = Number(cart.textContent)+1;
})

// ####################################################################################

let cardElement2 = document.createElement('div');
let imageContainer2 = document.createElement('div');
let infoContainer2 = document.createElement('div');
let imageELement2 = document.createElement('img');
let headingElemnt2 = document.createElement('h4');
let paragraphElement2 = document.createElement('p');
let btnElement2 = document.createElement('a');
let deletItem2 = document.createElement('a');
let priceProduct2 = document.createElement ('a');




cardElement2.className = "card";
imageContainer2.className = "image-container";
infoContainer2.className = "info-container";
imageELement2.className = "image";
headingElemnt2.className = "heading";
paragraphElement2.className = "paragraph";
btnElement2.className = "btn";
deletItem2.setAttribute ("id", "Delete-product");
priceProduct2.setAttribute ("id", "Price-product");


imageELement2.src="images/1.jpg";
btnElement2.setAttribute("href", "#");
imageELement2.setAttribute("alt", "The product image");
deletItem2.setAttribute("href", "#");


headingElemnt2.innerText = "Classic Sweer Jeans ";
paragraphElement2.innerText ="Black sweer jeans for men with four pockets.";
btnElement2.innerText = "Add to Bag";
deletItem2.innerText = "Delete product";
priceProduct2.innerText = "$50.00";




bodyElement.appendChild(cardElement2);
cardElement2.append(imageContainer2, infoContainer2);


imageContainer2.appendChild(imageELement2);
infoContainer2.append(headingElemnt2, paragraphElement2,priceProduct2,btnElement2,deletItem2);



// ################################################################################
let cardElement3 = document.createElement('div');
let imageContainer3 = document.createElement('div');
let infoContainer3 = document.createElement('div');
let imageELement3 = document.createElement('img');
let headingElemnt3 = document.createElement('h4');
let paragraphElement3 = document.createElement('p');
let btnElement3 = document.createElement('a');
let deletItem3 = document.createElement('a');
let priceProduct3 = document.createElement ('a');




cardElement3.className = "card";
imageContainer3.className = "image-container";
infoContainer3.className = "info-container";
imageELement3.className = "image";
headingElemnt3.className = "heading";
paragraphElement3.className = "paragraph";
btnElement3.className = "btn";
deletItem3.setAttribute ("id", "Delete-product");
priceProduct3.setAttribute ("id", "Price-product");



imageELement3.src="images/3.jpg";
btnElement3.setAttribute("href", "#");
imageELement3.setAttribute("alt", "The product image");
deletItem3.setAttribute("href", "#");




headingElemnt3.innerText = "Smart Watch";
paragraphElement3.innerText ="A smart brown Yazol watch with leather wrist wear.";
btnElement3.innerText = "Add to Bag";
deletItem3.innerText = "Delete product";
priceProduct3.innerText = "$65.00";



bodyElement.appendChild(cardElement3);
cardElement3.append(imageContainer3, infoContainer3);


imageContainer3.appendChild(imageELement3);
infoContainer3.append(headingElemnt3, paragraphElement3,priceProduct3,btnElement3,deletItem3);



// ##############################################################################

let cardElement4 = document.createElement('div');
let imageContainer4 = document.createElement('div');
let infoContainer4 = document.createElement('div');
let imageELement4 = document.createElement('img');
let headingElemnt4 = document.createElement('h4');
let paragraphElement4 = document.createElement('p');
let btnElement4 = document.createElement('a');
let deletItem4 = document.createElement('a');
let priceProduct4 = document.createElement ('a');


cardElement4.className = "card";
imageContainer4.className = "image-container";
infoContainer4.className = "info-container";
imageELement4.className = "image";
headingElemnt4.className = "heading";
paragraphElement4.className = "paragraph";
btnElement4.className = "btn";
deletItem4.setAttribute ("id", "Delete-product");
priceProduct4.setAttribute ("id", "Price-product");



imageELement4.src="images/4.jpg";
btnElement4.setAttribute("href", "#");
imageELement4.setAttribute("alt", "The product image");
deletItem4.setAttribute("href", "#");



headingElemnt4.innerText = "Step out in style";
paragraphElement4.innerText ="Black fashion men sneakers available in all sizes.";
btnElement4.innerText = "Add to Bag";
deletItem4.innerText = "Delete product";
priceProduct4.innerText = "$75.00";


bodyElement.appendChild(cardElement4);
cardElement4.append(imageContainer4, infoContainer4);


imageContainer4.appendChild(imageELement4);
infoContainer4.append(headingElemnt4, paragraphElement4,priceProduct4,btnElement4,deletItem4);



// ######################################################################






















