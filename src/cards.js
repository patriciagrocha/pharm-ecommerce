/**Na página de todos os medicamentos, crie uma lista de medicamentos utilizando JavaScript para criar elementos do DOM dinamicamente. Os medicamentos devem ser exibidos em cards, contendo título, imagem, valor e um botão de adicionar ao carrinho.

Sugestão: Crie uma lista de objetos em Javascript com informações de cada card */

import { productsList } from "./productsList.mock.js";

const products = productsList;

const divCards = document.querySelector('.section__cards');

const articleClass = ["article__card","col-md-5","col-lg-3"];

function cardCreate(products, itensClass) {

    products.forEach((produto) => {
        const article = document.createElement('article');      
        itensClass.forEach((itemClass)=> {
            article.classList.add(itemClass)    
        });
        const divIcon = document.createElement('div');
        divIcon.classList.add('card-icon')
        const buttonIcon = document.createElement('button');
        buttonIcon.innerHTML = `<i class="fa-sharp fa-regular fa-heart fa-2x"></i>`;

        const divImg = document.createElement('div');
        divImg.classList.add('div-card-img');
        const imgCard = document.createElement('img');
        imgCard.setAttribute('id','img-card');
        imgCard.setAttribute('src', `${produto.image}`);
        imgCard.setAttribute('alt', `imagem do ${produto.nome}`);

        const spamEl = document.createElement('spam');
        spamEl.innerHTML = `<strong>${produto.name}</strong>`;

        const pElement = document.createElement('p');
        pElement.innerHTML = `<strong>R$ ${produto.price.toLocaleString('pt-BR')}</strong>`

        const buttonEl = document.createElement('button');
        buttonEl.classList.add("card-button");
        buttonEl.innerHTML = `
        Adicionar <i class="fa-sharp fa-solid fa-plus"></i>`

        divCards.appendChild(article);
        article.appendChild(divIcon);
        divIcon.appendChild(buttonIcon);
        article.appendChild(divImg);
        divImg.append(imgCard, spamEl, pElement);
        article.appendChild(buttonEl);
    }) 
}
cardCreate(products,articleClass);

