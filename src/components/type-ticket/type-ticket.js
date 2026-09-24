import { LitElement, html } from "lit";
import styles from './type-ticket.css.js';
import '../type-avatar/type-avatar.js';
import '../type-icon/type-icon.js';

export class TypeTicket extends LitElement {
    static properties = {
        avatar: {
            type: String
        },
        name: {
            type: String
        },
        username: {
            type: String
        },
        ticketNumber: {
            type: String
        },
        date: {
            type: String
        },
        location: {
            type: String
        }
    }
    constructor(){
        super();
        this.avatar = '';
        this.name = '';
        this.username = '';
        this.ticketNumber = '#01609';
        this.date = 'Jan 31, 2025'
        this.location = 'Austin, TX';
    }
    static get styles(){
        return styles;
    }
    render(){
        return html`
        <div class="ticket">
            <div class="header">
            <type-icon iconName="logofull"></type-icon>
                <div class="event-info">
                    <p>${this.date} / ${this.location}</p>
                </div>
            </div>
            <div class="body">
                <type-avatar 
                    .src=${this.avatar} 
                    alt='Avatar' 
                    size=${56}
                ></type-avatar>
                    <div class="user-info">
                        <h4>${this.name}</h4>
                        <div class="github-info">
                            <type-icon iconName="github"></type-icon>
                            <p>@${this.username}</p>
                        </div>
                    </div>
            </div>
            <span class="ticket-number">
            ${this.ticketNumber}
            </span>
        </div>
        `
    }
}
customElements.define('type-ticket', TypeTicket);