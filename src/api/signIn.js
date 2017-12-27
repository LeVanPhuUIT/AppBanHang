const signIn = (email, password) => (
    //fetch('https://phulv.me/login.php',
    fetch('http://192.168.1.5:8082/MyShop/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;
