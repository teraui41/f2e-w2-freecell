
import { updateIn, fromJS } from "immutable";
import types from "../constants/actionTypes";
import { studentsState } from "./initState";

const moveJK = (students, { studentId, directionX, directionY }) => {
  
  const index = students
    .get("students")
    .findIndex(student => student.get("studentId") === studentId);
  return updateIn(students, ["students", index], student =>
    student.merge({ directionX, directionY, isMoving: true })
  );
};

export default function reducers(students = studentsState, { type, payload }) {
  switch (type) {
    case types.SELECT_STUDENT:
      return students.merge(fromJS(payload));
    case types.POINT_POSITION:
      return moveJK(students, payload);
    case types.REARRANGE_STUDENT:
    default:
      return students;
  }
}
