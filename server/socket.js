
let userCount = 0;
module.exports = io => {
  io.on('connection', socket => {
    global.socket = socket;
    socket.on('disconnect', () => {
      userCount -= 1;
      io.emit('userCount', { userCount });
    });
    userCount += 1;
    io.emit('userCount', { userCount });
  });
};
