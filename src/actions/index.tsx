export function goDetail(item: any) {
  return {
    type: 'GO_DETAIL',
    listItem: item,
  };
}

export function addMemo(title: string, detail: string) {
  return {
    type: 'ADD_MEMO',
    title,
    detail,
  };
}
