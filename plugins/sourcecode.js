let handler = async (m, {conn}) => {
  conn.sendTBI(m.chat, `𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 𝚒𝚗 𝚞𝚜𝚒𝚗𝚐 𝚘𝚞𝚛 𝚙𝚛𝚘𝚓𝚎𝚌𝚝.𝚃𝚑𝚒𝚜 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚜 𝚜𝚝𝚒𝚕𝚕 𝚞𝚗𝚍𝚎𝚛 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝.`, wm, 'https://i.ibb.co/Gd68xq2/IMG-20220704-WA0007.jpg', `𝙶𝚒𝚝𝙷𝚞𝚋`, `𝚜𝚌𝚛𝚒𝚙𝚝 𝚒𝚗 𝚜𝚘𝚘𝚗`, null, null, '𝙼𝚎𝚗𝚞', `.menu`, null, null, null, null, m) 
}
handler.help = ['sᴏᴜʀᴄᴇᴄᴏᴅᴇ','ɢɪᴛ']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode|git)$/i

module.exports = handler


