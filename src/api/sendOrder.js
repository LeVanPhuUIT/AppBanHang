const sendOrder = (token, arrayDetail) => {
    const data = { token, arrayDetail };
    console.log(data);
    //return fetch('https://phulv.me/cart.php',
    return fetch('https://phulv.000webhostapp.com/cart.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text());
};

module.exports = sendOrder;
