export default class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.root = document.body.firstElementChild;
        console.log("rooot:", this.root);
    }

    dispatchUpdate(detail) {
        console.log("detail:",detail);
        const event = new CustomEvent("state-update", {
            detail,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event);
    }
}