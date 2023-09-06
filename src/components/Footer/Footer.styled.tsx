import styled from "styled-components";

const SCFooter = styled.div`
  background: rgb(var(--very-light-gray));
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 135px;
  width: fit-content;

  .container {
    display: flex;
    gap: 85px;
    align-items: center;

    .logo {
      background: rgb(var(--very-dark-blue));
      width: 200px;
      height: 200px;
      display: grid;
      place-items: center;

      svg {
        path {
          fill: rgb(var(--white));
        }

        @media screen and (max-width: 1300px) {
          transform: scale(0.7);
        }

        @media screen and (max-width: 760px) {
          transform: scale(0.8);
        }

        @media screen and (max-width: 500px) {
          transform: scale(0.7);
        }
      }

      @media screen and (max-width: 1300px) {
        width: 120px;
        height: 120px;
      }

      @media screen and (max-width: 760px) {
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 500px) {
        width: 120px;
        height: 120px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .links {
      display: flex;
      gap: 60px;

      a {
        color: rgb(var(--medium-gray));
        text-decoration: none;
        font-weight: 700;
      }

      @media screen and (max-width: 760px) {
        flex-direction: column;
        gap: 30px;
      }
    }

    @media screen and (max-width: 1300px) {
      gap: 40px;
    }
  }

  .button-primary {
    transform: translate(50%);

    @media screen and (max-width: 1300px) {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(55%, -50%);
    }

    @media screen and (max-width: 760px) {
      position: static;
      transform: translate(0);
    }
  }

  @media screen and (max-width: 1300px) {
    align-self: flex-start;
    padding-right: 140px;
    position: relative;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 50px 60px;
  }

  @media screen and (max-width: 500px) {
    padding: 50px 0;
    padding-top: 90px;
  }
`;

export default SCFooter;
