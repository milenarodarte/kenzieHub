import styled from "styled-components";
const HeaderHomeStyled = styled.header`
  background-color: var(--grey-4);
  height: 22vh;
  color: var(--grey-0);
  display: flex;
  align-items: center;
  width: 100vw;

  .headerContainer {
    width: 48.75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem 0rem 1rem;
  }
  .personName {
    font-weight: 700;
    font-size: var(--18px);
  }
  .personModule {
    font-weight: 400;
    font-size: var(--12px);
    color: var(--grey-1);
  }
  @media (max-width: 699px) {
    .headerContainer {
      flex-direction: column;
      gap: 2rem;
      padding: 3rem 1rem 0rem 2rem;
    }
  }
`;
export default HeaderHomeStyled;
