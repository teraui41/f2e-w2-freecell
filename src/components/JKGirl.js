import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { JKStyle } from "../constants/color.config";

const Jump = keyframes`
  0% {
    transform: translate(0px, 0px) scale(0.8);
  }

  100% {
    transform: translate(0px,-100px) scale(0.8);
  }
`;

const JumpShadow = keyframes`
0% {
  box-shadow: 33px 159px 0px 5px #0000004a;
}

100% {
  box-shadow: 33px 259px 10px 5px #0000004a;
}
`;

const Shadow = styled.div`
  width: 34px;
  height: 0px;
  box-shadow: ${({ picked }) =>
    picked ? "33px 179px 10px 5px #0000004a" : "33px 159px 0px 5px #0000004a"};
  transition: all 0.3s ease;
  animation-name: ${props => (props.isJump ? JumpShadow : "")};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0.29, 0.19, 0.99);
  animation-iteration-count: 2;
`;

const PersonBox = styled.div`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex};
  top: ${props => props.directionY}px;
  left: ${props => props.directionX}px;
  width: 97px;
  height: 157px;
  transition: all 3s ease;
  animation-name: ${props => (props.isJump ? Jump : "")};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0.29, 0.19, 0.99);
  animation-iteration-count: 2;
  transform: rotateY(${({ faceRight, picked }) =>
    `${faceRight ? 0 : -180}deg) scale(0.8) translateY(${picked ? -20 : 0}px);`}
  transform-origin: 50px 0px;
  animation-direction: alternate;
  pointer-events: unset;
`;

const HeadMove = keyframes`
  0% {
    transform: translate(0px, -3px);
  }

  50% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(0px, -3px);
  }
`;

const PersonHead = styled.span`
  position: absolute;
  width: 78px;
  height: 77px;
  border-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 50px;
  background-color: ${JKStyle.skin.light};
  border: 3px solid ${JKStyle.skin.main};
  top: 4px;
  left: 3px;
  animation: ${HeadMove} 1s ${({ delay }) => delay}s ease infinite;
`;

const PersonHair = styled.span`
  position: absolute;
  width: 80px;
  height: 25px;
  background-color: ${({ hairColor }) => JKStyle[hairColor].main};
  padding: 5px;
  margin-top: -4px;
  margin-left: -4px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  z-index: 9;
`;

const HairFrond = styled.span`
  position: absolute;
  background-image: ${({ hairColor }) =>
    `linear-gradient(to left top, ${JKStyle[hairColor].main}, ${
      JKStyle[hairColor].dark
    })`};
  width: 40px;
  height: 35px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  transform: rotate(${props => props.rotate}deg);
  margin-left: ${props => props.left}px;
  margin-top: 5px;
  border-left: 3px solid ${({ hairColor }) => JKStyle[hairColor].deep};
`;

const HairBack = styled.span`
  position: absolute;
  background-image: ${({ hairColor }) =>
    `linear-gradient(to left top, ${JKStyle[hairColor].main}, ${
      JKStyle[hairColor].dark
    })`};
  width: 16px;
  height: 48px;
  border-left: 8px solid ${({ hairColor }) => JKStyle[hairColor].main};
  border-bottom-left-radius: 100px;
  margin-top: 30px;
  margin-left: -5px;
`;

const HairTailMove = keyframes`
  0% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(30deg);
  }

  100% {
    transform: rotate(10deg);
  }
`;

const HairTail = styled.span`
  position: absolute;
  background-image: ${({ hairColor }) =>
    `linear-gradient(to left top, ${JKStyle[hairColor].main}, ${
      JKStyle[hairColor].deep
    })`};
  width: 26px;
  height: 97px;
  border-top-left-radius: 42px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 53px;
  border-bottom-right-radius: 5px;
  margin-left: -4px;
  -webkit-transform: rotate(13deg);
  -ms-transform: rotate(13deg);
  transform: rotate(16deg);
  margin-top: -13px;
  border-bottom: 5px solid ${({ hairColor }) => JKStyle[hairColor].deep};
  transform-origin: top;
`;

const HairTailEnd = styled.span`
  position: absolute;
  background-image: ${({ hairColor }) =>
    `linear-gradient(to left top, ${JKStyle[hairColor].deep}, ${
      JKStyle[hairColor].main
    })`};
  width: 19px;
  height: 73px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  margin-left: 0px;
  -webkit-transform: rotate(13deg);
  -ms-transform: rotate(13deg);
  -webkit-transform: rotate(8deg);
  -ms-transform: rotate(8deg);
  transform: rotate(16deg);
  margin-top: -7px;
  transform-origin: top;
`;

