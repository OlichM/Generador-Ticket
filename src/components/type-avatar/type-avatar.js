import { LitElement,html } from "lit";
import styles from './type-avatar.css.js';

export class TypeAvatar extends LitElement {
    static properties = {
        src: {
            type: String
        },
        alt: {
            type: String
        },
        size: {
            type: Number
        }
    }
    constructor(){
        super();
        this.src = '';
        this.alt = 'Avatar';
        this.size = 48;
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`
        <img
            class="avatar"
            src="${this.src}"
            alt="${this.alt}"
            >
        `
    }
}
customElements.define('type-avatar', TypeAvatar);