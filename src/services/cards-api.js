import api from './api';

export async function getCards() {
  const { data } = await api.get('/cards');

  return data;
}

export async function createNewCard(card) {
  const { data } = await api.post('/cards', card)

  return data;
}