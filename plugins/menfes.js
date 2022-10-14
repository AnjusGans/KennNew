// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 6281238142144|hai owner', m, {quoted: m,
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', body: 'KennBot',}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m,
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', body: 'KennBot',}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m,
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', body: 'KennBot',}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya KennBot Ada Yang Kirim Pesan Ke Kamu

Pesan : ${pesan}

let aritube = `Pesan
Haii, ingin mengirimkan pesan ke orang secara anonim?
caranya mudah!, tinggal chat ke no bot ini lalu ketik\n*#chat 628xxxxxxxxxx|<pesan kamu>*\nContoh : #chat 6281238142144|Hai Owner Kenn`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', fla + 'KennBot Menfess', chat1, aritube, 'Menu', '.menu', 'Donasi', '.donasi', m)
    
    
 let results = `Sukses Mengirim Pesan`
    conn.send2ButtonImg(m.chat,fla + 'Menfess', results, 'Owner', '.owner', 'Donasi', '.donasi', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess|chat)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
