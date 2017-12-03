const signIn = (email, password) => (
    //fetch('https://phulv.me/login.php',
    fetch('https://phulv.000webhostapp.com/login.php',
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
