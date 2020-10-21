export const addItem = async(sellerId, ItemId) => {
  const resp = await api.put(`/items/${itemId}/sellers/${sellerId}`);
  return resp.data;
}
