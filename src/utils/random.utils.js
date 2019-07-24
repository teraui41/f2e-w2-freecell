export const randomSort = (array, num = 0.5 ) => {
  return array.sort(() => num - Math.random());
}
