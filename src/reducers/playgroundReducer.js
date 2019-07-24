import { playgroundState } from './initState';

export default function reducers(playground = playgroundState, { type, payload }) {
  switch (type) {
    default:
      return playground;
  }
}

