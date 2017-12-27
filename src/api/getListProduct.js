const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        //url = `https://phulv.me/product_by_type.php?id_type=${idType}&page=${page}`;
        url = `http://192.168.1.5:8082/MyShop/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        //url = `https://phulv.me/get_collection.php?page=${page}`;
        url = `http://192.168.1.5:8082/MyShop/get_collection.php?page=${page}`;
    }
    return fetch(url)
    .then(res => res.json());
};

export default getListProduct;
