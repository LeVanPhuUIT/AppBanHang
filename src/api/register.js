const register = (email, name, password) => (
    //fetch('https://phulv.me/register.php',
    fetch('http://192.168.1.5:8082/MyShop/register.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    .then(res => res.text())
);

module.exports = register;
