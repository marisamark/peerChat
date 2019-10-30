let log = ""
let userID = localStorage.getItem('PeerChatID');
let name = localStorage.getItem('rm_name')
userID = "a"


var peer = new Peer(makeid(10), {
  host: '74.207.252.238',
  port: 9000,
  debug: 3,
});

let conn;

$('#lobbyName').text(name);

  peer.on('open', function (id) {
    console.log('Initializing PeerJS: ' + id);

    $.ajax({
        method: "PUT",
        url: `/api/lobbies/${userID}`,
        data: {
            user2Id: id,
        }
    }).then(function(res) {

        initChat(userID);

    });
  });