const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6285828764046
let wa = '0'
let handler = async (m) => {
let krizyn = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🤖Note : Jika Kamu Menggunakan Wa Lama Atau Wa Mod, Dan Button Tidak Keliatan, Langsung Aja Ketik .? all',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GroupBot',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: 'Instagram creator',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'RULES',
               id: '.snk',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'SCRIPT',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'LIST COMMAND',
               id: '.zifa',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
