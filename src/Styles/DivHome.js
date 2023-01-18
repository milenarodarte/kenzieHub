import styled from "styled-components";
const DivHomeStyled = styled.div`
  background-color: var(--grey-4);
  min-height: 78vh;

  .addButton {
    height: 2rem;
    width: 2rem;
    background-color: var(--grey-3);
    font-size: var(--14px);
    font-weight: 700;
  }
  .addButton:hover {
    background-color: var(--grey-2);
  }
  .tech {
    color: var(--grey-0);
    font-size: var(--16px);
    font-weight: 600;
  }
  .headerTech {
    height: 5vh;
    width: 48.75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0rem 1rem 0rem 1rem;
    align-items: center;
  }
  .containerList {
    padding: 1.5rem;
    background-color: var(--grey-3);
    border-radius: 0.25rem;
    width: 46.75rem;
    margin: 0 auto;
    gap: 1rem;
    margin-top: 1rem;
  }
  .post {
    background-color: var(--grey-4);
    border-radius: 0.5rem;
    width: 43.75rem;
    height: 3.063rem;
    padding: 0.75rem 1.375rem 0.75rem 1.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .post:hover {
    background-color: var(--grey-2);
  }
  .containerButton {
    display: flex;
    gap: 1.375rem;
    align-items: center;
  }
  .deletePost {
    width: 1.25rem;
    height: 1.25rem;
    background-color: var(--grey-4);
    border-radius: 0.25rem;
  }
  .techName {
    color: var(--grey-0);
    font-size: var(--14px);
    font-weight: 700;
  }
  .level {
    color: var(--grey-1);
    font-weight: 400;
    font-size: var(--12px);
  }
  @media (max-width: 780px) {
    .headerTech {
      width: 100vw;
      padding: 0rem 2rem 0rem 2rem;
    }
    .containerList {
      width: 96vw;
      padding: 1.5rem;
    }
    .post {
      width: 100%;
      padding: 0rem 2rem 0rem 2rem;
    }
  }
`;
export default DivHomeStyled;
