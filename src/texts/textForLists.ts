import { Account } from "../types/Account";
import { List } from "../types/List";

export const googleList: List[] = [
  { name: 'Automated rote responses',
    text: `Lets your customers know that you've received their support request and are working on it`,
    id: 1,
  }, {
    name: 'Customized situational responses',
    text: `Designate auto responses to any support situation ranging from “where's my stuff?” to “I want a refund”`,
    id: 2,
  }, {
    name: 'Automatically tags inbox by category',
    text: 'Reads your inbound support emails and tags your emails with the problem category so you always know what to expect before even opening an email',
    id: 3,
  }
];

export const shopifyList: List[] = [
  { name: 'Track orders and shipping',
    text: 'Allow your customers to track order and shipping status on Shopify',
    id: 1,
  }, {
    name: 'Check inventory',
    text: 'Automatically check Shopify inventory when your customers ask for replacements',
    id: 2,
  }, {
    name: 'Process payments',
    text: 'Process refunds according to your Store Policy',
    id: 3,
  }
];

export const users: Account[] = [
  { name: 'Giga Chad', email: 'gigachad@gmail.com', id: 1, color: '#32ABF2',
  }, {
    name: 'Mini Chad', email: 'minichad@gmail.com', id: 2, color: '#EB920B',
  }, {
    name: 'Ultra Chad', email: 'ultrachad@gmail.com', id: 3, color: '#65BD47',
  }]
