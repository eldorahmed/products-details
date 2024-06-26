const API = "https://dummyjson.com/products";
const queryString = location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");

const overlay = document.getElementById("overlay");
function loader(state) {
  if (state) {
    overlay.classList.remove("hidden");
  } else {
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 1000);
  }
}

// updateUI
const updateUI = (product) => {
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");
  const desc = document.querySelector("#description");
  const minimumOrderQuantity = document.querySelector("#min-order");
  const returnPolicy = document.querySelector("#return-policy");
  const shippingInformation = document.querySelector("#shipment");
  const availabilityStatus = document.querySelector("#stock");

  img1.src = product.images[0];
  img2.src = product.images[1];
  img3.src = product.images[2];
  desc.textContent = product.description;
  minimumOrderQuantity.textContent = product.minimumOrderQuantity;
  returnPolicy.textContent = product.returnPolicy;
  shippingInformation.textContent = product.shippingInformation;
  availabilityStatus.textContent = product.availabilityStatus;
  if (product.images[1] == undefined) {
    img2.src = product.images[0];
    img3.src = product.images[0];
  }
};
const getData = async (url) => {
  loader(true);
  const request = await fetch(url);
  const data = await request.json();
  loader(false);
  return data;
};
getData(API + `/${id}`).then((data) => {
  updateUI(data);
});
