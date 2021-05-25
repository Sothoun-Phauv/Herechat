const SERVER_PORT = 5000;
const SERVER_IP = "192.168.88.13";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;

const GET_MESSAGES_URL = BASE_URL +'/messages';

//.this function use to get message from server and then display to live server
function dispalyMessages(messages) {
    // let list_message = document.querySelector('.list-text');
    if(list_message !== null){
        list_message.remove();
    }
    list_message = document.createElement('div');
    list_message.className = 'list-text';
    
    for (let value of messages){
    
        let messageText = document.createElement('p');
        messageText.className="message-text";
        messageText.textContent = value.message;
        list_user.textContent = value.users;
        if (value.users==="Sothoun"){
            list_message.appendChild(messageText);
            messageText.style.background ='red';
            messageTitle.appendChild(list_message);
            
        }
        list_message.appendChild(messageText);
        messageTitle.appendChild(list_message);
    }
        
    

};

// loadMessages..
function loadMessages() {
    axios.get(GET_MESSAGES_URL)
        .then(res => dispalyMessages(res.data))
}

//this function user to add date to server........
function sendMessage(event){
    event.preventDefault();
    let messagesData = {users:value,message: inputMessage.value};
    console.log(messagesData);
    axios.post(GET_MESSAGES_URL, messagesData).then((res)=>{
        dispalyMessages(res.data);
        
    }) 

    inputMessage.value = "";

};

// emoji function
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    sticker.addEventListener('click', () => {
        picker.togglePicker(sticker);
    });
});

/// get value from localstorage
let itemOfuser= JSON.parse(localStorage.getItem('userlogin'));
let value=''
for (let item of itemOfuser){
    value= item.name;
}
let userhearder = document.querySelector('.nameuser');
userhearder.textContent = value;
///main code

const sticker = document.querySelector("#emoji");
const picker = new EmojiButton();

let inputMessage=document.querySelector("#text");

let messageTitle=document.getElementById("title2");

let list_message = document.querySelector('.list-text');
let list_user= document.querySelector('.user');

let sendButton = document.querySelector('button');
sendButton.addEventListener('click', sendMessage);



// When page is loaded:
loadMessages();
setInterval(loadMessages, 500);



