const searchProduct = (key) => {
    //const url = `https://phulv.me/search.php?key=${key}`;
    const url = `https://phulv.000webhostapp.com/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
