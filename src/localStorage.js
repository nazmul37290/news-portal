export const getItemsFromLocalStorage = (storageName) => {
  const items = localStorage.getItem(storageName);
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

export const addToLs = (storageName, article) => {
  const itemString = JSON.stringify(article);
  localStorage.setItem(storageName, itemString);
};
export const addToLocalStorage = (storageName, article) => {
  const articles = getItemsFromLocalStorage(storageName);
  articles.push(article);
  addToLs(storageName, articles);
};
