/**
//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------
**/

const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const fs = require('fs-extra')
//---------------------------------------------------------------------------

cmd({
    pattern: "wabetainfo",
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(Void, citel, text) => {
        let buttons = [{

const wanews = await fetchJson(`https://legend-army-api.onrender.com/api/search/wabetainfo?&apikey=7cbc80f5`);


          await Void.sendMessage(from , { text:`Hello ${mek.pushname ||  '\n'} I Am Finding Whatsapp New Update Details..` }, { quoted: citel } )    

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const date = `${wanews.result.date}`
           const news = `${wanews.result.fulldesc}`

await Void.sendMessage(from,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: citel })
}
catch(e){
console.log(e)
}})
