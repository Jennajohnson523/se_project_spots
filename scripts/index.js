const initialCards=[
    {
        name: "Val Thorens", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
        alt: "Val Thorens"
    },
    {
        name: "Restaurant terrace", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
        alt: "Restaurant terrace"
    },
    {
        name: "An outdoor cafe", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
        alt:  "An outdoor cafe"
    },
    {
        name: "A very long bridge, over the forest and through the trees", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
        alt: "A very long bridge, over the forest and through the trees"
    },
    {
        name: "Tunnel with morning light", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
        alt: "Tunnel with morning light"
    },
    {
        name: "Mountain house", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
        alt: "Mountain house"
    }
];

const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const editModal = document.querySelector('#edit-modal');
const editModalClose = editModal.querySelector('.modal__button-close');
const editModalNameInput = editModal.querySelector('#profile-name-input');
const editModalDescription = editModal.querySelector('#profile-description-input');
const editModalForm = editModal.querySelector('.modal__form');
const cardTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__list');

function getCardElement(data) {
    const cardElement = cardTemplate.content
    .querySelector('.card')
    .cloneNode(true);
   
    const cardNameElement = cardElement.querySelector('.card__title');
    const cardImageElement =cardElement.querySelector('.card__image');

    cardNameElement.textContent = data.name;
    cardImageElement.src = data.link;
    cardImageElement.alt = data.alt;
    return cardElement;
}

function openModal() { 
    editModalNameInput.value = profileName.textContent;
    editModalDescription.value = profileDescription.textContent;
    editModal.classList.add('modal_opened');
}

function closeModal() { editModal.classList.remove('modal_opened');}

function handleEditModalForm(event) {
    event.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescription.value;
    closeModal();
}



profileEditButton.addEventListener('click', openModal);
editModalClose.addEventListener('click', closeModal);
editModalForm.addEventListener('submit', handleEditModalForm);

for (let i=0; i<initialCards.length; i++) {
    const cardElement = getCardElement(initialCards[i]);  
    cardsList.prepend(cardElement);
    
}