var io = require('socket.io')()

io.on('connection', socket => console.log('Clien connected to socket.io!'))
