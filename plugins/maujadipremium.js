// By Razen
let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan isi alasan, umur, asal kota dan lu cewe apa cowo'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const alasan = `*「 Daftar 」* _Premium_ \nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6282181661561@s.whatsapp.net'))
    m.reply(alasan, jid)
    m.reply(alasan, m.sender) 
    m.reply('✔️Permintaan Telah Dikirim ke Owner, Silahkan tunggu') 
}
handler.help = ['maujadipremium'].map(v => v + ' <alasan>')
handler.tags = ['Daftar']
handler.command = /^(maujadipremium)$/i

module.exports = handler

