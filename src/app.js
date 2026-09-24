import { LitElement, html } from 'lit';
import './views/home-view/home-view.js';
import './views/success-view/success-view.js';

export class AppRoot extends LitElement {
    static properties = {
        currentView: { 
            type: String 
        }
    };
    constructor() {
        super();
        this.currentView = 'home';
    }
    render() {
        return html`
        ${
            this.currentView === 'home'
            ? html`<home-view></home-view>`
            : html`<success-view></success-view>`
        }
        `;
    }
}
customElements.define('app-root', AppRoot);