const SERVER_PORT = 3000;
const SERVER_IP = "192.168.88.13";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;

const GET_MESSAGES_URL = BASE_URL +'/messages';

//.this function use to get message from server and then display to live server
function dispalyMessages(messages) {
    let list_message = document.querySelector('.list-text');
    if(list_message !== null){
        list_message.remove();
    }
    list_message = document.createElement('div');
    list_message.className = 'list-text';
    
    for (let value of messages){
    
        let messageText = document.createElement('p');
        messageText.className="message-text";
        messageText.textContent = value.message;

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
    let messagesData = {message: inputMessage.value};
    axios.post(GET_MESSAGES_URL, messagesData).then((res)=>{
        dispalyMessages(res.data);
        
    }) 

    inputMessage.value = "";

};

let inputMessage=document.querySelector("#text");

let messageTitle=document.getElementById("title2");

let sendButton = document.querySelector('button');
sendButton.addEventListener('click', sendMessage);

// login in the wall





// When page is loaded:
loadMessages();
setInterval(loadMessages, 500);



