import { styled } from "styled-components";

const SCApp = styled.div`
  --very-dark-blue: 27, 29, 35;
  --dark-gray: 96, 99, 109;
  --medium-gray: 125, 130, 143;
  --light-gray: 200, 204, 216;
  --very-light-gray: 238, 239, 244;
  --white: 255, 255, 255;
  --red: 223, 86, 86;
  --authoritative-blue: 23, 178, 243;

  background-color: white;
  display: flex;
  flex-direction: column;

  /* #region */

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4,
  .fs-body-1,
  .fs-body-2 {
    font-family: soyjak;
  }

  .fs-h1 {
    font-size: 250px;
    line-height: 200px;
    letter-spacing: -5px;
    font-weight: 700;

    &.scaled {
      @media screen and (max-width: 1300px) {
        font-size: 120px;
        line-height: 200px;
        letter-spacing: -3px;
      }
    }
  }

  .fs-h2 {
    font-size: 96px;
    line-height: 80px;
    letter-spacing: -2px;
    font-weight: 700;

    &.scaled {
      @media screen and (max-width: 730px) {
        font-size: 48px;
        line-height: 48px;
        letter-spacing: -1.25px;
      }
    }
  }

  .fs-h3 {
    font-size: 72px;
    line-height: 64px;
    letter-spacing: -2px;
    font-weight: 700;

    &.scaled {
      @media screen and (max-width: 625px) {
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -1.7px;
      }
    }
  }

  .fs-h4 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }

  .fs-body-1,
  .fs-body-2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }

  .fs-body-2 {
    letter-spacing: 18px;
    text-transform: uppercase;
  }

  /* #endregion */

  .button-primary,
  .button-secondary,
  .button-tertiary {
    font-family: soyjak;
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    transition: background-color 0.33s;
    border: none;
  }

  .button-primary,
  .button-secondary {
    background-color: rgb(var(--very-dark-blue));
    color: rgb(var(--white));

    &:active {
      background-color: rgb(var(--light-gray));
    }

    @media (hover: hover) {
      &:not(:active):hover {
        background-color: rgb(var(--dark-gray));
      }
    }
  }

  .button-primary {
    display: flex;
    justify-content: center;
    gap: 25px;
    padding: 25px 35px;
    text-decoration: none;

    svg {
      g {
        stroke: rgb(var(--white));
      }
    }
  }

  .button-secondary,
  .button-tertiary {
    display: grid;
    place-items: center;
    width: 80px;
    height: 80px;
  }

  .button-tertiary {
    background-color: rgb(var(--white));
    color: rgb(var(--medium-gray));

    &.selected {
      background-color: rgb(var(--very-dark-blue));
      color: rgb(var(--white));
    }

    @media (hover: hover) {
      &:not(.selected):hover {
        background-color: rgb(var(--very-light-gray));
      }
    }
  }

  .input-container,
  .text-area-container {
    position: relative;

    .error {
      color: rgb(var(--red));
      font-family: soyjak;
      font-size: 18px;
      font-weight: 700;
      position: absolute;
      bottom: 16px;
      right: 16px;
      display: none;

      &.active {
        display: block;
      }
    }

    input[type="text"],
    textarea {
      background-color: transparent;
      color: rgb(var(--very-dark-blue));
      font-family: soyjak;
      font-size: 20px;
      font-weight: 700;
      border: none;
      width: 100%;
      border-bottom: 1px solid rgb(var(--very-dark-blue));

      &:focus {
        outline: none;
        border-bottom: 3px solid rgb(var(--very-dark-blue));
      }

      &::placeholder {
        color: rgb(var(--light-gray));
        font-family: soyjak;
        font-size: 18px;
        font-weight: 700;
      }

      &.invalid {
        border-color: rgb(var(--red));

        &::placeholder {
          color: rgb(var(--red), 0.5);
        }
      }
    }

    input[type="text"] {
      padding-bottom: 30px;
    }

    textarea {
      padding-bottom: 75px;
    }
  }
`;

export default SCApp;
