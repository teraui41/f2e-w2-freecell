import React from "react";
import styled from "styled-components";
import Teacher from "./Teacher";

const BasicStage = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  z-index: 444;
  margin: auto;
  top: 190px;
  background-color: #fff;
  left: 0;
  right: 0;
  ::before {
    position: absolute;
    content: "";
    width: 200px;
    height: 10px;
    background-color: #eee;
  }
  ::after {
    position: absolute;
    content: "";
    width: 200px;
    height: 10px;
    background-color: #eee;
  }
`;

const Flag = styled.div`
  width: 10px;
  height: 198px;
  background-color: #eee;
  position: absolute;
  bottom: 0px;
  left: -30px; 
  ::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background-color: #795548;
    left: -5px;
    bottom: 0px;
  }
  ::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 30px;
    background-color: #fff;
    left: -5px;
    top: -10px;
  }
`;

class Stage extends React.PureComponent {
  render() {
    const { message } = this.props;

    return (
      <BasicStage>
        <Flag />
        <Teacher message={message} />
      </BasicStage>
    );
  }
}

export default Stage;
