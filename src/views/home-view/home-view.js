import { LitElement, html } from 'lit';
import styles from './home-view.css.js';
import '../../compositions/register-form/register-form.js'
import '../../compositions/ticket-result/ticket-result.js';

export class HomeView extends LitElement {
    static properties = {
        ticketGenerated: { 
            type: Boolean 
        },
        userData: { 
            state: true 
        }
    };
    constructor() {
        super();
        this.ticketGenerated = false;
        this.userData = {
        fullName: '',
        email: '',
        github: '',
        avatar: ''
        };
    }
    static get styles(){
        return styles;
    }

    handleGenerateTicket(event) {
        this.userData = event.detail;
        this.ticketGenerated = true;
    }

    render() {
        return html`
        <main class="container">
            ${
            !this.ticketGenerated
                ? html`
                    <register-form
                        @generate-ticket="${this.handleGenerateTicket}"
                    >
                    </register-form>
                `
                : html`
                    <ticket-result
                        .fullName="${this.userData.fullName}"
                        .email="${this.userData.email}"
                        .github="${this.userData.github}"
                        .avatar="${this.userData.avatar}"
                    >
                    </ticket-result>
                `
            }
        </main>
        `;
    }
}
customElements.define('home-view', HomeView);