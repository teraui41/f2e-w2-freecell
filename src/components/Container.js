import styled from 'styled-components';

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  background-color: #B4C188;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    position: absolute;
    content: "";
    top: 0px;
    width: 100%;
    height: 200px;
    background: linear-gradient(to left top, #d3f0fd, #a9d1e4);
  }
`;

export default Container;
