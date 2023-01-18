import styled from "styled-components";

const NavBarStyled = styled.nav`
  height: 7vh;
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0rem;
  .navContainer {
    width: 48.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-direction: wrap;
    padding: 0rem 1rem 0rem 1rem;
  }
  button {
    height: 2rem;
    border-radius: 0.25rem;
    background-color: var(--grey-3);
    color: var(--grey-0);
    width: 3.438rem;
  }
  button:hover {
    background-color: var(--grey-2);
  }
  @media (max-width: 699px) {
    .navContainer {
      padding: 0rem 2rem 0rem 2rem;
    }
  }
`;
export default NavBarStyled;
