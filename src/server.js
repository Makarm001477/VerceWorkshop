const http = require('http') 

const utils = require('./libs/utils')
const get = require('./Api/get')
const { write } = require('fs')
//--------------------------------------
const PORT = process.env.PORT || 9799
//--------------------------------------
async function onClientReq(req,resp)
{
  const method = req.method
  const header = {
                    "Content-Type" : "application/json"
                 }

  resp.writeHead( 200 )

if (method ==='GET'){
  resp.write ( get(req) )
}else if ( method === 'POST' ){
  const bodydata = await utils.collectBodyData(req)

  let result = {"message": "HI"}
  if (bodydata && bodydata.message){
     result = {
                   "message" : "Hi I am a Server"
                 }
   // write data to client
     }
     resp.write(JSON.stringify( result ))
}
  resp.end()
}
//-------------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server run9799')
server.listen( PORT )