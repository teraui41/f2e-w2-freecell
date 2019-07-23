import React from 'react';
import styled from 'styled-components';
import JKGirl from '../components/JKGirl';
import { FOUR_SUITS } from '../constants/common';

const BasicPlayground = styled.div`
  position: relative;
  width: 1280px;
  height: 100%;
  margin: auto;
  background-color: #C4CF9D;
  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 200px;
    background: linear-gradient(to left top, #d3f0fd, #a9d1e4);
  }
`

class PlaygroundScreen extends React.PureComponent {

  render() {
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
