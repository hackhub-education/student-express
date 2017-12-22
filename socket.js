module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('chat message', obj => {
      io.emit('chat broadcast', obj)
    })
  });
}