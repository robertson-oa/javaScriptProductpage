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
<a href="#">OUR STORY</a>`

)


let bodyElement = document.body;
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageELement = document.createElement('img');
let headingElemnt = document.createElement('h4');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');


cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageELement.className = "image";
headingElemnt.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";

imageELement.src="images/2.jpg";
btnElement.setAttribute("href", "#");
imageELement.setAttribute("alt", "The product image");


headingElemnt.innerText = "Four in one T-shirt";
paragraphElement.innerText ="A four in one colourful T-shirt available in Unisex";
btnElement.innerText = "Add to Bag";

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);


imageContainer.appendChild(imageELement);
infoContainer.append(headingElemnt, paragraphElement, btnElement);



// ####################################################################################

let cardElement2 = document.createElement('div');
let imageContainer2 = document.createElement('div');
let infoContainer2 = document.createElement('div');
let imageELement2 = document.createElement('img');
let headingElemnt2 = document.createElement('h4');
let paragraphElement2 = document.createElement('p');
let btnElement2 = document.createElement('a');


cardElement2.className = "card";
imageContainer2.className = "image-container";
infoContainer2.className = "info-container";
imageELement2.className = "image";
headingElemnt2.className = "heading";
paragraphElement2.className = "paragraph";
btnElement2.className = "btn";

imageELement2.src="images/1.jpg";
btnElement2.setAttribute("href", "#");
imageELement2.setAttribute("alt", "The product image");


headingElemnt2.innerText = "Four in one T-shirt";
paragraphElement2.innerText ="A four in one colourful T-shirt available in Unisex";
btnElement2.innerText = "Add to Bag";


bodyElement.appendChild(cardElement2);
cardElement2.append(imageContainer2, infoContainer2);


imageContainer2.appendChild(imageELement2);
infoContainer2.append(headingElemnt2, paragraphElement2, btnElement2);


// ################################################################################
let cardElement3 = document.createElement('div');
let imageContainer3 = document.createElement('div');
let infoContainer3 = document.createElement('div');
let imageELement3 = document.createElement('img');
let headingElemnt3 = document.createElement('h4');
let paragraphElement3 = document.createElement('p');
let btnElement3 = document.createElement('a');


cardElement3.className = "card";
imageContainer3.className = "image-container";
infoContainer3.className = "info-container";
imageELement3.className = "image";
headingElemnt3.className = "heading";
paragraphElement3.className = "paragraph";
btnElement3.className = "btn";

imageELement3.src="images/3.jpg";
btnElement3.setAttribute("href", "#");
imageELement3.setAttribute("alt", "The product image");


headingElemnt3.innerText = "Four in one T-shirt";
paragraphElement3.innerText ="A four in one colourful T-shirt available in Unisex";
btnElement3.innerText = "Add to Bag";


bodyElement.appendChild(cardElement3);
cardElement3.append(imageContainer3, infoContainer3);


imageContainer3.appendChild(imageELement3);
infoContainer3.append(headingElemnt3, paragraphElement3, btnElement3);


// ##############################################################################

let cardElement4 = document.createElement('div');
let imageContainer4 = document.createElement('div');
let infoContainer4 = document.createElement('div');
let imageELement4 = document.createElement('img');
let headingElemnt4 = document.createElement('h4');
let paragraphElement4 = document.createElement('p');
let btnElement4 = document.createElement('a');


cardElement4.className = "card";
imageContainer4.className = "image-container";
infoContainer4.className = "info-container";
imageELement4.className = "image";
headingElemnt4.className = "heading";
paragraphElement4.className = "paragraph";
btnElement4.className = "btn";

imageELement4.src="images/4.jpg";
btnElement4.setAttribute("href", "#");
imageELement4.setAttribute("alt", "The product image");


headingElemnt4.innerText = "Four in one T-shirt";
paragraphElement4.innerText ="A four in one colourful T-shirt available in Unisex";
btnElement4.innerText = "Add to Bag";


bodyElement.appendChild(cardElement4);
cardElement4.append(imageContainer4, infoContainer4);


imageContainer4.appendChild(imageELement4);
infoContainer4.append(headingElemnt4, paragraphElement4, btnElement4);



























// let div = document.querySelector('container');
// const subContainer = document.createElement('div');
// div.className = "sub-container";
// div.innerHTML = `
// <div> 
// <img id="mg1" src="images/" alt="">
// </div>
// <div>
// <img id="mg2" src="images/p1.jpg" alt="">
// </div>
// <div>
// <img id="mg3" src="images/p4.jpg" alt="">
// </div>
// `;



