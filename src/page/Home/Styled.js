import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #e5e5e5 0%, rgba(255, 255, 255, 0) 100%);

  .home__title {
    font-size: 1.75rem;
    padding: 1.5rem 0 1.5rem;
    text-align: center;
    text-transform: capitalize;
    color: #555;
  }

  .home__containt {
    display: flex;
    flex-direction: column;
    width: 40rem;
    align-items: center;

    .home__containt__form {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;

      input {
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 1rem;
        width: 30rem;
        height: 3.5rem;
        border: none;
        box-shadow: 0px 0px 4px 1px #dcdde0;
        font-size: 1.25rem;
      }

      button {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 0 0.5rem 0.5rem 0;
        border: none;
        box-shadow: 0px 0px 4px 1px #dcdde0;
        background: #5965e0;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: #4953b8;
        }

        svg {
          color: white;
          font-size: 1.25rem;
        }
      }
    }

    .home__containt__text {
      width: 33.5rem;
      font-size: 1.25rem;
      word-break: break-word;
      color: #555;
    }
  }
`;

export default Container;
