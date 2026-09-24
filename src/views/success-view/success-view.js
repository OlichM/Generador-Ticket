import { LitElement, html } from 'lit';
import styles from './success-view.css.js';
import '../../compositions/ticket-result/ticket-result.js';

export class SuccessView extends LitElement {
    static properties = {
        fullName: { 
            type: String 
        },
        email: { 
            type: String 
        },
        github: { 
            type: String 
        },
        avatar: { 
            type: String 
        }
    };
    constructor() {
        super();
        this.fullName = '';
        this.email = '';
        this.github = '';
        this.avatar = '';
    }
    static get styles(){
        return styles;
    }

    render() {
        return html`
        <main class="container">
            <ticket-result
                .fullName="${this.fullName}"
                .email="${this.email}"
                .github="${this.github}"
                .avatar="${this.avatar}"
            >
            </ticket-result>
        </main>
        `;
    }
}
customElements.define('success-view', SuccessView);