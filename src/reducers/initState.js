import { fromJS } from "immutable";
import { LINE_SPACING_Y, LINE_SPACING_X, PADDING_TOP, PADDING_LEFT } from "../constants/common";
import { createCards } from "../utils/cards.manager";

const cards = createCards();

const getStudents = () => {
  const randomCards = cards.sort(() => 0.5 - Math.random());
  const lineNum = [7, 7, 6, 6, 7, 7, 6, 6].sort(() => 0.5 - Math.random());
  let students = [];
  let index = 0;
  for (let line = 0; line < 8; line++) {
    const spacing = lineNum[line];
    const directionX = LINE_SPACING_X * line + PADDING_LEFT;
    for (let col = 0; col < spacing; col++) {
      const selectedStudent = randomCards[index];
      const sliceStudents = [{
        ...selectedStudent,
        directionY: LINE_SPACING_Y * col + PADDING_TOP,
        directionX
      }];
      students = [...students, ...sliceStudents];
      index++;
    }
  }
  return students;
};

export const studentsState = fromJS({
  students: getStudents()
});
