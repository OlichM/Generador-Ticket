import { css } from 'lit';

export default css`
    :host {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
    }
    .input-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }
    label {
        color: white;
        margin-bottom: .75rem;
    }
    input {
        width: 100%;
        padding: 1rem;
        background: rgba(255,255,255,.05);
        border: 1px solid rgba(255,255,255,.3);
        border-radius: 12px;
        box-sizing: border-box;
        color: white;
    }
    input::placeholder{
        color: #a89fc6;
        opacity: 1;
    }
`;