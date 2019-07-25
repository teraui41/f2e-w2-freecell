import React from "react";
import styled from "styled-components";
import Stage from '../components/Stage';
import JKGirl from "../components/JKGirl";
import HintDialog from "../containers/HintDialogContainer";
import WelcomeDialog from "../containers/WelcomeDialogContainer";
import { FOUR_SUITS, SUITS } from "../constants/common";

const BasicPlayground = styled.div`
  position: relative;
  width: 1280px;
  height: 100%;
  margin: auto;
  background-color: #b9c784;
  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 200px;
    background: linear-gradient(to left top, #d3f0fd, #a9d1e4);
  }
`;

const LineBasic = styled.div`
  float: left;
  height: 60%;
  width: 100px;
  background-color: #cdd89c;
  margin-left: 34px;
  margin-right: 22px;
  margin-top: 300px;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.14);
  transition: background-color 0.5s ease;
  :hover {
    background-color: #e2eabf;
  }
`;

const SelectedJK = styled.div``

const Lines = ({ onMouseDown }) => {
  let lines = [];
  for (let i = 0; i < 8; i++) {
    lines.push(<LineBasic onMouseDown={onMouseDown(i)} />);
  }

  return lines;
};

class PlaygroundScreen extends React.PureComponent {
  componentDidMount() {}

  onMouseDown = lineNo => event => {
    const { selectedId } = this.props;
    const { clientX, clientY } = event;
    const directionY = clientY - 127;
    const directionX = clientX - 50;

    this.props.pointPosition({ selectedId, directionX, directionY });
  };

  render() {
    const { students, selectedId, selectStudent } = this.props;
    return (
      <React.Fragment>
        <Stage />
        <SelectedJK />
        <BasicPlayground>
          <Lines onMouseDown={this.onMouseDown} />
          {students.map(({ suit, ...student }, index) => (
            <JKGirl
              key={`jk${suit}${index}`}
              selectedId={selectedId}
              selectStudent={selectStudent}
              {...student}
              {...FOUR_SUITS[suit]}
            />
          ))}
        </BasicPlayground>
        <HintDialog>
          {SUITS.map((suit, index) => (
            <JKGirl
              key={`demo${suit}${index}`}
              directionX={70 + 120 * index}
              directionY={100}
              selectedId={`demo${suit}${index}`}
              {...FOUR_SUITS[suit]}
              number={"A"}
            />
          ))}
        </HintDialog>
        <WelcomeDialog />
      </React.Fragment>
    );
  }
}

export default PlaygroundScreen;
