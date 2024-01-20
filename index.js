function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();


}

let CATALOG = [];


// https://api.jsonserve.com/P84DC8
// server/catalog.json

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body =>{
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });