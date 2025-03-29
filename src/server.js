const http = require('http') 
const get = require('./Api/get')


//--------------------------------------
const PORT =9799
//--------------------------------------
function onClientReq(req,resp)
{
  resp.writeHead( 200 )

  resp.write(get(req))

  resp.end()
}
//-------------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server run9799')
server.listen( PORT )