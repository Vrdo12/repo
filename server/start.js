const mongoose = require('mongoose');
const socket = require('./socket');

module.exports = app => {
  const http = require('http').createServer(app);
  const io = require('socket.io')(http);
  socket(io);
  http.listen(process.env.PORT || 3000, () =>
    console.log(`listening ${process.env.PORT || 3000}`),
  );

  mongoose.connect(
    `mongodb+srv://stepanyan-vardan:j4b57dxn5QnitVP6@loger.nbfe9.mongodb.net/loger?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    },
  );
};