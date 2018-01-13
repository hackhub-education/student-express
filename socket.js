const Chats = require('./models/chats');

module.exports = (io) => {
  const onlineUsers = [];
  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('chat message', (obj) => {
      const chat = new Chats(obj);
      chat.save((err, doc) => {
        if(err){
          io.emit('chat broadcast', { ...obj, message: err })
        } else {
          io.emit('chat broadcast', obj)
        }
      })
    });

    socket.on('send id', (user) => {
      onlineUsers.push(user);

      io.emit('send users', onlineUsers)

      socket.on('disconnect', () => {
        const userIndex = onlineUsers.indexOf(user);
        onlineUsers.splice(userIndex, 1);
        io.emit('send users', onlineUsers)
      })
    });
  });
}