import styled from "styled-components";

const SCImageSlider = styled.div`
  --time: 0.33s;

  position: relative;
  width: fit-content;

  .picture-container {
    background-color: rgb(var(--authoritative-blue));
    overflow: hidden;

    img {
      &.entering {
        animation: fade-in var(--time) forwards;
      }

      &.exiting {
        animation: fade-out var(--time) forwards;
      }

      @keyframes fade-out {
        from {
          opacity: 1;
          transform: rotate(0) scale(1);
          filter: blur(0);
        }

        to {
          opacity: 0;
          transform: rotate(180deg) scale(3);
          filter: blur(5px);
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
          transform: rotate(180deg) scale(3);
          filter: blur(5px);
        }

        to {
          opacity: 1;
          transform: rotate(0) scale(1);
          filter: blur(0);
        }
      }
    }
  }

  .information {
    position: absolute;
    inset: 0;
    background-color: rgb(var(--very-dark-blue), 0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding: 185px 0 180px 190px;
    overflow: hidden;

    .details {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .fs-h2,
      .fs-body-1 {
        &.entering {
          animation: slide-in var(--time) forwards;
        }

        &.exiting {
          animation: slide-out var(--time) forwards;
        }

        @media screen and (max-width: 1200px) {
          width: 100%;
        }
      }

      .fs-h2 {
        color: rgb(var(--white));
        width: 545px;
      }

      .fs-body-1 {
        color: rgb(var(--white));
        width: 445px;
      }
    }

    .button-primary {
      &.entering {
        animation: slide-in var(--time) forwards;
      }

      &.exiting {
        animation: slide-out var(--time) forwards;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 185px 60px;
      padding-bottom: 180px;
    }

    @media screen and (max-width: 500px) {
      gap: 85px;
      padding: 115px 30px;
      padding-bottom: 110px;
    }

    @keyframes slide-out {
      from {
        opacity: 1;
        transform: translate(0);
      }

      to {
        opacity: 0;
        transform: translate(-100vw);
      }
    }

    @keyframes slide-in {
      from {
        opacity: 0;
        transform: translate(100vw);
      }

      to {
        opacity: 1;
        transform: translate(0);
      }
    }
  }

  .buttons {
    display: flex;
    position: absolute;
    bottom: 0;
    left: -80px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export default SCImageSlider;
