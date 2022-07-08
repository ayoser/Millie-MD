global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')

global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users

global.devx = 'false'

global.owner = ["94772496127"]
global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': 'benniismaelapikey',
  'https://api.zeks.me': 'apivinz'
}




 
global.ucpn = ''
global.linkgc = 'http://wa.me/94772496127'
global.linkig = 'https://wa.me/p/5162485713828420/94772496127  '
global.linkyt = 'https://wa.me/p/5589034257826259/94772496127'
global.linkfb = 'http://wa.me/94772496127'
global.git = '𝚝𝚑𝚒𝚜 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚜 𝚋𝚎𝚒𝚗𝚐 𝚝𝚎𝚜𝚝'
global.web1 = 'https://.github.io/'
global.url = 'https://wa.me/p/5589034257826259/94772496127'

//HEROKU  VARS
global.thumburl = process.env.IMAGE || 'https://wa.me/p/5589034257826259/94772496127'
global.packname = process.env.PACKNAME ||'𝙱𝚢'
global.author = process.env.AUTHOR ||'𝙰 𝚈 𝙾'
global.name = '𝙂𝙖𝙧𝙛𝙞𝙚𝙡𝙙-𝙈𝘿'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| '𝙜𝙖𝙧𝙛𝙞𝙚𝙡𝙙 𝙈𝘿'
global.owner_name = process.env.OWNER_NAME || 'Neeraj-x0'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}





global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '𝙰 𝚈 𝙾'
global.wait = '_Please Wait_'
global.eror = '_Something went wrong please try again later_'
global.dtu = 'BOT GROUP'
 



global.version = '4.0.0 𝚅'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


