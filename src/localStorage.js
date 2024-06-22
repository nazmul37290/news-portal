// function for data collection from local storage
const getItemsFromLocalStorage = (storageName) => {
  const items = localStorage.getItem(storageName);
  //   if items are empty return empty array otherwise return items
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};
// function for adding to local storage
const addToLs = (storageName, article) => {
  const itemString = JSON.stringify(article);
  localStorage.setItem(storageName, itemString);
};

// function for combining get items and add items
export const addToLocalStorage = (storageName, article) => {
  const articles = getItemsFromLocalStorage(storageName);
  articles.push(article);
  addToLs(storageName, articles);
};
