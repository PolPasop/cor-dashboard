/*
    The base Component class. All our custom elements extend this class
    wich provides:
    1. A Shadow DOM for CSS scoping and DOM encapsulation.
    2. A reference to the app's root element.
    3. A method to dispatch a custom event.
    Global app state from @bdc
*/
import Data from './data.js';

export default class extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({ mode: 'open' }); */
        this.root = document.body.querySelector('cor-dashboard');
        this.globalData = Data;
    }

    dispatchUpdate(detail) {
        const event = new CustomEvent("state-update", {
            detail,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event);
    }
}