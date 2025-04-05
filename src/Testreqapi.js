const https      = require('https')
const utils      = require('./libs/utils')
// --------------------------------------------------------------
// const URL = "https://vercel-workshop-git-main-bts-projects-1e2ef295.vercel.app/api/weapon_stat"
// --------------------------------------------------------------
// http = 80 , https = 443
const options    = {
            host: 'https://vercel-workshop-git-main-bts-projects-1e2ef295.vercel.app/api/weapon_stat',
            port: 443,
            method: "POST",
            path: "/api/weapon_stat"
}
const payload = {
    item_id: [1, 2, 3]
}
const reqeust_api = https.request( options , async (api_response) => {
    const result = await utils.collectBodyData( api_response )

    console.log( result )
})
reqeust_api.write( JSON.stringify(payload) )
reqeust_api.end()