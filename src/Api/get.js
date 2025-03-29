const data_shop = require('../data/shop.json')
const weapon_stat = require('../data/weapon_stat.json')
const jewelry_stat = require('../data/jewelry_stat.json')
const jewelryFullshop = require('../data/jewlryFullshop.json')
const jewelryShop = require('../data/jewelryShop.json')


function get(req)
{
    let result = JSON.stringify({Message:"api not found"})
    //api/consume_stat
    //api/weapon_stat
    //api/shop
    console.log( req )
    if(req.url === '/api/weapon_stat')
        {
       return JSON.stringify(weapon_stat)
        }
    if(req.url === '/api/shop')
        {
       return  JSON.stringify(data_shop)
        }
    if(req.url === '/api/jewelryShop')
        {
           return  JSON.stringify(jewelryShop)
        }
    if(req.url === '/api/jewelry_stat')
            {
               return  JSON.stringify(jewelry_stat)
            }    
    if(req.url === '/api/jewelryFullshop')
        {
             return  JSON.stringify(jewelryFullshop)
        }
    return result
}

module.exports = get