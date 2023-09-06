import styled from "styled-components";

const SCNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 95px;
  padding: 55px 165px;
  position: relative;

  .navbar-toggle {
    display: none;
    position: relative;

    input[type="checkbox"] {
      appearance: none;
      position: absolute;
      inset: 0;
    }

    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  .backdrop {
    display: none;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.33s;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    @media screen and (max-width: 600px) {
      background-color: rgb(var(--very-dark-blue), 0.5);
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
    }
  }

  .page {
    position: absolute;
    top: 0;
    left: 65px;

    .line {
      background-color: rgb(var(--light-gray));
      width: 1px;
      height: 105px;
    }

    .fs-body-2 {
      color: rgb(var(--light-gray));
      transform-origin: left;
      transform: rotate(90deg);
      width: max-content;
      position: absolute;
      bottom: -50px;
    }

    @media screen and (max-width: 840px) {
      left: 50px;
    }

    @media screen and (max-width: 730px) {
      display: none;
    }
  }

  .links {
    display: flex;
    gap: 60px;

    .fs-body-1 {
      color: rgb(var(--medium-gray));
      text-decoration: none;
      position: relative;

      &::after {
        content: "";
        background-color: rgb(var(--very-dark-blue));
        display: block;
        width: 25px;
        height: 1px;
        position: absolute;
        top: calc(100% + 5px);
        right: 50%;
        transform: translate(50%);
        opacity: 0;
        transition: opacity 0.33s;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      &.current-page::after {
        opacity: 1;
      }

      @media screen and (max-width: 600px) {
        color: var(--very-dark-blue);
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
      }
    }

    @media screen and (max-width: 600px) {
      background-color: rgb(var(--very-light-gray));
      position: absolute;
      right: 0;
      top: 100%;
      flex-direction: column;
      gap: 17px;
      width: 345px;
      padding: 40px 50px;
      transition: transform 0.33s, opacity 0.33s;
      z-index: 1;

      &.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      &.closed {
        transform: translateY(-250px);
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  @media screen and (max-width: 870px) {
    gap: 80px;
  }

  @media screen and (max-width: 840px) {
    padding: 55px 100px;
  }

  @media screen and (max-width: 730px) {
    padding: 32px;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export default SCNavbar;