const HairUpMove = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const HairUp = styled.span`
  position: absolute;
  width: 22px;
  height: 27px;
  border: 0px solid ${({ hairColor }) => JKStyle[hairColor].main};
  border-radius: 100%;
  border-right-width: 9px;
  margin-top: -28px;
  margin-left: 32px;
  animation: ${HairUpMove} 1s ${({ delay }) => delay}s ease infinite;
  transform-origin: bottom;
`;

const HairEnd = styled.span`
  position: absolute;
  background-image: ${({ hairColor }) =>
    `linear-gradient(to left top, ${JKStyle[hairColor].dark}, ${
      JKStyle[hairColor].main
    })`};
  width: 35px;
  height: 36px;
  border-left: 8px solid ${({ hairColor }) => JKStyle[hairColor].main};
  border-top-left-radius: 100px;
  margin-left: -5px;
  margin-top: -4px;
`;

const PersonFace = styled.span`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 30px;
  left: 16px;
`;

const PersonEye = styled.span`
  position: absolute;
  width: ${props => (props.left ? 25 : 23)}px;
  height: 40px;
  border-top: 5px solid;
  margin-top: 13px;
  border-radius: 3px;
  margin-left: ${props => (props.left ? 3 : 39)}px;
  ::before {
    position: absolute;
    content: "";
    width: ${props => (props.left ? 18 : 16)}px;
    height: 11px;
    background-color: ${({ eyeColor }) => JKStyle[eyeColor].dark};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 5px;
    border-top: 5px solid ${({ eyeColor }) => JKStyle[eyeColor].deep};
  }
  ::after {
    position: absolute;
    content: "";
    width: ${props => (props.left ? 10 : 8)}px;
    height: 7px;
    background-color: ${({ eyeColor }) => JKStyle[eyeColor].light};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 9px;
    border-top: 5px solid ${({ eyeColor }) => JKStyle[eyeColor].main};
  }
`;

const PersonMouth = styled.span`
  position: absolute;
  border-left: 3px solid ${JKStyle.pink.dark};
  border-right: 2px solid ${JKStyle.pink.dark};
  margin-top: 40px;
  margin-left: 30px;
  width: 6px;
  background-color: ${JKStyle.pink.main};
  height: 4px;
  border-radius: 10px;
`;

const BodyMove = keyframes`
  0% {
    transform: translate(0px, -2px);
  }

  50% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(0px, -2px);
  }
`;

const PersonBody = styled.span`
  position: absolute;
  top: 86px;
  margin-left: 24px;
  animation: ${BodyMove} 1s ${({ delay }) => delay}s ease infinite;
`;

const Chest = styled.span`
  position: absolute;
  width: 38px;
  border-left: 6px solid transparent;
  border-bottom: 35px solid ${JKStyle.grayScale.light};
  border-right: 6px solid transparent;
  border-radius: 5px;
`;

const Skirt = styled.span`
  position: absolute;
  width: 50px;
  margin-top: 34px;
  height: 12px;
  background-image: ${({ clothColor }) =>
    `linear-gradient(to left, ${JKStyle[clothColor].main} 70%, ${
      JKStyle[clothColor].dark
    } 71%)`};
  background-size: 9px;
  border-top: 5px solid ${({ clothColor }) => JKStyle[clothColor].deep};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Neck = styled.span`
  position: absolute;
  width: 10px;
  height: 4px;
  background-color: #2f2e2f;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  left: 5px;
  border-top: 5px solid ${JKStyle.skin.deep};
  border-left: 12px solid ${({ clothColor }) => JKStyle[clothColor].light};
  border-right: 9px solid ${({ clothColor }) => JKStyle[clothColor].light};
  box-shadow: 0px 0px 0px 2px ${JKStyle.grayScale.light},
    0px 0px 0px 5px ${({ clothColor }) => JKStyle[clothColor].main};
  ::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 5px;
    margin-top: -10px;
    background-color: ${JKStyle.skin.deep};
    margin-top: -7px;
  }
`;

const HandLeftMove = keyframes`
  0% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(10deg);
  }
`;

const HandRightMove = keyframes`
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(-20deg);
  }

  100% {
    transform: rotate(-10deg);
  }
`;

const Hand = styled.span`
  margin-top: 1px;
  position: absolute;
  left: ${props => (props.left ? -3 : 42)}px;
  width: 12px;
  height: 26px;
  border-top: 13px solid ${JKStyle.grayScale.light};
  background-color: ${JKStyle.skin.light};
  border-radius: 10px;
  transform: rotate(${props => (props.left ? 10 : -10)}deg);
  box-shadow: 0px 2px 0px 0px ${JKStyle.skin.dark} inset;
  animation-name: ${props => {
    return props.isMoving ? (props.left ? HandLeftMove : HandRightMove) : "";
  }};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  transform-origin: top;
