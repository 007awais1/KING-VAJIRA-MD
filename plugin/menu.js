const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "menu",           
            desc: "(menu cmdlist).",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

◍◈┈─┈『 *Reply a number* 』┈─┈◈◍

*5┃ ᴅᴏᴡɴʟᴏᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*6┃ ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅ*

*7┃ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*8┃ ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅ*

*9┃ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ*

*10┃ ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅ*

*11┃ ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅ*

*12┃ ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅ*

*13┃ ᴄᴏɴᴠᴇᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅ*

*14┃ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅ*

*15┃ ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅ*

*16┃ ᴇᴄᴏɴᴏᴍʏ ᴄᴏᴍᴍᴀɴᴅ*

*17┃ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "5",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴅᴏᴡɴʟᴏᴀᴅᴇʀ❋══❍
║ 🎋► ꜱᴏɴɢ
║ 🎋► 1
║ 🎋► 2
║ 🎋► ᴠɪᴅᴇᴏ
║ 🎋► 3
║ 🎋► 4
║ 🎋► ɪɴꜱᴛᴀ
║ 🎋► ᴀᴘᴋ
║ 🎋► ᴛᴛꜱ
║ 🎋► ʏᴛꜱ
║ 🎋► ᴠɪᴅᴇᴏ2
║ 🎋► ᴠɪᴅᴇᴏ3
║ 🎋► ᴘʟᴀʏ
║ 🎋► ʀɪɴɢᴛᴏɴᴇ
║ 🎋► ᴘɪɴᴛ
║ 🎋► ᴍᴇᴅɪᴀꜰɪʀᴇ
║ 🎋► ꜱᴏɴɢ2
║ 🎋► ꜱᴏɴɢ3
║ 🎋► ʏᴛᴍᴘ4
║ 🎋► ʏᴛᴍᴘ3
║ 🎋► ʏᴛᴅᴏᴄ
║ 🎋► ᴛᴠɪᴅᴇᴏ
║ 🎋► ꜰʙꜱ
║ 🎋► ᴅᴀᴅᴜ
║ 🎋► ᴠɪᴅᴇᴏ4
║ 🎋► ᴛᴇꜱᴛꜱᴏɴɢ
║ 🎋► ᴍᴏᴅ
║ 🎋► ᴡᴀᴍᴏᴅ
║ 🎋► ɢɪᴛᴄʟᴏɴᴇ
║ 🎋► ᴛᴛᴅʟ
║ 🎋► ᴡᴀʙᴇᴛᴀ
║ 🎋► ᴡʙɪ
║ 🎋► ᴡʙɪᴛ
║ 🎋► ᴘʟᴀʏʟɪꜱᴛ
║ 🎋► ᴡᴀʙᴇᴛᴀɪɴꜰᴏ
║ 🎋► xɴxx
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )


