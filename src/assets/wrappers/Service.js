import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fcf5ed;
  padding: 3rem 0;
  height: 10rem;
  border-radius: 1rem;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .title {
    height: 50%;
  }
  .btn {
    padding: 1rem 0;
    button {
      background-color: #ff6b6b;
      color: white;
      font-size: 1rem;
      font-weight: 700;
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.6s;
      &:hover {
        background-color: #ff9a9e;
      }
    }
  }
`;

export default Wrapper;
