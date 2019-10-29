function makeid(length) { // Makes a random ID for peerJS
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    localStorage.setItem("userID", result);

    return result;
}

function initChat(id) {
    let conn = peer.connect(id);
    peer.on('connection', function(conn) { // Listens for the opponents pick
        conn.on('data', function(data) {
            console.log(data);
            log += data + "<br>"
            $('#log').html(log);
        });
    });

    $("#send").on("click", function () {
        // on open will be launch when you successfully connect to PeerServer
        let conn = peer.connect(id);
        conn.on('open', function() {
            let data = $("#message").val()
            console.log(`DATA: ${data}`)
            conn.send(data);

            log += data + "<br>"
            $('#log').html(log);

            $('#message').val("")
        });
    })
}
