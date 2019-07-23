import { studentsState } from './initState';

export default function reducers(students = studentsState, { type, payload }) {
  switch (type) {
    default:
      return students;
  }
}

