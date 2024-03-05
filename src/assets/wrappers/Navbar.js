import styled from "styled-components";

const Wrapper = styled.nav`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .logo {
    width: 12%;
  }

  .login {
    cursor: pointer;
    border: 1px solid #ff6b6b;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    height: 40%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  .login:hover {
    transition: 0.6s;
    background-color: #ff6b6b;
    p {
      transition: 0.6s;
      color: white;
    }
  }
`;

export default Wrapper;
