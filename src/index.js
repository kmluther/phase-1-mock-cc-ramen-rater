// write your code here
const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');
const ramenElement = document.getElementById('ramen-detail');
const addRamenForm = document.getElementById('new-ramen');
addRamenForm.addEventListener('submit', addNewRamen);

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
};

let ramenCollection = [];

fetch(ramenAPI)
    .then(res => res.json())
    .then(ramens => {
        ramenCollection = ramens;
        renderRamens();
    });

function renderRamens() {
    ramenElement.innerHTML = '';
    ramenCollection.forEach(renderRamen);
}

function renderMenu() {
    let ramenImg = document.createElement("img");
    ramenImg.setAttribute(`"src", ${ramens.image}`);
    ramenImg.setAttribute("height", 20);
    document.getElementById('ramen-menu').appendChild(ramenImg);
}

function renderRamen(ramens) {
    // ramenMenuHeader.addEventListener('click', img) {
    const ramenCard = document.createElement('div');
    ramenCard.classList.add('ramen-detail');

    ramenCard.innerHTML = `
    <h2>${ramens.name}</h2>
    <h3>${ramens.restaurant}</h3>
    <img src="${ramens.image}" class="detail-image" />
    <p>${ramens.rating}</p>
    <p>${ramens.comment}</p>`;

    ramenElement.append(ramenCard);
    }


    function addNewRamen(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const restaurant = event.target.restaurant.value;
        const image = event.target.image.value;
        const rating = event.target.rating.value;
        const comment = event.target.comment.value;

        const body = JSON.stringify({
            name, restaurant, image, rating, comment,
        });

        console.log(body);

        fetch(ramenAPI, {
            method: "POST",
            headers, body
        }).then(res => res.json())
        .then(newRamen => {
            ramenElement.push(newRamen);
            renderRamens();
        });
    }