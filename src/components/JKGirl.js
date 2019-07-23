import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { JKStyle } from '../constants/color.config';

const Jump = keyframes`
  0% {
    transform: translate(0px, 0px);
    box-shadow: 33px 159px 0px 5px #0000004a;
  }

  100% {
    transform: translate(0px,-100px);
    box-shadow: 33px 259px 10px 5px #0000004a;
  }
`;

const PersonBox = styled.div`
  position: absolute;
  top: ${props => props.directionY}px;
  left: ${props => props.directionX}px;
  width: 34px;
  height: 0px;
  box-shadow: 33px 159px 0px 5px #0000004a;
  transition: all 0.5s linear;
  animation-name: ${props => (props.isJump ? Jump : "")};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0.29, 0.19, 0.99);
  animation-iteration-count: 2;
  transform: rotateY(${props => (props.faceRight ? 0 : -180)}deg) scale(0.8);
  transform-origin: 50px 0px;
  animation-direction: alternate;
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
  animation: ${HeadMove} 1s ease infinite;
`;

const PersonHair = styled.span`
  position: absolute;
  width: 80px;
  height: 25px;
  background-color: ${({hairColor}) => JKStyle[hairColor].main};
  padding: 5px;
  margin-top: -4px;
  margin-left: -4px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  z-index: 9;
`;

const HairFrond = styled.span`
  position: absolute;
  background-image: ${({hairColor}) => (`linear-gradient(to left top, ${JKStyle[hairColor].main}, ${JKStyle[hairColor].dark})`)};
  width: 40px;
  height: 35px;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;
  transform: rotate(${props => props.rotate}deg);
  margin-left: ${props => props.left}px;
  margin-top: 5px;
  border-left: 3px solid ${({hairColor}) => JKStyle[hairColor].deep};
`;

const HairBack = styled.span`
  position: absolute;
  background-image: ${({hairColor}) => (`linear-gradient(to left top, ${JKStyle[hairColor].main}, ${JKStyle[hairColor].dark})`)};
  width: 16px;
  height: 48px;
  border-left: 8px solid ${({hairColor}) => JKStyle[hairColor].main};
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
  background-image: ${({hairColor}) => (`linear-gradient(to left top, ${JKStyle[hairColor].main}, ${JKStyle[hairColor].deep})`)};
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
  border-bottom: 5px solid ${({hairColor}) => JKStyle[hairColor].deep};
  animation: ${HairTailMove} 1s ease infinite;
  transform-origin: top;
`;

const HairTailEnd = styled.span`
  position: absolute;
  background-image: ${({hairColor}) => (`linear-gradient(to left top, ${JKStyle[hairColor].deep}, ${JKStyle[hairColor].main})`)};
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
  animation: ${HairTailMove} 1s ease infinite;
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
  border: 0px solid ${({hairColor}) => JKStyle[hairColor].main};
  border-radius: 100%;
  border-right-width: 9px;
  margin-top: -28px;
  margin-left: 32px;
  animation: ${HairUpMove} 1s ease infinite;
  transform-origin: bottom;
`;

const HairEnd = styled.span`
  position: absolute;
  background-image: ${({hairColor}) => (`linear-gradient(to left top, ${JKStyle[hairColor].dark}, ${JKStyle[hairColor].main})`)};
  width: 35px;
  height: 36px;
  border-left: 8px solid ${({hairColor}) => JKStyle[hairColor].main};
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
    background-color: ${({eyeColor}) => JKStyle[eyeColor].dark};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 5px;
    border-top: 5px solid ${({eyeColor}) => JKStyle[eyeColor].deep};
  }
  ::after {
    position: absolute;
    content: "";
    width: ${props => (props.left ? 10 : 8)}px;
    height: 7px;
    background-color: ${({eyeColor}) => JKStyle[eyeColor].light};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 9px;
    border-top: 5px solid ${({eyeColor}) => JKStyle[eyeColor].main};
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
  animation: ${BodyMove} 1s ease infinite;
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
  background-image: ${({clothColor}) => (`linear-gradient(to left, ${JKStyle[clothColor].main} 70%, ${JKStyle[clothColor].dark} 71%)`)};
  background-size: 9px;
  border-top: 5px solid ${({clothColor}) => JKStyle[clothColor].deep};
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
  border-left: 12px solid ${({clothColor}) => JKStyle[clothColor].light};
  border-right: 9px solid ${({clothColor}) => JKStyle[clothColor].light};
  box-shadow: 0px 0px 0px 2px ${JKStyle.grayScale.light}, 0px 0px 0px 5px ${({clothColor}) => JKStyle[clothColor].main};
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
  height: 50px;
  width: 50px;
  border-radius: 40px;
`

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

  render() {
    const { directionX, directionY, isMoving, isJump, faceRight, cloth, eye, hair } = this.props;

    const hairColor = hair;
    const clothColor = cloth;
    const eyeColor = eye;

    return (
      <PersonBox
        directionX={directionX}
        directionY={directionY}
        faceRight={faceRight}
        isJump={isJump}
      >
        <PersonFoot>
          <Leg isMoving={isMoving} />
          <Leg left isMoving={isMoving} />
          <Skirt clothColor={clothColor}/>
        </PersonFoot>
        <PersonBody>
          <Hand isMoving={isMoving}>
            <TakeItem>
            </TakeItem>
          </Hand>
          <Chest>
            <Neck clothColor={clothColor}/>
          </Chest>
          <Hand left isMoving={isMoving} />
        </PersonBody>
        <PersonHead>
          <PersonHair hairColor={hairColor}>
            <HairTail hairColor={hairColor}/>
            <HairTailEnd hairColor={hairColor}/>
            <HairEnd hairColor={hairColor}/>
            <HairBack hairColor={hairColor}/>
            <HairFrond hairColor={hairColor} left={51} rotate={-73} />
            <HairFrond hairColor={hairColor} left={31} rotate={-53} />
            <HairFrond hairColor={hairColor} left={11} rotate={-23} />
            <HairUp hairColor={hairColor}/>
          </PersonHair>
          <PersonFace>
            <PersonEye eyeColor={eyeColor} left />
            <PersonEye eyeColor={eyeColor} right />
            <PersonMouth />
          </PersonFace>
        </PersonHead>
        <NumberCap />
        <Message />
      </PersonBox>
    );
  }
}

export default JKGirl;