//---------------------------------------------------------------------------
cmd({

            pattern: "6",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋Aɴɪᴍᴇ Pɪᴄꜱ❋══❍
║ 🎋► ᴡᴀɪꜰᴜ
║ 🎋► ɴᴀʀᴜᴛᴏ
║ 🎋► ɴᴇᴋᴏ
║ 🎋► ꜰᴏxɢɪʀʟ
║ 🎋► ᴀɴɪᴍᴇɴᴇᴡꜱ
║ 🎋► ʟᴏʟɪ
║ 🎋► ᴘᴏᴋᴇᴍᴏɴ
║ 🎋► ᴍᴀɴɢᴀ
║ 🎋► ᴀɴɪᴍᴇ
║ 🎋► ᴡᴀʟʟᴘᴀᴘᴇʀ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "7",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴏᴡɴᴇʀ❋══❍
║ 🎋► ᴠᴀᴊɪʀᴀ
║ 🎋► ɢᴇᴛᴀʟʟ
║ 🎋► ᴊᴏɪɴ
║ 🎋► ᴜɴʙʟᴏᴄᴋ
║ 🎋► ᴜᴊɪᴅ
║ 🎋► ᴊɪᴅ
║ 🎋► ʙʟᴏᴄᴋ
║ 🎋► ᴀᴅᴅɴᴏᴛᴇ
║ 🎋► ϙʀ
║ 🎋► ꜱʜᴇʟʟ
║ 🎋► ᴇᴠᴀʟ
║ 🎋► ᴅᴇʟɴᴏᴛᴇ
║ 🎋► ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
║ 🎋► ʙᴀɴ
║ 🎋► ᴀʟʟɴᴏᴛᴇꜱ
║ 🎋► ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
║ 🎋► ᴀɴᴛɪᴡᴏʀᴅ
║ 🎋► ʀᴇꜱᴛᴀʀᴛ
║ 🎋► ꜰᴜʟʟᴘᴘ
║ 🎋► ɢᴇᴛᴘᴘ
║ 🎋► ʙʟᴏᴄᴋʟɪꜱᴛ
║ 🎋► ϙᴜᴏᴛᴇᴅ
║ 🎋► ᴀᴍᴜᴛᴇ
║ 🎋► ᴀᴜɴᴍᴜᴛᴇ
║ 🎋► ᴅᴜɴᴍᴜᴛᴇ
║ 🎋► ᴅᴍᴜᴛᴇ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "8",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴍɪꜱᴄ❋══❍
║ 🎋► ꜰɪɴᴅꜱᴏɴɢ
║ 🎋► ꜰɪɴᴅᴠɪᴅᴇᴏ
║ 🎋► ɢʀᴏᴜᴘʙʀᴏᴀᴅ
║ 🎋► ᴠᴠ
║ 🎋► ꜰʙ
║ 🎋► ᴛɪᴋᴛᴏᴋ
║ 🎋► ᴜᴘᴅᴀᴛᴇɴᴏᴡ
║ 🎋► ɢᴇᴛᴠᴀʀ
║ 🎋► ɢᴇᴛᴀʟʟᴠᴀʀ
║ 🎋► ꜱᴇᴛᴠᴀʀ
║ 🎋► ᴅᴇʟᴠᴀʀ
║ 🎋► ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
║ 🎋► ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
║ 🎋► ᴇxᴇᴄ
║ 🎋► ʀᴇᴀᴅᴍᴏʀᴇ
║ 🎋► ᴜᴘᴛɪᴍᴇ
║ 🎋► ᴡᴍ
║ 🎋► ᴘɪᴄᴋ
║ 🎋► ᴄᴀʟᴄ
║ 🎋► ꜰʟɪᴘᴛᴇxᴛ
║ 🎋► ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
║ 🎋► ᴇᴍɪx
║ 🎋► ᴄʜᴀᴛʙᴏᴛ
║ 🎋► ᴇʙɪɴᴀʀʏ
║ 🎋► ᴅʙɪɴᴀʀʏ
║ 🎋► ʙᴏᴛ
║ 🎋► ᴜɴʙᴀɴ
║ 🎋► ᴜʀʟ
║ 🎋► ᴛʀᴛ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "9",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɢʀᴏᴜᴘ❋══❍
║ 🎋► ꜱᴛɪᴄᴋᴇʀ
║ 🎋► ꜱᴜᴘᴘᴏʀᴛ
║ 🎋► ᴡᴀʀɴ
║ 🎋► ᴛᴀɢᴀʟʟ
║ 🎋► ʀᴇϙᴜᴇꜱᴛ
║ 🎋► ʀᴇᴛʀɪᴠᴇ
║ 🎋► ʀᴡᴀʀɴ
║ 🎋► ᴘᴏʟʟ
║ 🎋► ᴘʀᴏꜰɪʟᴇ
║ 🎋► ʀᴀɴᴋ
║ 🎋► ᴘʀᴏᴍᴏᴛᴇ
║ 🎋► ᴋɪᴄᴋ
║ 🎋► ᴍᴇᴍᴇɢᴇɴ
║ 🎋► ɢʀᴏᴜᴘ
║ 🎋► ɢʀᴏᴜᴘᴘɪᴄ
║ 🎋► ʜɪᴅᴇᴛᴀɢ
║ 🎋► ᴀᴅᴅ
║ 🎋► ɢᴇᴛᴊɪᴅꜱ
║ 🎋► ᴅᴇᴍᴏᴛᴇ
║ 🎋► ᴅᴇʟ
║ 🎋► ᴄʜᴇᴄᴋᴡᴀʀɴ
║ 🎋► ʙʀᴏᴀᴅᴄᴀꜱᴛ
║ 🎋► ᴀɴᴛɪʟɪɴᴋ
║ 🎋► ᴀᴄᴛ
║ 🎋► ᴅᴇᴀᴄᴛ
║ 🎋► ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
║ 🎋► ᴀɴᴛɪᴡᴏʀᴅ
║ 🎋► ᴄʜᴀᴛ
║ 🎋► ᴅᴀʟʟᴇ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "10",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɴᴇᴡꜱ❋══❍
║ 🎋► ɴᴀꜱᴀ
║ 🎋► ᴛᴇᴄʜɴᴇᴡꜱ
║ 🎋► ɴᴇᴡꜱ
║ 🎋► ʜɪʀᴜɴᴇᴡꜱ
║ 🎋► ꜱɪʀᴀꜱᴀ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )


//---------------------------------------------------------------------------
cmd({

            pattern: "11",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ʟᴏɢᴏ❋══❍
║ 🎋► ᴅᴇᴇᴘꜱᴇᴀ
║ 🎋► ʜᴏʀʀᴏʀ
║ 🎋► ᴡʜɪᴛᴇʙᴇᴀʀ
║ 🎋► ᴊᴏᴋᴇʀ
║ 🎋► ᴍᴇᴛᴀʟʟɪᴄ
║ 🎋► ꜱᴛᴇᴇʟ
║ 🎋► ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
║ 🎋► ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
║ 🎋► ʟᴜxᴜʀʏ
║ 🎋► ɢʟᴜᴇ
║ 🎋► ꜰᴀʙʀɪᴄ
║ 🎋► ᴛᴏxɪᴄ
║ 🎋► ᴀɴᴄɪᴇɴᴛ
║ 🎋► ᴄʟᴏᴜᴅ
║ 🎋► ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
║ 🎋► ᴛʜᴜɴᴅᴇʀ
║ 🎋► ꜱᴄɪꜰɪ
║ 🎋► ꜱᴀɴᴅ
║ 🎋► ʀᴀɪɴʙᴏᴡ
║ 🎋► ᴘᴇɴᴄɪʟ
║ 🎋► ɴᴇᴏɴ
║ 🎋► ᴍᴀɢᴍᴀ
║ 🎋► ʟᴇᴀᴠᴇꜱ
║ 🎋► ɢʟɪᴛᴄʜ
║ 🎋► ᴅɪꜱᴄᴏᴠᴇʀʏ
║ 🎋► ᴄʜʀɪꜱᴛᴍᴀꜱ
║ 🎋► ᴄᴀɴᴅʏ
║ 🎋► 1917
║ 🎋► ʙʟᴀᴄᴋᴘɪɴᴋ
║ 🎋► ᴄᴀᴛ
║ 🎋► ᴘᴏᴛᴛᴇʀʏ
║ 🎋► ꜱʟɪᴄᴇ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "12",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɢᴇɴᴇʀᴀʟ❋══❍
║ 🎋► ʜᴇʟᴘ
║ 🎋► ᴄᴍᴅ
║ 🎋► ᴏᴡɴᴇʀ
║ 🎋► ꜰɪʟᴇ
║ 🎋► ᴄᴘᴜ
║ 🎋► ʀᴇᴘᴏ
║ 🎋► ꜱᴛᴀᴛᴜꜱ
║ 🎋► ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
║ 🎋► ᴘɪɴɢ
║ 🎋► ᴀʟɪᴠᴇ
╚══════════☉⚟


*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "13",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴄᴏɴᴠᴇʀᴛᴇʀ❋══❍
║ 🎋► ᴘʜᴏᴛᴏ
║ 🎋► ϙᴜᴏᴛᴇʟʏ
║ 🎋► ᴛᴏᴍᴘ4
║ 🎋► ꜰᴀɴᴄʏ
║ 🎋► ᴛɪɴʏ
║ 🎋► ᴛᴏᴀᴜᴅɪᴏ
║ 🎋► ᴄɪʀᴄʟᴇ
║ 🎋► ᴄʀᴏᴘ
║ 🎋► ʀᴏᴜɴᴅ
║ 🎋► ᴀᴛᴛᴘ
║ 🎋► ᴛᴛᴘ
║ 🎋► ꜱᴛᴇᴀʟ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "14",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ꜱᴇᴀʀᴄʜ❋══❍
║ 🎋► ɴᴘᴍ
║ 🎋► ꜱꜱ
║ 🎋► ᴍᴏᴠɪᴇ
║ 🎋► ᴡᴇᴀᴛʜᴇʀ
║ 🎋► ʜᴏʀᴏ
║ 🎋► ɢᴏᴏɢʟᴇ
║ 🎋► ɪᴍᴀɢᴇ
║ 🎋► ᴄᴏᴜᴘʟᴇᴘᴘ
║ 🎋► ɪꜱᴡᴀ
║ 🎋► ᴡɪᴋɪᴘᴇᴅɪᴀ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "15",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɢᴀᴍᴇꜱ❋══❍
║ 🎋► ꜱᴛᴀʀᴛϙᴜɪᴢ
║ 🎋► ʀᴇꜱᴇᴛϙᴜɪᴢ
║ 🎋► ꜰʟᴀɢ
║ 🎋► ꜰʟᴀɢᴀɴꜱᴡᴇʀ
║ 🎋► ᴅᴇʟᴛɪᴄ
║ 🎋► ᴛɪᴄ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
cmd({

            pattern: "16",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴇᴄᴏɴᴏᴍʏ❋══❍
║ 🎋► ᴅᴀɪʟʏ
║ 🎋► ʀᴇꜱᴇᴛᴡᴀʟʟᴇᴛ
║ 🎋► ᴄᴀᴘᴀᴄɪᴛʏ
║ 🎋► ᴅᴇᴘᴏꜱɪᴛ
║ 🎋► ʟʙ
║ 🎋► ᴛʀᴀɴꜱꜰᴇʀ
║ 🎋► ᴡᴀʟʟᴇᴛ
║ 🎋► ɢɪᴠᴇ
║ 🎋► ʙᴀɴᴋ
║ 🎋► ʀᴏʙ
║ 🎋► ᴡɪᴛʜᴅʀᴀᴡ
║ 🎋► ɢᴀᴍʙʟᴇ
║ 🎋► ꜱʟᴏᴛ2
║ 🎋► ꜱʟᴏᴛ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "17",
            react: "👨‍💻",
            desc: "",
            category: "_help",
            filename: __filename,
            use: '<text>'

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴏᴛʜᴇʀ❋══❍
║ 🎋► ᴘᴀꜱᴛᴇ
║ 🎋► ᴘᴀꜱᴛᴇʙɪɴ
║ 🎋► ꜱʜɪᴘ
║ 🎋► ϙᴜᴇꜱᴛɪᴏɴ
║ 🎋► ᴛʀᴜᴛʜ
║ 🎋► ᴅᴀʀᴇ
║ 🎋► ꜰᴀᴄᴛ
║ 🎋► ϙᴜᴏᴛᴇꜱ
║ 🎋► ᴅᴇꜰɪɴᴇ
║ 🎋► ꜱᴀᴠᴇ
║ 🎋► ᴀꜰᴋ
║ 🎋► ᴅᴇʟᴀꜰᴋ
║ 🎋► ɢᴊɪᴅ
║ 🎋► ᴛᴇᴍᴘᴍᴀɪʟ
║ 🎋► ᴄʜᴇᴄᴋᴍᴀɪʟ
║ 🎋► ꜱᴇᴛɢʀᴇᴇᴛɪɴɢ
║ 🎋► ꜱᴀᴠᴇɴᴏ
║ 🎋► ᴅᴇʟɴᴏ
║ 🎋► ᴀꜰᴋ
║ 🎋► ᴅᴇʟᴀꜰᴋ
║ 🎋► ɢᴊɪᴅ
║ 🎋► ʜᴀᴄᴋ
║ 🎋► ᴀꜰᴋ
║ 🎋► ᴅᴇʟᴀꜰᴋ
║ 🎋► ɢᴊɪᴅ
║ 🎋► ᴘᴏᴋᴇ
║ 🎋► ʜᴜɢ
║ 🎋► ʜᴏʟᴅ
║ 🎋► ʜɪꜰɪ
╚══════════☉⚟

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
                    
