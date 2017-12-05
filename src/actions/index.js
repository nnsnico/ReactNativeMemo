export const GO_DETAIL = {
  type: 'GO_DETAIL',
};

export function goDetail(item) {
  return {
    type: 'GO_DETAIL',
    listItem: item,
  };
}

export function addMemo(title, detail) {
  return {
    type: 'ADD_MEMO',
    title,
    detail,
  };
}
