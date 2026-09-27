const myproducts = document.getElementById("products");

async function getproducts() {
  try {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json();
    console.log(data);

    data.forEach((pro) => {
      myproducts.innerHTML += `
            <div>
                <h1>${pro.name}</h1>
                <h1>${pro.price}</h1>
                <h1>${pro.description}</h1>
            </div>
            `
    })
  }
  catch (error) {
    console.log(error);

  }
}
getproducts();
