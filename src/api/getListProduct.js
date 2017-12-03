const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        //url = `https://phulv.me/product_by_type.php?id_type=${idType}&page=${page}`;
        url = `https://phulv.000webhostapp.com/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        //url = `https://phulv.me/get_collection.php?page=${page}`;
        url = `https://phulv.000webhostapp.com/get_collection.php?page=${page}`;
    }
    return fetch(url)
    .then(res => res.json());
};

export default getListProduct;
