/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {
let thumv = fs.readFileSync('./src/github.png')
    let tqto = `*BIG THANKS TO*
    
    
Nurutomo: 
https://github.com/Nurutomo
Istikmal: 
https://github.com/BochilGaming
Ariffb: 
https://github.com/Ariffb25
Aguz Familia:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf
Aniq12
https://github.com/aniq12
Ilman: 
https://github.com/ilmanhdyt
Amirul: 
https://github.com/amiruldev20
Irwan:
https://github.com/irwanx
Rasel:
https://github.com/raselcomel
Mursid:
https://github.com/Botwa021
Jarot:
https://github.com/Alpiii22
Kenn:
https://github.com/AnjusGans
`
    conn.send2ButtonImg(m.chat, thumv, tqto.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', ftroli)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