`;

const FootMove = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const Leg = styled.span`
  margin-top: 44px;
  position: absolute;
  left: ${props => (props.left ? 10 : 29)}px;
  width: 14px;
  height: 4px;
  border-top: 13px solid ${JKStyle.skin.main};
  border-bottom: 11px solid ${JKStyle.grayScale.deep};
  background-color: ${JKStyle.grayScale.light};
  border-radius: 10px;
  animation-name: ${props => (props.isMoving ? FootMove : "")};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-delay: ${props => (props.left ? 0 : 0.5)}s;
  transform-origin: top;
`;

const PersonFoot = styled.span`
  position: absolute;
  top: 85px;
  left: 24px;
`;

const Message = styled.span`
  position: absolute;
`;

const TakeItem = styled.span`
  position: absolute;
  transform: rotate(53deg);
  left: 7px;
  top: -110px;
  transform-origin: bottom;
  height: 120px;
  width: 10px;
`;

const NumberCap = styled.span`
  position: absolute;
  z-index: 9;
  height: 35px;
  width: 25px;
  border-radius: 53px;
  background-color: #fff;
  border: 2px solid #eee;
  transform: rotate(28deg);
  font-size: 23px;
  text-align: center;
  font-weight: bold;
  user-select: none;
  color: ${({ numberColor }) => JKStyle[numberColor].main};
`;

const defaultState = {
  name: "",
  gender: 0,
  message: "",
  positionX: 0,
  positionY: 0,
  directionLeft: false
};

class JKGirl extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultState
    };
  }

  componentDidMount() {
    const { directionY, directionX } = this.props;
    this.setState(state => ({
      ...state,
      directionY,
      directionX,
      delay: -Math.random() * 3
    }));
  }

  onMouseDown = () => {
    this.setState(state => ({
      ...state,
      picked: true
    }));
  };

  unPicked = () => {
    this.setState(state => ({
      ...state,
      picked: false
    }));
  };

  onMouseOver = event => {
    if (!this.state.isJump) {
      this.setState(state => ({
        ...state,
        isJump: true
      }));
      setTimeout(()=>{
        this.setState(state => ({
          ...state,
          isJump: false
        }))
      },1000)
    }
  };

  onClick = selectedId => () => {
    this.props.selectStudent({selectedId})
  }

  render() {
    const {
      directionX,
      directionY,
      isJump,
      isMoving,
      faceRight = true,
      cloth,
      eye,
      hair,
      number,
      numberColor,
      studentId,
      selectedId
    } = this.props;

    const { delay } = this.state;

    const eyeColor = eye;
    const hairColor = hair;
    const clothColor = cloth;
    const picked = studentId === selectedId;

    return (
      <PersonBox
        directionX={directionX}
        directionY={directionY}
        faceRight={faceRight}
        isJump={isJump}
        zIndex={directionY}
        picked={picked}
        onClick={this.onClick(studentId)}
      >
        <Shadow picked={picked} />
        <PersonFoot>
          <Leg isMoving={isMoving} />
          <Leg left isMoving={isMoving} />
          <Skirt clothColor={clothColor} />
        </PersonFoot>
        <PersonBody delay={delay}>
          <Hand isMoving={isMoving}>
            <TakeItem />
          </Hand>
          <Chest>
            <Neck clothColor={clothColor} />
          </Chest>
          <Hand left isMoving={isMoving} />
        </PersonBody>
        <PersonHead delay={delay}>
          <PersonHair hairColor={hairColor}>
            <HairTail delay={delay} hairColor={hairColor} />
            <HairTailEnd delay={delay} hairColor={hairColor} />
            <HairEnd hairColor={hairColor} />
            <HairBack hairColor={hairColor} />
            <HairFrond hairColor={hairColor} left={51} rotate={-73} />
            <HairFrond hairColor={hairColor} left={31} rotate={-53} />
            <HairFrond hairColor={hairColor} left={11} rotate={-23} />
            <HairUp delay={delay} hairColor={hairColor} />
          </PersonHair>
          <PersonFace>
            <PersonEye eyeColor={eyeColor} left />
            <PersonEye eyeColor={eyeColor} right />
            <PersonMouth />
          </PersonFace>
          <NumberCap numberColor={numberColor}>{number}</NumberCap>
        </PersonHead>
        <Message />
      </PersonBox>
    );
  }
}

export default JKGirl;
