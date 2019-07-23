import { CARD_NUMBERS, SUITS } from "../constants/common";

export const createCards = () => {
  const cards = [];
  SUITS.forEach(suit => 
    CARD_NUMBERS.forEach(number => {
      cards.push({
      suit,
      number
    })})
  );
  return cards;
}
