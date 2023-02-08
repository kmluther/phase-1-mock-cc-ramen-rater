// write your code here
const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenuDiv = el('ramen-menu');

el('new-ramen').addEventListener('submit', newRamenHandler);

// const ramenCard = document.getElementById('ramen-detail');
// const addRamenForm = document.getElementById('new-ramen');
// addRamenForm.addEventListener('submit', addNewRamen);
// ramenMenuDiv.addEventListener('click', renderRamens);

// const headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json"
// };

// let ramenCollection = [];

fetch(ramenAPI)
    .then(res => res.json())
    .then(ramens => renderRamens(ramens));

function renderRamens(ramens) {
    ramens.forEach(renderRamen);
}

function renderRamen(ramen) {
    const ramenImageElement = document.createElement('img');
    ramenImageElement.src = ramen.image;
    ramenMenuDiv.append(ramenImageElement);

    ramenImageElement.addEventListener('click', () => ramenClickHandler(ramen))
}

function ramenClickHandler(ramen) {
    el('detail-image').src = ramen.image;
    el('detail-name').textContent = ramen.name;
    el('detail-restaurant').textContent = ramen.restaurant;
    el('rating-display').textContent = ramen.rating;
    el('comment-display').textContent = ramen.comment;
}

function newRamenHandler(e) {
    e.preventDefault();

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }

    renderRamen(newRamen);
    e.target.reset();
}

function el(id) {
    return document.getElementById(id);
}