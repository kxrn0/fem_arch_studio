import styled from "styled-components";

const SCProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .socials {
    position: relative;
    overflow: hidden;
    width: fit-content;

    .links {
      background-color: rgb(var(--very-dark-blue), 0.5);
      position: absolute;
      inset: 0;
      display: flex;
      gap: 40px;
      justify-content: center;
      align-items: center;
      transform: translateY(100%);
      opacity: 0;
      transition: transform 0.33s, opacity 0.33s;

      @media (hover: hover) {
        &:hover {
          transform: translateY(0);
          opacity: 1;
        }
      }

      &.open {
        transform: translateY(0);
        opacity: 1;
      }
    }

    img {
      @media (hover: hover) {
        &:hover + .links {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media screen and (max-width: 1200px) {
        width: 280px;
      }

      @media screen and (max-width: 600px) {
        width: 310px;
      }
    }
  }
`;

export default SCProfile;
