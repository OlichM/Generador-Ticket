import { LitElement, html } from "lit";
import styles from './type-input.css.js'

export class TypeInput extends LitElement{
    static properties = {
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        },
        type: {
            type: String
        }
    }
    constructor(){
        super();
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.type = '';
    }
    static get styles(){
        return styles;
    }
    handleInput(event){
        this.value = event.target.value;
        this.dispatchEvent((
            new CustomEvent('input-change', {
                detail: this.value,
                bubbles: true,
                composed: true
            }))
        )
    }
    render(){
        return html`
            <div class='input-container'>
                <label>${this.label}</label>
                <input
                    .type="${this.type}"
                    placeholder= "${this.placeholder}"
                    value ="${this.value}"
                    @input="${this.handleInput}"
                >
            </div>
        `
    }
}
customElements.define('type-input', TypeInput);