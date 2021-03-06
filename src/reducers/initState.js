import { fromJS } from "immutable";
import {
  LINE_SPACING_Y,
  LINE_SPACING_X,
  PADDING_TOP,
  PADDING_LEFT
} from "../constants/common";
import { createCards } from "../utils/cards.manager";

const cards = createCards();

const getStudents = () => {

  const lineNum = [7, 6, 7, 6, 7, 6, 7, 6];
  let line = 0;
  let col = 0;

  const students = cards.map(card => {
    const maxCardInLine = lineNum[line];

    const student = {
      ...card,
      studentId: `${card.suit}${card.number}`,
      directionY: LINE_SPACING_Y * col + PADDING_TOP,
      directionX: LINE_SPACING_X * line + PADDING_LEFT
    };

    line = maxCardInLine - 1 === col ? line + 1 : line;
    col = maxCardInLine - 1 === col ? 0 : col + 1;

    return student;
  });

  return students;
}

export const playgroundState = fromJS({
  teacherMessage: '',
  studentMessage: {},
  line0: [],
  line1: [],
  line2: [],
  line3: [],
  line4: [],
  line5: [],
  line6: [],
  line7: [],
  stand0: [],
  stand1: [],
  stand2: [],
  stand3: [],
  classRoom0: [],
  classRoom1: [],
  classRoom2: [],
  classRoom3: [],
  moveableStudent: []
});

export const studentsState = fromJS({
  students: getStudents(),
  selectedId: ''
});
