let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Neykoor💜;;\nFN:Neykoor💜\nORG:Neykoor💜\nTITLE:\nitem1.TEL;waid=573163952124:573163952124\nitem1.X-ABLabel:Neykoor💜\nX-WA-BIZ-DESCRIPTION:bot en prueba\nX-WA-BIZ-NAME:Neykoor💜\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Neykoor💜', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
