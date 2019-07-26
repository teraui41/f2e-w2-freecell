import { fromJS } from 'immutable';
import types from "../constants/actionTypes";
import { playgroundState } from "./initState";

export default function reducers(
  playground = playgroundState,
  { type, payload }
) {
  switch (type) {
    case types.UPDATE_TEACHER_MESSAGE:
      return playground.merge(fromJS({ teacherMessage: payload }));
    case types.UPDATE_STUDENT_MESSAGE:
      return playground.merge(fromJS({ studentMessage: payload }));
    default:
      return playground;
  }
}
