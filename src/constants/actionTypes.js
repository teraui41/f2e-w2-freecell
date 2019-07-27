const actionTypes = [
  'POINT_POSITION',
  'SELECT_STUDENT',
  'REARRANGE_STUDENT',
  'UPDATE_TEACHER_MESSAGE',
  'UPDATE_STUDENT_MESSAGE'
]

const combine = array => 
  array.reduce((types, type)=> {
    return { ...types, [type]: type}
  }, {});

export default combine(actionTypes);