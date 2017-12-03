const getOrderHistory = (token) => (
    //fetch('https://phulv.me/order_history.php',
    fetch('https://phulv.000webhostapp.com/order_history.php',
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
