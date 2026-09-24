import { LitElement, html } from 'lit';
import styles from './register-form.css.js';
import '../../components/type-icon/type-icon.js';
import '../../components/type-input/type-input.js';
import '../../components/type-upload/type-upload.js';
import '../../components/type-button/type-button.js';

export class RegisterForm extends LitElement {
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

    handleAvatarUpload(event) {
        this.avatar = event.detail.image;
    }

    handleSubmit() {
        this.dispatchEvent(
        new CustomEvent('generate-ticket', {
            detail: {
            fullName: this.fullName,
            email: this.email,
            github: this.github,
            avatar: this.avatar
            },
            bubbles: true,
            composed: true
        })
        );
    }

    render() {
        return html`
        <section class="container">
            <div class='logo-container'>
                <type-icon iconName="logofull"></type-icon>
            </div>
            <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>
            Secure your spot at next year's biggest coding conference.
            </p>
            <type-upload
                @image-upload="${this.handleAvatarUpload}"
            ></type-upload>
            <type-input
                label="Full Name"
                @input-change="${e => this.fullName = e.detail}"
            >
            </type-input>
            <type-input
                label="Email Address"
                type="email"
                @input-change="${e => this.email = e.detail}"
            >
            </type-input>
            <type-input
                label="GitHub Username"
                @input-change="${e => this.github = e.detail}"
            >
            </type-input>
            <type-button
                text="Generate My Ticket"
                @button-click="${this.handleSubmit}"
            >
            </type-button>
        </section>
        `;
    }
}
customElements.define('register-form', RegisterForm);