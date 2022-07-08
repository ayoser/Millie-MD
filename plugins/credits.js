let handler = async (m, { usedPrefix}) => {
let credit = `
\t\t\t\t\t\t\t*THANKS TO*

*𝚖𝚎:*
*https://github.com/𝚖𝚎*

*𝚊𝚢𝚘𝚜𝚎𝚛:*
*https://github.com/𝚊𝚢𝚘𝚜𝚎𝚛*

*𝚋𝚕𝚊𝚌𝚔𝚊𝚖𝚍𝚊:*
*https://github.com/*

*𝚔𝚒𝚗𝚐-Official:*
*https://github.com/𝚔𝚒𝚗𝚐-official*

*AND MYSELF*
`
 conn.sendTBI(m.chat, credit, wm, 'https://i.ibb.co/Gd68xq2/IMG-20220704-WA0007.jpg', `𝐬𝐜𝐫𝐢𝐩𝐭`, `𝚜𝚌𝚛𝚒𝚙𝚝 𝚒𝚗 𝚜𝚘𝚘𝚗`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to)$/i

module.exports = handler
