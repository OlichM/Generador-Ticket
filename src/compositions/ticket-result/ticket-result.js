import { LitElement, html } from 'lit';
import styles from './ticket-result.css.js';
import '../../components/type-icon/type-icon.js';
import '../../components/type-ticket/type-ticket.js';

export class TicketResult extends LitElement {
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
        <section class="container">
            <type-icon iconName="logofull"></type-icon>
            <h1>
            Congrats, 
            <span class="highlight">
                ${this.fullName}
            </span>
            !
            <br>
            Your ticket is ready.
            </h1>
            <p class="description">
            We've emailed your ticket to
            <strong>${this.email}</strong>
            and will send updates in the run up to the event.
            </p>
            <type-ticket
                .avatar="${this.avatar}"
                .name="${this.fullName}"
                .username="${this.github}"
            >
            </type-ticket>
        </section>
        `;
    }
}
customElements.define('ticket-result', TicketResult);