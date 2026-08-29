const intl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const priceConverter = (price) => intl.format(price);
export default function useCurency(price) {
  return intl.format(price);
}

