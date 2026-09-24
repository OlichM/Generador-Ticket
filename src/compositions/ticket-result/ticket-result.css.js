import { css } from "lit";

export default css`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;
    }
    type-icon {
        margin-bottom: 2rem;
    }
    h1 {
        font-size: 4rem;
        line-height: 1.1;
        max-width: 900px;
        margin: 0 0 1.5rem;
        color: white;
    }
    .highlight {
        color: #f57463;
    }
    .highlight-email {
        color: #f57463;
    }
    .description {
        max-width: 620px;
        font-size: 1.1rem;
        color: #d6d3e5;
        margin-bottom: 3rem;
    }
    .description strong {
        color: #f57463;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
            color: white;
            line-height: 1.1;
            max-width: 350px;
        }
        .description {
            max-width: 320px;
            font-size: 1rem;
        }
    }
`;
