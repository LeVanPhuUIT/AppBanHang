const searchProduct = (key) => {
    //const url = `https://phulv.me/search.php?key=${key}`;
    const url = `http://192.168.0.103:8082/MyShop/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
