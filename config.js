const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347025291005";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_54_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclBFZ0NzcE5aM0lNeldaN25VOFFibEk2SUhmZ24xS3dhYS9tNUoyZFJaZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI1MjkxMDA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTYwRDVCNkYxNTNBMjgwQ0RDQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxMzU2NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI1MjkxMDA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUMxQkIyMjM4MUVBODgzOEEwM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxMzU2NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFhVeVZTdVZUY21veVotZURVeVlWQVwiLFxuICBcInBob25lSWRcIjogXCJmOWFiMDI0NC00ZjAzLTQ3MWEtODY0Yy0zNDBjNzFmMzM0NDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjksXG4gICAgICAxOTAsXG4gICAgICA3MyxcbiAgICAgIDg2LFxuICAgICAgMTAsXG4gICAgICAyOSxcbiAgICAgIDYsXG4gICAgICAxNTEsXG4gICAgICAxNjIsXG4gICAgICAyNSxcbiAgICAgIDc3LFxuICAgICAgMTI4LFxuICAgICAgMTUxLFxuICAgICAgMjE5LFxuICAgICAgMTIxLFxuICAgICAgMTMzLFxuICAgICAgOTUsXG4gICAgICAxNDIsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMjI5LFxuICAgICAgMjMzLFxuICAgICAgMTI4LFxuICAgICAgMTQ0LFxuICAgICAgMjI0LFxuICAgICAgMTg5LFxuICAgICAgMTg2LFxuICAgICAgMTg0LFxuICAgICAgMTM3LFxuICAgICAgMTIwLFxuICAgICAgNzAsXG4gICAgICAxNTgsXG4gICAgICAxMixcbiAgICAgIDE2NSxcbiAgICAgIDY4LFxuICAgICAgMzEsXG4gICAgICAxMjEsXG4gICAgICAxNjksXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVZFWkdMUTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjUyOTEwMDU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxlZ2VuZFwiLFxuICAgIFwibGlkXCI6IFwiNDExNDg5NzQ0OTA2MTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPVnZLd0tFTjdXb3JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFBmT2Nydm5XTDJRQldLb1pVNGFuYkxyYVpOQlgySUxiN0lTRWZUdVNsZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6aExGOWxKY2hWMGlvd2NjQjNpeDk0Mm9UY2tzSnQ1K2xSVGlqWGFZU3NJU3hqRFFNUmErZ3VKK2E2V2JWYk1oTFVYYlB1bWVuZjA5UndwakZ5bFBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzQ1d2dHRTd1o4V1ZTaklwZk9nNCtVcC93YXpTZVFQYS9tcWhjL1B0OVBlNzN0dkRrTXA0anNVaENlQmNOOXJIRTdWeW9CZVgvbVFwTittS2JCbGNnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI1MjkxMDA1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTM1NjQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0NqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDQ2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKUGd4bkRSOEh2RWxKRzZNcnFYMG5Zb1k2TytSYzR5SkViWHdLWUdtdTJnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3Nzc2MTQ5OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODEzNTY0OTE5OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
