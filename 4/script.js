const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then(resp => resp.json())
.then(data => {
    data.forEach(element => {
        let output = document.querySelector('#output');
        let card = document.createElement('div');
        card.setAttribute('id', 'card');
        let brand = document.createElement('h1');
        brand.textContent = element.brand;
        let models = document.createElement('h4');
        models.textContent = element.models;
        card.append(brand, models);
        output.append(card);
        
    });
})