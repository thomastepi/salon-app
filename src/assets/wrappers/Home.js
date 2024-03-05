import styled from "styled-components";

const Wrapper = styled.main`
  background-color: #f5f5f5;
  height: 100%;

  .container {
    height: 75vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
  }
  span {
    color: #ff6b6b;
  }
  .info {
    width: 50%;
    padding-right: 3rem;
  }
  .logo-main {
    border-radius: 50%;
    width: 50%;
    overflow: hidden;
  }
  .logo-main img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #333;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: "Madimi One", sans-serif;
  }
  .btn {
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
  @media (max-width: 968px) {
    .container {
      flex-direction: column;
      height: 100%;
      padding: 0 2rem;
    }
    .info {
      width: 100%;
      padding-right: 0;
      text-align: center;
    }
    .logo-main {
      width: 100%;
      margin-top: 2rem;
    }
    .logo-main img {
      display: none;
    }
  }
`;

export default Wrapper;
