export interface OrderDetail {
  address: { name: string; addr_1: string; addr_2: string; city: string; state: string; zip: string; },
  payment: { card_last_four: number, name: string, confirmation: string },
  order: {
    order_id: number,
    line_items: string,
    status: string
  }
}
