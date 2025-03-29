const http = require('http')
//--------------------------------------
const PORT =9799
//--------------------------------------
function onClientReq(req,resp)
{
  resp.writeHead( 200 )

  resp.write('Hello world 2210511105007')

  resp.end()
}
//-------------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server run9799')
server.listen( PORT )