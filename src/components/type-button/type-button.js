import { LitElement,html } from "lit";
import styles from './type-button.css.js'

export class TypeButton extends LitElement{
    static properties ={
        text: {
            type: {
                String
            },
        variant: {
            type: {
                String
            }
        }
        }
    }
    constructor(){
        super()
        this.text = '';
        this.variant = '';
    }
    _handleClick(){
        this.dispatchEvent(new CustomEvent('button-click',{
            bubbles: true,
            composed: true
        }))
    }
    static get styles(){
        return styles;
    }
    render() {
        return html`
        <button
            class="${this.variant}"
            @click= ${this._handleClick}
            >
            ${this.text}
            <slot></slot>
        </button>
        `
    }
}
customElements.define('type-button', TypeButton);