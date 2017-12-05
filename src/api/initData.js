const initData = () =>
  //fetch('https://phulv.me/')// eslint-disable-line
  //fetch("https://192.168.0.103:8082/MyShop/") // eslint-disable-line
  fetch("http://192.168.0.103:8082/MyShop/") // eslint-disable-line
    .then(res => res.json());

export default initData;
