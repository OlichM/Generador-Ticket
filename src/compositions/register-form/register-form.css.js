import { css } from "lit";

export default css`
    .container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .logo-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 2rem;
    }

    .logo-container span {
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
    }
    h1 {
        text-align: center;
        font-size: 3rem;
        margin: 0 auto;
        max-width: 500px;
        line-height: 1.2;
        color: white;
    }
    p {
        text-align: center;
        color: #d6d3e5;
    }
    label {
        color: white;
        display: block;
        margin-bottom: 0.5rem;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
            max-width: 320px;
            color: white;
        }
        .logo-container {
            margin-bottom: 1rem;
        }
        .container {
            padding-bottom: 2rem;
        }
    }
`;
