const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "menu2",           
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

*11┃ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

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
