

const SERVER_PORT = 5000;
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
            console.log(response.data);
        }
    }) 
    dataOflogin.push(dataFromLogin);
    console.log(dataOflogin);
    localStorage.setItem('userlogin', JSON.stringify(dataOflogin));
    
}
let dataOflogin=[];



const userLogin=document.querySelector('#login-text')
const pwd = document.querySelector('#password');
const btnLogin = document.querySelector('#btn-login')
btnLogin.addEventListener("click", Login);