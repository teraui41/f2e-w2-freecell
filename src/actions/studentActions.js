import types from '../constants/actionTypes';

export const pointPositionAction = payload => ({
  type: types.POINT_POSITION,
  payload
})

export const selectStudentAction = payload => ({
  type: types.SELECT_STUDENT,
  payload
})

export const rearrangeStudentAction = payload => ({
  type: types.REARRANGE_STUDENT,
  payload
})