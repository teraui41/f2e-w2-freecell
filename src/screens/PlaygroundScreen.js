import React from 'react';
import styled from 'styled-components';
import JKGirl from '../components/JKGirl';


const BasicPlayground = styled.div`
  width: 1280px;
  height: 100%;
  margin: auto;
  background-color: #b4ce9d;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.18);
`

class PlaygroundScreen extends React.PureComponent {

  render() {
    return (
      <BasicPlayground>
        <JKGirl/>
      </BasicPlayground>
    )
  }
}

export default PlaygroundScreen;
