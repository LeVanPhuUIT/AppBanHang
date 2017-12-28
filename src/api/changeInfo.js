const changeInfo = (token, name, phone, address) => (
    //fetch('https://phulv.me/check_login.php',
    //fetch('https://phulv.000webhostapp.com/check_login.php',
    fetch('http://192.168.1.5:8082/MyShop/change_info.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token, name, phone, address })
        })
        .then(res => res.json())
);

module.exports = changeInfo;
