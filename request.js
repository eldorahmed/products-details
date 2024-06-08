const API = "https://dummyjson.com/products";

const getData = async (url) => {
  // loader(true);
  const request = await fetch(url);
  const data = await request.json();
//   loader(false);
  return data;
};
getData(API).then((data) => {
  updateUI(data.products);
});
