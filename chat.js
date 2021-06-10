const name_input = document.getElementById("name_input")
const chat_window = document.getElementById("chat_window")
const message_input = document.getElementById("message_input")

const client_id = "chat_client_"+ Math.random();

const options = {
    connectTimeot: 5000,

    //Auth
    clientId: client_id,
    //username: 'indoor_client',
    //password: 'Realtime_1',
    keepalive: 60,
    clean: true,

}

//WebSocket connect url
const WebSocket_URL = 'ws://localhost:8083/mqtt'
const client = mqtt.connect(WebSocket_URL, options)

//Client functions
client.on('connect', () => {
    console.log('connect success');

    client.subscribe('chat', function (err) {
        if (!err) {
            console.log('SUSCRITO !!!')
        }else{
            console.log('NO SUSCRITO.')
        }
    })

    //client.publish('testtopic', 'uno');
    //client.publish('testtopic', 'uno', {'qos':1, 'retain':true});

});

client.on('message', function (topic, message){
    console.log("El topic es: " + topic + " and the message is " + message.toString());
    //string to object
    const received = JSON.parse(message.toString())

    // Soy yo el que manda el mensaje?
    if (received.name.trim() == name_input.value.trim() ){
        chat_window.innerHTML = chat_window.innerHTML + '<div style="color:blue"> <b>' + received.msg + '</b></div>';
    }else{
        chat_window.innerHTML = chat_window.innerHTML +'<div style="color:grey"> <i>' + received.name + ': </i>' + received.msg + '</div>';
    }

    chat_window.scrollTop = chat_window.scrollHeight;

    //var msg = message.toString();
});

client.on('reconnect', (error) => {
    console.log('reconnecting :(', error)
})

client.on('error', (error) => {
    console.log('Connect Error:', error)
})


message_input.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        //name?
        if (name_input.value == ""){
            chat_window.innerHTML = chat_window.innerHTML + '<div style="color:red"> <b> Your name is empty!!! </b> </div>';
            return;
        }

        const to_send = {
            name: name_input.value,
            msg: message_input.value
        }

        console.log(JSON.stringify(to_send));
        client.publish("chat", JSON.stringify(to_send))

        message_input.value = "";
    }
})