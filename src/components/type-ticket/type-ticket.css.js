import { css } from "lit";

export default css`
    :host {
        display: block;
    }
    .ticket {
        background-image: url('/assets/pattern-ticket.svg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 600px;
        height: 280px;
        position: relative;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .header {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .event-info {
        margin-left: 50px;
    }
    .event-info p {
        margin: 4px;
        margin-top: .35rem;    
        color: #d6d3e5;
        font-size: .9rem;
    }
    .body {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: -60px;
    }
    .avatar {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        object-fit: cover;
    }
    .github-info {
        display: flex;
        align-items: center;
        gap: .15rem;
    }
    .github-info p {
        margin: 0;
    }
    .github-info type-icon {
        transform: scale(.75);
    }
    .user-info {
        display: flex;  
        gap: .1rem;
        flex-direction: column;
        justify-content: center;
    }
    .user-info h4 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 300;
        color: white;
    }
    .user-info p {
        margin: 0;
        color: #d6d3e5;
    }
    .ticket-number {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: 
        translateY(-50%)
        rotate(90deg);
        color: #8f88aa;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        .ticket {
            width: 340px;
            height: 180px;
            padding: 1rem;
        }
        .ticket-number {
            font-size: 1rem;
            right: 20px;
        }
        .user-info h4 {
            font-size: 1.2rem;
        }
        .event-info p {
            font-size: .75rem;
        }
    }
`;