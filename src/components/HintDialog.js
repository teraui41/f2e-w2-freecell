import React from "react";
import styled from "styled-components";
import { JKStyle } from "../constants/color.config";
import { randomSort } from "../utils/random.utils";
import {
  LINE_SPACING_Y,
  LINE_SPACING_X,
  PADDING_TOP,
  PADDING_LEFT
} from "../constants/common";

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
  margin-top: ${({ open }) => (open ? -100 : -1000)}px;
  opacity: ${({ open }) => (open ? 1 : 0)};
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
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }

  delay = seconds => {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve();
      }, seconds);
    });
  };

  onClick = async () => {
    this.setState(state => ({
      ...state,
      open: false
    }));

    this.props.updateTeacherMessage("準備好了嗎孩子們?");

    await this.delay(1200);

    this.props.updateStudentMessage({
      type: "boardcast",
      message: "是的校長!"
    });
    this.props.updateTeacherMessage("");

    await this.delay(1200);

    this.props.updateTeacherMessage("喔~~~~~~");
    this.props.updateStudentMessage({ type: "boardcast", message: "" });

    await this.delay(3000);
    this.props.updateTeacherMessage("是誰住在深海的大鳳梨裡?");
    this.props.updateStudentMessage({ type: "boardcast", message: "" });
    const { students } = this.props;
    const cards = students.toJS();
    const randomCards = randomSort(cards);
    const lineNum = randomSort([7, 7, 6, 6, 7, 7, 6, 6]);
    let line = 0;
    let col = 0;

    for (let i = 0; i < randomCards.length; i++) {
      const maxCardInLine = lineNum[line];

      await this.delay(200);

      this.props.pointPosition({
        studentId: `${randomCards[i].suit}${randomCards[i].number}`,
        directionY: LINE_SPACING_Y * col + PADDING_TOP,
        directionX: LINE_SPACING_X * line + PADDING_LEFT
      });

      line = maxCardInLine - 1 === col ? line + 1 : line;
      col = maxCardInLine - 1 === col ? 0 : col + 1;
    }

    await this.delay(2000);

    this.props.updateTeacherMessage("...");
    await this.delay(1000);
    this.props.updateTeacherMessage("不是說好要一起唱的嗎?");

    await this.delay(2000);

    this.props.updateStudentMessage({ type: "spadeA", message: "年紀這麼大了不丟臉嗎?" });
    await this.delay(2000);

    this.props.updateStudentMessage({ type: "heart6", message: "邊跑邊唱超累好嗎" });
    await this.delay(2000);

    this.props.updateStudentMessage({ type: "diamondA", message: "要唱一起唱阿" });
    this.props.updateTeacherMessage("");

    await this.delay(2000);

    this.props.updateStudentMessage({ type: "diamondA", message: "我才不要自己唱" });
    
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "diamondA", message: "" });

    

    this.props.updateTeacherMessage("到底是誰這樣教你們跟長輩說話的?");
    
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "club5", message: "你啊" });
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "diamond5", message: "就欠嘴咩(小聲" });
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "diamond5", message: "" });

    this.props.updateTeacherMessage("...");
    
    await this.delay(2000);

    this.props.updateTeacherMessage("這群我無法溝通");
    
    await this.delay(2000);

    this.props.updateTeacherMessage("老師! 接下來就交給你了");
    await this.delay(2000);

    this.props.updateTeacherMessage("把他們趕回教室反省");
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "club5", message: "老師~~快拉很熱欸" });
    await this.delay(2000);
    this.props.updateStudentMessage({ type: "club5", message: "" });

    this.props.updateTeacherMessage("");
  };

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
