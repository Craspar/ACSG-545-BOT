const Discord = require("discord.js")

require("dotenv").config()

const TOKEN = "OTc1MTg4NDQ3MTQyNzcyNzY2.GKn7qe.hpXEbaHmYKLtNcRd_wquVgOp4hUK7VglNO5j5o"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)