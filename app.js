const temp = document.querySelector("template");
const ul = document.querySelector("#list");
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


const updateUI = (products) => {
  products.forEach((product) => {
    console.log(product);
    const rating = product.rating;
    let fullstar = Math.round(rating);
    const li = temp.content.cloneNode(true);
    const star = li.querySelectorAll(".star");
    const h3 = li.querySelector("h3");
    const thumbnail = li.querySelector("#thumbnail");
    const infoBtn = li.querySelector("#info-btn");
    const oldPrice = li.querySelector("#oldPrice");
    const card = li.getElementById("card");
    const newPrice = li.querySelector("#new-price");
    const discount = li.querySelector("#discount");
    for (let i = 0; i < fullstar; i++) {
      star[i].classList.add("filled");
    }

    h3.textContent = product.title;
    oldPrice.textContent = product.price + " $";
    discount.textContent = product.discountPercentage + "% OFF";
    newPrice.textContent =
      (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2) + "$";
    thumbnail.src = product.thumbnail;
    infoBtn.href = `./about.html?productID=${product.id}`;
    ul.appendChild(li);
   card.addEventListener('click',click)
   function click(){
    infoBtn.click()
   }
    
  });
};



// loader

  