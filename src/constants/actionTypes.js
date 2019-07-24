const actionTypes = [
  'POINT_POSITION',
  'SELECT_STUDENT'
]

const combine = array => 
  array.reduce((types, type)=> {
    return { ...types, [type]: type}
  }, {});

export default combine(actionTypes);