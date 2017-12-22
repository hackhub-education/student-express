const Chats = require('./models/chats');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('chat message', obj => {
      const chat = new Chats(obj);
      chat.save((err, doc) => {
        if(err){
          io.emit('chat broadcast', { ...obj, message: err })
        } else {
          io.emit('chat broadcast', obj)
        }
      })
    })
  });
}