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
    const { students } = this.props;

    return (
      <BasicPlayground>
        {
          students.map(({ suit, ...student}, index) =>
            <JKGirl key={index} {...student} {...FOUR_SUITS[suit]}/>)
        }
      </BasicPlayground>
    )
  }
}

export default PlaygroundScreen;
