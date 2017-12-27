const getOrderHistory = (token) => (
    //fetch('https://phulv.me/order_history.php',
    fetch('http://192.168.1.5:8082/MyShop/order_history.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = getOrderHistory;
