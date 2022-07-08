
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔══════════════════════
║
╠❦ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : 𝗚𝗮𝗿𝗳𝗶𝗲𝗹𝗱 𝗠𝗗
║
╠❦ 𝐎𝐖𝐍𝐄𝐑    : 𝗔 𝗬 𝗢
║
╠❦ 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}
║
╠❦ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : ${version}
║
╠❦ 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝐀𝐋𝐈𝐕𝐄
║
╠❦ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}
║
╠❦ 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+9999}
║
╠❦ 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`𝙎𝙘𝙧𝙞𝙥𝙩`, `𝚜𝚌𝚛𝚒𝚙𝚝 𝚒𝚗 𝚜𝚘𝚘𝚗`, null,null, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
