let log = ""
let userID = "a";

var peer = new Peer('b', {
  host: '74.207.252.238',
  port: 9000,
  debug: 3,
});

let conn;

// var conn = peer.connect('a');
// conn.on('error', function (err) {
//   console.log(err)
// });
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
