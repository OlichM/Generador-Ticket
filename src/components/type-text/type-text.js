import { LitElement, html } from "lit";
import styles from './type-text.css.js'

export class TypeText extends LitElement{
    static properties = {
        text: {
            type: String
        },
        size: {
            type: String
        },
        weight: {
            type: String
        },
        variant: {
            type: String
        }
    }
    static get styles (){
        return styles;
    }
    constructor() {
        super()
        this.text = '';
        this.size = '';
        this.weight = '';
        this.variant = '';
    }
    render (){
        <span class="${classes}">${this.text}</span>   
    }
}
customElements.define('type-text', TypeText)