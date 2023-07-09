var events = require('events')

const eventEmmiter = new events.EventEmitter()

eventEmmiter.on('in',()=>{
    console.log(11);
})

eventEmmiter.emit('in')