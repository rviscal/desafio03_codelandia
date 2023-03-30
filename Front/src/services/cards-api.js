import api from './api';

export async function getCards() {
  const { data } = await api.get('/cards');
console.log("get",data)
  return data;
}

export async function createNewCard(card) {
  const { data } = await api.post('/cards', card)
  console.log("post",card)
  return data;
}