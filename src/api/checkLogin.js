const checkLogin = (token) => (
    //fetch('https://phulv.me/check_login.php',
    //fetch('https://192.168.1.5:8082/MyShop/check_login.php',
    fetch('http://192.168.1.5:8082/MyShop/check_login.php',
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

module.exports = checkLogin;
