let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    let pokemon = global.db.data.pokerole[m.sender]
    let su = `Hai ${pokemon.nameteam}
          *${pokemon.nameteam}*
*Team:* ${pokemon.team}
*List Pokemon:* ${pokemon.list}
*Item:* ${pokemon.item}

*item pokemon 2:* ${pokemon.item1}
*item pokemon 2:* ${pokemon.item2}
*item pokemon 2:* ${pokemon.item3}

*item XP 1:* ${pokemon.pokemonxp1}
*item XP 2:* ${pokemon.pokemonxp2}
*item XP 3:* ${pokemon.pokemonxp3}

*Tier Pokemon 1*: ${pokemon.tier1}
*Tier Pokemon 2*: ${pokemon.tier2}
*Tier Pokemon 3*: ${pokemon.tier3}`

conn.reply(m.chat, `${su}`) 
}

handler.help = ['pokeinv']
handler.tags = ['premium']
handler.command = /^p(okeinv)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
