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


