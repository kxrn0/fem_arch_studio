import styled from "styled-components";

const SCNavbar = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  gap: 95px;
  padding: 56px 165px;
  position: relative;

  .navbar-toggle {
    display: none;
  }

  .path {
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
  }

  .links {
    display: flex;
    gap: 60px;
  }
`;

export default SCNavbar;
