import { LitElement,html } from "lit";
import styles from './type-upload.css.js';
import '../type-avatar/type-avatar.js';
import '../type-icon/type-icon.js';

export class TypeUpload extends LitElement{
    static properties = {
        preview: {
            type: String
        }
    }
    constructor(){
        super();
        this.preview = '';
    }
    static get styles(){
        return styles;
    }
    handleFileChange(event) {
        const file = event.target.files[0]
        if(!file) return;
        const reader = new FileReader();
            reader.onload = () =>{
                this.preview = reader.result;
                this.dispatchEvent(new CustomEvent('image-upload', {
                    detail: {
                        file,
                        image: reader.result
                    },
                    bubbles: true,
                    composed: true
                })
            )
        }
        reader.readAsDataURL(file);
    }

    openFilePicker(){
        this.shadowRoot.querySelector('#fileInput').click();
    }

    render() {
        return html`
        <div class='upload-container'>
            <label>Upload Avatar</label>
            <div class='upload-box' @click="${this.openFilePicker}">
                ${
                    this.preview
                        ? html`
                            <type-avatar
                            .src=${this.preview}
                            alt="Avatar"
                            size=${60}
                            ></type-avatar>
                        `
                        : html`
                            <div class="placeholder">
                            <type-icon iconName="upload"></type-icon>
                            <p>Drag and drop or click to upload</p>
                            </div>
                        `
                    }
            </div>
            <div class="upload-info">
                <type-icon iconName="info"></type-icon>
                <span>
                    Upload your photo (JPG or PNG, max size: 500KB)
                </span>
            </div>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                @change="${this.handleFileChange}"
            />
            </div>
        `
    }
}
customElements.define('type-upload', TypeUpload);