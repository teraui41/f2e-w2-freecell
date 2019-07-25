import React from "react";
import styled from "styled-components";
import { JKStyle } from "../constants/color.config";

const BasicHintDialog = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 888;
  width: 600px;
  height: 500px;
  background-color: #fff;
  border: 10px solid #eee;
  border-radius: 10px;
  margin-top: ${({open}) => open ? -100: -1000}px;
  opacity: ${({open}) => open ? 1: 0};
`;

const HintTitle = styled.h4`
  font-size: 25px;
  text-align: center;
  color: #7b7b7b;
`;

const Suits = styled.div`
  margin-top: 180px;
  text-align: center;
  letter-spacing: 79px;
  font-size: 40px;
  padding-left: 91px;
`;

const Description = styled.div`
  margin: 10px 43px;
  background-color: #fbfbfb;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 18px;
  border-radius: 5px;
  color: #808080;
  text-align: center;
  & p {
    margin: 5px;
  }
`;

const StartButton = styled.div`
  font-size: 16px;
  color: #808080;
  width: 120px;
  margin: auto;
  text-align: center;
  border: 5px solid;
  padding: 5px;
  font-size: 29px;
  border-radius: 44px;
  cursor: pointer;
  :hover {
    background-color: #808080;
    color: #fff;
  }
`;

class HintDialog extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      open: true
    }
  }

  onClick = () => {

    

    this.setState(state=>({
      ...state,
      open: false
    }))
  }

  render() {
    const { open } = this.state;
    const { children } = this.props;
    return (
      <BasicHintDialog open={open}>
        <HintTitle>溫馨提示</HintTitle>
        {children}
        <Suits>
          <span style={{ color: JKStyle.brown.main }}>♠</span>
          <span style={{ color: JKStyle.red.main }}>♦</span>
          <span style={{ color: JKStyle.red.main }}>♥</span>
          <span style={{ color: JKStyle.brown.main }}>♣</span>
        </Suits>
        <Description>
          <p>你的工作是引導學生們回到自己的教室</p>
          <p>太久的話體弱多病的他們會中暑喔！</p>
        </Description>
        <StartButton onClick={this.onClick}>開始</StartButton>
      </BasicHintDialog>
    );
  }
}

export default HintDialog;
