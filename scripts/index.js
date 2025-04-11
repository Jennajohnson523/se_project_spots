console.log("JavaScript is loaded");

const initialCards=[
    {
        name: "Val Thorens", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name: "Restaurant terrace", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
        name: "An outdoor cafe", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name: "A very long bridge, over the forest and through the trees", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
        name: "Tunnel with morning light", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
        name: "Mountain house", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];

//Proile  elements
const editModalBtn = document.querySelector('.profile__edit-button');
const cardModalBtn = document.querySelector('.profile__add-button');
const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');

//Form elements
const editModal = document.querySelector('#edit-modal');
const editForm = document.querySelector('#edit-profile');
const editModalCloseBtn = editModal.querySelector('.modal__button-close');
const nameInput = editModal.querySelector('#profile-name-input');
const descriptionInput = editModal.querySelector('#profile-description-input');

const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector('.modal__form');
const cardModalCloseBtn = cardModal.querySelector(".modal__button-close");
const cardNameInput =cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

//Card related elements
const cardList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template');

const previewModal = document.querySelector('#preview-image-modal');
const previewImage = previewModal.querySelector('.modal__image');
const previewCaption = previewModal.querySelector('.modal__caption');
const previewCloseBtn = previewModal.querySelector('.modal__button-close');


function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) { 
    modal.classList.remove('modal_is-opened');
}

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = nameInput.value;
    profileDescriptionEl.textContent = descriptionInput.value;
    closeModal(editModal);
}

function handleAddCardSubmit(evt) {
    evt.preventDefault();
    renderCard({name: cardNameInput.value, link: cardLinkInput.value})
    closeModal(cardModal);
    evt.target.reset()
}

function getCardElement(data) {
    const cardElement = cardTemplate.content
    .querySelector('.card')
    .cloneNode(true);
    const cardTitleEl = cardElement.querySelector('.card__title');
    const cardImageEl = cardElement.querySelector('.card__image');
    const cardLikeBtn = cardElement.querySelector('.card__like-button');
    const cardDeleteBtn = cardElement.querySelector('.card__delete-button');

    cardTitleEl.textContent = data.name;
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    
    cardLikeBtn.addEventListener("click", () => {
        console.log("Like button clicked");
        cardLikeBtn.classList.toggle("card__like-button_liked");
    });

    cardDeleteBtn.addEventListener('click', () => {
        cardElement.remove();
    });

    cardImageEl.addEventListener('click', () => {
     previewImage.src = data.link;
     previewImage.alt = data.name;
     previewCaption.textContent = data.name;
     openModal(previewModal);
    });

    return cardElement;
}

function renderCard(item, method = "prepend") {
    const cardElement = getCardElement(item);
    cardList[ method ](cardElement);
  }

editModalBtn.addEventListener("click", () => {
    nameInput.value = profileNameEl.textContent;
    descriptionInput.value =profileDescriptionEl.textContent;
    openModal(editModal);
});

const closeButtons = document.querySelectorAll('.modal__button-close');

closeButtons.forEach((button) => {
    const popup = button.closest('.modal');
    button.addEventListener('click', () => closeModal(popup));
});

cardModalBtn.addEventListener("click", () => {
    openModal(cardModal);
});

editForm.addEventListener("submit", handleEditProfileSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach((cardData) => {
    renderCard(cardData, "prepend");
});

