import styled from "styled-components";

const SCContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 360px 165px;
  padding-top: 0;

  .contact-details {
    margin-top: 275px;
    margin-bottom: 165px;
    display: flex;
    gap: 30px;

    .fs-h3 {
      width: 350px;
      position: relative;

      &::before {
        content: "";
        background-color: rgb(var(--light-gray));
        width: 65px;
        height: 1px;
        position: absolute;
        top: -75px;

        @media screen and (max-width: 1024px) {
          top: -50px;
        }

        @media screen and (max-width: 625px) {
          display: none;
        }
      }

      @media screen and (max-width: 625px) {
        width: 200px;
      }
    }

    .container {
      display: flex;
      gap: 90px;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }

      @media screen and (max-width: 1024px) {
        gap: 45px;
      }

      @media screen and (max-width: 625px) {
        gap: 40px;
      }
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 40px;
      margin-top: 250px;
      margin-bottom: 225px;
    }

    @media screen and (max-width: 625px) {
      margin-top: 435px;
      margin-bottom: 70px;
    }
  }

  .form-section {
    display: flex;
    gap: 30px;
    margin-top: 125px;

    .fs-h3 {
      width: 350px;
    }

    form {
      width: 730px;

      @media screen and (max-width: 850px) {
        width: 575px;
      }

      @media screen and (max-width: 600px) {
        width: 80vw;
      }
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      gap: 60px;
    }
  }

  @media screen and (max-width: 1350px) {
    padding: 240px 100px;
    padding-top: 0;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    padding-bottom: 170px;
  }
`;

export default SCContact;
