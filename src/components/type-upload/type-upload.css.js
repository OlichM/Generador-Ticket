import { css } from 'lit';

export default css`
    :host {
        display:block;
        width: 100%;
    }
    .upload-container {
        width: 100%;
    }
    .upload-box{
        min-height:120px;
        border: 2px dashed rgba(255,255,255,.4);
        border-radius:12px;
        background:rgba(255,255,255,.05);
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }
    .upload-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
        color: #bdb8d5;
        font-size: 0.75rem;
        padding-left: 2px;
    }
    .upload-info type-icon {
        flex-shrink: 0;
    }
    .placeholder{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:.5rem;
        color:white;
    }
    input {
        width: 100%;
        padding: 1rem;
        border-radius: 12px;
        background: rgba(255,255,255,.05);
        color: white;
        display: none;
    }
    label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
    }
`;