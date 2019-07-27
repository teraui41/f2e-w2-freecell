import React from "react";
import styled from "styled-components";
import { Colors } from "../constants/color.config";

const BasicWelcomeDialog = styled.div`
  width: 100%;
  height: ${({open}) => open ? '100%':'0%'};
  z-index: 999;
  background: #fff;
  overflow: hidden;
  position: absolute;
  transition: all .5s ease;
  background-color: ${Colors.gray};
  background: radial-gradient(
      circle at 10% 12%,
      ${Colors.deepGray} 1px,
      transparent 1px
    ),
    radial-gradient(circle at 17% 7%, ${Colors.deepGray} 0px, transparent 2px),
    radial-gradient(circle at 31% 32%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 37% 42%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 47% 52%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 37% 21%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 71% 27%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 64% 82%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 7% 82%, ${Colors.deepGray} 1px, transparent 1px),
    radial-gradient(circle at 60% 30%, ${Colors.deepGray} 0px, transparent 2px),
    ${Colors.gray};
  background-size: 30px 30px;
  background-repeat: repeat;
`;

const BlackBoard = styled.div`
  opacity: ${({open}) => open ? 1: 0};
  border: 20px solid #543333;
  border-radius: 10px;
  background-color: #5a7557;
  width: 600px;
  height: 400px;
  margin: auto;
  margin-top: 200px;
  text-align: center;
  color: ${Colors.white};
`;

const IconWords = styled.span`
  font-size: 24px;
  font-weight: bolder;
  background-color: #fff;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  text-align: right;
  color: #5a7557;
  text-shadow: 0px 0px 1px #5a7557;
  display: inline-block;
  transform: rotate(-30deg);
`;

const Subtitle = styled.div`
  font-size: 26px;
`;

const Words = styled.span`
  line-height: 28px;
  margin-left: 15px;
  letter-spacing: 8px;
`;

const Introduction = styled.div`
  margin-top: 30px;
  & p {
    font-size: 18px;
    margin: 5px;
  }
`;

const Title = styled.div`
  font-size: 70px;
  margin: 15px 5px;
`;

const StartButton = styled.div`
  border: 5px solid ${Colors.white};
  padding: 5px;
  border-radius: 20px;
  width: 100px;
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
  font-size: 20px;
  :hover {
    background-color: ${Colors.white}
    color: #5a7557;
  }
`

class WelcomeDialog extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  onStartClick = () => {
    this.setState(state=>({
      ...state,
      open: false
    }))
  }

  render() {
    const { open } = this.state;

    return (
      <BasicWelcomeDialog open={open}>
        <BlackBoard  open={open}>
          <Title>接龍高校</Title>
          <Subtitle>
            <IconWords>之</IconWords>
            <Words>我要回教室</Words>
          </Subtitle>
          <Introduction>
            <p>這個學校有個不成文的規定</p>
            <p>就是升旗完要用新接龍的規則回到教室</p>
          </Introduction>
          <StartButton
           onClick={this.onStartClick}
          >
            開始
          </StartButton>
        </BlackBoard>
      </BasicWelcomeDialog>
    );
  }
}

export default WelcomeDialog;
