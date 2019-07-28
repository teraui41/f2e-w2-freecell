import types from '../constants/actionTypes';

export const updateTeacherMessageAction = payload => ({
  type: types.UPDATE_TEACHER_MESSAGE,
  payload
})

export const updateStudentMessageAction = payload => ({
  type: types.UPDATE_STUDENT_MESSAGE,
  payload
})

export const pickStudentAction = payload => ({
  type: types.PICK_STUDENT,
  payload
})
