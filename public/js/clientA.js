
const peer = new Peer(makeid(10), {
    host: '74.207.252.238',
    port: 9000,
    debug: 3,
  });

let conn;
  
  peer.on('open', function (id) {
    console.log('Initializing PeerJS: ' + id);

    let waitForPeer = setInterval(function() {
        $.ajax({
            method: "GET",
            url: `/api/lobbies/${id}`
        }).then(function(res) {
            if (res.user2Id != null) { // Check to see if peer has connected
                conn = peer.connection(res.user2Id)

                

                clearInterval(waitForPeer)
            }
        })
    }, 500)
  
  });

 

