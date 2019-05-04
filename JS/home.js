class LinkItem {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.cardElement = document.querySelector(`.card[data-tab='${this.data}']`);
        this.cardItem = new CardItem(this.cardElement);
        console.log('Hello');

        this.element.addEventListener('click', () => this.select());

    }
    select() {
        const links = document.querySelectorAll('.link');
        links.forEach(link => link.classList.remove('link-selected'));
        this.element.classList.add('link-selected');
        this.cardItem.select();
    }
}

class CardItem {
    constructor(element){
        this.element = element;
    }
    select() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove('card-selected'));
        this.element.classList.add('card-selected');

    }
}

const links = document.querySelectorAll('.link');
links.forEach(link => new LinkItem(link));