export const GO_DETAIL = {
  type: 'GO_DETAIL',
};

export function goDetail(item) {
  return {
    type: 'GO_DETAIL',
    listItem: item,
  };
}
