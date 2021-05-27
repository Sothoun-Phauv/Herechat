const SERVER_PORT = 3000;
const SERVER_IP = "192.168.88.32";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;

const GET_MESSAGES_URL = BASE_URL + '/messages';

//"https://here-chat.herokuapp.com"
//.this function use to get message from server and then display to live server
function dispalyMessages(messages) {
    // let list_message = document.querySelector('.list-text');
    if (list_message !== null) {
        list_message.remove();
    }
    list_message = document.createElement('div');
    list_message.className = 'list-text';

    for (let value of messages) {

        let messageText = document.createElement('p');
        messageText.className = "message-text";
        messageText.textContent = value.message;
        list_user.textContent = value.users;
        
        if (value.users === itemOfuser) {
            messageText.style.background = 'red';
        }
        if(value.bold === true){
            messageText.style.fontWeight = 'bold';
        }else{
            messageText.style.fontWeight = 'normal';
        }

        if(value.italic === true){
            messageText.style.fontStyle = 'italic';
        }else{
            messageText.style.fontStyle = 'normal';
        }

        list_message.appendChild(messageText);
        messageTitle.appendChild(list_message);
    }
}

// loadMessages..
function loadMessages() {
    axios.get(GET_MESSAGES_URL)
        .then(res => dispalyMessages(res.data))
}

//this function user to add date to server........
function sendMessage(event) {
    event.preventDefault();
    let messagesData = { users: value, message: inputMessage.value, bold:foundBold,italic:foundItalic };
    
    axios.post(GET_MESSAGES_URL, messagesData).then((res) => {
        dispalyMessages(res.data);

    })

    inputMessage.value = "";
    // fs.writeFileSync("message.json", JSON.stringify(messagesData));
};

// emoji function
document.addEventListener('DOMContentLoaded', () => {
    picker.on('emoji', emoji => {
        document.querySelector('input').value += emoji;
    });
    sticker.addEventListener('click', () => {
        picker.togglePicker(sticker);
    });
});

/// get value from localstorage and login
let itemOfuser = JSON.parse(localStorage.getItem('userlogin'));
let value = ''
for (let item of itemOfuser) {
    value += item;
}

let userhearder = document.querySelector('.nameuser');
userhearder.textContent = value;


//// ........function bold........... ////
let foundBold = false;
let nBold = 0;
function bold(event){
    nBold++;
    if (nBold %2 !==0){
        foundBold = true;
        inputMessage.style.fontWeight ='bold';
    }else{
        inputMessage.style.fontWeight = 'normal';
        foundBold = false;
    }
    
}

//// ////............function italic............. //////////
let foundItalic = false;
let nItalic = 0;
function italic(event){
    nItalic++;
    if (nItalic %2 !==0){
        foundItalic=true;
        inputMessage.style.fontStyle ='italic';
    }else{
        inputMessage.style.fontStyle = 'normal';
        foundItalic = false;
    }
    
}
///main code

const sticker = document.querySelector("#emoji");
const picker = new EmojiButton();

let inputMessage = document.querySelector("#text");

let messageTitle = document.getElementById("title2");

let list_message = document.querySelector('.list-text');
let list_user = document.querySelector('.user');

let sendButton = document.querySelector('button');
sendButton.addEventListener('click', sendMessage);

let btnBold = document.querySelector('.bold');
btnBold.addEventListener('click',bold);
let btnItalic = document.querySelector('.italic');
btnItalic.addEventListener('click',italic);


// When page is loaded:
loadMessages();
setInterval(loadMessages, 500);



