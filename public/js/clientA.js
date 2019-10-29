let log = ""

const peer = new Peer('a', {
  host: '74.207.252.238',
  port: 9000,
  debug: 3,
});
let conn;
// var conn = peer.connect('b');

// console.log(conn)
// // on open will be launch when you successfully connect to PeerServer
// conn.on('open', function () {
//   // here you have conn.id
//   conn.send('hi!');
// });

// peer.on('connection', function (conn) {
//   conn.on('data', function (data) {
//     // Will print 'hi!'
//     console.log(data);
//   });
// });



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

    let waitForPeer = setInterval(function () {
      $.ajax({
        method: "GET",
        url: `/api/lobbies/${id}`
      }).then(function (res) {
        if (res[0].user2Id) { // Check to see if peer has connected
          clearInterval(waitForPeer)
          console.log(res[0].user2Id)
          initChat('b')
        }
      })
    }, 1000)
  });

});






