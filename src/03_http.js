var http = require('http')

var port = 3000
var server = http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'test/plain'})
    response.end('fuck u')
})

server.listen(port,()=>{
    console.log(111);
})

