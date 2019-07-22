import React from 'react';
import styled from 'styled-components';
import JKGirl from '../components/JKGirl';
import { FOUR_SUITS } from '../constants/common';

const BasicPlayground = styled.div`
  width: 1280px;
  height: 100%;
  margin: auto;
  background-color: #C4CF9D;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.18);
`

class PlaygroundScreen extends React.PureComponent {

  render() {
    console.log("TCL: PlaygroundScreen -> render -> FOUR_SUITS['spade ']", FOUR_SUITS['spade'])
    console.log("TCL: PlaygroundScreen -> render -> FOUR_SUITS", FOUR_SUITS)
    return (
      <BasicPlayground>
        <JKGirl directionX={500} directionY={100} {...FOUR_SUITS['spade']}/>
        <JKGirl directionX={400} directionY={100} {...FOUR_SUITS['heart']}/>
        <JKGirl directionX={300} directionY={100} {...FOUR_SUITS['diamond']}/>
        <JKGirl directionX={200} directionY={100} {...FOUR_SUITS['club']}/>
      </BasicPlayground>
    )
  }
}

export default PlaygroundScreen;
