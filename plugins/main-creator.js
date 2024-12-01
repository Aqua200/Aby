let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Owner Zamus⁩👑;;\nFN:𝙾𝚠𝚗𝚎𝚛 𝚉𝚊𝚖𝚞𝚜⁩👑\nORG:𝙾𝚠𝚗𝚎𝚛 𝚉𝚊𝚖𝚞𝚜⁩👑\nTITLE:\nitem1.TEL;waid=573503418427:573503418427\nitem1.X-ABLabel:𝙾𝚠𝚗𝚎𝚛 𝚉𝚊𝚖𝚞𝚜⁩👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:𝙾𝚠𝚗𝚎𝚛 𝚉𝚊𝚖𝚞𝚜⁩👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝙾𝚠𝚗𝚎𝚛 𝚉𝚊𝚖𝚞𝚜⁩👑', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
