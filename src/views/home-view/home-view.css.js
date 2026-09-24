import { css } from 'lit';

export default css`
:host {
  display: block;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background:
      url('/assets/pattern-circle.svg') right 220px center no-repeat,
      url('/assets/pattern-lines.svg'),
      radial-gradient(
        circle at bottom,
        rgba(132, 0, 255, 0.5),
        transparent 40%
      ),
      #0d0320;
    background-repeat: no-repeat ,repeat, no-repeat;
  }
  :host::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 700px;
      height: 400px;
      background-image:
        url('/assets/pattern-squiggly-line-bottom-desktop.svg');
      background-repeat: no-repeat;
      pointer-events: none;
  }
  :host::after {
      content: '';
      position: absolute;
      top: 80px;
      right: 0;
      width: 350px;
      height: 220px;
      background-image:
        url('/assets/pattern-squiggly-line-top.svg');
      background-repeat: no-repeat;
      background-size: contain;
      pointer-events: none;
  }
  .container {
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 1rem 6rem;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    :host::after {
      width: 180px;
      height: 120px;
      bottom: 120px;
      right: -20px;
    }
  }
  @media (max-width: 768px) {
    :host {
      background:
        url('/assets/pattern-circle.svg') right -30px bottom 180px no-repeat,
        url('/assets/pattern-lines.svg'),
        radial-gradient(
          circle at bottom,
          rgba(132, 0, 255, 0.5),
          transparent 40%
        ),
        #0d0320;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
  @media (max-width: 768px) {
    :host::before {
      width: 500px;
      height: 300px;
      left: -80px;
      bottom: 0;
      background-image:
        url('/assets/pattern-squiggly-line-bottom-mobile-tablet.svg');
    }
  }
`;