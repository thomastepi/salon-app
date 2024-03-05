import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 3rem;
  text-align: center;
  width: 70vw;
  margin: 0 auto;
  .container {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 40px;
  }
  .heading {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-family: "Madimi One", sans-serif;
  }
  @media (max-width: 968px) {
    .container {
      grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  }
`;

export default Wrapper;
