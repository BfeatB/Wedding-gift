//add occasions cards

const cards = [
  { 
    image: "./images/Rectangle.svg",
    title: "Birthday",
    alt: "Happy Birthday",
    url: "#"
  },

  { 
    image: "./images/Rectangle-1.svg",
    title: "Anniversary",
    alt: "Good life book",
    url: "#"
  },

  { 
    image: "./images/Rectangle-2.svg",
    title: "Valentine's Day",
    alt: "Kiss me card",
    url: "#"
  },

  { 
    image: "./images/Rectangle-3.svg",
    title: "Christmas",
    alt: "Christmas tree",
    url: "#"
  },
];

const cardTemplate = document.getElementById("cardTemplate");
const cardsContainer = document.querySelector(".occasions__cards");

for (const card of cards) {
  const cardNode = cardTemplate.content.cloneNode(true);
  cardNode.querySelector(".occasions__img").setAttribute("src", card.image);
  cardNode.querySelector(".occasions__img").setAttribute("alt", card.alt);
  cardNode.querySelector(".occasions__name").textContent = card.title;
  cardNode.querySelector(".occasions__link").setAttribute("href", card.url);
  cardsContainer.appendChild(cardNode);
}


 //popUp

const giftButtons = document.querySelectorAll(".js-open-popup");
let giftPopup = document.querySelector(".popup");

let closeButton = document.querySelector(".popup__close-button");

//Open popup

for(const giftButton of giftButtons) {
  giftButton.addEventListener("click", onClickGiftButton);
}

function onClickGiftButton(){
  giftPopup.classList.add("popup_opened");
}


//Close popup
function closePopup(){
  giftPopup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closePopup);

//submitGiftButton

const submitGiftButtons = document.querySelector(".js-open-popup");
const pardonPopup = document.querySelector(".popup__pardon");
const containerPopup = document.querySelector(".popup__form")
const formPopup = document.querySelector(".popup__form")

function onClickSubmitButton(evt){
  evt.preventDefault();
  formPopup.classList.add("popup__form_closed");
  pardonPopup.classList.remove("popup__pardon_closed");
}

formPopup.addEventListener("click", onClickSubmitButton);

//close popup with ok-button

const okButton = document.querySelector(".popup__ok-button");

function onClickOkButton() {
  formPopup.classList.remove("popup__form_closed");
  pardonPopup.classList.add("popup__pardon_closed");
  closePopup();
}

okButton.addEventListener("click", onClickOkButton);


