
const peer = new Peer(1, {
  host: '74.207.252.238',
  port: 9000,
  debug: 3,
});

let conn;

let name = "Bob sagget"

peer.on('open', function (id) {
  console.log('Initializing PeerJS: ' + id);

  $.ajax({
    method: "POST",
    url: `/api/lobbies/`,
    data: {
      id: id,
      name: name
    }
  }).then(function (res) {

    console.log ('Jobs done')
    // let waitForPeer = setInterval(function () {
    //   $.ajax({
    //     method: "GET",
    //     url: `/api/lobbies/${id}`
    //   }).then(function (res) {
    //     if (res.user2Id != null) { // Check to see if peer has connected
    //       conn = peer.connection(res.user2Id)
    //       console.log('hello world')



    //       clearInterval(waitForPeer)
    //     }
    //   })
    // }, 1000)
  });

});



