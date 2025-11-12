export interface Order {
  id: number;
  date: string;
  items: { id: number; title: string; price: number; quantity: number }[];
  total: number;
  deliveryMethod: "pickup" | "delivery";
  address: string;
  paymentMethod: "card" | "cash";
}
