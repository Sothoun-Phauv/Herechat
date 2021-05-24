

const SERVER_PORT = 3000;
const SERVER_IP = "192.168.88.13";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;


function Login() {
    let dataFromLogin = {
        name: userLogin.value,
        password: pwd.value
    }
    axios.post(BASE_URL + "/login", dataFromLogin).then((response) => {
        if (response.data) {
            window.location.href = "../chat.html";
        }
    }) 
}

const userLogin=document.querySelector('#login-text')
const pwd = document.querySelector('#password');
const btnLogin = document.querySelector('#btn-login')
btnLogin.addEventListener("click", Login);